import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';


//ACtions
import { editProductAction } from '../actions/productoActions';

const ProductoEditar = ({history}) => {

    // state del componente
    

    const productoEdit = useSelector(state => state.productos.product_edit)

    const [product, setproduct] = useState(productoEdit)
    
    useEffect(() => {
        setproduct(productoEdit)
    }, [productoEdit])

    //usar useDispatch, crea una funcion
    const dispatch = useDispatch()

    //acceder al sate del store
    const loading = useSelector(state=> state.productos.loading )
    const error = useSelector(state=> state.productos.error )
        

    const submitEditarProducto = e => {
        e.preventDefault()

        if (product.nombre.trim() === '' || product.precio <= 0) {
            return;
        }

        // crear el nuevo producto
        dispatch(editProductAction(product))

        history.push('/');
    }

    const onFormChange = e => {
        setproduct({
            ...product,
            [e.target.name]:e.target.value
        })
    }

    const {nombre, precio} = product

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar Producto
                        </h2>

                        <form
                            onSubmit={submitEditarProducto}
                        >
                            <div className="form-group">
                                <label>Nombre Producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Producto"
                                    name="nombre"
                                    value={nombre}
                                    onChange={onFormChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>Precio Producto</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio Producto"
                                    name="precio"
                                    value={precio}
                                    onChange={onFormChange}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >Guardar</button>
                        </form>

                        {loading ? <p>Cargando...</p> : null }
                        {error ? <p className="alert alert-danger p2 mt-4 text-center" >Error</p> : null}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductoEditar
