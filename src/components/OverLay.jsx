import React, { forwardRef } from "react";

const Overlay = forwardRef(({ caption, scroll }, ref) => (
    <div
        ref={ref}
        onScroll={(e) => {
            scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)
            caption.current.innerText = scroll.current.toFixed(2);
        }}
        className="scroll"
    >
        <div style={{ height: "200vh" }}>
            <div className="dot">
                <h1>headset</h1>
                Text 1
            </div>
        </div>
        <div style={{ height: "200vh" }}>
            <div className="dot">
                <h1>headset</h1>
                Text 2
            </div>
        </div>
        <div style={{ height: "200vh" }}>
            <div className="dot">
                <h1>headset</h1>
                Text 3
            </div>
        </div>
        <div style={{ height: "200vh" }}>
            <div className="dot">
                <h1>headset</h1>
                Text 4
            </div>
        </div>
        <div style={{ height: "200vh" }}>
            <div className="dot">
                <h1>headset</h1>
                Text 5
            </div>
        </div>
        <div style={{ height: "200vh" }}>
            <div className="dot">
                <h1>headset</h1>
                Text 6
            </div>
        </div>
        <div style={{ height: "200vh" }}>
            <div className="dot">
                <h1>headset</h1>
                Text 7
            </div>
        </div>
        <div style={{ height: "200vh" }}>
            <div className="dot">
                <h1>headset</h1>
                Text 8
            </div>
        </div>
        <span className="caption" ref={caption}>
            0.00
        </span>
    </div>
));

export default Overlay;