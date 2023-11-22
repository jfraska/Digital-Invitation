"use client";
import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Preload, useGLTF, Stage, OrbitControls } from "@react-three/drei";
import { Vector3 } from "three";

const Scene = ({ isMobile }) => {
  const model = useGLTF(`/three_graces/scene.gltf`);

  return (
    <mesh>
      <primitive
        object={model.scene}
        scale={isMobile ? 0.5 : 1}
        position={isMobile ? [0, 0, 0] : [0, -5, 0]}
      />
      <meshPhongMaterial shininess={45} />
    </mesh>
  );
};

function MousePointLight() {
  const pointLightRef = useRef();
  let previousTime = 0;

  useFrame(({ mouse, camera, clock }) => {
    const elapsedTime = clock.getElapsedTime();
    const deltaTime = elapsedTime - previousTime;
    previousTime = elapsedTime;

    // const mousePosition = new Vector3(
    //   (mouse.x * 8 - pointLightRef.current.position.x) * 2 * deltaTime,
    //   (mouse.y * 9 + pointLightRef.current.position.y - 2) * deltaTime,
    //   1.8
    // );

    const mousePosition = new Vector3(mouse.x - 5, mouse.y - 5, 1.8);

    // camera.position.z += (mouse.y / 3 + camera.position.z) * 2 * deltaTime;
    // camera.position.x += (mouse.x / 3 - camera.position.x) * 2 * deltaTime;
    pointLightRef.current.position.copy(mousePosition);
  });

  return <directionalLight ref={pointLightRef} color="red" intensity={1} />;
}

export default function Statue() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      // antialias={true}
      // alpha={true}
      camera={{ position: [0, 0, 0], fov: 25 }}
      // gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={"loading"}>
        <ambientLight intensity={0.4} />
        <MousePointLight />
        <Scene isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}
