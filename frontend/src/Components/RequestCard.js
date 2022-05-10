import {Button, Card, Col, Container, Image, ListGroup, ListGroupItem, Row, Table} from "react-bootstrap";
import React from "react";
import {useHistory, useNavigate} from "react-router-dom";

const RequestCard = (props) => {

    return(

                <div className='request_card'>
                    {/*<h5>{props.request.userInfo.firstName}</h5>*/}
                    {/*<h5>{props.request.userInfo.lastName}</h5>*/}
                    {/*<h5>{props.request.userInfo.middleName}</h5>*/}
                    {/*<h5>{props.request.userInfo.age}</h5>*/}
                    <h5>{props.request.userInfo.town}</h5>
                    <h5>{props.request.subject}</h5>
                    {/*<h5>{props.request.learnInHome}</h5>*/}
                    {/*<h5>{props.request.learnInStudent}</h5>*/}
                    {/*<h5>{props.request.remote}</h5>*/}
                    <h5>{props.request.text}</h5>
                    <h5>{props.request.date}</h5>
                </div>


    // <Container>
    //     <Row  className="mb-3 mt-3">
    //         <Card style={{backgroundColor:"#ead7a3"}} className="request">
    //             <Row xxl>
    //                 <Col style={{alignContent:"left"}} sm={8}>
    //                     <h3 style={{textAlign: "center", fontWeight:"bold"}}>{props.request.userInfo.firstName}</h3>
    //                     <h3 style={{textAlign: "center", fontWeight:"bold"}}>{props.teacher.teacher.education}</h3>
    //                     <ListGroup className="list-group-flush">
    //                         <ListGroupItem style={{fontWeight: "bold", fontStyle: "italic", textAlign: "center"}}>{props.teacher.userInfo.firstName+ ' ' + props.teacher.userInfo.middleName}</ListGroupItem>
    //                         <ListGroupItem style={{fontWeight: "bold", fontStyle: "italic", textAlign: "center"}} >Возраст: {props.teacher.userInfo.age}</ListGroupItem>
    //                         <ListGroupItem style={{fontWeight: "bold", fontStyle: "italic", textAlign: "center"}} >Город: {props.teacher.userInfo.town}</ListGroupItem>
    //                         <ListGroupItem style={{fontWeight: "bold", fontStyle: "italic", textAlign: "center"}} >Предмет: {props.teacher.teacher.subject}</ListGroupItem>
    //                     </ListGroup>
    //                 </Col>
    //
    //
    //
    //             </Row>
    //         </Card>
    //     </Row>
    // </Container>
    )
}
export default RequestCard;