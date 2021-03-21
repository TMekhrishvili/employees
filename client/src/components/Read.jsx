import React, { useState, useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalStates'
import { userGet } from '../services/services'

const Read = () => {
    const [user, setUser] = useState({ id: 0, Firstname: '', Lastname: '' })
    const { userid } = useContext(GlobalContext)

    useEffect(() => {
        userGet(userid)
            .then(response => {
                setUser(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [userid])

    return (
        <>
            <p><strong>User N:</strong> {user.id}</p>
            <p><strong>Firstname:</strong> {user.Firstname}</p>
            <p><strong>Lastname:</strong> {user.Lastname}</p>
        </>
    )
}

export default Read
