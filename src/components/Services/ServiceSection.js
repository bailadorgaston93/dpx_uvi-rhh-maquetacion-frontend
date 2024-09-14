import { textServicesStatic } from "../../assets/data-static/textStatic";
import { Row, Col, Card, Image } from "react-bootstrap";

export const ServiceSection = () => {

    const image_services = [
        "https://cdn-icons-png.flaticon.com/128/893/893505.png",
        "https://cdn-icons-png.flaticon.com/128/4213/4213130.png",
        "https://cdn-icons-png.flaticon.com/128/8976/8976594.png"
    ];

    const description_services = [
        "We improve your presentation to recruiters, thus achieving efficient interviews. A well-written CV is what will make the first impression on your future employer.",
        "We take care of adjusting your LinkedIn profile according to your experiences and objectives. A striking profile will attract visibility to your profile and lead to possible job offers.",
        "We are aware of your desire to improve yourself professionally, we know and understand that you want to perform adequately in an interview and that is why we are here, to help you face it through our advice and simulations."
    ];

    return <div className="service_section_content">
        <Row>
            <Col md={8} style={{ margin: "0 auto" }}>
                <div className="content_title">
                    <h1>Our services</h1>
                </div>

                <div className="content_subtitle">
                    <h5>
                        {'"'}We are the key that will open the way to your next path.{'"'} <br />
                        We offer these services
                    </h5>
                </div>
            </Col>
        </Row>

        <Row style={{ justifyContent: "center" }}>
            {
                textServicesStatic.map((e, i) => <Col xs={12} lg={3} md={6} key={i} style={{ marginBottom: "5%" }}>
                    <Card className="services_card_content h-100">
                        <div style={{ textAlign: "center" }}>
                            <Image width={100} src={image_services[i]} />
                        </div>
                        <Card.Body>
                            <Card.Title style={{ textAlign: "center", fontWeight: "bold" }}>{e.title}</Card.Title>
                            <Card.Text>
                                {description_services[i]}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>)
            }
        </Row>
    </div>;
}