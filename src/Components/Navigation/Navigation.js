import React from "react";
import "./Navigation.css"


const Navigation = ({onButtonClick}) =>{

return(

	<nav className="navigation">
		<p onClick = {()=>onButtonClick("signin")} className ="f4 link dim black underline  pointer"> Sign Out </p>
	</nav>

	)


}













export default Navigation;