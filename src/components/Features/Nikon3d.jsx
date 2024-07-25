import React, { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ModelView from "./ModelView";
import { View } from "@react-three/drei";
import * as THREE from 'three';

const Nikon3d = () => {
    const [size, setSize] = useState('small');
    const [model, setModel] = useState({
        title: 'Nikon D6',
        color: ['#000000', '#FFFFFF'],
    });

    const cameraControlSmall = useRef();
    const small = useRef(new THREE.Group());
    const [smallRotation, setSmallRotation] = useState(0);

    useGSAP(() => {
        gsap.to('#heading', { y: 0, opacity: 1 });
    }, []);

    useEffect(() => {
        return () => {
            // Cleanup function
            const canvas = document.querySelector('canvas');
            if (canvas) {
                const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
                if (gl) {
                    gl.getExtension('WEBGL_lose_context')?.loseContext();
                }
            }
        };
    }, []);

    const rotateModel = (angle) => {
        gsap.to(cameraControlSmall.current.object.position, {
            x: Math.sin(angle) * 4,
            z: Math.cos(angle) * 4,
            duration: 1,
            onUpdate: () => cameraControlSmall.current.update()
        });
    };

    return (
        <section className="">
            <div className="w-screen h-screen bg-transparent">
                <div className="flex flex-col items-center">
                    <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
                        <ModelView
                            index={1}
                            groupRef={small}
                            gsapType="view1"
                            controlRef={cameraControlSmall}
                            setRotationState={setSmallRotation}
                            item={model}
                            size={size}
                        />
                        
                        <Canvas
                            className="w-full h-full"
                            style={{
                                position: 'fixed',
                                top: "5vh",
                                bottom: 0,
                                left: 0,
                                right: 0,
                                overflow: 'hidden'
                            }}
                            eventSource={document.getElementById('root')}
                        >
                            <View.Port />
                        </Canvas>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Nikon3d;