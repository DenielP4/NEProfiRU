import {Link, useHistory, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Button, Card, Col, Container, Form, Image, Row} from "react-bootstrap";
import "../css/text.css"
import TeacherCard from "./TeacherCard";


const SearchTeacher = () => {
    let navigate = useNavigate();
    const [teachers, setTeachers] = useState([]);
    const getTeachers = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/teachers");
            const jsonData = await response.data;
            setTeachers(jsonData);
            console.log(response)
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getTeachers();
    }, []);

    return (
        <Container>
            <Row className="mb-3 mt-3">
                <Col sm={5}>
                    <h3 style={{fontWeight: "bold", textAlign:"center", color:"#fff"}}>Поиск репетиторов</h3>
                    <Card style={{backgroundColor:'rgba(135,158,240,0.57)', borderRadius:10, marginTop:15, padding:10}} className="teacher">
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
                        {teachers.map(teacher => (
                            <TeacherCard teacher={teacher} />
                        ))}
                </Col>
            </Row>
        </Container>
    );
};

export default SearchTeacher;
