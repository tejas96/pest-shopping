import React from 'react';
import img from '../../../assets/globe.png';
import { Button, Input } from '../../common';
import useLoginContainer from './loginContainer';
import { FContainer, FIComponent, H1 } from './styledComponent';
const LoginComponent = (props) => {
  const { onChange, handleLoginApi } = useLoginContainer();

  return (
    <FContainer height="100vh" width="100vw">
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
                handleLoginApi({ props, authType: 'self', event })
              }
            />
          </FIComponent>
          {/* <GoogleLogin
        clientId="975111621469-v5lhlinkth3j22ho558r44vlggme0cvd.apps.googleusercontent.com"
        buttonText="google"
        onSuccess={(data) => handleLoginApi({ props, data })}
        onFailure={(data) => handleLoginApi({ props, data })}
        cookiePolicy={'single_host_origin'}
      /> */}
        </FIComponent>
      </FIComponent>
    </FContainer>
  );
};

export default LoginComponent;
