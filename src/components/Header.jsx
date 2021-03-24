import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

const Header = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between" >
            <div className="container">
                <h1><Link to={'/'}>CRUD REACT, REDUX REST API & Axios</Link></h1>
                
                <Link to={"/productos/nuevo"}
                    className="btn btn-danger nuevo-post d-block d-md-inline-block"
                >Agregar &#43;</Link>

            </div>
        </nav>
    )
}

Header.propTypes = {

}

export default Header
