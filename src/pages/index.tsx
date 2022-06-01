import React, {useEffect} from 'react'
import {useWeb3Modal} from '../web3/Web3ModalContext'
import { Button } from '@chakra-ui/react'
export const Home =()=>{
  const {connect, disconnect, isConnected, isLoading, address, error, user} =
  useWeb3Modal()

const handleConnect = async () => {
  await connect()
}

const handleLogout = () => {
  disconnect()
}

useEffect(() => {
  if (error) {
    alert(String(error))
  }
}, [error])

if (isLoading) {
  return <>Loading...</>
}

if (isConnected) {
  return (
    <>
      <div>Connected to {address}</div>
      <button onClick={handleLogout}>Logout</button>
    </>
  )
}

return <Button onClick={handleConnect}>Connect</Button>
}


export default Home
