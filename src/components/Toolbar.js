import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import Logo from '../assets/saber-logo.png';
import { Button, Card } from 'ui-neumorphism';
import "../styles/Toolbar.css";

function Toolbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Card>
      <Navbar expand="sm">
      <NavbarBrand href='/' style={{display:"flex", alignItems:"center", justifyContent:"center", textDecoration:"none"}}>
        <img src={Logo} alt="saber-ai" className='logo-image card' />
        <div className='logo-name'>SABER AI</div>
      </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink className="toolbar-comp" style={{textDecoration:"none"}} href="/">
                <Button style={{padding:"0.25rem 0.5rem", fontSize:"1rem", backgroundColor:"#BEC8E4"}}>
                  Home
                </Button>
              </NavLink>
            </NavItem>
            <UncontrolledDropdown className="toolbar-comp" nav inNavbar>
              <Button style={{padding:"0.25rem 0.5rem", margin:"0.5rem", fontSize: "1rem"}}>
                <DropdownToggle style={{textDecoration:"none", color:"var(--black-color)"}} nav caret>
                  Services
                </DropdownToggle>
              </Button>
              <DropdownMenu style={{backgroundColor: "#E4EBF5", boxShadow: "5px 5px 12px #BEC8E4, -4px -4px 10px #FFFFFF"}} end>
                <DropdownItem className='toolbar-comp' href='/email-gen'>Email Gen</DropdownItem>
                <DropdownItem className='toolbar-comp' href='/blog-article'>Blog Article</DropdownItem>
                <DropdownItem className='toolbar-comp' href='/twitter-assist'>Twitter Assist</DropdownItem>
                <DropdownItem className='toolbar-comp' href='/cold-email'>Cold Email</DropdownItem>
                <DropdownItem className='toolbar-comp' href='/social-ads'>Social Ads</DropdownItem>
                <DropdownItem className='toolbar-comp' href='/code-gen'>Code Gen</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink className="toolbar-comp" style={{textDecoration:"none"}} href="/ask-me-anything">
                <Button style={{padding:"0.25rem 0.5rem"}}>
                  Ask me anything
                </Button>
              </NavLink>
            </NavItem>
          </Nav>
          <NavLink className="toolbar-comp" style={{textDecoration:"none"}} href="/payments">
            <Button>
              UPGRADE TO PRO
            </Button>
          </NavLink>
          <UncontrolledDropdown className="toolbar-comp">
              <Button style={{padding:"0.25rem 0rem", margin:"0.5rem"}}>
                <DropdownToggle style={{textDecoration:"none", color:"var(--black-color)"}} nav caret>
                  Profile
                </DropdownToggle>
              </Button>
              <DropdownMenu style={{backgroundColor: "#E4EBF5", boxShadow: "5px 5px 12px #BEC8E4, -4px -4px 10px #FFFFFF"}} end>
                <DropdownItem className='toolbar-comp' href='/manage-account'>Manage Account</DropdownItem>
                <DropdownItem className='toolbar-comp' href='/help'>Help</DropdownItem>
                <DropdownItem className='toolbar-comp' href='/payments'>Pricing</DropdownItem>
                <DropdownItem className='toolbar-comp' href='https://www.saber-ai.com/t-c'>Terms & Policies</DropdownItem>
                <DropdownItem divider />
                <DropdownItem className='toolbar-comp'>Log Out</DropdownItem>
              </DropdownMenu>
          </UncontrolledDropdown>
        </Collapse>
      </Navbar>
    </Card>
  );
}

export default Toolbar;