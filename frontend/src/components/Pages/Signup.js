import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../Signup/Signup.css'
// import ImageTitle from "../ImageTitle/ImageTitle";
import Title from "../Title/Title";
import Input from "../Input/Input";
import Button from "../Button/Button";
import NoAccount from "../NoAccount/NoAccount";
import Footer from "../Footer/Footer";
import AgreeMent from "../AgreeMent/AgreeMent";

const Signup = () => {
    const [value, setValue] = useState(false);

    let checkboxValue = '';
    const handleValue = (e) => {
        checkboxValue = e.target.value;
        setValue(checkboxValue === 'false' ? true : false);
    }

    useEffect(() => {
        const btnSignin = document.querySelector('.button-submit');

        if (value) {

            btnSignin.classList.remove('disabled');
            btnSignin.removeAttribute('disabled');

        } else {

            btnSignin.classList.add('disabled');
            btnSignin.setAttribute('disabled', '');
        }
    }, [value])



    return (
        <div>
            <section className="container signup-section animate__animated animate__fadeIn">
                <div className="container-signup">
                    <div className="head-signup"></div>
                    <div className="singup">
                        <Title>Sign Up</Title>
                        <Input className="add-input" htmlFor="Email" label='Email'
                            id="email" type="email" name="email"
                            placeholder="Enter your email" required
                        //  value={email} 
                        //  isInvalid={isInvalid}
                        //  onChange={e => setEmail(e.target.value)}
                        />
                        <Input className="add-input" htmlFor="Password" label='Password'
                            id='Password' type="password" placeholder="***********" required
                        />
                        <Input className="add-input" htmlFor="telNo" label='Phone number'
                            id='telNo' type="tel" placeholder="000-000-0000"
                        />
                        <AgreeMent id="terms" type="checkbox" name="terms"
                            value={value || false} onClick={handleValue} required />

                        <Link to="/profile">
                            <Button type="submit" value="submit"
                            >
                                Continue
                            </Button>
                        </Link>


                    </div>
                    <NoAccount textA1='Forgot Password?' href1="/"
                        textA2='Sign In' href2="/Login"
                        hidden={true} required
                    />
                </div>
            </section>

            <Footer>&copy; Right 2022 : Goal to fit</Footer>


        </div>
    );
}

export default Signup;


















