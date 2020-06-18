import React, { PureComponent } from 'react'
import Operacion from './Operacion';

class Buscar extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
            buscar: '',            
            selectedOption: 'Todos',
            resultBus2: this.props.resultBus

        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.cambioRadio = this.cambioRadio.bind(this);
        

    }
    
          
    cambioRadio(event)
    {
        this.setState({selectedOption: event.target.id
        });
    }  

    handleChange(event) {
        this.setState({ buscar: event.target.value });
    }

    handleSubmit(event) {

        event.preventDefault();
        this.setState({ resultBus2: this.props.resultBus })
    }

    render() {
        return (
            <div className="row" on={this.handleChange}>
                <div className="col-md-12">
                    <div className="jumbotron">

                        <div className="row justify-content-center">

                     
                                <div className="card-body row no-gutters align-items-center">
                                    <div className="col-auto">
                                    <i className="fas fa-search" aria-hidden="true"></i>
                                    </div>

                                    <div className="col">
                                        <input name="buscar" onChange={this.handleChange}  className="form-control form-control-lg form-control-borderless" type="search" placeholder="Ingrese el código" />
                                    </div>

                                    

                                </div>
                           
                        </div>

                        <div className="row justify-content-center">
                            <div class="form-check form-check-inline">

                                <input className="form-check-input" 
                                    onClick={this.cambioRadio} 
                                    type="radio" name="inlineRadioOptions" id="Ganaron" value="Ganaron"/>
                                <label clclassNameass="form-check-label" for="inlineRadio1">Ganaron</label>
                            </div>

                            <div className="form-check form-check-inline">
                                <input className="form-check-input" 
                                 onClick={this.cambioRadio} 
                                type="radio" name="inlineRadioOptions" id="Perdieron" value="Perdieron"/>
                                <label className="form-check-label" for="inlineRadio2">Perdieron</label>
                            </div>

                            <div className="form-check form-check-inline">
                                <input  
                                className="form-check-input"  onClick={this.cambioRadio} 
                                type="radio" name="inlineRadioOptions" id="Todos" value="Todos" />
                                <label className="form-check-label" for="inlineRadio3">Todos</label>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="col-md-12">

                   <Operacion onChange={this.handleChange} buscar={this.state.buscar} resultado={this.state.resultBus2} filtro={this.state.selectedOption}/>
                   
                </div>

            </div>



        )
    }
}

export default Buscar