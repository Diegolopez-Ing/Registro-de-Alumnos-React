import React, { Component } from 'react';
//import PropTypes from 'prop-types'

class Listado extends Component {
    render() {
        return (

           
                <div className="row" >
                    <table class="table" >
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">CODIGO</th>
                                <th scope="col">ALUMNO</th>
                                <th scope="col">DEFINITIVA</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.encontrados}
                        </tbody>
                    </table>
                </div>
           

        );
    }
}

export default Listado;