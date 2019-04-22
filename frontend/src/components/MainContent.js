import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function modalInscricao(e) {
  e.preventDefault();
  console.log("The link was clicked.");
}

class Boxinfo extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Cadastro</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form method="post" action="http://localhost:3001">
              <Row>
                <Col>
                  <Form.Group controlId="formNome">
                    <Form.Label>Nome do colaborador:</Form.Label>
                    <Form.Control
                      type="text"
                      name="nome"
                      placeholder="Insira seu nome"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formNomeFoto">
                    <Form.Label>Nome da foto</Form.Label>
                    <Form.Control
                      type="text"
                      name="nomefoto"
                      placeholder="Insira o nome da foto"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group controlId="formNome">
                    <Form.Label>Local da foto:</Form.Label>
                    <Form.Control
                      type="text"
                      name="local"
                      placeholder="Insira o local da foto"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formNomeFoto">
                    <Form.Label>data de registro</Form.Label>
                    <Form.Control
                      type="text"
                      name="nomefoto"
                      placeholder="MM/DD/YYYY"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group controlId="formArquivoFoto">
                    <Form.Label>Anexar Foto</Form.Label>
                    <Form.Control
                      type="file"
                      name="nomefoto"
                      placeholder="MM/DD/YYYY"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group controlId="formNome">
                    <Form.Label>Termos:</Form.Label>
                    <div className="termos">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer sollicitudin, lorem ut molestie commodo, nisi
                        neque hendrerit arcu, a luctus velit risus vitae dui.
                        Integer volutpat tellus id scelerisque pharetra. Class
                        aptent taciti sociosqu ad litora torquent per conubia
                        nostra, per inceptos himenaeos. Aliquam faucibus
                        consequat neque, vitae vestibulum purus tincidunt ut.
                        Aenean nec pharetra elit. Praesent a urna tortor. Nullam
                        feugiat dignissim neque, vel ullamcorper eros. Sed
                        tincidunt, justo vel consequat fringilla, purus sem
                        suscipit mi, a interdum neque risus vel dolor. Fusce
                        dignissim ac est id tincidunt. Suspendisse non ex a
                        augue maximus suscipit eget in mauris. Nulla pulvinar
                        lectus dolor, id imperdiet sapien facilisis sed. Aliquam
                        erat volutpat. Duis sodales porttitor dolor non rhoncus.
                        Proin pharetra imperdiet diam, quis iaculis eros
                        interdum in. Etiam malesuada consequat tortor tempor
                        varius. Integer commodo ante eget est mollis, sed
                        malesuada felis interdum.
                      </p>

                      <p>
                        Praesent nec tellus faucibus, venenatis neque vel,
                        ullamcorper dui. Nunc pulvinar dapibus erat eget
                        sagittis. Suspendisse sed neque in eros suscipit
                        volutpat vitae in nisl. Donec quis metus ullamcorper,
                        fringilla dolor id, aliquet libero. Vivamus nec ipsum
                        sagittis, mollis augue ac, laoreet nisl. Donec ornare
                        congue eros sit amet vestibulum. Curabitur ac odio
                        turpis. Quisque commodo massa quis egestas aliquet.
                      </p>

                      <p>
                        Sed sed venenatis arcu. Donec molestie dolor et magna
                        ultrices consectetur. Interdum et malesuada fames ac
                        ante ipsum primis in faucibus. Ut placerat metus nec
                        facilisis vestibulum. Praesent non odio sit amet ante
                        semper consectetur eu in turpis. Etiam quis nibh quam.
                        Donec mi ex, venenatis eget sem quis, iaculis rutrum
                        ligula. Ut lacinia aliquam quam iaculis euismod. Aliquam
                        erat volutpat. Proin sit amet elementum magna, tincidunt
                        laoreet ipsum. Maecenas venenatis turpis et vehicula
                        facilisis. Phasellus aliquam ante non ultrices dapibus.
                        Ut vel sollicitudin nibh.
                      </p>
                    </div>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group controlId="formBasicChecbox">
                <Form.Check
                  type="checkbox"
                  label="Eu li e concordo com o s termos"
                />
              </Form.Group>

              <Modal.Footer className="p-0 pt-3">
                <Button variant="primary" type="submit">
                  Enviar
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>

        <div className="box-info">
          <div className="box-blue">
            <div className="titulo">EXPOSIÇÃO DE FOTOS </div>
            <div className="texto">
              20 á 24/03/2017 na divisórias da Ouvidoria (em frente ao elevador)
            </div>

            <div className="titulo mt-5">APRESENTAÇÃO</div>
            <div className="texto">20/03/2017 das 16:30h ás 17:30h.</div>
          </div>
          <div className="box-bt">
            <button className="mt-5" onClick={this.handleShow}>
              FAÇA SUA INSCRIÇÃO
            </button>
          </div>
        </div>
      </>
    );
  }
}

