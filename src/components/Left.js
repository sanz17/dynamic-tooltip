import React, { useState, useRef, useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import "./Right.css";
import Toast from 'react-bootstrap/Toast';

function Right({ buttonText }) {
    const [showTooltip, setShowTooltip] = useState(false);
    const [tooltipStyles, setTooltipStyles] = useState({
        fontSize: "15px",
        padding: "8px",
        backgroundColor: "#ff9900",
        color: "#fff",
        borderRadius: "5px",
        width: "300px",
        arrowWidth: "5px",
        arrowHeight: "5px",
    });
    const [show, setShow] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const period = 2000;
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Dynamic Tooltip"];


    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            }
            else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])
    const [tooltipText, setTooltipText] = useState("");
    const [selectedButton, setSelectedButton] = useState("");
    const buttonRefs = {
        button1: useRef(null),
        button2: useRef(null),
        button3: useRef(null),
        button4: useRef(null),
        button5: useRef(null),
    };

    const handleMouseEnter = (buttonKey) => {
        setSelectedButton(buttonKey);
        setShowTooltip(true);
        setTooltipStyles((prevStyles) => ({
            ...prevStyles,
            arrowLeft: "calc(50% - " + prevStyles.arrowWidth + ")",
        }));
    };

    const handleMouseLeave = () => {
        setSelectedButton("");
        setShowTooltip(false);
    };

    const handleStyleChange = (property, value) => {
        if (property === "arrowWidth" || property === "arrowHeight") {
            setTooltipStyles((prevStyles) => ({
                ...prevStyles,
                [property]: value,
            }));
        } else {
            setTooltipStyles((prevStyles) => ({
                ...prevStyles,
                [property]: value,
            }));
        }
    };

    const handleTextChange = (e) => {
        setTooltipText(e.target.value);
    };

    const handleButtonChange = (e) => {
        setSelectedButton(e.target.value);
    };

    return (
        <div className="dynamic-tooltip-container">
            <Row>
                <Col
                    style={{
                        margin: "40px",
                        padding: "31px",
                        background: "#ECF0F1",
                        borderRadius: "10px",
                        fontWeight: "bold",
                    }}
                >
                    <Button variant="dark" onClick={() => setShow(true)}>Check constraints</Button>
                    <div className="style-inputs">
                        <Form.Group as={Row} controlId="formSelect">
                            <Form.Label column sm={12} style={{ paddingRight: "665px" }}>
                                Target element
                            </Form.Label>
                            <Col sm={12}>
                                <Form.Control as="select" onChange={handleButtonChange}>
                                    <option value="button1">Button 1</option>
                                    <option value="button2">Button 2</option>
                                    <option value="button3">Button 3</option>
                                    <option value="button4">Button 4</option>
                                    <option value="button5">Button 5</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label style={{ paddingRight: "675px", paddingTop: "10px" }}>
                                Tooltip text
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Input"
                                value={tooltipText}
                                onChange={handleTextChange}
                            />
                        </Form.Group>
                        <Row>
                            <Col>
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                >

                                    <Form.Label
                                        style={{ paddingRight: "285px", paddingTop: "10px" }}
                                    >
                                        Text size
                                    </Form.Label>
                                    <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                                <Toast.Header>
                                    
                                    <strong className="me-auto">Please put px !</strong>
                
                                </Toast.Header>
                                <Toast.Body>Please try to keep it within the range of 25px</Toast.Body>
                            </Toast>
                                    <Form.Control
                                        type="text"
                                        placeholder="Input with px (<30px for best result)"
                                        onChange={(e) =>
                                            handleStyleChange("fontSize", e.target.value)
                                        }
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                >
                                    <Form.Label
                                        style={{ paddingRight: "285px", paddingTop: "10px" }}
                                    >
                                        Padding 
                                    </Form.Label>
                                    <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                                        <Toast.Header>

                                            <strong className="me-auto">Please put px !</strong>

                                        </Toast.Header>
                                        <Toast.Body>Please try to keep it within the range of 20px</Toast.Body>
                                    </Toast>
                                    <Form.Control
                                        type="text"
                                        placeholder="Input with px (<25px for best result)"
                                        onChange={(e) =>
                                            handleStyleChange("padding", e.target.value)
                                        }
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label style={{ paddingRight: "675px", paddingTop: "10px" }}>
                                Text colour 
                            </Form.Label>

                            <Form.Control
                                type="text"
                                placeholder="Input"
                                onChange={(e) => handleStyleChange("color", e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label style={{ paddingRight: "625px", paddingTop: "10px" }}>
                                Background colour
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Input"
                                onChange={(e) =>
                                    handleStyleChange("backgroundColor", e.target.value)
                                }
                            />
                        </Form.Group>
                        <Row>
                            <Col>
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                >
                                    <Form.Label
                                        style={{ paddingRight: "255px", paddingTop: "10px" }}
                                    >
                                        Corner radius
                                    </Form.Label>
                                    
                                    <Form.Control
                                        type="text"
                                        placeholder="Input in px"
                                        onChange={(e) =>
                                            handleStyleChange("borderRadius", e.target.value)
                                        }
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                >
                                    <Form.Label
                                        style={{ paddingRight: "235px", paddingTop: "10px" }}
                                    >
                                        Tooltip width
                                    </Form.Label>
                                    <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                                        <Toast.Header>

                                            <strong className="me-auto">Please put px !</strong>

                                        </Toast.Header>
                                        <Toast.Body>Please try to keep it within the range of 150-300px</Toast.Body>
                                    </Toast>
                                    <Form.Control
                                        type="text"
                                        min={100}
                                        max={300}
                                        placeholder="Input with px (150-300px for best result)"
                                        onChange={(e) => handleStyleChange("width", e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                >
                                    <Form.Label
                                        style={{ paddingRight: "255px", paddingTop: "10px" }}
                                    >
                                        Arrow width
                                    </Form.Label>
                                    <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                                        <Toast.Header>

                                            <strong className="me-auto">Please put px !</strong>

                                        </Toast.Header>
                                        <Toast.Body>Please try to keep it less than 20px</Toast.Body>
                                    </Toast>
                                    <Form.Control
                                        type="text"
                                        placeholder="Input with px (<10px for best result)"
                                        onChange={(e) =>
                                            handleStyleChange("arrowWidth", e.target.value)
                                        }
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                >
                                    <Form.Label
                                        style={{ paddingRight: "235px", paddingTop: "10px" }}
                                    >
                                        Arrow height
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Input with px (<10px for best result)"
                                        onChange={(e) =>
                                            handleStyleChange("arrowHeight", e.target.value)
                                        }
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col>
                    <div style={{ 'marginLeft': '430px', 'marginTop': '20px' }}>
                        <Button variant="dark" style={{ 'color': 'white', 'fontSize': '35px', 'background': 'black' }} className="social-button" ><span>{text}</span></Button>
                    </div>
                    <div className="mobile-screen">
                        <div className="app-content">
                            <Row style={{ justifyContent: "space-between" }}>
                                <Col>
                                    <Button
                                        ref={buttonRefs.button1}
                                        variant="light"
                                        className="dynamic-tooltip-button"
                                        onMouseEnter={() => handleMouseEnter("button1")}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        Button 1
                                    </Button>
                                    {selectedButton === "button1" && (
                                        <div>
                                            <div
                                                className="dynamic-tooltip"
                                                style={{
                                                    marginTop: "5px",
                                                    padding: tooltipStyles.padding,
                                                    backgroundColor: tooltipStyles.backgroundColor,
                                                    color: tooltipStyles.color,
                                                    fontSize: tooltipStyles.fontSize,
                                                    borderRadius: tooltipStyles.borderRadius,
                                                    width: tooltipStyles.width,
                                                    maxWidth: tooltipStyles.width,
                                                }}
                                            >
                                                {tooltipText}

                                                <div
                                                    className="tooltip-arrow"
                                                    style={{
                                                        border: `solid ${tooltipStyles.backgroundColor}`,
                                                        borderWidth: `0 3px 3px 0`,
                                                        display: "inline-block",
                                                        padding: ` 3px`,
                                                        transform: "rotate(-135deg)",
                                                        borderWidth: tooltipStyles.arrowHeight,
                                                        background: tooltipStyles.backgroundColor,
                                                        height: "10px",
                                                        position: "absolute",
                                                        top: '47px',
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    )}
                                </Col>
                                <Col>
                                    <Button
                                        ref={buttonRefs.button2}
                                        variant="light"
                                        className="dynamic-tooltip-button"
                                        onMouseEnter={() => handleMouseEnter("button2")}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        Button 2
                                    </Button>
                                    {selectedButton === "button2" && (
                                        <div>
                                            <div
                                                className="dynamic-tooltip"
                                                style={{
                                                    position: "relative",
                                                    marginTop: "5px",
                                                    padding: tooltipStyles.padding,
                                                    backgroundColor: tooltipStyles.backgroundColor,
                                                    color: tooltipStyles.color,
                                                    fontSize: tooltipStyles.fontSize,
                                                    borderRadius: tooltipStyles.borderRadius,
                                                    width: tooltipStyles.width,
                                                    maxWidth: tooltipStyles.width,
                                                }}
                                            >
                                                {tooltipText}

                                                <div
                                                    className="tooltip-arrow"
                                                    style={{
                                                        border: `solid ${tooltipStyles.backgroundColor}`,
                                                        borderWidth: `0 3px 3px 0`,
                                                        display: "inline-block",
                                                        padding: ` 3px`,
                                                        transform: "rotate(-135deg)",
                                                        borderWidth: tooltipStyles.arrowHeight,
                                                        background: tooltipStyles.backgroundColor,
                                                        height: "10px",
                                                        position: "absolute",
                                                        top: '-5px',
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    )}
                                </Col>
                            </Row>
                            <Button
                                ref={buttonRefs.button3}
                                variant="light"
                                className="dynamic-tooltip-button"
                                onMouseEnter={() => handleMouseEnter("button3")}
                                onMouseLeave={handleMouseLeave}
                                style={{ marginTop: "190px" }}
                            >
                                Button 3
                            </Button>
                            {selectedButton === "button3" && (
                                <div>
                                    <div
                                        className="dynamic-tooltip"
                                        style={{
                                            marginLeft: "50px",
                                            marginTop: "5px",
                                            padding: tooltipStyles.padding,
                                            backgroundColor: tooltipStyles.backgroundColor,
                                            color: tooltipStyles.color,
                                            fontSize: tooltipStyles.fontSize,
                                            borderRadius: tooltipStyles.borderRadius,
                                            width: tooltipStyles.width,
                                            maxWidth: tooltipStyles.width,
                                        }}
                                    >
                                        {tooltipText}

                                        <div
                                            className="tooltip-arrow"
                                            style={{
                                                border: `solid ${tooltipStyles.backgroundColor}`,
                                                borderWidth: `0 3px 3px 0`,
                                                display: "inline-block",
                                                padding: ` 3px`,
                                                transform: "rotate(-135deg)",
                                                borderWidth: tooltipStyles.arrowHeight,
                                                background: tooltipStyles.backgroundColor,
                                                height: "10px",
                                                position: "absolute",
                                                top: '276px',
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            )}
                            <Row style={{ marginTop: "245px" }}>
                                <Col>
                                    <Button
                                        ref={buttonRefs.button4}
                                        variant="light"
                                        className="dynamic-tooltip-button"
                                        onMouseEnter={() => handleMouseEnter("button4")}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        Button 4
                                    </Button>
                                    {selectedButton === "button4" && (
                                        <div>
                                            <div
                                                className="dynamic-tooltip"
                                                style={{
                                                    marginTop: "5px",
                                                    padding: tooltipStyles.padding,
                                                    backgroundColor: tooltipStyles.backgroundColor,
                                                    color: tooltipStyles.color,
                                                    fontSize: tooltipStyles.fontSize,
                                                    borderRadius: tooltipStyles.borderRadius,
                                                    width: tooltipStyles.width,
                                                    maxWidth: tooltipStyles.width,
                                                }}
                                            >
                                                {tooltipText}

                                                <div
                                                    className="tooltip-arrow"
                                                    style={{
                                                        border: `solid ${tooltipStyles.backgroundColor}`,
                                                        borderWidth: `0 3px 3px 0`,
                                                        display: "inline-block",
                                                        padding: ` 3px`,
                                                        transform: "rotate(-135deg)",
                                                        borderWidth: tooltipStyles.arrowHeight,
                                                        background: tooltipStyles.backgroundColor,
                                                        height: "10px",
                                                        position: "absolute",
                                                        top: '560px',
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    )}
                                </Col>
                                <Col>
                                    <Button
                                        ref={buttonRefs.button5}
                                        variant="light"
                                        className="dynamic-tooltip-button"
                                        onMouseEnter={() => handleMouseEnter("button5")}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        Button 5
                                    </Button>
                                    {selectedButton === "button5" && (
                                        <div>
                                            <div
                                                className="dynamic-tooltip"
                                                style={{
                                                    marginTop: "5px",
                                                    padding: tooltipStyles.padding,
                                                    backgroundColor: tooltipStyles.backgroundColor,
                                                    color: tooltipStyles.color,
                                                    fontSize: tooltipStyles.fontSize,
                                                    borderRadius: tooltipStyles.borderRadius,
                                                    width: tooltipStyles.width,
                                                    maxWidth: tooltipStyles.width,
                                                }}
                                            >
                                                {tooltipText}

                                                <div
                                                    className="tooltip-arrow"
                                                    style={{
                                                        border: `solid ${tooltipStyles.backgroundColor}`,
                                                        borderWidth: `0 3px 3px 0`,
                                                        display: "inline-block",
                                                        padding: ` 3px`,
                                                        transform: "rotate(-135deg)",
                                                        borderWidth: tooltipStyles.arrowHeight,
                                                        background: tooltipStyles.backgroundColor,
                                                        height: "10px",
                                                        position: "absolute",
                                                        top: '558px',
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    )}
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>

            </Row>
        </div>
    );
}

export default Right;
