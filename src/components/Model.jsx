import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Shoe from "./models/whiteShoes";

const Model = ({scroll, ...props}) => {
    console.log("scroll", scroll);
    const xxx = () => {
        console.log("scroll=", scroll);
    }
    return(
        <Canvas style={{ width: "100%", height: "100vh"}} shadows>
        <color attach="background" args={[0x111111]} />
        <ambientLight intensity={2} />
        <Shoe />
        <Environment preset="city" />
        <OrbitControls 
            enablePan={false}
        />
      </Canvas>
    )
}
export default Model;