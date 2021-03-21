import React, { useState, useEffect, useContext } from 'react'
import { Table } from 'antd'
import { GlobalContext } from '../context/GlobalStates'
import { fetchUsers } from '../services/services'

const columns = [
    {
        title: 'User N',
        dataIndex: 'id',
    },
    {
        title: 'Firstname',
        dataIndex: 'Firstname',
    },
    {
        title: 'Lastname',
        dataIndex: 'Lastname',
    },
]

const UsersTable = () => {
    const [userslist, setuserslist] = useState([])
    const {
        response,
        setuserid
    } = useContext(GlobalContext)

    // useEffect
    useEffect(() => {
        fetchUsers()
            .then(response => {
                // add 'key'
                setuserslist(response.data.map(value => ({ ...value, key: value.id })))
            })
            .catch(error => {
                console.log(error)
            })
    }, [response])
    return (
        <Table
            columns={columns}
            dataSource={userslist}
            size="small"
            rowSelection={{
                type: 'radio',
                onChange: (selectedRowKeys) => {
                    setuserid(selectedRowKeys)
                }
            }}
        />
    )
}

export default UsersTable
