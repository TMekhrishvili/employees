import React from 'react'
import { GlobalProvider } from './context/GlobalStates'
import './index.css'
import UsersTable from './components/UsersTable'
import CrudButtons from './components/CrudButtons'

const App = () => {
  return (
    <GlobalProvider>
      <CrudButtons />
      <UsersTable />
    </GlobalProvider>
  )
}

export default App
