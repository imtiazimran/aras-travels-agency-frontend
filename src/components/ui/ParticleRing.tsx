/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "../../utils/pointTracker";
import * as THREE from "three"; 

const ParticleRing = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="relative">
      <Canvas
        camera={{
          position: [10, -7.5, -5],
        }}
        style={{ height: "100vh" }}
        className="bg-slate-900"
      >
        <OrbitControls maxDistance={20} minDistance={10} />
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={10.0} />
        <PointCircle />
      </Canvas>

      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-slate-200 font-medium pointer-events-none">
        {children}
      </div>
    </div>
  );
};

const PointCircle = () => {
  const ref = useRef<THREE.Group>(null); // Specify the ref type as THREE.Group

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

const Point = ({ position, color } : any) => {
    return (
      <Sphere position={position} args={[0.1, 10, 10]}>
        <meshStandardMaterial
          emissive={color}
          emissiveIntensity={0.5}
          roughness={0.5}
          color={color}
        />
      </Sphere>
    );
  };
  

export default ParticleRing;
