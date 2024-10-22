import * as THREE from 'three'
const { useGLTF } = require("@react-three/drei");
const { useFrame } = require("@react-three/fiber");
const { useRef } = require("react")

const Computer = () => {
    const ref = useRef();
    const { nodes, materials } = useGLTF('/models/mac-draco.glb');
    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, Math.cos(t / 2) / 20 + 0.25, 0.1);
        ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, Math.sin(t / 4) / 20, 0.1);
        ref.current.rotation.z = THREE.MathUtils.lerp(ref.current.rotation.z, Math.sin(t / 8) / 20, 0.1);
        ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, (-2 + Math.sin(t / 2)) / 2, 0.1);
    });
    return (
        <group ref={ref}>
            <group rotation-x={-0.425} position={[0, -0.04, 0.41]}>
                <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh material={materials.aluminium} geometry={nodes['Cube008'].geometry} />
                <mesh material={materials['matte.001']} geometry={nodes['Cube008_1'].geometry} />
                <mesh geometry={nodes['Cube008_2'].geometry}>
                    {/* Drei's HTML component can "hide behind" canvas geometry */}
                    {/* <Html className="content" rotation-x={-Math.PI / 2} position={[0, 0.05, -0.09]} transform occlude>
                    <div className="wrapper" onPointerDown={(e) => e.stopPropagation()}>
                        <HeroPage />
                    </div>
                    </Html> */}
                </mesh>
                </group>
            </group>
            <mesh material={materials.keys} geometry={nodes.keyboard.geometry} position={[1.79, 0, 3.45]} />
            <group position={[0, -0.1, 3.39]}>
                <mesh material={materials.aluminium} geometry={nodes['Cube002'].geometry} />
                <mesh material={materials.trackpad} geometry={nodes['Cube002_1'].geometry} />
            </group>
            <mesh material={materials.touchbar} geometry={nodes.touchbar.geometry} position={[0, -0.03, 1.2]} />
        </group>
    )
}

useGLTF.preload('/models/mac-draco.glb');

export default Computer