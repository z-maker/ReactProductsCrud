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
  PRODUCTO_EDITADO_EXITO,
} from "../types";

// cada reducer tiene su state
const initialState = {
  productos: [],
  error: null,
  loading: false,
  product_delete: null,
  product_edit: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case COMENZAR_DESCARGA_PRODUCTOS:
    case AGREGAR_PRODUCTO:
      return {
        ...state,
        loading: action.payload,
      };
    case AGREGAR_PRODUCTO_EXITO:
      return {
        ...state,
        loading: false,
        productos: [...state.productos, action.payload],
      };
    case DESCARGA_PRODUCTOS_ERROR:
    case AGREGAR_PRODUCTO_ERROR:
    case PRODUCTO_ELIMINADO_ERROR:
    case PRODUCTO_EDITADO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DESCARGA_PRODUCTOS_EXITO:
      return {
        ...state,
        loading: false,
        error: false,
        productos: action.payload,
      };
    case PRODUCTO_ELIMINADO_EXITO:
      return {
        ...state,
        productos: state.productos.filter((p) => p.id !== state.product_delete),
        product_delete: null,
      };
    case OBTENER_PRODUCTO_ELIMINAR:
      return {
        ...state,
        product_delete: action.payload,
      };
    case OBTENER_PRODUCTO_EDITAR:
      return {
        ...state,
        product_edit: action.payload,
      };
    case PRODUCTO_EDITADO_EXITO:
      return {
        ...state,
        product_edit: action.payload,
        productos: state.productos.map((product) =>
          product.id === action.payload.id
            ? (product = action.payload)
            : product
        ),
      };
    default:
      return state;
  }
}
