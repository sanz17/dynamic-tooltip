import React from "react";
import { Row, Col } from "react-bootstrap";
import Left from "./Left";
import Right from './Right';
import Design from "./Design";


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
        </>
    )
}
export default Home;