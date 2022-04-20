import React from "react";
import { Link } from "react-router-dom";
import '../Login/Login.css'
import ImageTitle from "../ImageTitle/ImageTitle";
import Title from "../Title/Title"
import Input from "../Input/Input";
import Button from "../Button/Button";
import Footer from "../Footer/Footer";
import NoAccount from "../NoAccount/NoAccount";

const Login = () => {
  
    return (
      <div> 
          <section className="section-login">
                <div className="container-login"> 
                    <ImageTitle imgSrc={'./img/gtf-logo.png'} classDiv={"head-logo-image_title"}
                    classImg={"icon-logo"} alt={"icon-console"}>
                        Goal to fit
                    </ImageTitle>                 
                    <div className="login">
                        <Title>Login</Title>
                        <Input  className="add-input" htmlFor="email" label='Email'
                                id='email' type='email' name='email' 
                                placeholder='Enter your email' 
                                //  value={email} 
                                //  isInvalid={isInvalid}
                                //  onChange={e => setEmail(e.target.value)}
                        /> 
                        <Input className="add-input" htmlFor="password" label='Password' 
                                id='Password'  type="password" placeholder="***********"                      
                        />
                       
                        <Link to="/activity-report">
                             <Button  type="submit" value="submit">Login</Button>
                        </Link>                      
                    </div>

                    <NoAccount tagtitle='Don’t have an account?'
                               textA1='Forgot Password?' href1="/"
                               textA2='Sign Up' href2="/signup"
                               
                    />                
                </div>
          </section>
          
          <Footer>©Copy Right 2022 : Goal to fit</Footer>
         
      
      </div>
    );
  }
  
  export default Login;


















