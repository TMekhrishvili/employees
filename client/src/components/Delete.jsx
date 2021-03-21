import React, { useContext } from 'react'
import { Button } from 'antd'
import { GlobalContext } from '../context/GlobalStates'
import { userDelete } from '../services/services'

const Delete = () => {

    const { userid, setuserid, setIsModalOpen, setresponse } = useContext(GlobalContext)

    const handleClick = () => {
        userDelete(userid)
            .then(response => {
                setresponse(response)
            })
            .catch(error => {
                console.log(error)
            })
        setIsModalOpen(false)
        setuserid(0)
    }

    return (
        <div className="delete-form">
            <p>Do you really want to delete selected user?</p>
            <div className="delete-footer-buttons">
                <Button type="primary" onClick={handleClick}>Yes</Button>
                <Button onClick={() => setIsModalOpen(false)}>No</Button>
            </div>
        </div>
    )
}

export default Delete
