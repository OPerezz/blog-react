import React from "react";

import ModalLogin from "../components/ModalLogin";

import './header.scss';

function Header() {
     const linkVazio = "javaScript:void(0)"

     function handleOpenModal() {
          const modal = document.getElementById('modal-login')

          if(!modal.classList.contains('active')){
               modal.classList.add('active')
          }else{
               modal.classList.remove('active')
          }
     }

     return (
          <>
               <div className="header">
                    <div className="logo">
                         <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="" />
                    </div>
                    <nav>
                         <ul>
                              <a href="/"><li className="menu-grow">Blog</li></a>
                              <a href="/"><li className="menu-grow">Pilotos</li></a>
                              <a href="/"><li className="menu-grow">Circuitos</li></a>
                              <a href="/"><li className="menu-grow">Campeonato</li></a>
                              <a href="/"><li className="live-demo">Live Demo</li></a>
                              <button href={linkVazio} onClick={() => handleOpenModal()}><li className="menu-grow"><img src={`${process.env.PUBLIC_URL}/login-icon.png`} alt="" /></li></button>
                         </ul>
                         <ModalLogin/>
                    </nav>
               </div>
          </>
     );
}

export default Header;