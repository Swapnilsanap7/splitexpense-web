import ClickSpark from '@/app/components/ClickSpark';
import Features from './components/Features';
import Hero from './components/Hero';
import Particles from './components/Particles';


export default function Home() {
  return (
    <ClickSpark
      sparkColor='#fff'
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
      >
    <main className="relative min-h-screen pt-16">
      {/* Make Particles Fullscreen & Fixed */}
      <div className="fixed inset-0 w-full h-full -z-10">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={250}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Main Content */}
      <Hero />
      <Features />
    </main>
    </ClickSpark>
  );
}
