import React from "react";
import {useHistory, useNavigate} from "react-router-dom";
import {Button, Card, Col, Container, Form, Image, ListGroup, ListGroupItem, Row} from "react-bootstrap";

const TeacherCard = (props) => {
    let navigate = useNavigate();

    return(
        <Container>
            <Row  className="mb-3 mt-3">
                <Card style={{backgroundColor:"#ead7a3"}} className="teacher">
                    <Row xxl>
                        <Col sm={4}>
                            <Image className="position-absolute top-50 start-0 translate-middle-y" style={{}} src={props.teacher.teacher.img} rounded width={200} height={200}/>
                        </Col>
                        <Col style={{alignContent:"left"}} sm={8}>
                            <h3 style={{textAlign: "center", fontWeight:"bold"}}>{props.teacher.userInfo.lastName}</h3>
                            <h3 style={{textAlign: "center", fontWeight:"bold"}}>{props.teacher.teacher.education}</h3>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem style={{fontWeight: "bold", fontStyle: "italic", textAlign: "center"}}>{props.teacher.userInfo.firstName+ ' ' + props.teacher.userInfo.middleName}</ListGroupItem>
                                <ListGroupItem style={{fontWeight: "bold", fontStyle: "italic", textAlign: "center"}} >Возраст: {props.teacher.userInfo.age}</ListGroupItem>
                                <ListGroupItem style={{fontWeight: "bold", fontStyle: "italic", textAlign: "center"}} >Город: {props.teacher.userInfo.town}</ListGroupItem>
                                <ListGroupItem style={{fontWeight: "bold", fontStyle: "italic", textAlign: "center"}} >Предмет: {props.teacher.teacher.subject}</ListGroupItem>
                            </ListGroup>
                        </Col>



                    </Row>
                </Card>
                <Button className="btn btn-success" onClick={() => navigate("/teachers/"+props.teacher.id,{props})}>Подробнее</Button>
            </Row>
        </Container>
    )
}
export default TeacherCard;