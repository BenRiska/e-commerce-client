import React, {useContext} from 'react'
import "../styles/Entry/Entry.css"
import { useMutation } from '@apollo/react-hooks';

import {REGISTER_USER, LOGIN_USER} from "../utils/queries"

import { useLoginForm, useRegisterForm } from '../utils/hooks';
import { AuthContext } from '../context/auth';

function Entry(props) {

    const context = useContext(AuthContext);

    const { onLoginChange, onLoginSubmit, loginValues } = useLoginForm(loginUserCallback, {
        email: '',
        password: ''
      });

    const { onRegisterChange, onRegisterSubmit, registerValues } = useRegisterForm(registerUserCallback, {
        email: '',
        password: ''
      });

      const [loginUser] = useMutation(LOGIN_USER, {
        update(
          _,
          {
            data: { login: userData }
          }
        ) {
          context.login(userData);
          props.history.push('/');
        },
        onError(err) {
          console.log(err)
        },
        variables: loginValues
      });

      const [registerUser] = useMutation(REGISTER_USER, {
        update(
          _,
          {
            data: { register: userData }
          }
        ) {
          context.login(userData);
          props.history.push('/');
        },
        onError(err) {
            console.log(err)
        },
        variables: registerValues
      });

      function registerUserCallback() {
        registerUser()
      }

      function loginUserCallback()  {
        loginUser()
      }
    

    return (
        <div className="entry">
            <h1>My Account</h1>
            <div className="enter__forms">
                <div className="enter__forms-container">
                    <div className="enter__login">
                        <div className="enter__form-header">
                            <p>Login</p>
                        </div>
                        <label>
                        Email address<span>*</span>
                        </label>
                        <input
                         type="email"
                         name="email"
                         value={loginValues.email}
                         onChange={onLoginChange}
                         />
                        <label>
                        Password<span>*</span>
                        </label>
                        <input 
                        type="password"
                        name="password"
                        value={loginValues.password}
                        onChange={onLoginChange}
                        />
                        <button onClick={onLoginSubmit}>LOG IN</button>
                    </div>
                    <div className="enter__register">
                        <div className="enter__form-header">
                            <p>Register</p>
                        </div>
                        <label>
                        Email address<span>*</span>
                        </label>
                        <input 
                        type="email"
                        name="email"
                        value={registerValues.email}
                        onChange={onRegisterChange}
                        />
                        <label>
                        Password<span>*</span>
                        </label>
                        <input 
                        type="password"
                        name="password"
                        value={registerValues.password}
                        onChange={onRegisterChange}
                        />
                        <button onClick={onRegisterSubmit}>REGISTER</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Entry
