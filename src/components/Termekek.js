import React, { useContext } from 'react'
import Termek from './Termek'
import { ApiContext } from '../context/ApiContext'

function Termekek() {
    const {termekLista} = useContext(ApiContext)
  return (
    <>
    <div className='row g-4'>
      {
        termekLista.map((elem, index) => {
            
            return(
                    <Termek elem = {elem} key = {index} index = {index} />
            )
        })
      }
      </div>
    </>
  )
}

export default Termekek
