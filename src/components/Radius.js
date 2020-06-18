import React, { Component } from 'react'

class Radius extends Component {
  

    render() {
        return (
            <div>
                <div className="row justify-content-center">
                            <div class="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                <label clclassNameass="form-check-label" for="inlineRadio1">Ganaron</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                <label className="form-check-label" for="inlineRadio2">Perdieron</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" checked="true" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                                <label className="form-check-label" for="inlineRadio3">Todos</label>
                            </div>
                        </div>
            </div>
        )
    }
}

export default Radius