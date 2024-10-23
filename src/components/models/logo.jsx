import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";


const Logo = () => {
    const ref = useRef();
    const { scene } = useGLTF('/models/webgl_logo.glb');
    // useFrame((state) => {
    //     const t = state.clock.getElapsedTime();
    //     ref.current.rotation.set(Math.cos(t / 4) / 8, Math.sin(t / 3)+9 / 4, 0.15 + Math.sin(t / 2) / 8);
    //     ref.current.position.y = (0.5 + Math.cos(t / 2)) / 7;
    // });
    return (
        <group ref={ref}>
            <primitive object={scene} />
        </group>
    )
}

useGLTF.preload('/models/webgl_logo.glb');

export default Logo