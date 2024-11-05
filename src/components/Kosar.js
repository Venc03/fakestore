import React, { useContext } from 'react'
import KosarElem from './KosarElem'
import { KosarContext } from '../context/KosarContext'

function Kosar() {
    const {kosarLista} = useContext(KosarContext)
    return (
      <>
        {
          kosarLista.map((elem, index) => {
              return(
                  <div className='row cols-1 row-cols-sm-2 row-cols-md-3 g-4' key = {index}>
                      <KosarElem elem = {elem} index = {index} />
                  </div>
              )
          })
        }
      </>
    )
}

export default Kosar
