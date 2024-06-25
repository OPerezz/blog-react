import React from "react";

import './modalLogin.scss'

const ModalLogin = () => {

     function handleCloseModal() {
          const modal = document.getElementById('modal-login')

          if (modal.classList.contains('active')) {
               modal.classList.remove('active')
          }
     }

     function inputValidator(e) {

          if (e.target.value !== '' && e.target == document.activeElement) {
               e.target.nextSibling.classList.add('labelactive')
          } else {
               e.target.nextSibling.classList.remove('labelactive')
          }
     }

     return (
          <div id="modal-login" className="modal-login">
               <div id="blackdrop" onClick={() => handleCloseModal()}>
               </div>
               <div className="form-login">
                    <h4>Login</h4>

                    <form>
                         <div className="animate-input">
                              <input id="email" name="email" type="email" onChange={inputValidator} className="input-validator" />
                              <label htmlFor="email">Usuário</label>
                         </div>

                         <div className="animate-input">
                              <input id="password" name="password" type="password" onChange={inputValidator} className="input-validator" />
                              <label htmlFor="password">Senha</label>
                         </div>

                         <span className="span-form-login" id="wrong-password" style={{ display: 'none' }}>*Email ou senha incorreto. Tente novamente ou clique em "Esqueceu a senha?" para escolher outra.</span>
                         <span className="span-form-login" id="forgot"><a href="/">Esqueci a senha</a></span>

                         <button>Entrar</button>
                    </form>
               </div>
          </div>
     )
}

export default ModalLogin