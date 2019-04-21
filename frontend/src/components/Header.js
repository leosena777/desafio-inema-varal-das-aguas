import React from "react";

const MenuTop = () => (
  <div className="menu-topo clearfix">
    <div className="container">
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <nav>
            <ul className="list-unstyled m-0">
              <li>
                <a href="#" className="active">
                  INÍCIO
                </a>
              </li>
              <li>
                <a href="#"> O CONCURSO </a>
              </li>
              <li>
                <a href="#"> SOBRE </a>
              </li>
              <li>
                <a href="#"> REGRAS </a>
              </li>
              <li>
                <a href="#"> INSCRIÇÃO </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
);

const Header = () => (
  <header>
    <MenuTop />
    <div className="box-logo">
      <h1>Varal das Águas</h1>
      <h2>Concurso de Fotografia</h2>
    </div>
  </header>
);

export default Header;
