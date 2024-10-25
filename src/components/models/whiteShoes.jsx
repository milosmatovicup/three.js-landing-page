import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const WhiteShoe = ({nodes, materials}) => {
    const ref = useRef();
    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        ref.current.rotation.set(Math.cos(t / 4) / 8, Math.sin(t / 3) / 4, 0.15 + Math.sin(t / 2) / 8);
        ref.current.position.y = (0.5 + Math.cos(t / 2)) / 7;
    });
    return (
        <group ref={ref}>
            <mesh receiveShadow castShadow geometry={nodes.defaultMaterial.geometry} material={materials.NikeShoe} />
        </group>
    )
}


export default WhiteShoe