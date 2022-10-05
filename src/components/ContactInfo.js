import React, { useState} from 'react';
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const ContactInfo = (props) => {

    const [validated, setValidated] = useState(false);
    const initialData={
        ContactNo:"",
        PhoneNo:"",
        Email:"",
        Address1:"",
        Address2:"",
        PinCode:"",
        City:"",
        Vibhag:""
    }
    const [contactData, setContactData] = useState(initialData);

    const [contactNo, setContactNo]=useState(false)
    // const [phoneNo, setPhoneNo]=useState(false)
    const [email, setEmail]=useState(false)
    const [pincode, setPincode]=useState(false)

    const validateData=()=>{
        if(contactData.ContactNo.length!==10 || isNaN(contactData.ContactNo) || /*contactData.PhoneNo.length!==0||
             contactData.PhoneNo.length!==10 ||isNaN(contactData.PhoneNo) ||*/
            !(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(contactData.Email))||
            contactData.PinCode.length!==6 || isNaN(contactData.PinCode))
            {
                if(contactData.ContactNo.length!==10 || isNaN(contactData.ContactNo)){
                    setContactNo(true)
                }else{setContactNo(false)}

                // if(contactData.PhoneNo.length!==0 || contactData.PhoneNo.length!==10 || isNaN(contactData.PhoneNo)){
                //     setPhoneNo(true)
                // }else{setPhoneNo(false)}

                if(!(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(contactData.Email))){
                    setEmail(true)
                }else{setEmail(false)}

                if(contactData.PinCode.length!==6 || isNaN(contactData.PinCode)){
                    setPincode(true)
                }else{setPincode(false)}

        }else{
            return true
        }
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if(validateData()){
        if (form.checkValidity()) {            
            props.setI(2)
            props.setFinalData(contactData)
        }
        setValidated(true)
    }
        event.preventDefault();
        event.stopPropagation();
        

    };

    const handleChange=(e)=>{
        const { name, value } = e.target;
        setContactData({ ...contactData, [name]: value })
    }

    const handlePrev=()=>{
        props.setI(0)
    }
    return (
        <>
            <Form noValidate validated={validated} onSubmit={handleSubmit} method='post'>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4">
                        <Form.Label>Contact No</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="ContactNo"
                            placeholder="Mobile No"
                            value={contactData.ContactNo}
                            onChange={handleChange}
                            isInvalid={contactNo}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter a valid mobile no.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Form.Label>Phone No</Form.Label>
                        <Form.Control
                            type="text"
                            name="PhoneNo"
                            placeholder="Phone No"
                            value={contactData.PhoneNo}
                            onChange={handleChange}
                            // isInvalid={phoneNo}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter a valid phone no.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="Email"
                            placeholder="Email"
                            value={contactData.Email}
                            onChange={handleChange}
                            isInvalid={email}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter a valid Email.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6">
                        <Form.Label>Address Line 1</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="Address1"
                            placeholder="Address Line 1"
                            value={contactData.Address1}
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter a valid Address.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6">
                        <Form.Label>Address Line 2</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="Address2"
                            placeholder="Address Line 2"
                            value={contactData.Address2}
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter a valid Address.
                        </Form.Control.Feedback>
                    </Form.Group>
                    
                </Row>
                <Row className="mb-3">
                <Form.Group as={Col} md="4">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="City"
                            placeholder="City"
                            value={contactData.City}
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter your city.
                        </Form.Control.Feedback>
                    </Form.Group>
                <Form.Group as={Col} md="4">
                        <Form.Label>Pin Code</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            name="PinCode"
                            placeholder="Pin Code"
                            value={contactData.PinCode}
                            onChange={handleChange}
                            isInvalid={pincode}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter a valid pincode.
                        </Form.Control.Feedback>
                    </Form.Group>
                
                    <Form.Group as={Col} md="4">
                        <Form.Label>Vibhag</Form.Label>
                        <Form.Select required name='Vibhag' value={contactData.Vibhag} onChange={handleChange}>
                            <option value="">Select Vibhag</option>
                            <option value="1">Vibhag-1</option>
                            <option value="2">Vibhag-2</option>
                            <option value="3">Vibhag-3</option>
                            <option value="3">Vibhag-4</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                            Please choose your vibhag.
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

export default ContactInfo