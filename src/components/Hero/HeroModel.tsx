import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Stars, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const HeroModel = () => {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      sphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#ff00ff" />
      <pointLight position={[-10, -10, -10]} intensity={2} color="#00ffff" />
      
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={1} fade speed={1} />
      
      <Float speed={4} rotationIntensity={1} floatIntensity={2}>
        <Sphere ref={sphereRef} args={[1.2, 64, 64]}>
          <MeshDistortMaterial
            color="#ff00ff"
            attach="material"
            distort={0.4}
            metalness={0.8}
          >
            {/* Subtle glow effect using transparent layers is complex, 
                let's stick to standard material for now */}
          </MeshDistortMaterial>
        </Sphere>
      </Float>

      {/* Wireframe secondary sphere */}
      <mesh scale={2.2}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#3b82f6" wireframe transparent opacity={0.1} />
      </mesh>
    </>
  );
};

export default HeroModel;
