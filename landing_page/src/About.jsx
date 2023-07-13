import React from "react";
import web from "../src/img/3026238.jpg"
import Common from "./Common";
const About = () => {
    return (
        <>
            <Common 
            name="Welcome to About page of" 
            imgsrc={web} visit="/contact" 
            btname="Contact Now" 
            />
        </>
    );
}

export default About;