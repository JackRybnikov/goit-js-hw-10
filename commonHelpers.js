import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as p,i as f}from"./assets/vendor-77e16229.js";const d=document.querySelector("#datetime-picker"),o=document.querySelector("[data-start]"),h=document.querySelector(".field-days .value"),y=document.querySelector(".field-hours .value"),S=document.querySelector(".field-minutes .value"),b=document.querySelector(".field-seconds .value");let r;const a=[];o.setAttribute("disabled",!0);function v(t){const n=Math.floor(t/864e5),c=Math.floor(t%864e5/36e5),l=Math.floor(t%864e5%36e5/6e4),m=Math.floor(t%864e5%36e5%6e4/1e3);return{days:n,hours:c,minutes:l,seconds:m}}function C(t){let e=t;if(t>=0){const{days:s,hours:u,minutes:i,seconds:n}=v(t);return b.textContent=`${n}`.padStart(2,"0"),S.textContent=`${i}`.padStart(2,"0"),y.textContent=`${u}`.padStart(2,"0"),h.textContent=`${s}`.padStart(2,"0"),e-=1e3,e}else return clearInterval(a[0]),a.pop(),d.removeAttribute("disabled"),e}o.addEventListener("click",()=>{let t=r.getTime()-Date.now();t-=t%1e3;const e=setInterval(()=>{t=C(t)},1e3);a.push(e),o.setAttribute("disabled",!0),d.setAttribute("disabled",!0)});const g={enableTime:!0,time_24hr:!0,defaultDate:new Date,dateFormat:"Y-m-d H:i",minuteIncrement:1,onClose(t){r=t[0],r.getTime()<=Date.now()?(f.error({iconUrl:"../img/Group.svg",backgroundColor:"#EF4040",messageColor:"#fff",position:"topCenter",message:"Please choose a date in the future"}),o.setAttribute("disabled",!0)):o.removeAttribute("disabled")}};p("#datetime-picker",g);
//# sourceMappingURL=commonHelpers.js.map