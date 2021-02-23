import React,{Component} from "react";


class Register extends Component {

	constructor(props){
    super(props);
    this.state ={
     inputEmail:"",
     inputPassword:"",
     inputName:""
    }
  }

 onNameChange =(event)=>{
 	this.setState({
 		inputName:event.target.value
 	})
 	
 }

 onEmailChange =(event)=>{
 	this.setState({
 		inputEmail:event.target.value
 	})
 	
 }

  onPasswordChange =(event)=>{
 	this.setState({
 		inputPassword:event.target.value
 	})
 	
 }

  onSubmitRegister = ()=>{
  	
  	fetch("https://ancient-sea-28814.herokuapp.com/register",{
  		method:"post",
  		headers:{"Content-Type":"application/json"},
  		body:JSON.stringify({
  			email:this.state.inputEmail,
  			password:this.state.inputPassword,
  			name:this.state.inputName
  		})
  	}).then((res)=>res.json()).then((data)=>{
  		  	this.props.userUpdate(data);
  			this.props.onButtonClick("home")	
  		
  	})

  
  }	

render(){
	const {onButtonClick} =this.props;
	return(

	  	<div >
  		<article className="br3   shadow-5 b--black-10 mv5    mw5 center">

	  		<main className="w-100 pa3 black-80">
			  <form className="measure " onSubmit = {(event) => {this.onSubmitRegister(event.preventDefault())}} >
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="center f4 fw6 ph0 mh0">Register</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" >Name</label>
			        <input 
			        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			        type="text" 
			        name="text"
			        onChange= {this.onNameChange}
			        required />
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" >Email</label>
			        <input 
			        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			        type="email" name="email" 
			        onChange={this.onEmailChange} 
			        required />
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" >Password</label>
			        <input 
			        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
			         type="password" name="password" 
			         onChange={this.onPasswordChange}
			         required/>
			      </div>
			      
			   
			    </fieldset>
			    <div className="center">
			      <input 
			      className="b pointer  br2  ph3 pv2 input-reset ba b--black bg-transparent pointer f6 dib" type="submit" value="Register"/>
			    </div>
			    <div className="lh-copy mt3 center">
			      <p  onClick ={()=>onButtonClick("signin")}className="f6 pointer link dim black db">Sign In</p>
			     
			    </div>
			  </form>
			</main>
		</article>

  		
	  	</div>


  )

}

}



export default Register;