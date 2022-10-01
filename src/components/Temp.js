import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

const Temp = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        console.log(event.currentTarget)
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="First name"
                        defaultValue="Mark"
                    />
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                        defaultValue="Otto"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                    <Form.Label>Username</Form.Label>
                    <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                        <Form.Control
                            type="text"
                            placeholder="Username"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please choose a username.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="City" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid city.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom04">
                    <Form.Label>State</Form.Label>
                    <Form.Control type="text" placeholder="State" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid state.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom05">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control type="text" placeholder="Zip" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid zip.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Form.Group className="mb-3">
                <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                />
            </Form.Group>
            <Button type="submit">Submit form</Button>
        </Form>
    )
}

export default Temp

//////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const ContactInfo = () => {

    const initialValues = {
        MobileNo: "",
        PhoneNo: "",
        Email: "",
        Address: "",
        PinCode: "",
        City: "",
        Vibhag:"",
        Aadhar:""
    }
    const [data, setData] = useState(initialValues)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }
    return (
        <>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" className='ro'>
                        <Form.Label>Contact No</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="MobileNo"
                            placeholder="Mobile No"
                            value={data.MobileNo}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="4" className='ro'>
                        <Form.Label>Phone No</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="PhoneNo"
                            placeholder="Phone No"
                            value={data.PhoneNo}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="4" className='ro'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="Email"
                            placeholder="Email"
                            value={data.Email}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="8" className='ro'>
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="Address"
                            placeholder="Address"
                            value={data.Address}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="4" className='ro'>
                        <Form.Label>Pin Code</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            name="PinCode"
                            placeholder="Pin Code"
                            value={data.PinCode}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                <Form.Group as={Col} md="4" className='ro'>
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="City"
                            placeholder="City"
                            value={data.City}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="4" className='ro'>
                        <Form.Label>Vibhag</Form.Label>
                        <Form.Select name='Vibhag' value={data.Vibhag} onChange={handleChange}>
                            <option value="">Select Vibhag</option>
                            <option value="1">Vibhag-1</option>
                            <option value="2">Vibhag-2</option>
                            <option value="3">Vibhag-3</option>
                            <option value="3">Vibhag-4</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} md="4" className='ro'>
                        <Form.Label>Aadhar No</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="Aadhar"
                            placeholder="Aadhar No"
                            value={data.Aadhar}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Row>
            </Form>
        </>
    )
}

export default ContactInfo

