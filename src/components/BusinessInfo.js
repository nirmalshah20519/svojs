import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const BusinessInfo = (props) => {

    const [validated, setValidated] = useState(false);
    const initialData = {
        Business: "",
        BusinessName: "",
        Aadhar: "",
        isMediclaim: ""
    }
    const [businessData, setBusinessData] = useState(initialData);

    const [aadhar, setAadhar]=useState(false)

    const validateData=()=>{
        if(businessData.Aadhar.length!==12 || isNaN(businessData.Aadhar)){
            setAadhar(true)
        }
        else{
            setAadhar(false)
            return true
        }
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;

        if(validateData()){
            if (form.checkValidity()) {
                props.setI(3)
                props.setFinalData(businessData)
            }        
            setValidated(true)
        }
        event.preventDefault();
        event.stopPropagation();

    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBusinessData({ ...businessData, [name]: value })
    }

    const handlePrev = () => {
        props.setI(1)
    }
    return (
        <>
            <Form noValidate validated={validated} onSubmit={handleSubmit} method='post'>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="Business">
                        <Form.Label>Business</Form.Label>
                        <Form.Check
                            required
                            type='radio'
                            label='Trade'
                            value='Trade'
                            name='Business'
                            onChange={handleChange}
                        />
                        <Form.Check
                            required
                            type='radio'
                            label='Job'
                            value='Job'
                            name='Business'
                            onChange={handleChange}
                        />
                        <Form.Check
                            required
                            type='radio'
                            label='Form'
                            value='Form'
                            name='Business'
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please choose your Business.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3">
                        <Form.Label>Business Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="BusinessName"
                            placeholder="Business Name"
                            value={businessData.BusinessName}
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter a valid business name.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="Business">
                        <Form.Label>Do you have a mediclaim policy?</Form.Label>
                        <Form.Check
                            required
                            type='radio'
                            label='Yes'
                            value='Yes'
                            name='isMediclaim'
                            onChange={handleChange}
                        />
                        <Form.Check
                            required
                            type='radio'
                            label='No'
                            value='No'
                            name='isMediclaim'
                            onChange={handleChange}
                        />                        
                        <Form.Control.Feedback type="invalid">
                            Please choose an option.
                        </Form.Control.Feedback>
                    </Form.Group>
                <Form.Group as={Col} md="3">
                        <Form.Label>Aadhar No</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="Aadhar"
                            placeholder="Aadhar No"
                            value={businessData.Aadhar}
                            onChange={handleChange}
                            isInvalid={aadhar}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter a valid Aadhar No.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6">
                        <Button style={{ float: 'left' }} onClick={handlePrev} >Previous</Button>
                    </Form.Group>
                    <Form.Group as={Col} md="6">
                        <Button type='submit' style={{ float: 'right' }}>Next</Button>
                    </Form.Group>
                </Row>
            </Form>
        </>
    )
}

export default BusinessInfo