import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float } from '@react-three/drei'
import Book3D from './Book3D.jsx'
import Particles from './Particles.jsx'

/**
 * Mouse-driven parallax for the entire scene.
 * Subtle rotation only — keeps the experience calm, not dizzying.
 */
function ParallaxRig({ children }) {
  const ref = useRef()
  useFrame((state) => {
    if (!ref.current) return
    const { x, y } = state.pointer // -1..1
    ref.current.rotation.y += (x * 0.25 - ref.current.rotation.y) * 0.04
    ref.current.rotation.x += (-y * 0.15 - ref.current.rotation.x) * 0.04
  })
  return <group ref={ref}>{children}</group>
}

/**
 * Hero 3D scene — a small flock of floating books surrounded by particles.
 * Wrapped in <Suspense> so it never blocks the UI.
 * Performance notes:
 *  - dpr capped at [1, 1.6] (no 4k overdraw on retina)
 *  - shadows disabled (procedural lighting is enough)
 *  - frameloop="demand" would freeze animation, so we use default
 */
export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      camera={{ position: [0, 0, 7], fov: 45 }}
      className="!absolute inset-0"
    >
      {/* Ambient + key light */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 6, 5]} intensity={1.1} />
      <pointLight position={[-4, -2, 2]} intensity={1.5} color="#ff004f" />

      <Suspense fallback={null}>
        <ParallaxRig>
          <Particles count={600} radius={6} />

          <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
            <Book3D position={[-2.4, 0.4, 0]} scale={0.9} seed={0.4} />
          </Float>

          <Float speed={1.0} rotationIntensity={0.5} floatIntensity={0.8}>
            <Book3D position={[0, -0.2, 0.5]} scale={1.15} seed={1.7} />
          </Float>

          <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.5}>
            <Book3D position={[2.5, 0.6, -0.3]} scale={0.85} seed={2.9} />
          </Float>

          <Float speed={0.9} rotationIntensity={0.4} floatIntensity={0.7}>
            <Book3D
              position={[-1.2, -1.8, -1]}
              scale={0.6}
              seed={3.6}
              color="#ff5e8a"
            />
          </Float>

          <Float speed={1.1} rotationIntensity={0.3} floatIntensity={0.5}>
            <Book3D
              position={[1.6, -1.6, -1.2]}
              scale={0.55}
              seed={4.2}
              color="#ff5e8a"
            />
          </Float>
        </ParallaxRig>

        <Environment preset="city" />
      </Suspense>
    </Canvas>
  )
}
