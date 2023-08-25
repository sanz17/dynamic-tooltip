import React from "react";
import { Row, Col } from "react-bootstrap";
import Left from "./Left";
import Right from './Right';
import Footer from "./Footer";


function Home() {
    return (
        <>
            <Row className="landing">
                {/* <Col>
                    <Left />
                </Col> */}
                <Col>
                    <Right />
                </Col>
                {/* <Col>
                    <Design/>
                </Col> */}
            </Row>
            <Footer/>

        </>
    )
}
export default Home;