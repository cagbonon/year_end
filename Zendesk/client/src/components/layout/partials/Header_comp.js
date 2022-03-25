import React from "react";
import { Navbar, Nav, /*NavbarBrand*/} from "react-bootstrap";
import logo from "../../../assets/img/Epitech.png";
export const Header = ({tabRoute = []}) => {
    let array = [];
    for(let i = 0; i < tabRoute.length; i++) {
      array.push(
        <Nav.Link key={i} href={tabRoute[i].is_link} >{tabRoute[i].is_label}</Nav.Link>
      );
    }
    
    return <Navbar collapseOnSelect bg="dark"
     variant="dark" expand="md">
        <Navbar.Brand>
            <img src={logo} alt="logo" width="150px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="ms-auto">
                {array}

            </Nav>
        </Navbar.Collapse>
    </Navbar>;
}