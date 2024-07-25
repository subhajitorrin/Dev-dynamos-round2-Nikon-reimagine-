import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';



export function Model(props) {
  const { nodes, materials } = useGLTF('/models/nikon_d6 (1).glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI/2, 0, 0]} scale={0.001}>
        <group rotation={[Math.PI / 8, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_9.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_12.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_15.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_18.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_21.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_24.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_27.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_30.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_33.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_36.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_39.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_42.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_45.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_48.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_51.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_54.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_57.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_60.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_63.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_66.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_69.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_72.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_75.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_78.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_81.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_84.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_87.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_90.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_93.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_96.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_99.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_102.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_105.geometry}
            material={materials.Material__35}
            position={[17.778, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_108.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_111.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_114.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_117.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_120.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_123.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_126.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_129.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_132.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_135.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_138.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_141.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_144.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_147.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_150.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_153.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_156.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_159.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_162.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_165.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_168.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_171.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_174.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_177.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_180.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_183.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_186.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_189.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_192.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_195.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_198.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_201.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_204.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_207.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_210.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_213.geometry}
            material={materials.Lens}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_216.geometry}
            material={materials.Lens}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_219.geometry}
            material={materials.Lens}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_222.geometry}
            material={materials.Lens}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_225.geometry}
            material={materials.Lens}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_228.geometry}
            material={materials.Lens}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_231.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_234.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_237.geometry}
            material={materials.Material__35}
            position={[17.777, 0.961, 1.552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
      </group>
    </group>
  )
}

export default Model

useGLTF.preload('/models/nikon_d6 (1).glb')