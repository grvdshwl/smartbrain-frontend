import React from "react";
import Tilt from 'react-tilt'; 
import "./Logo.css"
import brain from "./brain.png"


const Logo = () =>{

return(

  	<div className=" logo mt0">
  		<Tilt className="Tilt br2 shadow-2" options={{ max : 100 }} style={{ height: 120	, width: 100 }} >
		 <div className="Tilt-inner"><img alt="brain" src = {brain}/> </div>
		</Tilt>
  	</div>


  )


}




export default Logo;