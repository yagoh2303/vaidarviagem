import React from "react";
import { Col,  Row, Container, Tabs, Tab, Form, Button} from "react-bootstrap";

const Search = () => (
    <Container>
        <Row>
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
                asdahdskjasdhkhdasj
            </Col>
        </Row>


    </Container>
)

export default Search;