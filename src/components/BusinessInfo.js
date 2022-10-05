import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const BusinessInfo = (props) => {

    const [validated, setValidated] = useState(false);
    const [business, setBusiness]=useState(false)
    const [mediclaim, setMediclaim]=useState(false)
   
    const initialData = {
        Business: "",
        BusinessName: "",
        Aadhar: "",
        isMediclaim: "",
        MediclaimCompany:""
    }
    const [businessData, setBusinessData] = useState(initialData);
    useEffect(()=>{
        if(businessData.Business==='Trade'||businessData.Business==='Form'){
            setBusiness(true)
        }else{
            setBusiness(false)
        }

        if(businessData.isMediclaim==='Yes'){
            setMediclaim(true)
        }else{
            setMediclaim(false)
        }

    },[businessData])

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
                    <Form.Group as={Col} md="4" controlId="Business">
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
                    {business?
                        <Form.Group as={Col} md="4">
                        <Form.Label>Business/Form Name</Form.Label>
                        <Form.Control                            
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
                    :null}
                    
                </Row>
                <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="Business">
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
                    {mediclaim?
                        <Form.Group as={Col} md="4">
                        <Form.Label>Mediclaim Company</Form.Label>
                        <Form.Control                            
                            type="text"
                            name="MediclaimCompany"
                            placeholder="Mediclaim Company"
                            value={businessData.MediclaimCompany}
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter a valid business name.
                        </Form.Control.Feedback>
                    </Form.Group>                    
                    :null}
                <Form.Group as={Col} md="4">
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