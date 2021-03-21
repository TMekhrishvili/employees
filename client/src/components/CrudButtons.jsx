import React, { useState, useContext } from 'react'
import { Button } from 'antd'
import GeneralModalForm from './GeneralModalForm'
import CreateUpdate from './CreateUpdate'
import Read from './Read'
import { GlobalContext } from '../context/GlobalStates'
import Delete from './Delete'
import Notification from './Notification'

const CrudButtons = () => {
    const [type, settype] = useState('CREATE')
    const { userid, setuserid, setIsModalOpen } = useContext(GlobalContext)

    const childForModal = type => {
        if (type === 'CREATE' || type === 'UPDATE') return <CreateUpdate />
        else if (type === 'READ') return <Read />
        else if (type === 'DELETE') return <Delete />
        else if (type === 'NOTIFICATION') return <Notification />
    }

    return (
        <div className="main">
            <GeneralModalForm>
                {childForModal(type)}
            </GeneralModalForm>

            <Button
                type="primary"
                onClick={() => {
                    setIsModalOpen(true)
                    setuserid(0)
                    settype('CREATE')
                }}
            >
                Create
            </Button>

            <Button
                onClick={() => {
                    setIsModalOpen(true)
                    if (userid > 0) settype('READ')
                    else settype('NOTIFICATION')
                }}
            >
                Read
            </Button>

            <Button
                onClick={() => {
                    setIsModalOpen(true)
                    if (userid > 0) settype('UPDATE')
                    else settype('NOTIFICATION')
                }}
            >
                Update
            </Button>

            <Button
                onClick={() => {
                    setIsModalOpen(true)
                    if (userid > 0) settype('DELETE')
                    else settype('NOTIFICATION')
                }}
                danger
            >
                Delete
            </Button>
        </div>
    )
}

export default CrudButtons
