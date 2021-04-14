import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR,
    PRODUCTO_ELIMINADO_ERROR,
    PRODUCTO_ELIMINADO_EXITO,
    OBTENER_PRODUCTO_ELIMINAR,
    OBTENER_PRODUCTO_EDITAR,
    COMENZAR_EDICION,
    PRODUCTO_EDITADO_ERROR,
    PRODUCTO_EDITADO_EXITO
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

export function borrarProductoAction(id){
    return async (dispatch) => {
        dispatch(obtenerProductoEliminar(id))

        try {
            await AxiosClent.delete(`/productos/${id}`)
            dispatch(eliminarProductoExito())
            Swal.fire(
                "Deleted!",
                "Your product has been pulverized",
                "success"
            )
        } catch (error) {
            dispatch(eliminarProductoError())
        }
    }
}

const obtenerProductoEliminar = id => ({
    type: OBTENER_PRODUCTO_ELIMINAR,
    payload: id
})

const eliminarProductoExito = () => ({
    type: PRODUCTO_ELIMINADO_EXITO,
})

const eliminarProductoError = () => ({
    type: PRODUCTO_ELIMINADO_ERROR,
    payload: true
})


export function setProductToEditAction (product){
    return async (dispatch) => {
        dispatch(setProductToEdit(product))
    }
}

const setProductToEdit = product => ({
    type:OBTENER_PRODUCTO_EDITAR,
    payload:product
})


export function editProductAction(product){
    return async (dispatch) => {
        dispatch(editProduct())

        try {
            const res = await AxiosClent.put(`/productos/${product.id}`, product)
            dispatch(ProductoEditadoExito(res.data))
        } catch (error) {
            dispatch(ProductoEditadoError())
        }
    }
}

const editProduct = () => ({
    type: COMENZAR_EDICION,
})

const ProductoEditadoExito = (producto) => ({
    type: PRODUCTO_EDITADO_EXITO,
    payload:producto
})

const ProductoEditadoError = () => ({
    type: PRODUCTO_EDITADO_ERROR,
    payload: true
})