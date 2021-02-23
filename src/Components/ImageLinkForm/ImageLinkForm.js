import React from "react";
import "./ImageLinkForm.css"

const ImageLinkForm = ({submit,search}) =>{

return(

	<div>

		<p className = "f4 center"> This smart brain will detect faces in the below images.Give it a try.</p>
		
			<div className="center ">
				<form className="pa4  form br3 shadow-5  center" onSubmit={submit}>

					<input className = " f5 pa2 w-70 center" type ="text"  onChange ={search}/>
					<button className="   br3 ma w-30 grow link bg-light-purple white pv2 dib ph3"> Detect </button>
				</form>

			</div>
	
  	</div>


  )

}





export default ImageLinkForm;