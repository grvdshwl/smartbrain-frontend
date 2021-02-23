import React from "react";
import "./Rank.css"

const Rank = ({name,rank}) =>{

return(
	
	<div>

		<div className = " center white f4">
			<div id = "name">{name}</div>,your entry count is .....
		</div>

		<div className = " center white f3">
			{rank}
		</div>
  	</div>


  )

}





export default Rank;