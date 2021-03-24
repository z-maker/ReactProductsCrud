import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR
} from '../types'

// cada reducer tiene su state
const initialState = {
    productos:[],
    error:null,
    loading:false
}

export default function(state = initialState, action){
    switch(action.type){
        case COMENZAR_DESCARGA_PRODUCTOS:
        case AGREGAR_PRODUCTO: 
        return {
            ...state,
            loading: action.payload
        }
        case AGREGAR_PRODUCTO_EXITO:
        return {
            ...state,
            loading:false,
            productos: [...state.productos, action.payload]
        }
        case DESCARGA_PRODUCTOS_ERROR:
        case AGREGAR_PRODUCTO_ERROR:
        return {
            ...state,
            loading:false,
            error:action.payload
        }
        case DESCARGA_PRODUCTOS_EXITO:
        return {
            ...state,
            loading:false,
            error: false,
            productos:action.payload
        }
        
        default:
            return state
    }
}