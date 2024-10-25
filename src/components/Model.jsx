import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import WhiteShoe from "./models/whiteShoes";
import BlackShoe from "./models/blackShoes";
import Computer from "./models/computer";
import { CameraController } from "./camera";
import Particles from "./models/particles";
import { Suspense, useEffect, useRef } from "react";

const Model = ({scroll, handleLoading}) => {
    const maxHeight = 12;
    const mouse = useRef([0, 0]);
    const nodes_white = useGLTF('/models/nike_air_zoom_pegasus_36-transformed.glb').nodes;
    const materials_white  = useGLTF('/models/nike_air_zoom_pegasus_36-transformed.glb').materials;
    const nodes_black = useGLTF('/models/shoe-draco.glb').nodes;
    const materials_black  = useGLTF('/models/shoe-draco.glb').materials;
    const nodes_computer = useGLTF('/models/mac-draco.glb').nodes;
    const materials_computer  = useGLTF('/models/mac-draco.glb').materials;


    useEffect(() => {
        if (nodes_white && materials_white && nodes_black && materials_black && nodes_computer && materials_computer) {
            handleLoading(true);
        }
    }, [nodes_white, materials_white, nodes_black, materials_black, nodes_computer, materials_computer]);
    
    return(
        <>
            <Canvas style={{ width: "100%", height: "100vh", backgroundImage: `url("./images/black-gradient-b9-3840x2400.jpg")`}} camera={{ fov: 20}} shadows
                dpr={[1, 2]}
                >
                <fog attach={"fog"} args={['white', 50, 190]} />
                <ambientLight intensity={2} />
                <directionalLight 
                    position={[20, 10, 10]}
                    intensity={3}
                />
                <group position={[0, maxHeight - 0.7, 0]} scale={[4, 4, 4]} rotation={[0, - Math.PI / 4, - 0.3]}>
                    <Suspense>
                        <WhiteShoe nodes={nodes_white} materials={materials_white}/>
                    </Suspense>
                </group>
                <group position={[0, - 1.5, 0]} scale={[2, 2, 2]}>
                    <Suspense>
                        <BlackShoe nodes={nodes_black} materials={materials_black}/>
                    </Suspense>
                </group>
                <group position={[0, - maxHeight, -2]} scale={[0.8, 0.8, 0.8]} rotation={[0.4, 0, 0]}>
                    <Suspense>
                        <Computer nodes={nodes_computer} materials={materials_computer}/>
                    </Suspense>
                </group>
                <Suspense>
                    <Environment preset="city" />
                </Suspense>
                <CameraController scroll={scroll} maxHeight={maxHeight}/>
                <Particles count={1000}  mouse={mouse} />
                <OrbitControls 
                />
            </Canvas>
        </>
    )
}

useGLTF.preload('/models/nike_air_zoom_pegasus_36-transformed.glb');
useGLTF.preload('/models/shoe-draco.glb');
useGLTF.preload('/models/mac-draco.glb');

export default Model;