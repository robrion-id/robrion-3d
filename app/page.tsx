import { Scene } from '@/components/Scene';
import { UIOverlay } from '@/components/UIOverlay';

export default function Home() {
  return (
    <main className="relative w-screen h-screen overflow-hidden bg-[#030508]">
      {/* 3D World underneath */}
      <Scene />
      {/* UI Overlay on top */}
      <UIOverlay />
    </main>
  );
}
