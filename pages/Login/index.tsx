import React, { useState } from "react";
import { BG, Button, Input, BlurCard } from "../../styles";
import { Col, Row } from "react-bootstrap";

const Login : React.FC = ()=>
{
    const [email, setEmail] = useState('');
    const [ user, setUser ] = useState('');
    const [password, setPassword] = useState('');

    return(
        <BG>
            <Row 
                style={{ 
                    paddingTop: "10%",  
                    paddingBottom: "10%"
            }}>
                <Col md="2"/>                
                <Col md="8">                                    
                    <BlurCard width="70%">
                        <div className="box">
                            <h2 className="title">LOGIN</h2>
                            
                            <Input 
                                type="email"
                                value={email}
                                //onChange={(event) => setEmail(event.target.value)}
                                placeholder="Usuário"
                                width="100%"
                            />
                            <Input
                                type="password"
                                value={password}
                                //onChange={(event) => setPassword(event.target.value)}
                                placeholder="Senha"
                                width="100%"
                            />
                            <Button 
                                width="100%" 
                                //onClick={()=>handleLogin()}
                            >
                                ACESSAR

                            </Button>
                        </div>
                    </BlurCard>  
                </Col>
               
                <Col md="2"/>
            </Row>
        </BG>
    )
}

export default Login;