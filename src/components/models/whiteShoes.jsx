const { useGLTF } = require("@react-three/drei");
const { useFrame } = require("@react-three/fiber");
const { useRef } = require("react")


const Shoe = () => {
    const ref = useRef();
    const { nodes, materials } = useGLTF('/models/nike_air_zoom_pegasus_36-transformed.glb');
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

useGLTF.preload('/models/nike_air_zoom_pegasus_36-transformed.glb');

export default Shoe