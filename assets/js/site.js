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
  E.MACRO = {'ha-noi':'norte','ninh-binh':'norte','ha-long':'norte','sa-pa':'norte','cao-bang':'norte','pu-luong':'norte','ha-giang':'norte','da-nang':'centro','hoi-an':'centro','hue':'centro','ho-chi-minh':'sur','mekong':'sur','phu-quoc':'sur'};
  E.macro = function(r){ return E.MACRO[r]||''; };
  E.ZONAS = {norte:'Norte de Vietnam',centro:'Centro de Vietnam',sur:'Sur de Vietnam'};
  E.CATS = {cultura:'Cultura y patrimonio',gastronomia:'Gastronomía y sobremesa',naturaleza:'Naturaleza sin esfuerzo',montanas:'Montañas y carretera',playa:'Playa y descanso'};
  E.EFFORT = {suave:'Esfuerzo muy suave',moderado:'Esfuerzo moderado',activo:'Más activo'};
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
    var nn = t.nights+' noche'+(t.nights===1?'':'s');
    return '<a class="tcard" href="viaje.html?id='+encodeURIComponent(t.id)+'">'+
      '<img src="'+E.esc(t.image)+'" alt="" loading="lazy">'+
      (t.video?'<video muted loop playsinline preload="none" data-src="'+E.esc(t.video)+'" aria-hidden="true"></video>':'')+
      '<span class="tbadge">'+nn+'</span>'+
      (t.effort?'<span class="teffort">'+E.EFFORT[t.effort]+'</span>':'')+
      '<span class="tinfo"><span class="tkicker">'+t.days+' días · '+t.route.map(E.esc).join(' · ')+'</span>'+
      '<span class="ttitle">'+E.esc(t.title)+'</span>'+
      '<span class="tfoot"><span class="tprice">'+E.priceHTML(t)+'</span><span class="tgo">Ver viaje →</span></span></span></a>';
  };
  /* vídeo de vista previa: al pasar el ratón (o al verse en móvil) */
  E.bindVideos = function(){
    if(matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var touch = matchMedia('(hover: none)').matches;
    function play(v){ if(!v.getAttribute('src')) v.src=v.dataset.src; var p=v.play(); if(p&&p.catch) p.catch(function(){}); v.classList.add('on'); }
    function stop(v){ v.pause(); v.classList.remove('on'); }
    function vid(e){ var c=e.target.closest&&e.target.closest('.tcard'); return c?{c:c,v:c.querySelector('video')}:null; }
    if(!touch){
      document.addEventListener('mouseover',function(e){var x=vid(e); if(x&&x.v&&!x.v.classList.contains('on')) play(x.v);});
      document.addEventListener('mouseout',function(e){var x=vid(e); if(x&&x.v&&!x.c.contains(e.relatedTarget)) stop(x.v);});
      document.addEventListener('focusin',function(e){var x=vid(e); if(x&&x.v) play(x.v);});
      document.addEventListener('focusout',function(e){var x=vid(e); if(x&&x.v) stop(x.v);});
    } else if(window.IntersectionObserver){
      var io=new IntersectionObserver(function(es){es.forEach(function(en){var v=en.target.querySelector('video'); if(!v) return; (en.isIntersecting&&en.intersectionRatio>.6)?play(v):stop(v);});},{threshold:[0,.6]});
      var scan=function(){document.querySelectorAll('.tcard:not([data-io])').forEach(function(c){c.setAttribute('data-io','1'); io.observe(c);});};
      new MutationObserver(scan).observe(document.body,{childList:true,subtree:true}); scan();
    }
  };
  E.ready(E.bindVideos);
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
  var NAV = [
    {t:'Destinos',h:'destinos.html',k:['destinos.html','destino.html'],sub:[['Norte','destinos.html?zona=norte'],['Centro','destinos.html?zona=centro'],['Sur','destinos.html?zona=sur'],['Ver todo en el mapa','destinos.html']]},
    {t:'Experiencias',h:'viajes.html',k:['viajes.html','viaje.html','constructor.html','alojamiento.html'],sub:Object.keys(E.CATS).map(function(c){return [E.CATS[c],'viajes.html?cat='+c];}).concat([['Diseña tu viaje','constructor.html'],['Alojamiento','alojamiento.html']])},
    {t:'Nosotros',h:'nosotros.html',k:['nosotros.html','opiniones.html','garantias.html','guia.html','mayores.html','creditos.html'],sub:[['Quiénes somos','nosotros.html'],['Opiniones','opiniones.html'],['Para mayores','mayores.html'],['Guía de viaje','guia.html'],['Garantías y políticas','garantias.html']]}
  ];
  E.navHTML = function(page){
    return NAV.map(function(n){var cur=n.k.indexOf(page)>=0;
      return '<div class="nav-item"><a class="nav-top" href="'+n.h+'"'+(cur?' aria-current="page"':'')+'>'+n.t+'</a><div class="nav-sub">'+n.sub.map(function(s){return '<a href="'+s[1]+'">'+s[0]+'</a>';}).join('')+'</div></div>';}).join('')+
      '<a class="btn small nav-cta" href="contacto.html">Pedir presupuesto</a>';
  };
  function render(){
    var page = location.pathname.split('/').pop() || 'index.html';
    var hd = document.getElementById('site-header');
    if(hd){
      hd.outerHTML = (C.demo?'<div class="demo-banner">Vista previa — algunos datos están pendientes de confirmar</div>':'')+
        '<header class="site-header"><div class="container"><a class="brand" href="index.html" aria-label="'+C.brand+'"><img class="brand-logo" src="images/logo.png" alt="'+C.brand+'"></a>'+
        '<button class="nav-toggle" aria-expanded="false" aria-controls="nav">Menú</button>'+
        '<nav class="nav" id="nav" aria-label="Principal">'+E.navHTML(page)+
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
