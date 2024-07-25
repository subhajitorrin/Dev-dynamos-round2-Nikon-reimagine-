import React, { useMemo, Suspense } from 'react';
import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import * as THREE from 'three';
import Model from './Model';

const ModelView = ({ index, groupRef, gsapType, controlRef, setRotationState, size, item }) => {
    const targetVector = useMemo(() => new THREE.Vector3(0, 0, 0), []);

    return (
        <View
            index={index}
            id={gsapType}
            className={`w-full h-full absolute`}
        >
            {/* Ambient Light */}
            <ambientLight intensity={2} />
            
            <PerspectiveCamera makeDefault position={[0, 0, 6]} />
            
            <OrbitControls
                makeDefault
                ref={controlRef}
                enableZoom={false}
                enablePan={false}
                rotateSpeed={0.4}
                target={targetVector}
                onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
                // minPolarAngle={Math.PI/4}
                // maxPolarAngle={Math.PI/4}
                // minAzimuthAngle={-Math.PI}
                // maxAzimuthAngle={Math.PI}
            />
            
            <group ref={groupRef} name={`${index === 1 ? 'small' : 'large'}`} position={[0, 0, 0]}>
                <Suspense fallback={null}>
                    <Model
                        scale={index === 1 ? [12, 12, 12] : [17, 17, 17]}
                        item={item}
                        size={size}
                    />
                </Suspense>
            </group>
        </View>
    )
}

export default ModelView;