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
import { Card } from 'ui-neumorphism';
import "../styles/Toolbar.css";

function Toolbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Card>
      <Navbar color='transparent' expand="sm">
      <NavbarBrand style={{display:"flex", alignItems:"center"}}>
        <img src={Logo} alt="saber-ai" className='logo-image' />
        <div className='logo-name'>SABER AI</div>
      </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/">
                <Card style={{padding:"0.5rem 1rem"}}>
                  Home
                </Card>
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <Card style={{padding:"0.5rem 1 rem", margin:"0.5rem"}}>
                <DropdownToggle nav caret>
                  Services
                </DropdownToggle>
              </Card>
              <DropdownMenu end>
                <DropdownItem href='/email-gen'>Email Gen</DropdownItem>
                <DropdownItem href='/blog-article'>Blog Article</DropdownItem>
                <DropdownItem href='/twitter-assist'>Twitter Assist</DropdownItem>
                <DropdownItem href='/cold-email'>Cold Email</DropdownItem>
                <DropdownItem href='/social-ads'>Social Ads</DropdownItem>
                <DropdownItem href='/code-gen'>Code Gen</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/ask-me-anything">
                <Card style={{padding:"0.5rem 1rem"}}>
                  Ask me anything
                </Card>
              </NavLink>
            </NavItem>
          </Nav>
          <NavLink href="/ask-me-anything">
            <Card inset style={{padding:"0.5rem 1rem"}}>
              Upgrade to Pro
            </Card>
          </NavLink>
               <UncontrolledDropdown>
               <Card style={{padding:"0.5rem 1 rem", margin:"0.5rem"}}>
                <DropdownToggle nav caret>
                  Profile
                </DropdownToggle>
              </Card>
              <DropdownMenu end>
                <DropdownItem href='/manage-account'>Manage Account</DropdownItem>
                <DropdownItem href='/help'>Help</DropdownItem>
                <DropdownItem href='/pricing'>Pricing</DropdownItem>
                <DropdownItem href='/help'>Terms & Policies</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Log Out</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
        </Collapse>
      </Navbar>
    </Card>
  );
}

export default Toolbar;