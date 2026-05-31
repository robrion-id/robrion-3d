'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Environment, Sky } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette, SSAO } from '@react-three/postprocessing';
import { CentralCommand, GitIsland, LinuxServerIsland, DockerIsland, NginxIsland, DataHighway } from './Islands';
import * as THREE from 'three';

// Add camera tilt and perspective
export function Scene() {
  return (
    <div className="absolute inset-0 w-full h-full bg-[#030508] z-0">
      <Canvas
        camera={{ position: [20, 20, 25], fov: 45, near: 0.1, far: 200 }}
        gl={{ antialias: false, toneMapping: THREE.ACESFilmicToneMapping }}
        shadows
      >
        <color attach="background" args={['#030508']} />
        
        <fogExp2 attach="fog" args={['#030508', 0.02]} />
        
        {/* Environment */}
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        
        {/* Moonlight */}
        <directionalLight position={[-10, 20, -10]} intensity={0.2} color="#88aaff" castShadow shadow-mapSize={[2048, 2048]} />
        
        {/* Ambient base */}
        <ambientLight intensity={0.1} color="#ffffff" />

        {/* Islands */}
        <CentralCommand position={[0, 0, 0]} />
        <GitIsland position={[-12, -2, -6]} />
        <LinuxServerIsland position={[10, 2, -12]} />
        <DockerIsland position={[14, -3, 6]} />
        <NginxIsland position={[-10, 3, 12]} />

        {/* Data Highways connecting center to islands */}
        <DataHighway start={[0, -0.5, 0]} end={[-12, -2.5, -6]} color="#f05032" />
        <DataHighway start={[0, -0.5, 0]} end={[10, 1.5, -12]} color="#00c853" />
        <DataHighway start={[0, -0.5, 0]} end={[14, -3.5, 6]} color="#0db7ed" />
        <DataHighway start={[0, -0.5, 0]} end={[-10, 2.5, 12]} color="#00c853" />

        {/* Controls - restricted to feel isometric/cinematic */}
        <OrbitControls 
          enablePan={false} 
          enableZoom={true}
          minDistance={15}
          maxDistance={50}
          maxPolarAngle={Math.PI / 2.2} 
          minPolarAngle={Math.PI / 4}
          autoRotate
          autoRotateSpeed={0.5}
        />

        {/* Post Processing - High End VFX */}
        <EffectComposer disableNormalPass>
          <SSAO samples={21} radius={5} intensity={10} luminanceInfluence={0.6} color="black" />
          <Bloom luminanceThreshold={0.5} mipmapBlur intensity={1.5} />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
