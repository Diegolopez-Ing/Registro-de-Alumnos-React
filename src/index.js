import React from 'react';
import ReactDOM from 'react-dom';


//import Main from './components/Main';
import Registro from './components/Registro';
import Foot from './components/Foot';


ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <div className="col-md-12">
        <div className="row">

          <Foot />
          
        </div>

        <div className="row">
          <Registro />
        </div>
      </div>



    </div>


  </React.StrictMode>,
  document.getElementById('root')
);


