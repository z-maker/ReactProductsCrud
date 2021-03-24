import React, { Fragment, useEffect } from 'react';

import {useSelector, useDispatch} from 'react-redux'
import {obtenerProductosAction} from '../actions/productoActions'

import Producto from './Producto'

const Productos = props => {

    const dispatch = useDispatch()

    useEffect(() => {
        
        const cargarProductos = () => dispatch( obtenerProductosAction() )
        cargarProductos()
        
    }, [])

    //obtener state
    const productos = useSelector(state => state.productos.productos)




    return (
        <Fragment>
           <h2 className="text-center my-5">Listado de Productos</h2>
 

           <table className="table table-striped">
               <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>
               </thead>
               <tbody>
                    {productos.length === 0 ? 'No hay productos' : (
                        productos.map(producto => (
                            <Producto producto={producto} />
                        ))
                    )}
               </tbody>
           </table>
       </Fragment>
    )
}

Productos.propTypes = {

}

export default Productos
