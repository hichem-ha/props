import React from 'react';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';

function HandleName(props) {
  return (
    <div>
         <Alert  >
         {props.fullName}
        </Alert>
         
    </div>
  )
}

export default HandleName;