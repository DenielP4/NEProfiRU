import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import {Button, Col, Container, Row, Stack, Form} from 'react-bootstrap';
import validator from 'validator'
import '../css/request.css';
import '../css/text.css'

function AddTask(){

    const [ form, setForm ] = useState({})
    const [ errors, setErrors ] = useState({})
    const [ coordinate, setCoordinate ] = useState([])
    const [ userInfo, setUserInfo] = useState({})
    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value
        })
        if ( !!errors[field] ) setErrors({
            ...errors,
            [field]: null
        })
    }

    let navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault()
        const newErrors = findFormErrors()
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
        } else {
            try {
                let token = JSON.parse(localStorage.getItem("user"));

                const body = {
                    subject: form.subject,
                    text: form.text,
                    learnInHome: form.learnInHome === "on",
                    learnInStudent: form.learnInStudent === "on",
                    remote: form.remote === "on"
                };

                console.log(body);
                await axios.post("http://localhost:8080/api/add/request",
                    body,{
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }});
                navigate("/profile")
            } catch (err) {
                console.error(err.message);
            }
        }
    }

    const findFormErrors = () => {
        const {  subject, text, learnInHome, learnInStudent, remote} = form
        const newErrors = {}
        if ( !subject || subject === '' ) newErrors.subject = 'Пожалуйста заполните данное поле'
        if ( !text || text === '') newErrors.text = 'Пожалуйста заполните данное поле'
        if ( !learnInHome || learnInHome === '') newErrors.learnInHome = 'Пожалуйста заполните данное поле'
        if ( !learnInStudent || learnInStudent === '') newErrors.learnInStudent = 'Пожалуйста заполните данное поле'
        if ( !remote || remote === []) newErrors.remote = 'Пожалуйста заполните данное поле'
        return newErrors
    }

    const onToTrue = (field) => {

        field = field === "on"

    }

    const getUserInfo = async () => {
        console.log("dasdsadasd");
        try {
            let token = JSON.parse(localStorage.getItem("user"));
            console.log("dasdsadasd");
            await axios.get("http://localhost:8080/api/user/info",{
                headers: {
                    'Authorization': `Bearer ${token}`
                }}).then((response) => {
                console.log(response.data);
                setUserInfo(response.data.userInfo);
            })
        } catch (err) {
            console.log("dasdsadasd");
            console.error(err.message);
        }
    };
    useEffect(() => {
        getUserInfo();
    }, []);
    return (
        <Container style={{marginTop: '20px'}}>
            <Row className="justify-content-center" md="auto" xs="auto" xl={12}>
                <Col md="auto" xs="auto" xl={12}>
                    <div  className="login">
                        <Stack gap={1} >
                            <h1 className="text-center mt-1" style={{color:'#fff'}}>Введите требуемые данные для объявления</h1>
                            <Form style={{backgroundColor:'rgba(135,158,240,0.57)', padding:10, borderRadius:10}} className="mt-1" onSubmit={handleSubmit} noValidate >
                                <Stack gap={1}>
                                    <Row>
                                        <Col>
                                            <Row className="mb-2">
                                                <Form.Group as={Col} controlId="formGridEmail">
                                                    <Form.Label className='editText' style={{fontWeight:"bold"}}>Название предмета</Form.Label>
                                                    <Form.Control type="text"
                                                                  placeholder="Введите название"
                                                                  isInvalid={errors.subject }
                                                                  onChange={ e => {
                                                                      setField('subject', e.target.value)
                                                                  } } />
                                                    <Form.Control.Feedback type='invalid'>{ errors.subject }</Form.Control.Feedback>
                                                </Form.Group>
                                            </Row>
                                            <Row className="mb-2">

                                                <Form.Group as={Col} controlId="formGridPassword">
                                                    <Form.Label className='editText' style={{fontWeight:"bold"}}>Детали объявления</Form.Label>
                                                    <Form.Control type="text" as="textarea"
                                                                  placeholder="Детали задания"
                                                                  rows="8"
                                                                  isInvalid={errors.text }
                                                                  onChange={ e => setField('' +
                                                                      'text', e.target.value) } />
                                                </Form.Group>
                                            </Row>
                                        </Col>
                                        <Col>
                                            <Row className="mb-2">
                                                <Form.Group as={Col} controlId="formGridEmail">
                                                    <Form.Label className="editText">Имя</Form.Label>
                                                    <Form.Control type="text" value={userInfo.firstName} disabled/>
                                                </Form.Group>
                                                <Form.Group as={Col} controlId="formGridEmail">
                                                    <Form.Label className="editText">Фамилия</Form.Label>
                                                    <Form.Control type="text" value={userInfo.lastName} disabled/>
                                                </Form.Group>

                                                <Form.Group as={Col} controlId="formGridPassword">
                                                    <Form.Label className="editText">Отчество</Form.Label>
                                                    <Form.Control type="text" value={userInfo.middleName} disabled/>
                                                </Form.Group>
                                            </Row>
                                            <Row className="mb-2">
                                                <Form.Group as={Col} controlId="formGridEmail">
                                                    <Form.Label className="editText">Номер телефона</Form.Label>
                                                    <Form.Control type="number" value={userInfo.phone} disabled/>
                                                </Form.Group>
                                            </Row>
                                            <Row className="mb-2">
                                                <Form.Label style={{color:'#ffffff', fontWeight:"bold", fontSize:20}}>Отметьте варианты проведения занятий</Form.Label>
                                                <Form.Group as={Col} controlId="formGridEmail">
                                                    <Form.Check
                                                        style={{color:'#fff', fontWeight:"bold", fontSize:15}}
                                                        label="У репетитора"
                                                        onChange={ e => setField('learnInHome', e.target.value) }  />
                                                </Form.Group>

                                                <Form.Group as={Col} controlId="formGridPassword">
                                                    <Form.Check
                                                        style={{color:'#fff', fontWeight:"bold", fontSize:15}}
                                                        label="У ученика"
                                                        onChange={ e => setField('learnInStudent', e.target.value) }  />
                                                </Form.Group>

                                                <Form.Group as={Col} controlId="formGridPassword">
                                                    <Form.Check
                                                        style={{color:'#fff', fontWeight:"bold", fontSize:15}}
                                                        label="Дистанционно"
                                                        onChange={ e => setField('remote', e.target.value) }  />
                                                </Form.Group>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <Button className="btn btn-success"  type="submit">Создать задание</Button>
                                </Stack>
                            </Form>
                        </Stack>
                    </div>
                </Col>
            </Row>
        </Container>

    )
}
export default AddTask;