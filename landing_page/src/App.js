
import React  from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {Route,Routes} from "react-router";
import Home from  "./Home";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";

const App = ()=>{
    return (
      <>
      <Navbar />
      <Routes>
       <Route exact path="/" Component={Home} />
       <Route exact path="/about" Component={About} />
       <Route exact path="/service" Component={Service} />
       <Route exact path="/contact" Component={Contact} /> 
      </Routes>
     </> 
    );
}
export default App;
