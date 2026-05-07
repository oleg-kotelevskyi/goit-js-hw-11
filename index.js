import{a as m,S as p,i as n}from"./assets/vendor-BAQQTdrx.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const g="55731551-c8f9ff8e643af6b8c00d564fe",y="https://pixabay.com/api/";async function h(r){const o={key:g,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await m.get(y,{params:o})).data}const d=document.querySelector(".gallery"),b=new p(".gallery a",{captionsData:"alt",captionDelay:250});function v(r){const o=r.map(({webformatURL:s,largeImageURL:i,tags:e,likes:t,views:a,comments:u,downloads:f})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${i}">
        <img 
          class="gallery-image" 
          src="${s}" 
          alt="${e}" 
        />
      </a>
      <div class="info">
        <div class="info-item">
          <b>Likes</b>
          <span>${t}</span>
        </div>
        <div class="info-item">
          <b>Views</b>
          <span>${a}</span>
        </div>
        <div class="info-item">
          <b>Comments</b>
          <span>${u}</span>
        </div>
        <div class="info-item">
          <b>Downloads</b>
          <span>${f}</span>
        </div>
      </div>
    </li>`).join("");d.innerHTML=o,b.refresh()}function L(){d.innerHTML=""}function F(){const r=document.querySelector(".loader");r&&r.classList.remove("hidden")}function c(){const r=document.querySelector(".loader");r&&r.classList.add("hidden")}const l=document.querySelector(".search-form");l.addEventListener("submit",r=>{r.preventDefault();const o=r.currentTarget.elements.query.value.trim();if(!o){n.warning({message:"Please enter a search query"});return}L(),F(),h(o).then(s=>{c(),s.hits.length===0?n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#FFFFFF",iconColor:"#FFFFFF",theme:"dark",progressBarColor:"#B51B1B"}):v(s.hits)}).catch(s=>{c(),n.error({message:"Something went wrong. Please try again later."}),console.error(s)}).finally(()=>{l.reset()})});
//# sourceMappingURL=index.js.map
