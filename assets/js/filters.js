document.addEventListener("DOMContentLoaded",()=>{
  const grid=document.getElementById("productGrid");
  if(!grid||!window.YK||!window.YK.PRODUCTS)return;
  const PRODUCTS=window.YK.PRODUCTS;
  const params=new URLSearchParams(window.location.search);
  function getChecked(name){return Array.from(document.querySelectorAll(`input[name="${name}"]:checked`)).map(el=>el.value);}
  function applyFilters(){
    let list=[...PRODUCTS];
    const styles=getChecked("style"),colours=getChecked("colour"),collections=getChecked("collection");
    const onlyNew=document.getElementById("filterNew")?.checked;
    const onlyBest=document.getElementById("filterBest")?.checked;
    const sort=document.getElementById("sortSelect")?.value||"featured";
    if(styles.length)list=list.filter(p=>styles.includes(p.style));
    if(colours.length)list=list.filter(p=>colours.includes(p.colour));
    if(collections.length)list=list.filter(p=>p.collection.some(c=>collections.includes(c)));
    if(onlyNew)list=list.filter(p=>p.isNew);
    if(onlyBest)list=list.filter(p=>p.isBest);
    if(sort==="price-asc")list.sort((a,b)=>a.price-b.price);
    else if(sort==="price-desc")list.sort((a,b)=>b.price-a.price);
    else if(sort==="name")list.sort((a,b)=>a.name.localeCompare(b.name));
    else if(sort==="new")list.sort((a,b)=>(b.isNew?1:0)-(a.isNew?1:0));
    window.YK.renderProducts(list,"productGrid");
    const countEl=document.getElementById("resultCount");
    if(countEl)countEl.textContent=list.length===PRODUCTS.length?`Showing all ${list.length} designs`:`Showing ${list.length} of ${PRODUCTS.length} designs`;
  }
  document.querySelectorAll(".shop-filters input, #sortSelect").forEach(el=>el.addEventListener("change",applyFilters));
  const urlStyle=params.get("style"),urlColour=params.get("colour"),urlCollection=params.get("collection");
  if(urlStyle){const cb=document.querySelector(`input[name="style"][value="${urlStyle}"]`);if(cb)cb.checked=true;}
  if(urlColour){const cb=document.querySelector(`input[name="colour"][value="${urlColour}"]`);if(cb)cb.checked=true;}
  if(urlCollection){const cb=document.querySelector(`input[name="collection"][value="${urlCollection}"]`);if(cb)cb.checked=true;}
  const pageType=document.body.dataset.page;
  if(pageType==="new-arrivals"){const o=document.getElementById("filterNew");if(o)o.checked=true;}
  if(pageType==="bestsellers"){const o=document.getElementById("filterBest");if(o)o.checked=true;}
  applyFilters();
  document.getElementById("clearFilters")?.addEventListener("click",()=>{
    document.querySelectorAll(".shop-filters input[type=checkbox]").forEach(c=>c.checked=false);
    const s=document.getElementById("sortSelect");if(s)s.value="featured";applyFilters();
  });
});
