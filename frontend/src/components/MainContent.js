import React from "react";

const Boxinfo = () => (
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
      <button className="mt-5">FAÇA SUA INSCRIÇÃO</button>
    </div>
  </div>
);

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
