import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom";

export const Login=()=>{
    const navigate = useNavigate()
    const gotToNewPageUser=()=>{
        navigate("/user-login");
      }
    const gotToNewPageAdmin=()=>{
        navigate("/admin-login");
      }
    const gotToNewPageSuperAdmin=()=>{
        navigate("/superadmin-login");
      }
    return(
        <section id="login">
            <div  >
                <h1 className="login-heading">LOGIN</h1>
                <div id="divider-login"></div>
            </div>
            
            <Container>
                <Row>
                <div className="login-cards">
                    <Col md={6} id="cards">
                        <Card>
                            <div id="div-img">
                            <Card.Img md={7} id="card-img1" src="images/2-bg.jpg"/>
                            </div>
                            <Card.Body>
                                <div className="d-grid">
                                <Button onClick={() => gotToNewPageAdmin()} id="login-button">Admin</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} id="cards">
                        <Card>
                            <div id="div-img">
                            <Card.Img md={7} id="card-img1" src="images/5-bg.jpg"/>
                            </div>
                            <Card.Body>
                                <div className="d-grid">
                                    <Button onClick={() => gotToNewPageSuperAdmin()} id="login-button">Super Admin</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} id="cards">
                        <Card>
                            <div id="div-img">
                            <Card.Img md={7} id="card-img1" src="images/6-bg.jpg"/>
                            </div>
                            <Card.Body>
                                <div className="d-grid">
                                    <Button onClick={() => gotToNewPageUser()} id="login-button">Users</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    </div>
                </Row>
            </Container>
        </section>
    )
}