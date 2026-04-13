import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/**
 * Lightweight particle field rendered as a single Points object.
 * Generates `count` random positions inside a sphere of radius `radius`.
 * Drifts slowly upward and re-wraps for a soft ambient effect.
 */
export default function Particles({ count = 800, radius = 8 }) {
  const ref = useRef()

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      // Uniform-ish distribution inside sphere
      const r = Math.cbrt(Math.random()) * radius
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [count, radius])

  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * 0.02
    ref.current.rotation.x += delta * 0.005
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#ffffff"
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}
