import React from "react";
import { Form, Button, Checkbox, Input, InputNumber } from "antd";
const { TextArea } = Input;

const Shipment = () => {
     return (
          <>
          <h1>Shipment</h1>
          <Form
          autoComplete="off"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
          onFinish={(values) => {
            console.log({ values });
          }}
          onFinishFailed={(error) => {
            console.log({ error });
          }}
        >
          <Form.Item
            name="sourceLocation"
            label="Source Location"
            rules={[
              {
                required: true,
                message: "Please enter source location",
              },
              { whitespace: true },
              { min: 3 },
            ]}
            hasFeedback
          >
          <Input placeholder="Type source location" />
          </Form.Item>
          <Form.Item
            name="targetLocation"
            label="Target Location"
            rules={[
              {
                required: true,
                message: "Please enter target location",
              },
              { whitespace: true },
              { min: 3 },
            ]}
            hasFeedback
          >
          <Input placeholder="Type target location" />
          </Form.Item>
                    
          <Form.Item
            name="customerId"
            label="Customer Id"
            rules={[
              {
                required: true,
                message: "Please enter customer ID",
              },
            ]}
            hasFeedback
          >
          <InputNumber maxLength={6}/>
          </Form.Item>
                    
          <Form.Item
            name="hsnCode"
            label="HSN Code"
            rules={[
              {
                required: true,
                message: "Please enter HSN Code",
              },
            ]}
            hasFeedback
          >
          <InputNumber/>
          </Form.Item>

          <Form.Item
            name="productWeight"
            label="Product Weight"
            rules={[
              {
                required: true,
                message: "Please enter product weight (in kgs)",
              },
            ]}
            hasFeedback
          >
          <InputNumber placeholder="in (kgs)"/>
          </Form.Item>

          <Form.Item
            name="containerType"
            label="Container Type"
            rules={[
              {
                message: "Please enter type of container you prefer",
              },
            ]}
            hasFeedback
          >
          <Input/>
          </Form.Item>
          
          <Form.Item label="Phone Number"
           rules={[
               {
                 required: true,
                 message:"Please enter phone number"
               }
           ]}>
                         
          <Input maxLength={10} style={{ width: '100%' }} />
          </Form.Item>  
          <Form.Item label="Precautions"
           rules={[
               {
                 required: true,
                 message:"Please enter phone number"
               }
           ]}>
                         
          <TextArea allowClear placeholder="add if any extra precautions needed fot shipment"/>
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
                        "To proceed, you need to agree terms and conditions"
                      ),
              },
            ]}
          >
          <Checkbox>
              Agree to <a href="/">terms & conditions</a>
          </Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ span: 24 }}>
          <Button block type="primary" htmlType="submit">
              Create Shipment
          </Button>
          </Form.Item>
          </Form>
          </>
  )
};

export default Shipment;
