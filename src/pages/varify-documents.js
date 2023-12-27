import React from 'react';
import {Form, Button, Row, Col, Card} from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const VarifyDocuments = () => {
    return (
        <Row className="justify-content-md-center mt-5">      
            <Col md={{ span: 6, offset: 1 }}>
                <Card className='p-4'>
                    <h2 className='text-center'>Submit Documents</h2>
                    <Form >
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Upload Doccument</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                        <FloatingLabel controlId="floatingTextarea1" label="Title" className="mb-3">
                            <Form.Control type="text" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingTextarea2" label="Comments">
                            <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                        <Button className='mt-3 mb-3' variant="primary" type="submit">
                            Submit Documents
                        </Button>
                    </Form >
                </Card>
            </Col>
        </Row>
    );
}

export default VarifyDocuments;
