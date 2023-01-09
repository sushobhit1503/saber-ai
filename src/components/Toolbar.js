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
import "../styles/Toolbar.css";

function Toolbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar full color='transparent' expand="sm">
      <NavbarBrand style={{display:"flex", alignItems:"center"}}>
        <img src={Logo} alt="saber-ai" className='logo-image' />
        <div className='logo-name'>SABER AI</div>
      </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink className='toolbar-content' href="/">Home</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle className='toolbar-content' nav caret>
                Services
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href='/email-gen'>Email Gen</DropdownItem>
                <DropdownItem href='/blog-article'>Blog Article</DropdownItem>
                <DropdownItem href='/twitter-assist'>Twitter Assist</DropdownItem>
                <DropdownItem href='/cold-email'>Cold Email</DropdownItem>
                <DropdownItem href='/social-ads'>Social Ads</DropdownItem>
                <DropdownItem href='/code-gen'>Code Gen</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink className='toolbar-content' href="/ask-me-anything">
                Ask Me Anything
              </NavLink>
            </NavItem>
          </Nav>
          <UncontrolledDropdown>
              <DropdownToggle className='toolbar-content' nav caret>
                Profile
              </DropdownToggle>
              <DropdownMenu right>
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
    </div>
  );
}

export default Toolbar;