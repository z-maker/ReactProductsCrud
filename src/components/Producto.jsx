import React from 'react'
import PropTypes from 'prop-types'

const Producto = ({producto}) => {
    const {nombre, precio, id} = producto
    return (
        <tr>
            <td>{nombre}</td>
            <td><span className="font-weight-bold"> $ {precio} </span></td>
            <td className="acciones">
                <button 
                    type="button"
                    className="btn btn-primary mr-2">
                    Editar
                </button>
                <button 
                    type="button"
                    className="btn btn-danger"
                    
                >Eliminar </button>
            </td>
        </tr>
    )
}

Producto.propTypes = {

}

export default Producto
