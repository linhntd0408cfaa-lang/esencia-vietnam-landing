/* Esencia Vietnam — utilidades compartidas. Uso: window.E */
(function(){
  var D = window.ESENCIA_DATA, C = D.config;
  var E = window.E = {D:D, C:C};

  E.ready = function(fn){ document.readyState==='loading' ? document.addEventListener('DOMContentLoaded',fn) : fn(); };
  E.esc = function(s){ return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];}); };
  E.q = function(k){ return new URLSearchParams(location.search).get(k); };
  E.byId = function(list,id){ for(var i=0;i<list.length;i++) if(list[i].id===id) return list[i]; return null; };
  E.trip = function(id){ return E.byId(D.trips,id); };
  E.stop = function(id){ return E.byId(D.stops,id); };
  E.regionName = function(r){ return {'da-nang':'Da Nang','hoi-an':'Hoi An','hue':'Hue','ha-noi':'Hanói','ninh-binh':'Ninh Binh','ha-long':'Ha Long','sa-pa':'Sa Pa','cao-bang':'Cao Bang','pu-luong':'Pu Luong','ha-giang':'Ha Giang','ho-chi-minh':'Ciudad Ho Chi Minh','mekong':'Delta del Mekong','phu-quoc':'Phu Quoc'}[r]||r; };
  E.walkLabel = function(w){ return {bajo:'Poca caminata',medio:'Caminata moderada',alto:'Mucha caminata / escaleras'}[w]||w; };
  E.todo = function(t){ return '<span class="todo">'+E.esc(t)+'</span>'; };

  /* enlaces de contacto */
  E.waLink = function(text){ return 'https://wa.me/'+C.whatsapp+(text?'?text='+encodeURIComponent(text):''); };
  E.mailLink = function(subject, body){ return 'mailto:'+C.email+'?subject='+encodeURIComponent(subject||'')+(body?'&body='+encodeURIComponent(body):''); };

  /* precio: única puerta de entrada. Si showPrices=false o no hay precio => solicitar presupuesto */
  E.priceHTML = function(trip){
    var p = trip && trip.price;
    if(!C.showPrices || !p || !p.amount) return '<span class="price">Solicitar presupuesto</span>';
    var n = p.amount.toLocaleString('es-ES');
    return '<span class="price">desde <b>'+p.currency+' '+n+'</b> por '+E.esc(p.per)+'</span>'+
      (p.sample?'<span class="sample-tag">precio de ejemplo</span>':'');
  };
  E.priceNote = function(trip){
    var p = trip && trip.price;
    return (C.showPrices && p && p.basis) ? 'Precio calculado para '+E.esc(p.basis)+'. El precio por persona puede variar según el tamaño del grupo.' : '';
  };

  /* tarjetas */
  E.tripCard = function(t){
    return '<article class="card"><img class="media" loading="lazy" src="'+E.esc(t.image)+'" alt="">'+
      '<div class="body"><div class="tags"><span class="tag">'+t.days+' días / '+t.nights+' noches</span>'+(t.tier?'<span class="tag">Alojamiento '+E.esc(t.tier)+'</span>':'')+''+
      t.groups.map(function(g){return '<span class="tag">'+E.esc(g)+'</span>';}).join('')+'</div>'+
      '<h3>'+E.esc(t.title)+'</h3><div class="route">'+t.route.map(E.esc).join(' · ')+'</div>'+
      '<p>'+E.esc(t.tagline)+'</p>'+
      '<div class="foot"><div>'+E.priceHTML(t)+'</div><a class="btn small" href="viaje.html?id='+encodeURIComponent(t.id)+'">Ver viaje</a></div></div></article>';
  };
  E.stopCard = function(s){
    return '<article class="card"><img class="media" loading="lazy" src="'+E.esc(s.image)+'" alt="'+E.esc(s.name)+'">'+
      '<div class="body"><div class="tags"><span class="tag">'+E.regionName(s.region)+'</span><span class="tag">'+E.esc(s.duration)+'</span><span class="tag">'+E.walkLabel(s.walking)+'</span></div>'+
      '<h3>'+E.esc(s.name)+'</h3><p>'+E.esc(s.summary)+'</p>'+
      '<div class="foot"><span class="route">Mejor época: '+E.esc(s.bestSeason)+'</span><a class="btn small ghost" href="destino.html?id='+encodeURIComponent(s.id)+'">Ver</a></div></div></article>';
  };

  /* aviso de ritmo: máx. 2 paradas principales por día; el día de llegada/salida sin paradas principales */
  E.paceCheck = function(dayStops, opts){
    opts = opts||{};
    var main = dayStops.filter(function(id){var s=E.stop(id);return s&&s.weight==='principal';}).length;
    var msgs = [];
    if(main>2) msgs.push('Este día tiene '+main+' paradas principales. Para un grupo con mayores o niños recomendamos un máximo de 2.');
    if(opts.arrival && main>0) msgs.push('El día de llegada conviene dejarlo ligero tras el vuelo.');
    return msgs;
  };

  /* crédito de imagen (CC BY-SA) */
  E.credit = function(src){
    var c = D.credits[src];
    return c ? '<div class="credit">Foto: '+E.esc(c.author)+' / '+(c.url?'<a href="'+E.esc(c.url)+'" target="_blank" rel="noopener">':'')+E.esc(c.license)+(c.url?'</a>':'')+'</div>' : '';
  };

  /* Leaflet bajo demanda (OpenStreetMap, sin servidor) */
  E.loadLeaflet = function(cb){
    if(window.L) return cb();
    var l=document.createElement('link'); l.rel='stylesheet'; l.href='https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'; document.head.appendChild(l);
    var s=document.createElement('script'); s.src='https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'; s.onload=cb; document.head.appendChild(s);
  };
  E.newMap = function(el){
    var m = L.map(el,{scrollWheelZoom:false}).setView([16.0,108.1],8);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',{maxZoom:19,subdomains:'abcd',attribution:'© OpenStreetMap contributors © CARTO'}).addTo(m);
    return m;
  };

  /* cabecera, pie, botón WhatsApp */
  var NAV = [['viajes.html','Viajes'],['constructor.html','Diseña tu viaje'],['destinos.html','Destinos'],['alojamiento.html','Alojamiento'],['mayores.html','Para mayores'],['guia.html','Guía'],['nosotros.html','Nosotros'],['contacto.html','Contacto']];
  function render(){
    var page = location.pathname.split('/').pop() || 'index.html';
    var hd = document.getElementById('site-header');
    if(hd){
      hd.outerHTML = (C.demo?'<div class="demo-banner">Vista previa — algunos datos están pendientes de confirmar</div>':'')+
        '<header class="site-header"><div class="container"><a class="brand" href="index.html">'+C.brand+'<small>Viajes privados · Vietnam</small></a>'+
        '<button class="nav-toggle" aria-expanded="false" aria-controls="nav">Menú</button>'+
        '<nav class="nav" id="nav" aria-label="Principal">'+NAV.map(function(n){return '<a href="'+n[0]+'"'+(n[0]===page?' aria-current="page"':'')+'>'+n[1]+'</a>';}).join('')+
        '</nav></div></header>';
      var t=document.querySelector('.nav-toggle'), nv=document.getElementById('nav');
      t.addEventListener('click',function(){var o=nv.classList.toggle('open');t.setAttribute('aria-expanded',o);});
    }
    var ft = document.getElementById('site-footer');
    if(ft){
      ft.outerHTML = '<footer class="site-footer"><div class="container"><div class="grid c3">'+
        '<div><h4>'+C.brand+'</h4><p>Viajes privados por Vietnam para familias de varias generaciones y grupos de amigos. Atención en español.</p></div>'+
        '<div><h4>Contacto</h4><ul><li>WhatsApp: <a href="'+E.waLink()+'">'+C.whatsappLabel+'</a></li><li><a href="'+E.mailLink('Consulta')+'">'+C.email+'</a></li><li><a href="contacto.html">Solicitar presupuesto</a></li></ul></div>'+
        '<div><h4>Información</h4><ul><li><a href="garantias.html">Garantías y políticas</a></li><li><a href="opiniones.html">Opiniones</a></li><li><a href="guia.html">Guía de viaje</a></li><li><a href="creditos.html">Créditos de fotos</a></li></ul></div></div>'+
        '<div class="legal">Licencia de operador de viajes internacionales: '+(C.licenseNumber?E.esc(C.licenseNumber):E.todo('número de licencia'))+'</div></div></footer>';
    }
    if(!document.querySelector('.wa-fab')){
      var a=document.createElement('a'); a.className='wa-fab'; a.href=E.waLink('Hola, quisiera información sobre un viaje a Vietnam.'); a.target='_blank'; a.rel='noopener'; a.textContent='WhatsApp'; document.body.appendChild(a);
    }
  }
  E.ready(render);

  /* nieve opcional: llamar E.snow() solo en la portada */
  E.snow = function(){
    if(matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var c=document.createElement('canvas'); c.id='snow'; document.body.appendChild(c);
    var x=c.getContext('2d'), w,h,f=[];
    function rs(){w=c.width=innerWidth;h=c.height=innerHeight;} addEventListener('resize',rs); rs();
    for(var i=0;i<60;i++) f.push({x:Math.random()*w,y:Math.random()*h,r:1.5+Math.random()*2.8,s:.4+Math.random(),d:Math.random()*1.2-.6,g:Math.random()<.35});
    (function tick(){x.clearRect(0,0,w,h);f.forEach(function(p){x.beginPath();x.fillStyle=p.g?'rgba(217,189,142,.85)':'rgba(255,255,255,.85)';x.arc(p.x,p.y,p.r,0,7);x.fill();p.y+=p.s;p.x+=p.d*.5;if(p.y>h+5){p.y=-5;p.x=Math.random()*w;}});requestAnimationFrame(tick);})();
  };
})();
