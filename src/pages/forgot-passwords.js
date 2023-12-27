import Link from 'next/link';
import React from 'react';
import {Form, Button, Row, Col, Card} from 'react-bootstrap';

const ForgotPassword = () => {
    
    return (
        <>
        <Row className="justify-content-md-center mt-5 mb-5">
            <Col md={{ span: 6, offset: 1 }}>
                <Card className='p-4'>
                    <h2 className='text-center'>Reset Passwords</h2>
                    <Form >
                        <Form.Group controlId="formBasicEmail" className='mb-3'>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>
                        <Button className='mt-3 mb-3' variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                    <p>Login here <Link href="/login">Login</Link></p>
                </Card>
            </Col>
        </Row>
        </>
    );
}

export default ForgotPassword;
