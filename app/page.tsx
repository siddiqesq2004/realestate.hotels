import Navigation from "@/components/ui/Navigation";
import Preloader from "@/components/ui/Preloader";
import CinematicFrameSequence from "@/components/CinematicFrameSequence";
import DebugHUD from "@/components/ui/DebugHUD";

export default function Home() {
  return (
    <main className="bg-charcoal-900 min-h-screen">
      <DebugHUD />
      <Preloader />
      <Navigation />
      
      {/* 2D Canvas Cinematic Sequence (Replaces WebGL) */}
      <CinematicFrameSequence />
      
    </main>
  );
}
