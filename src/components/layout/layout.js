import React from "react";
import { Container, Row, Col } from 'react-grid-system';
import './layout.css';
import SideBar from "../SideNav/SideNav"
import SearchBar from "../SearchBar/searchbar";
import First from "../Main/First";
import Counter from "../Main/Counter";
import FontSize from "../Main/FontSize";
import ChangeTheme from "../Main/ChangeTheme";


const Layout = () => {
        return (

        <div>
        <Container>
            <Row>
                <Col sm={3}>
                    <SideBar />
                </Col>

                <Col sm={9}>
                <Container>
                    <Row>
                        <Col sm={12}>
                            <SearchBar />
                        </Col> 
                    </Row>

                    <Container>
                    <Row className="space">
                        <Col sm={8} >
                            <First />
                        </Col>
                        <Col sm={4}>
                            <Counter />
                        </Col>
                    </Row>
                    </Container>

                    <Container>
                    <Row className="space">
                        <Col sm={8}>
                            <FontSize />
                        </Col>
                        <Col sm={2}>
                            <ChangeTheme />

                        </Col>
                        <Col sm={2}>
                        <Counter />

                        </Col>
                    </Row>
                    </Container>
                </Container>
                </Col>
                 
            </Row>
        </Container>
            
        </div>)
  }
  
  export default Layout