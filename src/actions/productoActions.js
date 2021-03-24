import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR
} from '../types'

import AxiosClent from '../config/axios'

import Swal from 'sweetalert2'

export function crearNuevoProductoAction(producto){
    return async (dispatch) => {
        dispatch( agregarProducto());

        try {
            //insertar en la API

            await AxiosClent.post('/productos',producto)

            // si todo se inserto actualizar el estado
            dispatch( agregarProductoExito(producto))

            Swal.fire(
                'Correcto',
                'El producto se agrego',
                'success'
            )

        } catch (error) {
            console.log(error)
            dispatch (agregarProductoError(true))
            Swal.fire(
                'Error',
                'Hubo un error',
                'error'
            )
        }
    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
})


// si se agrego el producto a la base de datos
const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})

//si hubo un error
const agregarProductoError = estado => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
})


export function obtenerProductosAction() {
    return async (dispatch) => {
        dispatch(descargarProductos())

        try {
            const respuesta = await AxiosClent.get('/productos');
            dispatch(descargarProductosExitosa(respuesta.data))
        } catch (error) {
            dispatch ( descargarProductosError())
        }

    }
}

const descargarProductos = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
})

const descargarProductosExitosa = productos => ({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos
})

const descargarProductosError = () => ({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: true
})