const MainContent = () => (
  <main className="pb-5">
    <section>
      <article>
        <div className="container">
          <div className="row">
            <div className="mainContainer col-10 offset-1">
              <div className="row">
                <div className="col-6 offset-1 mt-5">
                  <h1>O CONCURSO</h1>
                  <div className="row">
                    <p className="mt-4 col-10">
                      Concurso de fotografia para todos os técnicos do Inema
                      para exposição de fotos que retratem a temática água (os
                      desafios e as belezas encontradas em campo) pelos
                      colaboradores. <br /> Além de uma apresentação cultural
                      com um artista de rua (poesia, musica, cordel) que aborde
                      a temática água.
                    </p>
                  </div>
                </div>
                <div className="col-4">
                  <Boxinfo />
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-10 offset-1 mt-5">
                  <h1>SOBRE</h1>
                  <p>Objetivos</p>
                  <p>
                    Promover a seleção de 100 fotografias produzidas por
                    colaboradores do Inema em comemoração ao dia da água, que
                    será elaborado um mural de fotos denominado de “Varal das
                    Águas”.
                  </p>

                  <p>Dos participante</p>
                  <p>
                    Poderão participar do Concurso Fotográfico 2017: Todos os
                    colaboradores do Instituto do Meio Ambiente e Recursos
                    Hídricos - INEMA e Secretaria do Meio Ambiente -SEMA.
                  </p>

                  <p>Das especificações das fotografias participantes</p>
                  <p>
                    As fotografias devem abordar somente o tema OS DESAFIOS E AS
                    BELEZAS RETRATADAS EM CAMPO REFERENTE À SITUAÇÃO HIDRICA,
                    devendo ser obrigatoriamente a foto ser tirada em inspeção
                    em campo a serviço do Inema.
                  </p>

                  <p>Premiação final do concurso</p>
                  <p>
                    As 05 (cinco) primeiras fotografia que for mais votada nas
                    redes sociais (Facebook e Instagram) do Inema, receberá como
                    prêmio.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-10 offset-1 mt-5">
                  <h1>REGRAS</h1>
                  <p>
                    Todas as fotos que retrate da temática água (tais como
                    situação de secas ou excedentes hídricos, as belezas e os
                    desafios de se trabalhar com os recursos hídricos etc.)
                    serão bem vindas.
                  </p>
                  <ul className="list-regras">
                    <li> As fotos devem ser originais e sem alterações.</li>
                    <li>
                      As fotos devem expor os ambientes visitados em inspeções
                      técnicas realizadas durante inspeções pelo INEMA.
                    </li>
                    <li>
                      Fotografias que incluam pessoas serão desclassificadas.
                    </li>
                    <li>
                      As fotos devem ser enviadas com um formulário de inscrição
                      preenchido.
                    </li>
                    <li>As fotografias do concurso se tornarão publicas.</li>
                    <li>
                      O fotógrafo da foto que receber mais votos ganhará um
                      prêmio simbólico.
                    </li>
                    <li>Cada pessoa só poderá cadastrar uma única foto.</li>
                    <li>A votação será por meio das redes sociais do INEMA.</li>
                    <li>As vagas serão limitadas apenas 50.</li>
                  </ul>
                  <p className="mt-4 mb-5">
                    A foto vencedora irá ganhar um kit de brinde (Agenda,
                    caneta,livro).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  </main>
);

export default MainContent;
