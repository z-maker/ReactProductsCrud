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
    const error = useSelector(state => state.productos.error)
    const loading = useSelector(state => state.productos.loading)



    return (
        <Fragment>
           <h2 className="text-center my-5">Listado de Productos</h2>

            {
                error && 
                <p className="font-weight-bold alert alert-danger text-center">
                    Some was wrong
                </p>
            }

            { loading && 
                <p className="text-center">
                    Loading...
                </p>
            }

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
                            <Producto key={producto.id} producto={producto} />
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
