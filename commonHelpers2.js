import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as n}from"./assets/vendor-77e16229.js";document.querySelector(".submit-btn");const u=document.querySelector(".input-delay"),l=document.querySelector(".radio-input"),r=document.querySelector(".form");let s=!0;function a(e){n.success({backgroundColor:"#B5EA7C",messageColor:"#fff",position:"topCenter",message:`✅ Fulfilled promise in ${e}ms`})}function c(e){n.error({backgroundColor:"#FFBEBE",messageColor:"#fff",position:"topCenter",message:`❌ Rejected promise in ${e}ms`})}const m=({delay:e,shouldResolve:t})=>new Promise((o,i)=>{setTimeout(()=>{t?o(e):i(e)},e)});l.addEventListener("change",e=>{e.stopPropagation(),e.target.value==="fulfilled"?s=!0:s=!1});r.addEventListener("submit",e=>{e.preventDefault();const t=u.value;m({delay:t,shouldResolve:s}).then(o=>a(o)).catch(o=>c(o)),r.reset()});
//# sourceMappingURL=commonHelpers2.js.map
