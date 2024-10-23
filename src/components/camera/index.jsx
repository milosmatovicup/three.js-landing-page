import { useFrame, useThree  } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from 'three';

export const CameraController = (props) => {
    const { camera } = useThree();
    camera.position.set(5, props.maxHeight, 5);
    camera.lookAt(0, props.maxHeight, 0);
    const outCameraPosition = {
        x: 0,
        y: 0,
        z: 0,
    };
    const outLookPosition = {
        x: 0,
        y: 0,
        z: 0,
    };

    const scrollAnimation = (scroll, maxHeight) => {
        const radius = 30;
        const miniRadius = -4;
        if (scroll < 0.24) {
            const angle = Math.PI * 2 * (0.24 - scroll) / 0.24;
            outCameraPosition.x = radius * Math.sin(angle);
            outCameraPosition.y = maxHeight;
            outCameraPosition.z = radius * Math.cos(angle);

            outLookPosition.x = miniRadius * Math.sin(angle + Math.PI / 2);
            outLookPosition.y = maxHeight;
            outLookPosition.z = miniRadius * Math.cos(angle + Math.PI / 2);
        } 
        if (scroll >=0.24 && scroll < 0.38) {
            outCameraPosition.x = 0;
            outCameraPosition.y = (0.38 - scroll) / 0.14 * maxHeight;
            outCameraPosition.z = radius;

            outLookPosition.x = miniRadius;
            outLookPosition.y = (0.38 - scroll) / 0.14 * maxHeight;
            outLookPosition.z = 0;
        }
        if (scroll >=0.38 && scroll < 0.62) {
            const angle = Math.PI * 2 * (0.62 - scroll) / 0.24;
            outCameraPosition.x = radius * Math.sin(angle);
            outCameraPosition.y = 0;
            outCameraPosition.z = radius * Math.cos(angle);

            outLookPosition.x = miniRadius * Math.sin(angle + Math.PI / 2);
            outLookPosition.y = 0;
            outLookPosition.z = miniRadius * Math.cos(angle + Math.PI / 2);
        }
        if (scroll >=0.62 && scroll < 0.76) {
            outCameraPosition.x = 0;
            outCameraPosition.y = (0.62 - scroll) / 0.14 * maxHeight;
            outCameraPosition.z = radius;

            outLookPosition.x = miniRadius;
            outLookPosition.y = (0.62 - scroll) / 0.14 * maxHeight;
            outLookPosition.z = 0;
        }
        if (scroll >=0.76) {
            const angle = Math.PI * 2 * (1 - scroll) / 0.24;
            outCameraPosition.x = radius * Math.sin(angle);
            outCameraPosition.y = - maxHeight;
            outCameraPosition.z = radius * Math.cos(angle);

            outLookPosition.x = miniRadius * Math.sin(angle + Math.PI / 2);
            outLookPosition.y = - maxHeight;
            outLookPosition.z = miniRadius * Math.cos(angle + Math.PI / 2);
        }
    }
    
    useFrame(() => {
        scrollAnimation(props.scroll.current, props.maxHeight);
        console.log("scroll=", camera.position);
        camera.position.set(outCameraPosition.x  , outCameraPosition.y, outCameraPosition.z);
        // camera.position.lerp(new THREE.Vector3(outCameraPosition.x, outCameraPosition.y, outCameraPosition.z), 0.08);
        camera.lookAt(outLookPosition.x, outLookPosition.y, outLookPosition.z);
        // camera.position.set(5, (0.5 - props.scroll.current) * props.maxHeight * 2, 5);
        // camera.lookAt(0, (0.5 - props.scroll.current) * props.maxHeight * 2, 0);
    });

    return null;
}