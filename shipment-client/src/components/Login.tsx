import React from "react";
import './Login.css';
import { Form, Button, Input } from "antd";
import {Link} from 'react-router-dom';

const Login = () => {
     return (
          <>
               <h1>Log in form</h1>
                <Form className="login-form">
                        <label>Email</label>
                    <Form.Item
                         rules={[
                              {
                                   type: 'email',
                                   message: 'The input is not valid E-mail!',
                                    },
                                    {
                                   required: true,
                                   message: 'Please input your E-mail!',
                                    },
                                ]}>
                        </Form.Item>
                        <label>Password</label>
                        <a href="/" className={"link"}>Forgot Password?</a>
                    <Form.Item
                         rules={[{required: true, message: 'Please input your Password!'}]}>    
                         <Input
                         className={"input-box"}
                         type="password"
                         placeholder="Password"
                         />,
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button button">
                                Log in
                            </Button>
                        </Form.Item>
               </Form>
               <footer>Don't have an account?<Link to="./Signup.tsx">Signup</Link></footer>
          </>
  )

};

export default Login;
