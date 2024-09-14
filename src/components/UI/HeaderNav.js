import { textNavStatic } from '../../assets/data-static/textStatic';
import { Image, Container, Nav, Navbar } from "react-bootstrap";

import logoUvi from "../../assets/imgs/logoUviBubble.png";


export const HeaderNav = () => {

    const onScrollSmooth = (id) => {

        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    }

    return <Navbar className="navbar_custom_content" expand="lg" fixed="top" >
        <Container>
            <Navbar.Brand  >
                <Image width={50} src={logoUvi} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="ms-auto">
                    {
                        textNavStatic.map((e, i) => <Nav.Link key={i} onClick={() => onScrollSmooth(e.id)} activeClass="active" className="navli_custom_content">{e.title}</Nav.Link>)
                    }
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>

}

