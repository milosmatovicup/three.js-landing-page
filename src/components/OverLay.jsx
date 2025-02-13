import { Canvas } from "@react-three/fiber";
import React, { forwardRef } from "react";
import Logo from "./models/logo";
import { Environment } from "@react-three/drei";

const Overlay = forwardRef(({ caption, scroll }, ref) => (
    <div
        ref={ref}
        onScroll={(e) => {
            scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)
        }}
        className="scroll"
    >
        <div style={{ height: "200vh" }}>
            <div className="dot font-arima-regular max-w-900 leading-30">
                <h1 className="text-white font-arima-bold">Senior Front-end Developer</h1>
                <p className="text-30">Based on several years of front-end development experience, I create modern and user-friendly interfaces. 
                I focus on React and Angular, and learn the latest technologies to use more optimized and high-performance technologies.
                </p>
            </div>
        </div>
        <div style={{ height: "200vh" }}>
            <div className="dot font-arima-regular max-w-900 leading-30">
                <h1 className="text-white font-arima-bold">WebGL & Three.js expert</h1>
                <p className="mb-10 text-30">In today’s fast-paced digital world, websites are no longer just flat, 2D spaces
                    The digital scene is bustling, and to make an impression, websites now need that extra ‘oomph’!
                </p>
                <p className="mb-10 text-30">
                    I have extensive experience in developing landing pages and building construction using Three.js.
                </p>
                <p className="mb-10 text-30">
                    Dive into the world of Three.js with me and make your site the best it can be.
                </p>
            </div>
        </div>
        <div style={{ height: "200vh" }}>
            <div className="dot font-arima-regular max-w-900 leading-30">
                <h1 className="text-white font-arima-bold">Contact me</h1>
                <p className="mb-10 text-30 ml-15">
                    NickName: Procaptain 
                </p>
                <div>
                    <a className="flex pointer-events-auto m-15" target="blank" href="https://github.com/Goldendragon1029">
                        <img src="logos/github.svg" alt="github" width={40} height={40}/>
                        <p className="m-4 ml-20 text-20">
                            https://github.com/milosmatovicup
                        </p>
                    </a>
                </div>
            </div>
        </div>
        <span className="caption">
            <Canvas>
                <ambientLight intensity={5}/>
                <directionalLight intensity={10}/>
                <Environment preset="city" />
                <group scale={[5, 5, 5]}>
                    <Logo />
                </group>
            </Canvas>
        </span>
    </div>
));

export default Overlay;