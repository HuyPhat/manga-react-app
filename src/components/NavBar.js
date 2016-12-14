/**
 * Created by phathuy on 12/13/16.
 */
import React from 'react'
import {Navbar, Nav, NavItem, Image, FormGroup, FormControl, Glyphicon} from 'react-bootstrap'
import '../styles/NavBar.scss'

const NavBar = () => {
    return (
        <Navbar inverse collapseOnSelect fixedTop fluid>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#"><Image src="logo-manga-rock.jpg" responsive /></a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1} href="#">HOME</NavItem>
                    <NavItem eventKey={2} href="#">ALL MANGA</NavItem>
                    <NavItem eventKey={2} href="#">LATEST UPDATES</NavItem>
                    <NavItem eventKey={2} href="#">DISCOVER</NavItem>
                </Nav>
                <Navbar.Form pullRight>
                    <FormGroup>
                        <FormControl type="text" placeholder="Search manga, character, ..." />
                        <FormControl.Feedback>
                            <Glyphicon glyph="search" />
                        </FormControl.Feedback>
                    </FormGroup>
                </Navbar.Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar