(()=>{"use strict";const e=document.getElementById("header__categories");let t,s,o=!1;e.addEventListener("mousedown",(r=>{o=!0,e.classList.add("active"),t=r.pageX-e.offsetLeft,s=e.scrollLeft})),e.addEventListener("mouseleave",(()=>{o=!1,e.classList.remove("active")})),e.addEventListener("mouseup",(()=>{o=!1,e.classList.remove("active")})),e.addEventListener("mousemove",(r=>{if(!o)return;r.preventDefault();const a=3*(r.pageX-e.offsetLeft-t);e.scrollLeft=s-a})),window.addEventListener("click",(()=>{document.querySelector(".header__search__dropdown").classList.remove("_active"),document.querySelector(".header__geo__dropdown")?.classList.remove("_active")}))})();