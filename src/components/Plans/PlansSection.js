import { MdAttachMoney } from 'react-icons/md';
import { Row, Col, Card, ListGroup } from "react-bootstrap";
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';


export const PlansSection = () => {

    const plans_title = [
        "Plan 1",
        "Plan 2",
        "Plan 3"
    ];

    const plans_items = [
        {
            plan1: [
                {
                    information: "Information 1",
                    isStroke: false
                },
                {
                    information: "Information 2",
                    isStroke: false
                },
                {
                    information: "Information 3",
                    isStroke: true
                },

                {
                    information: "Information 4",
                    isStroke: true
                },
                {
                    information: "Information 5",
                    isStroke: true
                }
            ],

            plan2: [
                {
                    information: "Information 1",
                    isStroke: false
                },
                {
                    information: "Information 2",
                    isStroke: false
                },
                {
                    information: "Information 3",
                    isStroke: false
                },

                {
                    information: "Information 4",
                    isStroke: true
                },
                {
                    information: "Information 5",
                    isStroke: true
                }
            ],

            plan3: [
                {
                    information: "Information 1",
                    isStroke: false
                },
                {
                    information: "Information 2",
                    isStroke: false
                },
                {
                    information: "Information 3",
                    isStroke: false
                },

                {
                    information: "Information 4",
                    isStroke: false
                },
                {
                    information: "Information 5",
                    isStroke: false
                }
            ],
        }
    ];

    const plans_price = [
        "100,00",
        "200,00",
        "300,00"
    ];


    return <div className="plans_section_content">

        <Row>
            <Col md={8} style={{ margin: "0 auto" }}>
                <div className="content_title">
                    <h1>Plan information</h1>
                </div>
            </Col>
        </Row>

        <Row style={{ justifyContent: "center" }}>
            {
                plans_title.map((e, i) => <Col xs={12} lg={3} md={6} key={i} style={{ marginBottom: "5%" }}>
                    <Card className="plans_card_content h-100">

                        <Card.Header className="card_header" style={{ textAlign: "center" }}>{e}</Card.Header>

                        <Card.Text>
                            <ListGroup as="ol">

                                {i === 0 && plans_items.map((e, i) => <>
                                    {
                                        e.plan1.map((e) => <ListGroup.Item key={i} className="plans_item" as="li" style={{ textDecoration: e.isStroke ? "line-through" : "" }}>
                                            {!e.isStroke ? <AiFillCheckCircle className="plans_check" /> : <AiFillCloseCircle className="plans_no_check" />} <span>{e.information}</span>
                                        </ListGroup.Item>)
                                    }
                                </>)}

                                {i === 1 && plans_items.map((e, i) => <>
                                    {
                                        e.plan2.map((e) => <ListGroup.Item key={i} className="plans_item" as="li" style={{ textDecoration: e.isStroke ? "line-through" : "" }}>
                                            {!e.isStroke ? <AiFillCheckCircle className="plans_check" /> : <AiFillCloseCircle className="plans_no_check" />} <span>{e.information}</span>
                                        </ListGroup.Item>)
                                    }
                                </>)}


                                {i === 2 && plans_items.map((e, i) => <>
                                    {
                                        e.plan3.map((e) => <ListGroup.Item key={i} className="plans_item" as="li" style={{ textDecoration: e.isStroke ? "line-through" : "" }}>
                                            {!e.isStroke ? <AiFillCheckCircle className="plans_check" /> : <AiFillCloseCircle className="plans_no_check" />} <span>{e.information}</span>
                                        </ListGroup.Item>)
                                    }
                                </>)}
                            </ListGroup>
                        </Card.Text>

                        <Card.Header className="card_footer" style={{ textAlign: "center" }}>
                            <MdAttachMoney /> <span>{plans_price[i]}</span>
                        </Card.Header>
                    </Card>
                </Col>)
            }
        </Row>
    </div>;
}
