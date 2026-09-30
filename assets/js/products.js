/* YK Polish Co. — Dummy product catalogue */
const PRODUCTS = [
  {id:"yk-001",name:"Rose Nude",slug:"rose-nude",price:899,style:"minimal",colour:"nude",collection:["bridal","everyday","minimalist"],isNew:false,isBest:true},
  {id:"yk-002",name:"Cherry Glaze",slug:"cherry-glaze",price:949,style:"glam",colour:"red",collection:["party","occasion"],isNew:true,isBest:false},
  {id:"yk-003",name:"Milk French",slug:"milk-french",price:999,style:"french",colour:"nude",collection:["bridal","corporate","everyday"],isNew:false,isBest:true},
  {id:"yk-004",name:"Lilac Dream",slug:"lilac-dream",price:1099,style:"floral",colour:"purple",collection:["party","vacation","college"],isNew:true,isBest:false},
  {id:"yk-005",name:"Midnight Chrome",slug:"midnight-chrome",price:1199,style:"chrome",colour:"black",collection:["party","statement","occasion"],isNew:false,isBest:true},
  {id:"yk-006",name:"Blush Petal",slug:"blush-petal",price:949,style:"cute",colour:"pink",collection:["everyday","college","gifts"],isNew:false,isBest:false},
  {id:"yk-007",name:"Gold Dust",slug:"gold-dust",price:1149,style:"glitter",colour:"nude",collection:["festive","party","occasion"],isNew:true,isBest:false},
  {id:"yk-008",name:"Sage Minimal",slug:"sage-minimal",price:899,style:"minimal",colour:"green",collection:["everyday","corporate","minimalist"],isNew:false,isBest:false},
  {id:"yk-009",name:"Ocean Blue",slug:"ocean-blue",price:999,style:"glam",colour:"blue",collection:["vacation","party"],isNew:false,isBest:false},
  {id:"yk-010",name:"Bridal Pearl",slug:"bridal-pearl",price:1299,style:"glam",colour:"nude",collection:["bridal","occasion","gifts"],isNew:true,isBest:true},
  {id:"yk-011",name:"Berry Jam",slug:"berry-jam",price:949,style:"glam",colour:"red",collection:["festive","party"],isNew:false,isBest:false},
  {id:"yk-012",name:"Cloud White",slug:"cloud-white",price:899,style:"minimal",colour:"nude",collection:["everyday","minimalist","corporate"],isNew:false,isBest:false},
  {id:"yk-013",name:"Holo Spark",slug:"holo-spark",price:1099,style:"glitter",colour:"pink",collection:["party","college","statement"],isNew:true,isBest:false},
  {id:"yk-014",name:"Espresso French",slug:"espresso-french",price:999,style:"french",colour:"black",collection:["corporate","everyday","minimalist"],isNew:false,isBest:false},
  {id:"yk-015",name:"Lavender Mist",slug:"lavender-mist",price:949,style:"minimal",colour:"purple",collection:["everyday","moms-to-be","gifts"],isNew:false,isBest:false},
  {id:"yk-016",name:"Ruby Chrome",slug:"ruby-chrome",price:1199,style:"chrome",colour:"red",collection:["festive","party","statement"],isNew:false,isBest:true},
];
function formatPrice(n){return "₹"+n.toLocaleString("en-IN");}
function colourClass(c){return({nude:"ph-nude",pink:"ph-pink",red:"ph-red",black:"ph-black",blue:"ph-blue",green:"ph-green",purple:"ph-purple"})[c]||"ph-nude";}
function productCardHTML(p){
  const badge=p.isNew?'<span class="badge new">New</span>':(p.isBest?'<span class="badge best">Bestseller</span>':"");
  const wa=encodeURIComponent('Hi YK Polish Co.! Interested in "'+p.name+'" ('+formatPrice(p.price)+'). Help with sizing & order?');
  return `<article class="product-card" data-id="${p.id}" data-style="${p.style}" data-colour="${p.colour}" data-price="${p.price}">
    <div class="media ${colourClass(p.colour)}">${badge}<div class="placeholder"><span>💅</span><small>${p.style}</small></div></div>
    <div class="body"><div class="name">${p.name}</div><div class="meta">${p.style} · ${p.colour}</div>
    <div class="price-row"><span class="price">${formatPrice(p.price)}</span>
    <a class="wa-btn" href="https://wa.me/910000000000?text=${wa}" target="_blank" rel="noopener">WhatsApp</a></div></div></article>`;
}
function renderProducts(list,id){
  const el=document.getElementById(id); if(!el)return;
  if(!list.length){el.innerHTML='<div class="empty-state"><div class="emoji">💅</div><p>No designs match your filters.</p></div>';return;}
  el.innerHTML=list.map(productCardHTML).join("");
}
window.YK=window.YK||{};
window.YK.PRODUCTS=PRODUCTS;window.YK.formatPrice=formatPrice;window.YK.productCardHTML=productCardHTML;window.YK.renderProducts=renderProducts;
