import { useRef } from "react";
import { useGLTF } from "@react-three/drei";


const Logo = () => {
    const ref = useRef();
    const { scene } = useGLTF('/models/webgl_logo.glb');
    return (
        <group ref={ref}>
            <primitive object={scene} />
        </group>
    )
}

useGLTF.preload('/models/webgl_logo.glb');

export default Logo