'use client';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Text, Text3D, Center, Sparkles, Box, Cylinder, Sphere, Edges } from '@react-three/drei';
import * as THREE from 'three';

const darkMetal = new THREE.MeshStandardMaterial({ color: '#0d111a', roughness: 0.3, metalness: 0.8 });
const darkMetal2 = new THREE.MeshStandardMaterial({ color: '#131926', roughness: 0.5, metalness: 0.5 });
const cyanGlow = new THREE.MeshBasicMaterial({ color: '#00d4ff', toneMapped: false });
const greenGlow = new THREE.MeshBasicMaterial({ color: '#00c853', toneMapped: false });
const orangeGlow = new THREE.MeshBasicMaterial({ color: '#f05032', toneMapped: false });

export function IslandBase({ position, width=4, depth=4, height=0.5, edges=true, children }: any) {
  return (
    <group position={position}>
      {/* Floating animation provided by Float wrapper in parent or here */}
      <Box args={[width, height, depth]} castShadow receiveShadow material={darkMetal}>
        {edges && <Edges color="#2a3b5c" threshold={15} />}
      </Box>
      <group position={[0, height/2, 0]}>
        {children}
      </group>
    </group>
  );
}

export function CentralCommand({ position }: { position: [number, number, number] }) {
  return (
    <Float floatIntensity={1} speed={2} rotationIntensity={0.1}>
      <group position={position}>
        {/* Main Base Tiers */}
        <Cylinder args={[6, 7, 1, 32]} castShadow receiveShadow material={darkMetal} position={[0, -0.5, 0]}>
          <Edges color="#1e2a42" />
        </Cylinder>
        <Cylinder args={[5, 6, 0.5, 32]} castShadow receiveShadow material={darkMetal2} position={[0, 0.25, 0]} />
        <Cylinder args={[4, 5, 0.5, 32]} castShadow receiveShadow material={darkMetal} position={[0, 0.75, 0]} />
        
        {/* Central Core/Tower */}
        <Cylinder args={[1.5, 1.5, 3, 16]} castShadow receiveShadow material={darkMetal2} position={[0, 2.5, -2]} />
        {/* Glowing Rings on tower */}
        <Cylinder args={[1.6, 1.6, 0.1, 16]} material={cyanGlow} position={[0, 3, -2]} />
        <Cylinder args={[1.6, 1.6, 0.1, 16]} material={cyanGlow} position={[0, 2, -2]} />
        
        {/* Neon Sign */}
        <Center position={[0, 4.5, -2]}>
          <Text fontSize={1.2} fontWeight="bold" letterSpacing={0.1} color="#00d4ff" material={cyanGlow}>
            ROBRION.NET
          </Text>
        </Center>

        {/* Console / Avatar Area */}
        <group position={[0, 1, 1]}>
          <Cylinder args={[1, 1, 0.4, 16]} material={darkMetal2} position={[0, 0.2, 0]} />
          {/* Glowing rim */}
          <Cylinder args={[1.05, 1.05, 0.05, 16]} material={cyanGlow} position={[0, 0.4, 0]} />
          
          {/* Low Poly Avatar (Stylized) */}
          <group position={[0, 0.4, 0.5]}>
            <Cylinder args={[0.2, 0.2, 0.6]} material={new THREE.MeshStandardMaterial({color:'#000'})} position={[0, 0.3, 0]} />
            <Sphere args={[0.15]} material={new THREE.MeshStandardMaterial({color:'#ffccbb'})} position={[0, 0.75, 0]} />
          </group>

          {/* Holographic Screens */}
          <group position={[0, 1.2, -0.2]}>
            <mesh rotation={[-0.2, 0, 0]}>
              <planeGeometry args={[2.5, 1.2, 8, 8]} />
              <meshBasicMaterial color="#00d4ff" transparent opacity={0.3} wireframe side={THREE.DoubleSide} toneMapped={false} />
            </mesh>
            <mesh rotation={[-0.2, -0.4, 0]} position={[-1.4, 0, 0.2]}>
              <planeGeometry args={[1.2, 1.2, 4, 4]} />
              <meshBasicMaterial color="#00d4ff" transparent opacity={0.3} wireframe side={THREE.DoubleSide} toneMapped={false} />
            </mesh>
            <mesh rotation={[-0.2, 0.4, 0]} position={[1.4, 0, 0.2]}>
              <planeGeometry args={[1.2, 1.2, 4, 4]} />
              <meshBasicMaterial color="#00d4ff" transparent opacity={0.3} wireframe side={THREE.DoubleSide} toneMapped={false} />
            </mesh>
          </group>
        </group>
        
        {/* Glow point light */}
        <pointLight position={[0, 3, 1]} distance={15} intensity={2} color="#00d4ff" />
      </group>
    </Float>
  );
}

