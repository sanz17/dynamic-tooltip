import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';

function Left() {
    return (
        <>
            <div style={{ 'margin': '40px', 'padding': '31px', 'background': '#ECF0F1', 'borderRadius': '10px', 'fontWeight': 'bold' }}>
                <Form.Group as={Row} controlId="formSelect">
                    <Form.Label column sm={12} style={{ 'paddingRight': '565px' }}>
                        Target element
                    </Form.Label>
                    <Col sm={12}>
                        <Form.Control as="select">
                            <option value="option1">Button 1</option>
                            <option value="option2">Button 2</option>
                            <option value="option3">Button 3</option>
                            <option value="option4">Button 4</option>
                            <option value="option5">Button 5</option>
                        </Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label style={{ 'paddingRight': '585px', 'paddingTop': '10px' }}>Tooltip text</Form.Label>
                    <Form.Control type="text" placeholder="Input" />
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label style={{ 'paddingRight': '250px', 'paddingTop': '10px' }}>Text size</Form.Label>
                            <Form.Control type="text" placeholder="Input" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label style={{ 'paddingRight': '260px', 'paddingTop': '10px' }}>Padding</Form.Label>
                            <Form.Control type="text" placeholder="Input" />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label style={{ 'paddingRight': '585px', 'paddingTop': '10px' }}>Text colour</Form.Label>
                    <Form.Control type="text" placeholder="Input" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label style={{ 'paddingRight': '535px', 'paddingTop': '10px' }}>Background colour</Form.Label>
                    <Form.Control type="text" placeholder="Input" />
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label style={{ 'paddingRight': '210px', 'paddingTop': '10px' }}>Corner radius</Form.Label>
                            <Form.Control type="text" placeholder="Input" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label style={{ 'paddingRight': '200px', 'paddingTop': '10px' }}>Tooltip width</Form.Label>
                            <Form.Control type="text" placeholder="Input" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label style={{ 'paddingRight': '220px', 'paddingTop': '10px' }}>Arrow width</Form.Label>
                            <Form.Control type="text" placeholder="Input" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label style={{ 'paddingRight': '200px', 'paddingTop': '10px' }}>Arrow height</Form.Label>
                            <Form.Control type="text" placeholder="Input" />
                        </Form.Group>
                    </Col>
                </Row>
            </div>

        </>
    );
}

export default Left;