import {Link, useHistory, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Button, Card, Col, Container, Form, Image, ListGroup, ListGroupItem, Row, Stack} from "react-bootstrap";
import TeacherCard from "./TeacherCard";
import RequestCard from "./RequestCard";

const SearchRequest = () => {
    let navigate = useNavigate();
    const [requests, setRequests] = useState([]);
    const getRequests = async () => {
        try {
            await axios.get("http://localhost:8080/api/requests").then((response) => {
                console.log(response.data);
                setRequests(response.data);
            })
        } catch (err) {
            console.log("dasdsadasd");
            console.error(err.message);
        }
    };

    useEffect(() => {
        getRequests();
    }, []);

    return (
        <Container>
            <Row className="mb-3 mt-3">
                <Col sm={5}>
                    <h3 style={{fontWeight: "bold", textAlign:"center", color:"#fff"}}>Поиск объявлений</h3>
                    <Card style={{backgroundColor:'rgba(135,158,240,0.57)', borderRadius:10, marginTop:15, padding:10}} className="request">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label className="editText">Предмет</Form.Label>
                            <Form.Control type="text"
                                          placeholder="Введите название"
                                          onChange={ e => {
                                              console.log(e.target.value)
                                          } } />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label className="editText">Город проживания</Form.Label>
                            <Form.Control type="text"
                                          placeholder="Введите название"
                                          onChange={ e => {
                                              console.log(e.target.value)
                                          } } />
                        </Form.Group>
                        <Button className="btn btn-success" >Найти</Button>
                    </Card>
                </Col>
                <Col sm={1}>

                </Col>
                <Col sm={6}>
                    {requests.map(request => (
                        <Card style={{backgroundColor:"#ead7a3"}} className="request">
                            <Row xxl>
                                <Col style={{alignContent:"left"}} sm={8}>
                                    <h3 style={{textAlign: "center", fontWeight:"bold"}}>{request.userInfo.firstName}</h3>
                                    <h3 style={{textAlign: "center", fontWeight:"bold"}}>{request.subject}</h3>
                                    <h3 style={{textAlign: "center", fontWeight:"bold"}}>{request.date}</h3>
                                    <h3 style={{textAlign: "center", fontWeight:"bold"}}>{request.userInfo.town}</h3>

                                    {/*<h3 style={{textAlign: "center", fontWeight:"bold"}}>{props.teacher.teacher.education}</h3>*/}
                                    {/*<ListGroup className="list-group-flush">*/}
                                    {/*    <ListGroupItem style={{fontWeight: "bold", fontStyle: "italic", textAlign: "center"}}>{props.teacher.userInfo.firstName+ ' ' + props.teacher.userInfo.middleName}</ListGroupItem>*/}
                                    {/*    <ListGroupItem style={{fontWeight: "bold", fontStyle: "italic", textAlign: "center"}} >Возраст: {props.teacher.userInfo.age}</ListGroupItem>*/}
                                    {/*    <ListGroupItem style={{fontWeight: "bold", fontStyle: "italic", textAlign: "center"}} >Город: {props.teacher.userInfo.town}</ListGroupItem>*/}
                                    {/*    <ListGroupItem style={{fontWeight: "bold", fontStyle: "italic", textAlign: "center"}} >Предмет: {props.teacher.teacher.subject}</ListGroupItem>*/}
                                    {/*</ListGroup>*/}
                                </Col>



                            </Row>
                        </Card>
                    ))}
                </Col>
            </Row>
        </Container>
    );
};

export default SearchRequest;
