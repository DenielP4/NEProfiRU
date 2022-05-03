import {NavLink, useNavigate} from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";
function Header(){
    const navigate = useNavigate();
    return(
        <header className='header' style={{backgroundColor: 'rgba(23,104,222,0)'}}>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Nav.Link style={{color:'#ffff', fontWeight:"bold"}} as={NavLink} className="navLink" to="/"><h2>NeProfiRu</h2></Nav.Link>
                    <Navbar.Toggle style={{color: '#fff', borderColor: '#fff', backgroundColor:'#fff'}} aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} className="navLink" to="/teachers" style={({ isActive }) =>
                                isActive
                                    ? {
                                        color: '#fff',
                                        background: 'rgba(54,69,239,0.49)'
                                    }
                                    : { color: '#e0e0e0'}}
                            ><h5>Репетиторы</h5></Nav.Link>
                            <Nav.Link as={NavLink} className="navLink" to="/requests" style={({ isActive }) =>
                                isActive
                                    ? {
                                        color: '#fff',
                                        background: 'rgba(54,69,239,0.49)'
                                    }
                                    : { color: '#e0e0e0'}}
                            ><h5>Объявления</h5></Nav.Link>
                            <Nav.Link as={NavLink} className="navLink" to="/new_request" style={({ isActive }) =>
                                isActive
                                    ? {
                                        color: '#fff',
                                        background: 'rgba(54,69,239,0.49)'
                                    }
                                    : { color: '#e0e0e0'}}
                            ><h5>Создать объявление</h5></Nav.Link>
                        </Nav>
                        {localStorage.getItem("user") === null &&
                        <Nav>
                            <Nav.Link as={NavLink} className="navLink" to="/login" style={({ isActive }) =>
                                isActive
                                    ? {
                                        color: '#fff',
                                        background: 'rgba(54,69,239,0.49)'
                                    }
                                    : { color: '#e0e0e0'}}
                            ><h5>Войти</h5></Nav.Link>
                            <Nav.Link as={NavLink} className="navLink" to="/registration" style={({ isActive }) =>
                                isActive
                                    ? {
                                        color: '#fff',
                                        background: 'rgba(54,69,239,0.49)'
                                    }
                                    : { color: '#e0e0e0'}}
                            ><h5>Регистрация</h5></Nav.Link>
                        </Nav>
                        }
                        {localStorage.getItem("user") !== null &&
                        <Nav>
                            <Nav.Link as={NavLink} className="navLink" to="/profile" style={({ isActive }) =>
                                isActive
                                    ? {
                                        color: '#fff',
                                        background: 'rgba(54,69,239,0.49)'
                                    }
                                    : { color: '#e0e0e0'}}
                            ><h5>Личный кабинет</h5></Nav.Link>
                            <Nav.Link as={NavLink} className="navLink" onClick= {()=>{localStorage.clear(); navigate("/login")}} to="/logout" style={({ isActive }) =>
                                isActive
                                    ? {
                                        color: '#fff',
                                        background: 'rgba(54,69,239,0.49)'
                                    }
                                    : { color: '#e0e0e0'}}
                            ><h5>Выйти</h5></Nav.Link>
                        </Nav>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}
export default Header;