export function GitIsland({ position }: { position: [number, number, number] }) {
  return (
    <Float floatIntensity={1} rotationIntensity={0.2} speed={1.5}>
      <IslandBase position={position} width={3} depth={3} height={0.5}>
        <Box args={[0.5, 2, 0.5]} position={[-1, 1, -1]} material={darkMetal2} />
        {/* Billboard display */}
        <group position={[0, 1.5, 0]} rotation={[0, Math.PI/4, 0]}>
          <mesh>
            <boxGeometry args={[2, 1.5, 0.1]} />
            <meshStandardMaterial color="#1a1a1a" />
          </mesh>
          <mesh position={[0, 0, 0.06]}>
            <planeGeometry args={[1.8, 1.3]} />
            <meshBasicMaterial color="#f05032" transparent opacity={0.5} toneMapped={false} />
          </mesh>
          <Text position={[0,0,0.1]} fontSize={0.4} color="#ffffff">GIT</Text>
        </group>
        <pointLight position={[0, 1.5, 1]} distance={10} intensity={1} color="#f05032" />
      </IslandBase>
    </Float>
  );
}

export function LinuxServerIsland({ position }: { position: [number, number, number] }) {
  return (
    <Float floatIntensity={1} rotationIntensity={0.1} speed={1.8}>
      <IslandBase position={position} width={4} depth={3} height={0.5}>
        {/* Server Racks */}
        {[-1, 0, 1].map(x => (
          <group key={x} position={[x * 1.2, 1.5, -0.5]}>
            <Box args={[0.8, 3, 1]} material={darkMetal2}>
              <Edges color="#2a3b5c" />
            </Box>
            {/* Blinking LEDs */}
            {[-1, -0.5, 0, 0.5, 1].map(y => (
              <mesh key={y} position={[0.2, y, 0.51]}>
                <boxGeometry args={[0.1, 0.05, 0.05]} />
                <meshBasicMaterial color={Math.random() > 0.5 ? '#00c853' : '#00d4ff'} toneMapped={false} />
              </mesh>
            ))}
          </group>
        ))}
        {/* Floating Tux proxy (a literal penguin is complex, let's use a stylized blocky version or text) */}
        <Text position={[0, 3.5, -0.5]} fontSize={0.6} color="#ffffff">LINUX</Text>
        <pointLight position={[0, 2, 1]} distance={10} intensity={1} color="#00c853" />
      </IslandBase>
    </Float>
  );
}

export function DockerIsland({ position }: { position: [number, number, number] }) {
  return (
    <Float floatIntensity={1} rotationIntensity={0.15} speed={1.2}>
      <IslandBase position={position} width={4} depth={4} height={0.5}>
        {/* Container stacks */}
        <Box args={[1, 0.5, 2.5]} position={[-1, 0.5, 0]} material={new THREE.MeshStandardMaterial({color:'#0db7ed'})} />
        <Box args={[1, 0.5, 2.5]} position={[-1, 1.1, 0]} material={darkMetal2} />
        <Box args={[1, 0.5, 2.5]} position={[0.5, 0.5, 0]} material={darkMetal2} />
        <Text position={[0, 2.5, 0]} fontSize={0.5} color="#0db7ed">DOCKER</Text>
        <pointLight position={[0, 1.5, 0]} distance={10} intensity={1} color="#0db7ed" />
      </IslandBase>
    </Float>
  );
}

export function NginxIsland({ position }: { position: [number, number, number] }) {
  return (
    <Float floatIntensity={1} rotationIntensity={0.1} speed={1.6}>
      <IslandBase position={position} width={3} depth={3} height={0.5}>
        <Cylinder args={[1, 1.5, 2, 4]} material={darkMetal2} position={[0, 1, 0]}>
           <Edges color="#00c853" />
        </Cylinder>
        <Text position={[0, 3, 0]} fontSize={0.6} color="#00c853" material={greenGlow}>NGINX</Text>
        <pointLight position={[0, 2, 0]} distance={10} intensity={2} color="#00c853" />
      </IslandBase>
    </Float>
  );
}

export function DataHighway({ start, end, color="#00d4ff" }: { start: [number,number,number], end: [number,number,number], color?: string }) {
  const points = [new THREE.Vector3(...start), new THREE.Vector3(...end)];
  const curve = new THREE.LineCurve3(points[0], points[1]);
  return (
    <mesh>
      <tubeGeometry args={[curve, 20, 0.1, 8, false]} />
      <meshBasicMaterial color={color} transparent opacity={0.6} toneMapped={false} />
    </mesh>
  );
}
