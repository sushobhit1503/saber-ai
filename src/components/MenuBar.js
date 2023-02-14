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
import "../styles/Toolbar.css";
import Logo from '../assets/saber-logo.png';
import { logOut } from '../backend-calls/authentication';
import { useNavigate } from 'react-router-dom';

const MenuBar = ()  => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropDown, setDropDown] = useState (false);
  const [isDropDown1, setDropDown1] = useState (false);
  const navigate = useNavigate ()
  const toggle = () => setIsOpen(!isOpen);
  const submitLogout = () => {
    const res = logOut ()
    res.then((result) => {
      console.log(result)
    }).catch (err => console.log(err.message))
    navigate ("/login")
  }
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
  return (
    <div>
      <Navbar style={{boxShadow: "5px 5px 12px #BEC8E4, -4px -4px 10px #FFFFFF"}}  light expand ="sm" >
        <NavbarBrand href="/" style={{display:"flex", alignItems:"center", justifyContent:"center", textDecoration:"none"}}>
            <img src={Logo} alt="saber-ai" className='logo-image card' />
            <div className='logo-name'>SABER AI</div>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink className='toolbar-comp' href="/home">
                Home
              </NavLink>
            </NavItem>
            <UncontrolledDropdown onMouseOut={changeDropDownClose} onMouseOver={changeDropDown} nav inNavbar>
              <DropdownToggle className='toolbar-comp'  nav caret>
                Services
              </DropdownToggle>
              <DropdownMenu className={isDropDown ? `drop-down-show` : ``} right style={{backgroundColor: "#E4EBF5"}}>
                <DropdownItem className='toolbar-content' href='/email-gen'>Email Gen</DropdownItem>
                <DropdownItem className='toolbar-content' href='/blog-article'>Blog Article</DropdownItem>
                <DropdownItem className='toolbar-content' href='/twitter-assist'>Twitter Assist</DropdownItem>
                <DropdownItem className='toolbar-content' href='/cold-email'>Cold Email</DropdownItem>
                <DropdownItem className='toolbar-content' href='/social-ads'>Social Ads</DropdownItem>
                <DropdownItem className='toolbar-content' href='/code-gen'>Code Gen</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink className='toolbar-comp' href="/ask--me-anything">
                Ask me Anything
              </NavLink>
            </NavItem>
          </Nav>
          <NavLink className='toolbar-comp' href="/payments">
            UPGRADE TO PRO
          </NavLink>
          <UncontrolledDropdown onMouseOut={changeDropDownClose1} onMouseOver={changeDropDown1}>
              <DropdownToggle className='toolbar-comp' nav caret>
                Profile
              </DropdownToggle>
              <DropdownMenu className={isDropDown1 ? `drop-down-show` : ``} style={{backgroundColor: "#E4EBF5"}} end>
                <DropdownItem className='toolbar-content' href='/manage-account'>Manage Account</DropdownItem>
                <DropdownItem className='toolbar-content' href='/help'>Help</DropdownItem>
                <DropdownItem className='toolbar-content' href='/payments'>Pricing</DropdownItem>
                <DropdownItem className='toolbar-content' href='https://www.saber-ai.com/t-c'>Terms & Policies</DropdownItem>
                <DropdownItem divider />
                <DropdownItem className='toolbar-content' onClick={submitLogout}>Log Out</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MenuBar;