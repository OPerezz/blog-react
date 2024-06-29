import React from "react";

function Topnews() {
     return (
          <div className="top-news">
               <div className="top-news__inner">
                    <div className="top-news__inner__hero flex">
                         <div className="content-hero__left flex">
                              <h3>
                                   Max vence e lidera com folga.
                              </h3>
                              <h4>
                                   Max Verstappen brilhou no Red Bull Ring e conquistou a pole position para a Corrida Sprint do GP da Áustria,
                                   a 11ª etapa da temporada 2024 da Fórmula 1. {/* O piloto holandês superou Lando Norris da McLaren na disputa acirrada pela primeira colocação,
                                   demonstrando mais uma vez sua maestria ao volante. */}
                              </h4>
                              <div className="hero__btn__container">
                                   <button>
                                        <div className="arrow">
                                             <span>&#8594;</span>
                                        </div>
                                        <p>Ler a matéria</p>
                                   </button>
                              </div>
                         </div>
                         <div className="content-hero__right"></div>
                    </div>
               </div>
          </div>
     )
}

export default Topnews;