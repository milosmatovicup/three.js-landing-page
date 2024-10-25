import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import WhiteShoe from "./models/whiteShoes";
import BlackShoe from "./models/blackShoes";
import Computer from "./models/computer";
import { CameraController } from "./camera";
import Particles from "./models/particles";
import { useRef } from "react";

const Model = ({scroll, ...props}) => {
    console.log("scroll", scroll);
    const maxHeight = 12;
    const mouse = useRef([0, 0]);
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
                    <WhiteShoe />
                </group>
                <group position={[0, - 1.5, 0]} scale={[2, 2, 2]}>
                    <BlackShoe />
                </group>
                <group position={[0, - maxHeight, -2]} scale={[0.8, 0.8, 0.8]} rotation={[0.4, 0, 0]}>
                    <Computer />
                </group>
                <Environment preset="city" />
                <CameraController scroll={scroll} maxHeight={maxHeight}/>
                <Particles count={1000}  mouse={mouse} />
                <OrbitControls 
                />
                {/* <axesHelper args={[5]} /> */}
            </Canvas>
        </>
    )
}
export default Model;