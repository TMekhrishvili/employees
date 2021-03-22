import React, { useState, useContext, useEffect, useRef } from 'react'
import { Form, Input, Button } from 'antd'
import { userSet, userGet, userUpdate } from '../services/services'
import { GlobalContext } from '../context/GlobalStates'

const CreateUpdate = () => {
    const [user, setuser] = useState({ firstname: null, lastname: null })
    const { userid, setresponse, setIsModalOpen } = useContext(GlobalContext)
    const ref = useRef(null)
    const onFinish = (values) => {
        if (userid > 0) {
            const data = { ...values, id: userid }
            userUpdate(data)
                .then(response => {
                    setresponse(response)
                    setIsModalOpen(false)
                })
                .catch(error => {
                    console.log(error)
                })
        } else {
            userSet(values)
                .then(response => {
                    setresponse(response)
                    setIsModalOpen(false)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo)
    }

    useEffect(() => {
        if (userid > 0) {
            userGet(userid)
                .then(response => {
                    const userData = { id: response.data.id, firstname: response.data.Firstname, lastname: response.data.Lastname }
                    setuser(userData)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }, [userid])

    useEffect(() => {

        if (ref.current) {
            if (userid === 0) {
                ref.current.setFieldsValue({ firstname: "", lastname: "" })
            } else {
                ref.current.setFieldsValue(user)
            }
        }
    }, [user, userid])

    return (
        <Form
            ref={ref}
            name="basic"
            style={{ display: 'flex', flexDirection: 'column' }}
            initialValues={{
                firstname: user.firstname,
                lastname: user.lastname
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                name="firstname"
                rules={[
                    {
                        required: true,
                        message: 'Please input your firstname!',
                    },
                ]}
            >
                <Input type="text" placeholder="Firstname" />
            </Form.Item>

            <Form.Item
                name="lastname"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Lastname!',
                    },
                ]}
            >
                <Input type="text" placeholder="Lastname" />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    SAVE
                </Button>
            </Form.Item>
        </Form>
    );
}

export default CreateUpdate
