import React, { useState } from "react";
import { Form, Button, Input, Checkbox } from "antd";
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

     const [formData, setFormData] = useState({
          userName: "",
          password: ""
     })
     const [ loading, setLoading ] = useState(false)

     
     const handleSubmit = async () => {
          setLoading(true)
          try {
               const isValidUser = axios.post('', formData)
          } catch (error) {
               
          }
     }

     const handleInput = (e: any) => {
          setFormData({...formData, [e.target.name]: e.target.value})
     }

     return (
          <>
               <h1>Login Form</h1>
         <Form className="login-form"
                   autoComplete="off"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
          onFinish={(values) => {
          console.log({ values });
          }}
          onFinishFailed={(error) => {
            console.log({ error });
          }}>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: "Please enter your email",
              },
              { type: "email", message: "Please enter a valid email" },
            ]}
            hasFeedback
          >
          <Input placeholder="Type your email" />
          </Form.Item>
          
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
              },
              { min: 6 },
              {
                validator: (_, value) =>
                  value && value.includes("A")
                    ? Promise.resolve()
                    : Promise.reject("Password does not match criteria."),
              },
            ]}
            hasFeedback
          >
          <Input.Password placeholder="Type your password" />
          </Form.Item>

          <Form.Item
            name="confirm password"
            label="Confirm Password"
            dependencies={["password"]}
            rules={[
              {
                required: true,
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    "Passwords does not match, Try again!"
                  );
                },
              }),
            ]}
            hasFeedback
          >
          <Input.Password placeholder="Confirm your password" />
           </Form.Item>
           
                     <Form.Item
            name="agreement"
            wrapperCol={{ span: 24 }}
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                        "To proceed, you need to agree with our terms and conditions"
                      ),
              },
            ]}
          >
          <Checkbox>
              Agree to <a href="#">terms & conditions</a>
             </Checkbox>
              <Link to="/signup"> create new account</Link>
          </Form.Item>

          <Form.Item wrapperCol={{ span: 24 }}>
            <Button block type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
          </Form> 
          </>
  )

};

export default Login;