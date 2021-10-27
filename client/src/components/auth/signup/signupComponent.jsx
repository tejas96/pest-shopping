import { Button, Input, Wrapper } from 'components/common';
import React from 'react';
import useSignupContainer from './signupContainer';
import { SignupWrapper, H1 } from './signupStyledComponent';

function Signup(props) {
    const {onChange, handleSignup, errors} = useSignupContainer();
    return (
       <SignupWrapper column>
           <Wrapper width='300px'>
                <Wrapper>
                    <H1>SignUp</H1>
                </Wrapper>          
                <Input type='text' onChange={onChange} placeholder='Enter Email' name='userName' error={errors.userName ? true:false} errorMessage={errors.userName}/>       
                <Input type='password' onChange={onChange} placeholder='Enter Password' name='password' error={errors.password ? true:false} errorMessage={errors.password}/>
                <Input type='password' onChange={onChange} placeholder='Confirm Password' name='confirmPassword' error={errors.confirmPassword ? true:false} errorMessage={errors.confirmPassword}/>
                <Button text='SignUp' onClick={handleSignup}/>
           </Wrapper>
       </SignupWrapper>
    );
}

export default Signup;