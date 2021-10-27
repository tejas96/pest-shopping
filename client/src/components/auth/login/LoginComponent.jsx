import React from 'react';
import img from '../../../assets/globe.png';
import { Button, Input } from '../../common';
import useLoginContainer from './loginContainer';
import { FContainer, FIComponent, H1, Link } from './styledComponent';
import {Loader} from 'components/common';
const LoginComponent = (props) => {
  const { onChange, handleLoginApi, loading } = useLoginContainer();

  return (
    <>
    <Loader show={loading}/>
    <FContainer height="97vh" width="97vw">
      <FIComponent height="100%" width="50%" breakpoint>
        <img
          src={img}
          style={{
            width: '100%',
            objectFit: 'scale-down'
          }}
          alt="globe"
        />
      </FIComponent>
      <FIComponent width="50%" breakpoint>
        <FIComponent>
          <H1>Login</H1>
        </FIComponent>
        <FIComponent width="300px">
          <FIComponent margin="20px 0">
            <Input
              name="userName"
              placeholder="Enter User Name"
              onChange={onChange}
              type="text"
              width="100%"
            />
          </FIComponent>
          <FIComponent>
            <Input
              name="password"
              placeholder="Enter Password"
              onChange={onChange}
              type="password"
              width="100%"
            />
          </FIComponent>
          <FIComponent>
            <Button
              text="Login"
              onClick={(event) =>
                handleLoginApi({ props, authType: 'self', event })
              }
            />
            <Button
              text="Login With Google"
              onClick={(event) =>
                handleLoginApi({ props, authType: 'google', event })
              }
            />
          </FIComponent>
          <FIComponent>
            <span>New User ? </span><Link href='/signup'>SignUp Here</Link>
          </FIComponent>
        </FIComponent>
      </FIComponent>
    </FContainer>
     
    </>
  );
};

export default LoginComponent;
