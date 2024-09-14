import { MdEmail } from 'react-icons/md';
import { Row, Col, Form, Button } from "react-bootstrap";
import { BsLinkedin, BsFillSendFill } from 'react-icons/bs';


export const ContactSection = () => {

    return <div className="contact_section_content">
        <Row>
            <Col xs={12} md={6} lg={6}>
                <div className="contact_title_content">
                    <h1>Contact</h1>
                </div>
                <div>
                    <ul className="contact_ul">
                        <li><BsLinkedin /> <span><a href="https://www.linkedin.com/company/universo-i/" target="_blank" rel="noreferrer">/uvi</a> </span></li>
                        <li><MdEmail /> <span>info@uvi.com.ar</span></li>
                    </ul>
                </div>
            </Col>

            <Col xs={12} md={6} lg={4} style={{ margin: "0 auto" }}>
                <Form autoComplete="off">
                    <Form.Group className="mb-3" style={{ textAlign: "left" }}>
                        <Form.Label className='contact_input_label'>Name</Form.Label>
                        <Form.Control className='contact_input_control' type="text" placeholder="Enter your name" />
                    </Form.Group>
                    <Form.Group className="mb-3" style={{ textAlign: "left" }}>
                        <Form.Label className='contact_input_label'>E-mail</Form.Label>
                        <Form.Control className='contact_input_control' type="email" placeholder="Enter your email" />
                    </Form.Group>
                    <Form.Group className="mb-3" style={{ textAlign: "left" }}>
                        <Form.Label className='contact_input_label'>Mobile</Form.Label>
                        <Form.Control className='contact_input_control' type="text" placeholder="Enter your phone" />
                    </Form.Group>
                    <Form.Group className="mb-3" style={{ textAlign: "left" }}>
                        <Form.Label className='contact_input_label'>Attached file</Form.Label>
                        <Form.Control className='contact_input_control' type="file" />
                    </Form.Group>
                    <Form.Group className="mb-3" style={{ textAlign: "left" }}>
                        <Form.Label className='contact_input_label'>Select plan</Form.Label>
                        <Form.Select className='contact_input_control'  >
                            <option value="">Select a plan</option>
                            <option>Plan 1</option>
                            <option>Plan 2</option>
                            <option>Plan 3</option>
                        </Form.Select>
                    </Form.Group>
                    <div style={{ textAlign: "right" }} className='contact_input_submit'>
                        <Button type="submit" onMouseDown={(e) => e.preventDefault()}>
                            <span>Send</span> <BsFillSendFill />
                        </Button>
                    </div>
                </Form>
            </Col>
        </Row>
    </div>;
}