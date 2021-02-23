import React,{Component} from "react";


class SignIn extends Component{

  constructor(props){
    super(props);
    this.state ={
     inputEmail:"",
     inputPassword:"",
     response:"",
     status:""
    }
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

  onSubmitSignIn = ()=>{
  	this.setState({status:""})
  	fetch("https://ancient-sea-28814.herokuapp.com/signin",{
  		method:"post",
  		headers:{"Content-Type":"application/json"},
  		body:JSON.stringify({
  			email:this.state.inputEmail,
  			password:this.state.inputPassword
  		})
  	}).then((res)=>res.json()).then((data)=>{
  		if(data==="wrong credentials"){
  			this.setState({status:"Invalid credentials!"})
  		}else{
  			if(data.email===this.state.inputEmail){
  			if(data.id ){	
  			this.props.userUpdate(data);
  			this.props.onButtonClick("home")
  		}

  		}
  		  			
  			
  			
  		}
  	})

  
  }	

 render(){
	const {onButtonClick} =this.props;
	return(

  	<div >
  		<article className="br3  shadow-5 b--black-10 mv5    mw5 center">

	  		<main className="w-100 pa3 black-80">
			  <form className="measure " onSubmit={(event) => {this.onSubmitSignIn(event.preventDefault())}}   >
			      <legend className="center f4 fw6 ph0 mh0">Sign In</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" >Email</label>
			        <input 
			        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			        type="email" 
			        name="email-address"  
			        id="email-address"
			        onChange={this.onEmailChange}
			        required/>
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" >Password</label>
			        <input 
			        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			        type="password" 
			        name="password"  
			        id="password"
			        onChange={this.onPasswordChange}
			        required
			        />
			      </div>
			   
			   
			    <div className="center">
			      <input  
			      
			      className="b  br2  ph3 pv2 pointer input-reset ba b--black bg-transparent  pointer f6 dib" 
			      type="submit" 
			      value="Sign In"/>
			    </div>
			    <div className="lh-copy mt3 center">
			      <p  onClick = {()=>onButtonClick("register")}className="f6 pointer link dim black db">Register</p>
			     
			    </div>
			  </form>
			</main>
		</article>
		<h2 className="status center red">{this.state.status}</h2>  
  		
  	</div>


  )

}

}



export default SignIn;