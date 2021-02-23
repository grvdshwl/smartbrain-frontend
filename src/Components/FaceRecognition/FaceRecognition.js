import React from "react";
import "./FaceRecognition.css"


const FaceRecognition = ({imageValue,box}) =>{

return(

  	<div className = "center">
  		<div className = "absolute mt2">
  			<img id="image"src={imageValue} alt ="img" height = "auto" width = "300" />
  			<div className="bounding-box" 
  			style = {{top :box.topRow, bottom : box.bottomRow,right : box.rightCol,left : box.leftCol}}
  			></div>
  		</div>
  	</div>


  		)


}













export default FaceRecognition;