import React, { useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import './Right.css';

function Left({ buttonText, tooltipText }) {
    const [showTooltip, setShowTooltip] = useState(false);
    const [tooltipStyles, setTooltipStyles] = useState({
        padding: '8px',
        backgroundColor: '#ff9900',
        color: '#fff'
    });

    const handleMouseEnter = () => {
        setShowTooltip(true);
    };

    const handleMouseLeave = () => {
        setShowTooltip(false);
    };

    const handleStyleChange = (property, value) => {
        setTooltipStyles(prevStyles => ({
            ...prevStyles,
            [property]: value
        }));
    };

    return (

        <div className="dynamic-tooltip-container" >
            <Row>
                <Col style={{ 'margin': '40px', 'padding': '31px', 'background': '#ECF0F1', 'borderRadius': '10px', 'fontWeight': 'bold' }}>
                    <div className="style-inputs">
                        <Form.Group as={Row} controlId="formSelect">
                            <Form.Label column sm={12} style={{ 'paddingRight': '665px' }}>
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
                            <Form.Label style={{ 'paddingRight': '675px', 'paddingTop': '10px' }}>Tooltip text</Form.Label>
                            <Form.Control type="text" placeholder="Input" />
                        </Form.Group>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label style={{ 'paddingRight': '285px', 'paddingTop': '10px' }}>Text size</Form.Label>
                                    <Form.Control type="text" placeholder="Input" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label style={{ 'paddingRight': '290px', 'paddingTop': '10px' }}>Padding</Form.Label>
                                    <Form.Control type="text" placeholder="Input" onChange={e => handleStyleChange('padding', e.target.value)} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label style={{ 'paddingRight': '675px', 'paddingTop': '10px' }}>Text colour</Form.Label>
                            <Form.Control type="text" placeholder="Input" onChange={e => handleStyleChange('color', e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label style={{ 'paddingRight': '625px', 'paddingTop': '10px' }}>Background colour</Form.Label>
                            <Form.Control type="text" placeholder="Input" onChange={e => handleStyleChange('backgroundColor', e.target.value)} />
                        </Form.Group>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label style={{ 'paddingRight': '255px', 'paddingTop': '10px' }}>Corner radius</Form.Label>
                                    <Form.Control type="text" placeholder="Input" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label style={{ 'paddingRight': '235px', 'paddingTop': '10px' }}>Tooltip width</Form.Label>
                                    <Form.Control type="text" placeholder="Input" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label style={{ 'paddingRight': '255px', 'paddingTop': '10px' }}>Arrow width</Form.Label>
                                    <Form.Control type="text" placeholder="Input" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label style={{ 'paddingRight': '235px', 'paddingTop': '10px' }}>Arrow height</Form.Label>
                                    <Form.Control type="text" placeholder="Input" />
                                </Form.Group>
                            </Col>
                        </Row>
                        {/* <input
                            type="text"
                            placeholder="Padding"
                            onChange={e => handleStyleChange('padding', e.target.value)}
                        /> */}
                        {/* <input
                            type="text"
                            placeholder="Background Color"
                            onChange={e => handleStyleChange('backgroundColor', e.target.value)}
                        /> */}
                        {/* <input
                            type="text"
                            placeholder="Text Color"
                            onChange={e => handleStyleChange('color', e.target.value)}
                        /> */}
                    </div>
                </Col>
                <Col>
                    <button
                        className="dynamic-tooltip-button"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        {buttonText}
                    </button>
                    {showTooltip && (
                        <div className="dynamic-tooltip" style={tooltipStyles}>
                            {tooltipText}
                        </div>
                    )}
                </Col>
            </Row>



        </div>
    );
}

export default Left;