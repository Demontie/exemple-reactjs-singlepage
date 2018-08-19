import React, { Component } from 'react';
import { Navbar, NavbarBrand, Collapse, Nav, NavItem, NavbarToggler } from 'reactstrap';
import { Link } from 'react-router-dom';
class Header extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      
        
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Logo</NavbarBrand>
          <NavbarToggler onClick={this.toggle}/>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/" className="nav-link">Inicio</Link>
              </NavItem>
              <NavItem>
                <Link to="/sobre" className="nav-link">Quem somos?</Link>
              </NavItem>
              <NavItem>
              <Link to="/servicos" className="nav-link">Serviços</Link>
              </NavItem>
              <NavItem>
              <Link to="/contatos" className="nav-link">Contatos</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}

export default Header;