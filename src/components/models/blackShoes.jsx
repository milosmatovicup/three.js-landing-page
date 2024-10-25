import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const BlackShoe = ({nodes, materials}) => {
    const ref = useRef();
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

export default BlackShoe