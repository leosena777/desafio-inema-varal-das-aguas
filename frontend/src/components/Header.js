import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class MenuTop extends React.Component {
  

  render() {
    return (
      <div className="menu-topo clearfix">
        <div className="container" >
          <Navbar
            collapseOnSelect
            className="navbar-expand-md"
            expand="lg"
            variant="dark"
          >
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#topo">INÍCIO</Nav.Link>
                <Nav.Link href="#concurso">O CONCURSO </Nav.Link>
                <Nav.Link href="#sobre">SOBRE</Nav.Link>
                <Nav.Link href="#regras">REGRAS</Nav.Link>
                <Nav.Link href="#inscricao">
                  INSCRIÇÃO
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}

const Header = () => (
  <header>
    <MenuTop />
    <div className="container">
      <div className="box-logo">
        <h1>Varal das Águas</h1>
        <h2>Concurso de Fotografia</h2>
      </div>
    </div>
  </header>
);

export default Header;
