import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
    const [response, setresponse] = useState('')
    const [userid, setuserid] = useState(0)
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <GlobalContext.Provider
            value={{
                response,
                setresponse,
                userid,
                setuserid,
                isModalOpen,
                setIsModalOpen,
            }}>
            { props.children}
        </GlobalContext.Provider>
    )
}