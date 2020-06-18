import React, { Component } from 'react'
import Buscar from './Buscar';




class Registro extends Component {
    constructor(props) {
        super(props)

        this.state = {

            codigo: '',
            alumno: '',
            parcial: 0,
            final: 0,
            seguimiento: 0,
            definitiva: 0,

            formu: []


        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {

        this.setState({ [event.target.name]: event.target.value });

        const promedio = ((parseInt(this.state.parcial) * 0.25 + parseInt(this.state.final) * 0.25 + parseInt(this.state.seguimiento) * 0.50))
        this.setState({ definitiva: promedio });
    }



    handleSubmit(event) {
        event.preventDefault();
        const registrar = this.state.formu.find(formu => formu.codigo === this.state.codigo)

        if (registrar === undefined) {

            const promedio = ((parseInt(this.state.parcial) + parseInt(this.state.final)) / 2)
            this.setState({ definitiva: promedio });

            const lista =
            {
                codigo: this.state.codigo,
                alumno: this.state.alumno,
                definitiva: this.state.definitiva

            }
            const vec = this.state.formu;
            vec.unshift(lista);
            this.setState({
                formu: vec
            });


        } else {

            alert("El alumno ya existe en la lista")
        }

}


    render() {


        return (
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group row">
                                <label for="inputEmail3" className="col-sm-2 col-form-label">Codigo</label>
                                <div className="col-sm-10">
                                    <input type="text" name="codigo" value={this.state.codigo} onChange={this.handleChange} className="form-control" id="inputEmail3" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="inputPassword3" className="col-sm-2 col-form-label">Alumno</label>
                                <div className="col-sm-10">
                                    <input type="text" name="alumno" value={this.state.alumno} onChange={this.handleChange} className="form-control" id="inputPassword3" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="inputPassword3" className="col-sm-2 col-form-label">Parcial</label>
                                <div className="col-sm-10">
                                    <input type="number" min="0" max="5" name="parcial" value={this.state.parcial} onChange={this.handleChange} className="form-control" id="inputPassword3" aria-disabled />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="inputPassword3" className="col-sm-2 col-form-label">Final</label>
                                <div className="col-sm-10">
                                    <input type="number" min="0" max="5" name="final" value={this.state.final} onChange={this.handleChange} className="form-control" id="inputPassword3" aria-disabled />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="inputPassword3" className="col-sm-2 col-form-label">Seguimiento</label>
                                <div className="col-sm-10">
                                    <input type="number" min="0" max="5" name="seguimiento" value={this.state.seguimiento} onChange={this.handleChange} className="form-control" id="inputPassword3" aria-disabled />
                                </div>
                            </div>
                            <hr className="mb-2" />

                            <div className="form-group row">
                                <label for="inputPassword3" className="col-sm-2 col-form-label">Definitiva</label>
                                <div className="col-sm-10">
                                    <input type="number" value={this.state.definitiva} onChange={this.handleChange} className="form-control" id="inputPassword3" disabled />
                                </div>
                            </div>

                            <div className="form-group row">
                                <div className="col-sm-10">
                                  <center> <button type="submit" onMouseOver={this.handleChange}  className="btn btn-primary">GUARDAR</button></center> 
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="col-md-6">
                        <Buscar  onChange={this.handleChange} resultBus={this.state.formu} />
                    </div>

                </div>
            </div>
        )
    }
}

export default Registro