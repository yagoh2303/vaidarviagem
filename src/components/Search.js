import React from "react";
import { Col,  Row, Container, Tabs, Tab, Form, Button, Card} from "react-bootstrap";

const Search = () => (
    <Container>
        <Row className='my-4'>
            <Col xs={12} lg={6}>
            <Tabs
                    defaultActiveKey="profile"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                    >
                <Tab eventKey="home" title="Apenas ida">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Destino</Form.Label>
                                <Form.Control type="text" placeholder="Informe seu destino" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Data de embarque</Form.Label>
                                <Form.Control type="date" placeholder="Password" />
                            </Form.Group>

                            <Button variant="warning" type="submit">
                                Pesquisar
                            </Button>
                        </Form>
                </Tab>
                <Tab eventKey="profile" title="Ida e Volta">
                <Form>
                    
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Destino</Form.Label>
                                <Form.Control type="text" placeholder="Informe seu destino" />
                            </Form.Group>
                            <Row>
                            <Col>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Data de Ida</Form.Label>
                                <Form.Control type="date" placeholder="Password" />
                            </Form.Group>
                            </Col>
                           
                           <Col>
                           <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Data de Volta</Form.Label>
                                <Form.Control type="date" placeholder="Password" />
                                </Form.Group>
                           </Col>
                            
                           </Row>
                                
                           

                            <Button variant="warning" type="submit">
                                Pesquisar
                            </Button>
                        </Form>
    
                </Tab>

            </Tabs>
            </Col>
            <Col xs={12} lg={6}>
                <Row>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://nsc-total-wp.s3.sa-east-1.amazonaws.com/wp-content/uploads/2022/10/o-que-e-solsticio-de-verao-1.jpg" />
                        <Card.Body>
                            <Card.Title>Melhores destinos</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="warning">Saiba mais</Button>
                        </Card.Body>
                        
                       </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://shopee.com.br/blog/wp-content/uploads/2022/01/Check-list-viagem-Lugares-baratos-para-viajar.jpg" />
                        <Card.Body>
                            <Card.Title>O que não pode faltar na sua mala</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="warning">Saiba mais</Button>
                        </Card.Body>
                        
                       </Card>

                    </Col>
                </Row>
            </Col>
        </Row>


    </Container>
)

export default Search;