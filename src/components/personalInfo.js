import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const PersonalInfo = (props) => {

    const [validated, setValidated] = useState(false);
    const initialData = {
        FirstName: "",
        MiddleName: "",
        LastName: "",
        Dob: "",
        Gender: "",
        Marital: ""
    }
    const [personalData, setPersonalData] = useState(initialData);
    
    
    const [fname, setFname]=useState(false)
    const [mname, setMname]=useState(false)
    const [lname, setLname]=useState(false)

    const validateData=()=>{
        if(personalData.FirstName.length<3 || personalData.MiddleName.length<3 || personalData.LastName.length<3){
            if(personalData.FirstName.length<3){setFname(true)}else{setFname(false)}
            if(personalData.MiddleName.length<3){setMname(true)}else{setMname(false)}
            if(personalData.LastName.length<3){setLname(true)}else{setLname(false)}
        }
        else{
            return true
        }
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if(validateData()){
        if (form.checkValidity()) {

            props.setI(1)
            props.setFinalData(personalData)
        }       
        setValidated(true)
    }
    event.preventDefault();
    event.stopPropagation();
        

    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPersonalData({ ...personalData, [name]: value })
    }
    return (
        <>
            <Form noValidate validated={validated} onSubmit={handleSubmit} method='post'>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="FirstName">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            required
                            name="FirstName"
                            type="text"
                            placeholder="First name"
                            value={personalData.FirstName}
                            onChange={handleChange}
                            isInvalid={fname}
                        />
                        <Form.Control.Feedback type='invalid'>Please enter a valid firstname</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="MiddleName">
                        <Form.Label>Middle Name</Form.Label>
                        <Form.Control
                            required
                            name='MiddleName'
                            type="text"
                            placeholder="Middle name"
                            value={personalData.MiddleName}
                            onChange={handleChange}
                            isInvalid={mname}
                        />
                        <Form.Control.Feedback type='invalid'>Please enter a valid middlename</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="LastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            required
                            name='LastName'
                            type="text"
                            placeholder="Last name"
                            value={personalData.LastName}
                            onChange={handleChange}
                            isInvalid={lname}
                        />
                        <Form.Control.Feedback type='invalid'>Please enter a valid lastname</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="Dob">
                        <Form.Label>Date of birth</Form.Label>
                        <Form.Control
                            required
                            name='Dob'
                            type="date"
                            value={personalData.Dob}
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type='invalid'>Please enter date of birth</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="Gender">
                        <Form.Label>Gender</Form.Label>
                        <Form.Check
                            required
                            type='radio'
                            label='Male'
                            name='Gender'
                            value='Male'
                            onChange={handleChange}
                        />
                        <Form.Check
                            required
                            type='radio'
                            label='Female'
                            name='Gender'
                            value='Female'
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please choose your gender.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="Marital">
                        <Form.Label>Marital Status</Form.Label>
                        <Form.Check
                            required
                            type='radio'
                            label='Single'
                            value='Single'
                            name='Marital'
                            onChange={handleChange}
                        />
                        <Form.Check
                            required
                            type='radio'
                            label='Married'
                            value='Married'
                            name='Marital'
                            onChange={handleChange}
                        />
                        <Form.Check
                            required
                            type='radio'
                            label='Divorced'
                            value='Divorced'
                            name='Marital'
                            onChange={handleChange}
                        />
                        <Form.Check
                            required
                            type='radio'
                            label='Widowed'
                            value='Widowed'
                            name='Marital'
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please choose your marital status.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="12">
                        <Button type='submit' style={{ float: 'right' }}>Next</Button>
                    </Form.Group>
                </Row>
            </Form>
        </>
    )
}

export default PersonalInfo