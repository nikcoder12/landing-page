import React from "react";
import Card from "./Card";
import web from "../src/img/standard-quality-control-collage-concept.jpg"
import web1 from "../src/img/standard-quality-control-concept-m.jpg"
import web2 from "../src/img/rpa-concept-with-blurry-hand-touching-screen.jpg"
import web3 from "../src/img/standard-quality-control-collage-concept (1).jpg";
const Service = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Our Services</h1>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row gy-4">
                              <Card name="Editor" title="HTML Editor" imgs={web} text="Only for those User which want the use Only Html editor"/>
                              <Card name="Editor" title="HTML Editor" imgs={web1} text="Only for those User which want the use Only Html editor"/>
                              <Card name="Editor" title="HTML Editor" imgs={web2} text="Only for those User which want the use Only Html editor"/>
                              <Card name="Editor" title="HTML Editor" imgs={web3} text="Only for those User which want the use Only Html editor"/>
                            </div>    
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Service;