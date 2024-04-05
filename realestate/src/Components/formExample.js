import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FormLabel, FilledInput } from '@mui/material';
import Row from 'react-bootstrap/Row';
import Navbar from './navbar';

function FormExample() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
    <Form noValidate validated={validated} onSubmit={handleSubmit} style={{maxWidth: '500px', margin: '0 auto', padding: '20px',  borderRadius: '5px', backgroundColor: '#f9f9f9'}}>
      <Row className="mb-3">
       <div style={{marginRight:400}}>
       <FormLabel  >First Name</FormLabel>
       <FilledInput style={{width:500, height:50}}/>

       <FormLabel  >Last Name</FormLabel>
       <FilledInput style={{width:500, height:50}}/>

       <FormLabel  >Email</FormLabel>
       <FilledInput style={{width:500, height:50}}/>

       <FormLabel  >Message</FormLabel>
       <FilledInput style={{width:500, height:100}}/>
       </div>
      </Row>
      <br/>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
        <br/>
      </Form.Group>
      <Button type="submit" style={{padding:10, borderRadius:10, backgroundColor:'#BDE290', color:'black', fontWeight:'bold', borderColor:'white'}}>Submit form</Button>
    </Form>

<br/><br/>
    <Navbar/>
    </>
  );
}

export default FormExample;
