import React, { Component } from 'react'
import Listado from './Listado'

class Operacion extends Component {


    render() {
        return (
            <div>
                
                {
                
                this.props.buscar === "" && this.props.filtro === "Todos" ? <Listado encontrados={this.props.resultado.map((elemento, index) => {
                    return <tr><th key={index} elemento={elemento}>{elemento.codigo}</th>
                        <td key={index} elemento={elemento}>{elemento.alumno}</td>
                        <td key={index} elemento={elemento}>{elemento.definitiva}</td>
                    </tr>
                })} /> 
                
                : this.props.buscar !== "" && this.props.filtro === "Todos"? <Listado encontrados={this.props.resultado.filter(busVec => busVec.codigo === this.props.buscar).map((elemento, index) => {
                    return <tr><th key={index} elemento={elemento}>{elemento.codigo}</th>
                        <td key={index} elemento={elemento}>{elemento.alumno}</td>
                        <td key={index} elemento={elemento}>{elemento.definitiva}</td>
                    </tr>
                })} /> 

                : this.props.buscar !== "" && this.props.filtro === "Ganaron" ? <Listado encontrados={this.props.resultado.filter(busVec => busVec.codigo === this.props.buscar && busVec.codigo >=3).map((elemento, index) => {
                    return <tr><th key={index} elemento={elemento}>{elemento.codigo}</th>
                        <td key={index} elemento={elemento}>{elemento.alumno}</td>
                        <td key={index} elemento={elemento}>{elemento.definitiva}</td>
                    </tr>
                })} /> 

                : this.props.buscar !== "" && this.props.filtro === "Perdieron" ? <Listado encontrados={this.props.resultado.filter(busVec => busVec.codigo === this.props.buscar && busVec.codigo <3).map((elemento, index) => {
                    return <tr><th key={index} elemento={elemento}>{elemento.codigo}</th>
                        <td key={index} elemento={elemento}>{elemento.alumno}</td>
                        <td key={index} elemento={elemento}>{elemento.definitiva}</td>
                    </tr>
                })} /> 

                : this.props.filtro === "Perdieron" && this.props.buscar === ""? <Listado encontrados={this.props.resultado.filter(busVec => busVec.definitiva < 3).map((elemento, index) => {
                    return <tr><th key={index} elemento={elemento}>{elemento.codigo}</th>
                        <td key={index} elemento={elemento}>{elemento.alumno}</td>
                        <td key={index} elemento={elemento}>{elemento.definitiva}</td>
                    </tr>
                })}/>
                    :this.props.filtro === "Ganaron" && this.props.buscar === ""? <Listado encontrados={this.props.resultado.filter(busVec => busVec.definitiva >= 3).map((elemento, index) => {
                        return <tr><th key={index} elemento={elemento}>{elemento.codigo}</th>
                            <td key={index} elemento={elemento}>{elemento.alumno}</td>
                            <td key={index} elemento={elemento}>{elemento.definitiva}</td>
                        </tr>
                    })}/>
                    : <Listado encontrados={this.props.resultado.map((elemento, index) => {
                        return <tr><th key={index} elemento={elemento}>{elemento.codigo}</th>
                            <td key={index} elemento={elemento}>{elemento.alumno}</td>
                            <td key={index} elemento={elemento}>{elemento.definitiva}</td>
                        </tr>})}/>
                }
            </div>
        )
    }
}

export default Operacion