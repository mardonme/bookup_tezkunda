import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/**
 * A single floating, gently rotating "book" mesh.
 * - Procedurally generated geometry (no textures = fast)
 * - Front cover gets the accent color, sides stay matte dark
 * - `seed` randomizes phase so a flock of books doesn't move in lockstep
 */
export default function Book3D({
  position = [0, 0, 0],
  scale = 1,
  color = '#ff004f',
  seed = 0,
}) {
  const group = useRef()

  // Materials shared by all 6 faces but with different base colors per face.
  // We precompute them once via useMemo-like pattern (refs hold the array).
  const materials = useRef([
    new THREE.MeshStandardMaterial({ color: '#1a1a1c', roughness: 0.7 }), // right (pages)
    new THREE.MeshStandardMaterial({ color: '#1a1a1c', roughness: 0.7 }), // left (spine inner)
    new THREE.MeshStandardMaterial({ color: '#222', roughness: 0.6 }),    // top
    new THREE.MeshStandardMaterial({ color: '#222', roughness: 0.6 }),    // bottom
    new THREE.MeshStandardMaterial({                                      // front cover
      color,
      roughness: 0.35,
      metalness: 0.2,
      emissive: color,
      emissiveIntensity: 0.15,
    }),
    new THREE.MeshStandardMaterial({ color: '#0f0f0f', roughness: 0.8 }), // back cover
  ])

  useFrame((state) => {
    if (!group.current) return
    const t = state.clock.elapsedTime + seed
    group.current.position.y = position[1] + Math.sin(t * 0.8) * 0.18
    group.current.rotation.y = Math.sin(t * 0.4) * 0.6 + seed
    group.current.rotation.x = Math.cos(t * 0.3) * 0.15
  })

  return (
    <group ref={group} position={position} scale={scale}>
      {/* Book body */}
      <mesh castShadow receiveShadow material={materials.current}>
        <boxGeometry args={[1.4, 2, 0.28]} />
      </mesh>

      {/* Spine highlight strip — accent line on the side */}
      <mesh position={[-0.71, 0, 0]}>
        <boxGeometry args={[0.02, 1.9, 0.26]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.6}
        />
      </mesh>
    </group>
  )
}
