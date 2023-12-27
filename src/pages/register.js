import Link from 'next/link';
import React from 'react';
import {Form, Button, Row, Col, Card} from 'react-bootstrap';

const Register = () => {
    return (
        <>
        <Row className="justify-content-md-center mt-5 mb-5">
            <Col md={{ span: 6, offset: 1 }}>
                <Card className='p-4'>
                    <h2 className='text-center'>Register here</h2>
                    <Form >
                        <Form.Group controlId="fullName" className='mb-3'>
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>

                        <Form.Group controlId="email" className='mb-3'>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" />
                        </Form.Group>

                        <Form.Group controlId="phoneNumber" className='mb-3'>
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control type="tel" />
                        </Form.Group>

                        <Form.Group controlId="organization" className='mb-3'>
                            <Form.Label>Organization</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>

                        <Form.Group controlId="county" className='mb-3'>
                            <Form.Label>Country</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword" className='mb-3'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>

                        <Form.Group controlId="confirmPass">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>
                        <Button className='mt-3 mb-3' variant="primary" type="submit"
                        >
                            Register
                        </Button>
                    </Form>
                    <p>Already have account <Link href="/login">Login here</Link></p>
                </Card>
            </Col>
        </Row>
        </>
    );
}

export default Register;