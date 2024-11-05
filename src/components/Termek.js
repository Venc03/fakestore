import React, { useContext } from 'react'
import { KosarContext } from '../context/KosarContext'

function Termek(props) {
    const { athelyez } = useContext(KosarContext)

    function kosarba(props){
        athelyez(props.elem)
    }


  return (
    <div className='card col-lg-3'>
        <div className='card-body d-flex align-items-start flex-column bd-highlight mb-3'>
            <h3 className='card-title mb-auto p-2 bd-highlight'>{props.elem.title}</h3>
            <p className='card-text mb-auto p-2 bd-highlight'>{props.elem.category}</p>
            <p className='card-text mb-auto p-2 bd-highlight'>{props.elem.rating.rate} / {props.elem.rating.count}</p>
            <img src={props.elem.image} className='card-img-top mb-auto p-2 bd-highlight'></img>
            <p className='card-text mb-auto p-2 bd-highlight'>{props.elem.description}</p>
        </div>
        <div className="container d-flex align-items-end flex-column bd-highlight mb-3">
            <div className="row">
                <div className="col">
                    <p className='card-text mt-auto p-2 bd-highlight'>{props.elem.price}</p>
                </div>
                <div className="col">
                    <button className='btn btn-dark mt-auto p-2 bd-highlight' onClick={kosarba}>Kosarba</button>
                </div>
            </div>
        </div>
    </div>
  )

}

export default Termek
