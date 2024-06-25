import React, { useEffect } from "react";


function NavBlog() {
     useEffect(() => {
          const listMenuBlog = document.querySelectorAll('.list-menu-blog');
          const slider = document.querySelector('.slider')

          console.log(listMenuBlog)

          listMenuBlog.forEach((item, index) => {
               if (index === 0) {
                    document.fonts.ready.then(() => {
                         console.log(`${item.offsetWidth}px`)
                         slider.style.width = `${item.offsetWidth}px`
                    })
               }

               item.addEventListener('click', () => {
               
                    const activeItem = document.querySelector('.active-menu-blog')
                    console.log(activeItem)

                    if (activeItem) {
                         activeItem.classList.remove('active-menu-blog')
                    }

                    if (!item.classList.contains('active-menu-blog')) {
                         let elWidth = item.offsetWidth;
                         let elLeft = item.offsetLeft;
                         slider.style.width = `${elWidth}px`;
                         slider.style.transform = `translateX(${elLeft}px)`
                         item.classList.add('active-menu-blog');
                    }
               })
          });
     }
          , [])



     return (
          <div className="nav-blog">
               <h3>Blog</h3>

               <div className="menu-blog">
                    <div className="slider"></div>
                    <ul>
                         <li className="list-menu-blog active-menu-blog">Todas</li>
                         <li className="list-menu-blog">Ultimas</li>
                         <li className="list-menu-blog">Top</li>
                         <li className="list-menu-blog">Pilotos</li>
                         <li className="list-menu-blog">Campeonato</li>
                         <li className="list-menu-blog">Equipes</li>
                         <li className="list-menu-blog">Fia</li>
                    </ul>
               </div>
          </div>
     )
}

export default NavBlog;