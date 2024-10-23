import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";


const BlackShoe = () => {
    const ref = useRef();
    const { nodes, materials } = useGLTF('/models/shoe-draco.glb');
    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        ref.current.rotation.set(Math.cos(t / 4) / 8, Math.sin(t / 3) / 4, 0.15 + Math.sin(t / 2) / 8);
        ref.current.position.y = (0.5 + Math.cos(t / 2)) / 7;
    });
    return (
        <group ref={ref}>
            <mesh castShadow geometry={nodes.Object_115.geometry} material={materials['Material.002']} />
            <mesh castShadow receiveShadow geometry={nodes.Object_119.geometry} material={materials['Material.001']} />
        </group>
    )
}

useGLTF.preload('/models/shoe-draco.glb');

export default BlackShoe