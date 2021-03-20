import React, { useState, useEffect } from 'react'
import { Table } from 'antd'
import './index.css'
import { userSet, fetchUsers } from './services'

const columns = [
  {
    title: 'ნომერი N',
    dataIndex: 'id',
  },
  {
    title: 'სახელი',
    dataIndex: 'Firstname',
  },
  {
    title: 'გვარი',
    dataIndex: 'Lastname',
  },
]


const App = () => {
  // states
  const [input, setinput] = useState({ firstname: '', lastname: '' })
  const [userid, setuserid] = useState(0)
  const [userslist, setuserslist] = useState([])

  // useeffect
  useEffect(() => {
    fetchUsers()
      .then(response => {
        // add 'key'
        setuserslist(response.data.map(value => ({ ...value, key: value.id })))
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  // functions
  const handleChange = e => {
    setinput({ ...input, [e.target.name]: e.target.value })
  }

  const handleClick = e => {
    e.preventDefault()
    userSet(input)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }
  console.log(userid)
  return (
    <div className="main">
      <h1>Some Form:</h1>
      <form>
        <input type="text" name="firstname" placeholder="Firstname" onChange={handleChange} />
        <input type="text" name="lastname" placeholder="Lastname" onChange={handleChange} />
        <button type="submit" onClick={handleClick}>Send</button>
      </form>
      <br />
      <br />
      <Table
        columns={columns}
        dataSource={userslist}
        pagination={false}
        size="middle"
        rowSelection={{
          type: 'radio',
          onChange: (selectedRowKeys) => {
            setuserid(selectedRowKeys)
          }
        }}
      />
    </div>
  )
}

export default App
