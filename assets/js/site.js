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
  E.regionName = function(r){ return {'da-nang':'Da Nang','hoi-an':'Hoi An','hue':'Hue','mai-chau':'Mai Chau','ha-noi':'Hanói','ninh-binh':'Ninh Binh','ha-long':'Ha Long','sa-pa':'Sa Pa','cao-bang':'Cao Bang','pu-luong':'Pu Luong','ha-giang':'Ha Giang','ho-chi-minh':'Ciudad Ho Chi Minh','mekong':'Delta del Mekong','phu-quoc':'Phu Quoc'}[r]||r; };
  E.walkLabel = function(w){ return {bajo:'Poca caminata',medio:'Caminata moderada',alto:'Mucha caminata / escaleras'}[w]||w; };
  E.MACRO = {'mai-chau':'norte','ha-noi':'norte','ninh-binh':'norte','ha-long':'norte','sa-pa':'norte','cao-bang':'norte','pu-luong':'norte','ha-giang':'norte','da-nang':'centro','hoi-an':'centro','hue':'centro','ho-chi-minh':'sur','mekong':'sur','phu-quoc':'sur'};
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
    var span=opts.span||1; if(main>2*span) msgs.push((span>1?'Estos '+span+' días tienen ':'Este día tiene ')+main+' paradas principales. Para un grupo con mayores recomendamos un máximo de 2 al día.');
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
    var m = L.map(el,{scrollWheelZoom:false,minZoom:5,maxBounds:[[6.5,100.5],[25.5,112.5]],maxBoundsViscosity:.8}).setView([16.0,107.6],6);
    var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:18,attribution:'© OpenStreetMap contributors'}).addTo(m), swapped=false;
    osm.on('tileerror',function(){ if(swapped) return; swapped=true; m.removeLayer(osm); L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',{maxZoom:18,attribution:'Tiles © Esri'}).addTo(m); });
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
      return '<div class="nav-item"><a class="nav-top" href="'+n.h+'"'+(cur?' aria-current="page"':'')+'>'+n.t+'</a><div class="nav-sub">'+n.sub.map(function(s){return '<a href="'+s[1]+'">'+s[0]+'</a>';}).join('')+'</div></div>';}).join('');
  };

  /* ---------- utilidades de diálogo / panel ---------- */
  var FOCUSABLE = 'a[href],button:not([disabled]),input:not([disabled]):not([type=hidden]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';
  function trapTab(root, e){
    if(e.key!=='Tab') return;
    var f = Array.prototype.filter.call(root.querySelectorAll(FOCUSABLE), function(x){return x.offsetParent!==null || x===document.activeElement;});
    if(!f.length) return;
    var first=f[0], last=f[f.length-1];
    if(e.shiftKey && (document.activeElement===first || !root.contains(document.activeElement))){ e.preventDefault(); last.focus(); }
    else if(!e.shiftKey && document.activeElement===last){ e.preventDefault(); first.focus(); }
  }
  function lockScroll(on){ document.documentElement.classList.toggle('no-scroll', !!on); }

  /* ---------- panel de menú (hamburguesa) ---------- */
  var menuOpener = null;
  function menuHTML(){
    var zonas = Object.keys(E.ZONAS).map(function(z){return ['<a href="destinos.html?zona='+z+'">'+E.esc(E.ZONAS[z].replace(' de Vietnam',''))+'</a>'];}).join('');
    var exps = Object.keys(E.CATS).map(function(c){return '<a href="viajes.html?cat='+c+'">'+E.esc(E.CATS[c])+'</a>';}).join('')+
      '<a href="constructor.html">Diseña tu viaje</a><a href="alojamiento.html">Alojamiento</a>';
    return '<div class="menu-backdrop" data-menu-close></div>'+
      '<aside class="menu-panel" id="menu-panel" role="dialog" aria-modal="true" aria-label="Menú principal" tabindex="-1">'+
      '<div class="menu-top"><span class="menu-title">Menú</span><button type="button" class="icon-btn" data-menu-close aria-label="Cerrar menú"><svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg></button></div>'+
      '<a class="menu-wa" href="'+E.waLink()+'" target="_blank" rel="noopener"><span>WhatsApp</span><b>'+E.esc(C.whatsappLabel)+'</b></a>'+
      '<form class="menu-search" action="viajes.html" method="get" role="search"><label class="sr" for="menu-q">Buscar viajes</label><input id="menu-q" type="search" name="q" placeholder="Buscar un viaje o destino" autocomplete="off"><button type="submit" aria-label="Buscar"><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M16 16l5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></button></form>'+
      '<nav class="menu-links" aria-label="Menú">'+
      '<div class="menu-group"><a class="menu-big" href="destinos.html">Destinos</a><div class="menu-sub">'+zonas+'</div></div>'+
      '<div class="menu-group"><a class="menu-big" href="viajes.html">Experiencias</a><div class="menu-sub">'+exps+'</div></div>'+
      '<div class="menu-group"><a class="menu-big" href="nosotros.html">Nosotros</a><div class="menu-sub"><a href="nosotros.html">Quiénes somos</a><a href="opiniones.html">Opiniones</a><a href="mayores.html">Para mayores</a><a href="guia.html">Guía de viaje</a><a href="garantias.html">Garantías y políticas</a></div></div>'+
      '<div class="menu-group"><a class="menu-big" href="contacto.html">Contacto</a></div>'+
      '</nav>'+
      '<a class="menu-ta" href="'+E.esc(C.tripadvisor||'#')+'" target="_blank" rel="noopener">★ 5.0/5 en Tripadvisor · 282 opiniones</a>'+
      '</aside>';
  }
  function openMenu(btn){
    var w=document.getElementById('menu-wrap'); if(!w) return;
    menuOpener = btn||document.activeElement;
    w.hidden=false;
    void w.offsetWidth;
    w.classList.add('open');
    lockScroll(true);
    var hb=document.querySelector('.hamburger'); if(hb) hb.setAttribute('aria-expanded','true');
    var p=document.getElementById('menu-panel'); p.focus();
  }
  function closeMenu(noFocus){
    var w=document.getElementById('menu-wrap'); if(!w||w.hidden) return;
    w.classList.remove('open');
    var hb=document.querySelector('.hamburger'); if(hb) hb.setAttribute('aria-expanded','false');
    setTimeout(function(){ if(!w.classList.contains('open')) w.hidden=true; },260);
    if(!document.getElementById('enquire') || !document.getElementById('enquire').open) lockScroll(false);
    if(!noFocus && menuOpener && menuOpener.focus) menuOpener.focus();
  }

  /* ---------- modal de consulta ---------- */
  var MESES = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  var PREFIJOS = ['+34','+351','+52','+54','+57','+56','+44','+1','+84'];
  var COMO = ['Facebook','Instagram','Google','Tripadvisor','Recomendación de un amigo','Otro'];
  function opts(list, sel, first){ return (first?'<option value="">'+first+'</option>':'')+list.map(function(x){var v=Array.isArray(x)?x[0]:x, l=Array.isArray(x)?x[1]:x; return '<option value="'+E.esc(v)+'"'+(v===sel?' selected':'')+'>'+E.esc(l)+'</option>';}).join(''); }
  function enquiryHTML(){
    var y=new Date().getFullYear(), years=[y,y+1,y+2];
    var days=[]; for(var d=4; d<=16; d++) days.push([String(d),d+' días']); days.push(['más de 16','Más de 16 días']);
    var ppl=[]; for(var p=1;p<=12;p++) ppl.push([String(p),p===1?'1 persona':p+' personas']); ppl.push(['más de 12','Más de 12 personas']);
    var dests = [['norte','Norte de Vietnam'],['centro','Centro de Vietnam'],['sur','Sur de Vietnam'],['no-se','Todavía no lo sé']];
    return '<div class="enq-head"><h2 id="enq-title">Consulta tu viaje</h2><button type="button" class="icon-btn" data-enq-close aria-label="Cerrar"><svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg></button></div>'+
    '<div class="enq-body" id="enq-body">'+
    '<form id="enq-form" novalidate>'+
      '<p class="enq-intro">Cuéntanos cómo imaginas el viaje. Te enviaremos una propuesta sin compromiso.</p>'+
      '<h3 class="enq-sec">Tu viaje</h3>'+
      '<fieldset class="enq-fs"><legend>¿A dónde os gustaría ir?</legend><div class="enq-checks">'+
        dests.map(function(x){return '<label class="chk"><input type="checkbox" name="dest" value="'+x[1]+'"><span>'+x[1]+'</span></label>';}).join('')+
      '</div></fieldset>'+
      '<div class="enq-row"><div class="enq-f"><label for="enq-mes">¿Cuándo?</label><select id="enq-mes" name="mes">'+opts(MESES,'','Mes')+'</select></div>'+
      '<div class="enq-f"><label for="enq-anio" class="sr">Año</label><select id="enq-anio" name="anio">'+opts(years.map(String),'','Año')+'</select></div></div>'+
      '<div class="enq-row"><div class="enq-f"><label for="enq-dias">¿Cuántos días?</label><select id="enq-dias" name="dias">'+opts(days,'','Elige')+'</select></div>'+
      '<div class="enq-f"><label for="enq-pers">¿Cuántas personas?</label><select id="enq-pers" name="pers">'+opts(ppl,'','Elige')+'</select></div></div>'+
      '<div class="enq-f"><label for="enq-pres">Presupuesto orientativo por persona (opcional)</label><input id="enq-pres" name="pres" type="text" autocomplete="off"><p class="enq-hint">Si lo prefieres, puedes dejarlo en blanco.</p></div>'+
      '<div class="enq-f"><label for="enq-com">Comentarios</label><textarea id="enq-com" name="com" rows="4" placeholder="Intereses, ritmo, celebraciones, necesidades de movilidad…"></textarea></div>'+
      '<h3 class="enq-sec">Tus datos</h3>'+
      '<div class="enq-row"><div class="enq-f"><label for="enq-nom">Nombre</label><input id="enq-nom" name="nom" type="text" autocomplete="given-name" required></div>'+
      '<div class="enq-f"><label for="enq-ape">Apellidos</label><input id="enq-ape" name="ape" type="text" autocomplete="family-name" required></div></div>'+
      '<div class="enq-f"><label for="enq-mail">Email</label><input id="enq-mail" name="mail" type="email" autocomplete="email" required></div>'+
      '<div class="enq-f"><label for="enq-mail2">Confirmar email</label><input id="enq-mail2" name="mail2" type="email" autocomplete="off" required></div>'+
      '<div class="enq-f"><label for="enq-tel">Teléfono</label><div class="enq-tel"><select id="enq-pref" name="pref" aria-label="Prefijo">'+opts(PREFIJOS.concat([['otro','Otro']]),'+34')+'</select><input id="enq-tel" name="tel" type="tel" autocomplete="tel-national" required></div></div>'+
      '<div class="enq-f"><label for="enq-como">¿Cómo nos conociste?</label><select id="enq-como" name="como">'+opts(COMO,'','Elige')+'</select></div>'+
      '<div class="enq-switch"><input type="checkbox" id="enq-news" name="news" role="switch"><label for="enq-news"><span class="sw" aria-hidden="true"></span><span>Quiero recibir novedades <b id="enq-news-t">No</b></span></label></div>'+
      '<div class="enq-err" id="enq-err" role="alert" aria-live="assertive"></div>'+
      '<button type="submit" class="btn enq-send">Enviar consulta</button>'+
      '<p class="enq-priv">Usaremos tus datos solo para responder a tu consulta. No los compartimos con terceros.</p>'+
    '</form></div>';
  }
  function buildEnquiry(){
    var dlg=document.getElementById('enquire'); if(dlg) return dlg;
    dlg=document.createElement('dialog'); dlg.id='enquire'; dlg.className='enquiry'; dlg.setAttribute('aria-labelledby','enq-title');
    dlg.innerHTML=enquiryHTML();
    document.body.appendChild(dlg);
    dlg.addEventListener('click',function(e){
      if(e.target===dlg || (e.target.closest && e.target.closest('[data-enq-close]'))) closeEnquiry();
    });
    dlg.addEventListener('cancel',function(e){ e.preventDefault(); closeEnquiry(); });
    dlg.addEventListener('keydown',function(e){ trapTab(dlg,e); });
    dlg.querySelector('#enq-news').addEventListener('change',function(e){ dlg.querySelector('#enq-news-t').textContent=e.target.checked?'Sí':'No'; });
    dlg.querySelector('#enq-form').addEventListener('submit',function(e){ e.preventDefault(); sendEnquiry(dlg); });
    return dlg;
  }
  var enqOpener=null;
  function closeEnquiry(){
    var dlg=document.getElementById('enquire'); if(!dlg||!dlg.open) return;
    if(dlg.close) dlg.close(); else dlg.removeAttribute('open');
    lockScroll(false);
    if(enqOpener && enqOpener.focus && document.contains(enqOpener)) enqOpener.focus();
  }
  E.openEnquiry = function(o){
    o=o||{};
    closeMenu(true);
    var dlg=buildEnquiry();
    if(!enqOpener || !dlg.open) enqOpener=document.activeElement;
    /* reiniciar si estaba en confirmación */
    if(dlg.querySelector('.enq-done')){ dlg.innerHTML=enquiryHTML(); dlg.querySelector('#enq-news').addEventListener('change',function(e){ dlg.querySelector('#enq-news-t').textContent=e.target.checked?'Sí':'No'; }); dlg.querySelector('#enq-form').addEventListener('submit',function(e){ e.preventDefault(); sendEnquiry(dlg); }); }
    var com=dlg.querySelector('#enq-com'), pre=[];
    var labels={amigos:'un grupo de amigos',familias:'una familia',parejas:'una pareja'};
    if(o.traveller) pre.push('Viajamos como '+(labels[o.traveller]||o.traveller)+'.');
    if(o.trip){ var t=E.trip(o.trip); pre.push('Me interesa el viaje: '+(t?t.title:o.trip)+'.'); }
    if(pre.length && !com.value.trim()) com.value=pre.join(' ');
    if(dlg.showModal){ if(!dlg.open) dlg.showModal(); } else dlg.setAttribute('open','');
    lockScroll(true);
    var b=dlg.querySelector('.enq-body'); if(b) b.scrollTop=0;
    var f=dlg.querySelector('input[name=dest]'); if(f) f.focus();
  };
  function fieldVal(form,n){ var el=form.elements[n]; return el?String(el.value||'').trim():''; }
  function sendEnquiry(dlg){
    var f=dlg.querySelector('#enq-form'), err=dlg.querySelector('#enq-err'), errs=[], first=null;
    function bad(id,msg){ errs.push(msg); var el=dlg.querySelector('#'+id); if(el){ el.setAttribute('aria-invalid','true'); if(!first) first=el; } }
    Array.prototype.forEach.call(f.querySelectorAll('[aria-invalid]'),function(x){x.removeAttribute('aria-invalid');});
    var nom=fieldVal(f,'nom'), ape=fieldVal(f,'ape'), mail=fieldVal(f,'mail'), mail2=fieldVal(f,'mail2'), tel=fieldVal(f,'tel');
    if(!nom) bad('enq-nom','Escribe tu nombre.');
    if(!ape) bad('enq-ape','Escribe tus apellidos.');
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) bad('enq-mail','Escribe un email válido.');
    else if(mail.toLowerCase()!==mail2.toLowerCase()) bad('enq-mail2','Los dos emails no coinciden.');
    if(!/[0-9]{6,}/.test(tel.replace(/[\s.\-()]/g,''))) bad('enq-tel','Escribe un teléfono válido.');
    if(errs.length){ err.textContent=errs.join(' '); if(first) first.focus(); return; }
    err.textContent='';
    var dest=Array.prototype.map.call(f.querySelectorAll('input[name=dest]:checked'),function(x){return x.value;}).join(', ')||'Sin indicar';
    var mes=fieldVal(f,'mes'), anio=fieldVal(f,'anio');
    var cuando=(mes||anio)?((mes+' '+anio).trim()):'Sin indicar';
    var news=f.elements.news.checked?'Sí':'No';
    var lines=['Hola, quisiera consultar un viaje a Vietnam.','',
      'TU VIAJE',
      'Destino: '+dest,
      'Cuándo: '+cuando,
      'Días: '+(fieldVal(f,'dias')||'Sin indicar'),
      'Personas: '+(fieldVal(f,'pers')||'Sin indicar'),
      'Presupuesto orientativo por persona: '+(fieldVal(f,'pres')||'Sin indicar'),
      'Comentarios: '+(fieldVal(f,'com')||'—'),'',
      'MIS DATOS',
      'Nombre: '+nom+' '+ape,
      'Email: '+mail,
      'Teléfono: '+(f.elements.pref.value==='otro'?'':f.elements.pref.value+' ')+tel,
      'Cómo nos conoció: '+(fieldVal(f,'como')||'Sin indicar'),
      'Quiere recibir novedades: '+news];
    var msg=lines.join('\n');
    var wa=E.waLink(msg), ml=E.mailLink('Consulta de viaje a Vietnam', msg);
    var body=dlg.querySelector('#enq-body');
    body.innerHTML='<div class="enq-done" tabindex="-1"><h3>¡Gracias, '+E.esc(nom)+'!</h3>'+
      '<p>Hemos abierto WhatsApp con tu consulta ya redactada. Solo tienes que pulsar «Enviar» en WhatsApp para que nos llegue.</p>'+
      '<p><a class="btn" href="'+wa+'" target="_blank" rel="noopener">Abrir WhatsApp de nuevo</a></p>'+
      '<p class="enq-alt">¿Prefieres el correo? <a href="'+ml+'">Enviar la consulta por email</a></p>'+
      '<p><button type="button" class="btn ghost small" data-enq-close>Cerrar</button></p></div>';
    var done=body.querySelector('.enq-done'); if(done) done.focus();
    dlg.scrollTop=0; body.scrollTop=0;
    window.open(wa,'_blank','noopener');
  }
  document.addEventListener('click',function(e){
    var t=e.target.closest && e.target.closest('[data-enquire]');
    if(!t) return;
    e.preventDefault();
    E.openEnquiry({traveller:t.getAttribute('data-traveller')||'',trip:t.getAttribute('data-trip')||''});
  });

  /* ---------- pie ---------- */
  function footerHTML(){
    var zonas=Object.keys(E.ZONAS).map(function(z){return '<li><a href="destinos.html?zona='+z+'">'+E.esc(E.ZONAS[z])+'</a></li>';}).join('');
    var cats=Object.keys(E.CATS).map(function(c){return '<li><a href="viajes.html?cat='+c+'">'+E.esc(E.CATS[c])+'</a></li>';}).join('');
    return '<footer class="site-footer">'+
      '<div class="ft-sub"><div class="container ft-sub-in"><div><h2>Recibe ideas de viaje por Vietnam</h2><p>Sin spam. Puedes darte de baja cuando quieras.</p></div>'+
      '<form class="ft-form" id="ft-form"><label class="sr" for="ft-nom">Nombre</label><input id="ft-nom" name="nom" type="text" placeholder="Nombre" autocomplete="given-name" required>'+
      '<label class="sr" for="ft-mail">Email</label><input id="ft-mail" name="mail" type="email" placeholder="Email" autocomplete="email" required><button type="submit" class="btn">Suscribirme</button></form></div></div>'+
      '<div class="container"><div class="ft-badges">'+E.todo('sellos y acreditaciones')+'</div>'+
      '<div class="ft-cols">'+
        '<div><h3>Esencia Vietnam</h3><ul><li><a href="#" data-enquire>Hablar con un experto</a></li><li><a href="contacto.html">Contacto</a></li><li><a href="opiniones.html">Opiniones</a></li></ul></div>'+
        '<div><h3>Información útil</h3><ul><li><a href="guia.html">Guía de viaje</a></li><li><a href="mayores.html">Para mayores</a></li><li><a href="garantias.html">Garantías y políticas</a></li><li><a href="creditos.html">Créditos de fotos</a></li></ul></div>'+
        '<div><h3>Destinos</h3><ul>'+zonas+'</ul></div>'+
        '<div><h3>Experiencias</h3><ul>'+cats+'</ul></div>'+
      '</div>'+
      '<div class="ft-end"><span>Hanói, Vietnam</span><span>WhatsApp: <a href="'+E.waLink()+'" target="_blank" rel="noopener">'+E.esc(C.whatsappLabel)+'</a></span><span><a href="'+E.mailLink('Consulta')+'">'+E.esc(C.email)+'</a></span>'+
      '<span>Licencia de operador de viajes internacionales: '+(C.licenseNumber?E.esc(C.licenseNumber):E.todo('número de licencia'))+'</span></div>'+
      '</div></footer>';
  }

  function render(){
    var page = location.pathname.split('/').pop() || 'index.html';
    var hd = document.getElementById('site-header');
    if(hd){
      hd.outerHTML = (C.demo?'<div class="demo-banner">Vista previa — algunos datos están pendientes de confirmar</div>':'')+
        '<header class="site-header"><div class="container hd-in">'+
        '<a class="brand wordmark" href="index.html" aria-label="'+E.esc(C.brand)+' — inicio"><span class="wm-top">ESENCIA</span><span class="wm-sub" aria-hidden="true"><i></i>VIETNAM<i></i></span></a>'+
        '<nav class="nav" id="nav" aria-label="Principal">'+E.navHTML(page)+'</nav>'+
        '<div class="hd-actions">'+
        '<button type="button" class="hamburger" aria-label="Abrir menú" aria-expanded="false" aria-controls="menu-panel"><svg viewBox="0 0 28 28" width="28" height="28" aria-hidden="true"><path d="M4 8h20M4 14h20M4 20h20" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg></button>'+
        '<button type="button" class="btn hd-cta" data-enquire>Consultar ahora</button>'+
        '</div></div></header>'+
        '<div class="menu-wrap" id="menu-wrap" hidden>'+menuHTML()+'</div>';
      var hb=document.querySelector('.hamburger'), mw=document.getElementById('menu-wrap');
      hb.addEventListener('click',function(){ openMenu(hb); });
      mw.addEventListener('click',function(e){
        if(e.target.closest('[data-menu-close]')) closeMenu();
        else if(e.target.closest('a[href]') && !e.target.closest('a[target=_blank]')) closeMenu(true);
      });
      mw.addEventListener('keydown',function(e){ trapTab(document.getElementById('menu-panel'),e); });
      document.addEventListener('keydown',function(e){
        if(e.key==='Escape' && mw.classList.contains('open')){ var d=document.getElementById('enquire'); if(!(d&&d.open)) closeMenu(); }
      });
    }
    var ft = document.getElementById('site-footer');
    if(ft){
      ft.outerHTML = footerHTML();
      var sf=document.getElementById('ft-form');
      if(sf) sf.addEventListener('submit',function(e){
        e.preventDefault();
        var n=sf.elements.nom.value.trim(), m=sf.elements.mail.value.trim();
        location.href=E.mailLink('Suscripción','Nombre: '+n+'\nEmail: '+m+'\nQuiero suscribirme a las novedades de Esencia Vietnam.');
      });
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
