import React from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

import Swal from 'sweetalert2'

//Redux
import { useDispatch } from 'react-redux'
import { borrarProductoAction, setProductToEditAction } from '../actions/productoActions'

const Producto = ({producto}) => {
    
    const {nombre, precio, id} = producto

    const dispatch = useDispatch()
    const history = useHistory()

    const confirmDelete = id => {

        Swal.fire({
            title:"Are you sure to delete?",
            text:"You won't be able to revert this",
            icon:"warning",
            showCancelButton:true,
            cancelButtonColor:"#F7582A",
            confirmButtonColor:"#5EB69D",
            confirmButtonText:"Just do it!"
        }).then((result)=>{
            if(result.value){
                dispatch(borrarProductoAction(id))
            }
        })


        
    }

    const  redirectToEdit = producto => {
        dispatch(setProductToEditAction(producto))
        history.push(`/productos/editar/${producto.id}`)
    }

    return (
        <tr>
            <td><span>{nombre}</span></td>
            <td><span className="font-weight-bold"> $ {precio} </span></td>
            <td className="acciones">
                <button 
                    onClick={()=>redirectToEdit(producto)}
                    type="button"
                    className="btn btn-primary mr-2">
                    Editar
                </button>
                <button
                    onClick={() => confirmDelete(id)} 
                    type="button"
                    className="btn btn-danger"
                    
                >Eliminar </button>
            </td>
        </tr>
    )
}

export default Producto
