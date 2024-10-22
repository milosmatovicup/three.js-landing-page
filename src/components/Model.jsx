import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import WhiteShoe from "./models/whiteShoes";
import BlackShoe from "./models/blackShoes";
import Computer from "./models/computer";

const Model = ({scroll, ...props}) => {
    console.log("scroll", scroll);
    return(
        <Canvas style={{ width: "100%", height: "100vh"}} shadows>
        <color attach="background" args={[0x111111]} />
        <ambientLight intensity={2} />
        <group position={[0, 15, 0]} scale={[4, 4, 4]}>
            <WhiteShoe />
        </group>
        <group position={[0, 0, 0]} scale={[2, 2, 2]}>
            <BlackShoe />
        </group>
        <group position={[0, -15, -2]} scale={[0.8, 0.8, 0.8]}>
            <Computer />
        </group>
        <Environment preset="city" />
        <OrbitControls 
            enablePan={false}
        />
        <axesHelper args={[5]} />
      </Canvas>
    )
}
export default Model;