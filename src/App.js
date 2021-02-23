import React,{Component} from "react";
import "./App.css"; 
import Navigation from "./Components/Navigation/Navigation.js";
import Logo from "./Components/Logo/Logo.js";
import Rank from "./Components/Rank/Rank.js";
import Particles from 'react-particles-js';
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm.js";
import FaceRecognition from "./Components/FaceRecognition/FaceRecognition.js";
import SignIn from "./Components/SignIn/SignIn.js";
import Register from "./Components/Register/Register.js";
import Clarifai from "clarifai";

const app = new Clarifai.App({
  apiKey : "bcd7553cb92d485285a1f5fef0e9f547"
});




const particlesOptions = {
  particles:{
    number :{
      value: 50,
      density :{
        enable:true,
        value_area:500
      }
    }
  }
}
class  App extends Component {
 
  constructor(){
    super();
    this.state ={
      image: "",
      value:"",
      box:"",
      status:"",
      login:"",
      user:{
    id: "123",
    name:"",
    email : "",
    entries : "",
    joined : ""
  }
    }
  }


  onUserUpdate =(data)=>{
    this.setState({
      user:{
      id: data.id,
      name:data.name,
      email : data.email,
      entries : data.entries,
      joined : data.joined
      }
    })
  }
  onFaceDetect = (data)=>{
    const clarifaiData = data.outputs[0].data.regions[0].region_info.bounding_box
    const imageData = document.getElementById("image");
    const width = Number(imageData.width);
    const height = Number(imageData.height);
    return{
      leftCol : clarifaiData.left_col * width,
      topRow : clarifaiData.top_row * height,
      rightCol : width - (clarifaiData.right_col * width),
      bottomRow : height - (clarifaiData.bottom_row *height)
    }
  }

  faceCalculate = (data)=>{
    this.setState({box:data})
  }

  onSubmit = (event)=>{

    this.setState({box:""})
    this.setState({image : this.state.value});
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.value).then(
      (response)=> {
        if(response){
          fetch("https://ancient-sea-28814.herokuapp.com/image",{
              method:"put",
             headers:{"Content-Type":"application/json"},
              body:JSON.stringify({
              id:this.state.user.id
      })
    }).then((res)=>res.json()).then((data)=>{
       
        this.setState(Object.assign(this.state.user,{entries:data}))
      
    }).catch(console.log)
        }
        this.faceCalculate(this.onFaceDetect(response))});

    event.preventDefault();

  }

  onSearchChange =(event)=>{
    
    this.setState({value : event.target.value})
  }

  onClickChange =(data) =>{
    
    this.setState({
      login:data,
      image:""
    })

  }


 render(){
   return (



    <div className="App">

      <Particles className ="particles" params= {particlesOptions} />
      {this.state.login==="home"?<div>
              <Navigation onButtonClick = {this.onClickChange}/>
                  <Logo/>
                  <Rank name={this.state.user.name} rank={this.state.user.entries}/>
                  <ImageLinkForm submit = {this.onSubmit} search = {this.onSearchChange}/>
          
                  {this.state.image
                    ?<FaceRecognition box={this.state.box} imageValue = {this.state.image}/>:<div></div>}
                    </div>:
                    (this.state.login ==="register" ?  <Register userUpdate={this.onUserUpdate} onButtonClick = {this.onClickChange}/> 
                      : <SignIn onButtonClick = {this.onClickChange} 
                      userUpdate={this.onUserUpdate}/> 
                            

                      )
          }    </div>
  );



  }
}

export default App;
