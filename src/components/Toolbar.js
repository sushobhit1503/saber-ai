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
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../backend-calls/authentication';

function Toolbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropDown, setDropDown] = useState (false);
  const [isDropDown1, setDropDown1] = useState (false);
  const [cookies, setCookie]= useCookies()
  const navigate = useNavigate ()

  const toggle = () => setIsOpen(!isOpen);
  const changeDropDown = () => {
    setDropDown(true)
  }
  const changeDropDownClose = () => {
    setDropDown(false)
  }
  const changeDropDown1 = () => {
    setDropDown1(true)
  }
  const changeDropDownClose1 = () => {
    setDropDown1(false)
  }
  const submitLogout = () => {
    const res = logOut ()
    res.then((result) => {
      console.log(result)
    }).catch (err => console.log(err.message))
    navigate ("/login")
  }
  return (
    <Card>
      <Navbar light expand="sm">
      <NavbarBrand href='/' style={{display:"flex", alignItems:"center", justifyContent:"center", textDecoration:"none"}}>
        <img src={Logo} alt="saber-ai" className='logo-image card' />
        <div className='logo-name'>SABER AI</div>
      </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink style={{textDecoration:"none"}} href="/">
                <div className='toolbar-comp card' style={{fontSize:"1rem", margin:"0px", padding:"0.25rem 0.5rem"}}>
                  Home
                </div>
              </NavLink>
            </NavItem>
            <UncontrolledDropdown onMouseOut={changeDropDownClose} onMouseOver={changeDropDown} nav inNavbar>
              <div className='toolbar-comp card' style={{fontSize:"0.8rem", marginTop:"7px", padding:"0rem"}}>
                <DropdownToggle style={{textDecoration:"none", color:"black"}} nav caret>
                  Services
                </DropdownToggle>
              </div>
              <DropdownMenu className={isDropDown ? `drop-down-show` : ``} style={{backgroundColor: "#E4EBF5"}} end>
                <DropdownItem className='toolbar-comp' href='/email-gen'>Email Gen</DropdownItem>
                <DropdownItem className='toolbar-comp' href='/blog-article'>Blog Article</DropdownItem>
                <DropdownItem className='toolbar-comp' href='/twitter-assist'>Twitter Assist</DropdownItem>
                <DropdownItem className='toolbar-comp' href='/cold-email'>Cold Email</DropdownItem>
                <DropdownItem className='toolbar-comp' href='/social-ads'>Social Ads</DropdownItem>
                <DropdownItem className='toolbar-comp' href='/code-gen'>Code Gen</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink style={{textDecoration:"none"}} href="/ask-me-anything">
                <div className='toolbar-comp card' style={{fontSize:"1rem", margin:"0px", padding:"0.25rem 0.5rem"}}>
                  Ask me anything
                </div>
              </NavLink>
            </NavItem>
          </Nav>
          <NavLink style={{textDecoration:"none"}} href="/payments">
            <div className='toolbar-comp card' style={{fontSize:"1rem", margin:"0px", padding:"0.25rem 0.5rem"}}>
              UPGRADE TO PRO
            </div>
          </NavLink>
          {cookies.user ? 
          <UncontrolledDropdown onMouseOut={changeDropDownClose1} onMouseOver={changeDropDown1}>
              <div className='toolbar-comp card' style={{fontSize:"1rem", margin:"0px", padding:"0rem"}}>
                <DropdownToggle style={{textDecoration:"none", color:"var(--black-color)"}} nav caret>
                  Profile
                </DropdownToggle>
              </div>
              <DropdownMenu className={isDropDown1 ? `drop-down-show` : ``} style={{backgroundColor: "#E4EBF5"}} end>
                <DropdownItem className='toolbar-comp' href='/manage-account'>Manage Account</DropdownItem>
                <DropdownItem className='toolbar-comp' href='/help'>Help</DropdownItem>
                <DropdownItem className='toolbar-comp' href='/payments'>Pricing</DropdownItem>
                <DropdownItem className='toolbar-comp' href='https://www.saber-ai.com/t-c'>Terms & Policies</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={submitLogout} className='toolbar-comp'>Log Out</DropdownItem>
              </DropdownMenu>
          </UncontrolledDropdown> : 
          <NavLink style={{textDecoration:"none"}} href="/login">
            <div className='toolbar-comp card' style={{fontSize:"1rem", margin:"0px", padding:"0.25rem 0.5rem"}}>
              LOGIN
            </div>
        </NavLink>}
        </Collapse>
      </Navbar>
    </Card>
  );
}

export default Toolbar;