/* 15 itinerarios (fuente: "00 - CAPTIONS (2).md"). Precios, comidas, alojamientos e inclusiones: pendientes. */
(function(){
  var D = window.ESENCIA_DATA;

  function stop(id,name,region,type,lat,lng,image,weight,duration,walking,bestSeason,summary){
    D.stops.push({id:id,name:name,region:region,type:type,lat:lat,lng:lng,image:image,weight:weight,duration:duration,walking:walking,bestSeason:bestSeason,summary:summary,coordsApprox:true});
  }
  stop('barrio-antiguo-hanoi','Barrio antiguo de Hanói','ha-noi','ciudad',21.0340,105.8500,'images/trip-hanoi.jpg','ligera','2–3 h','medio','oct–abr','Cada calle fue un gremio: la del papel, la de la hojalata, la de la seda.');
  stop('lago-hoan-kiem','Lago Hoan Kiem','ha-noi','ciudad',21.0287,105.8523,'images/trip-hanoi.jpg','ligera','1 h','bajo','oct–abr','Al amanecer solo hay vecinos haciendo taichí.');
  stop('templo-literatura','Templo de la Literatura','ha-noi','cultura',21.0293,105.8355,'images/trip-hanoi.jpg','ligera','1–1,5 h','bajo','oct–abr','Fue la primera universidad del país, fundada en 1070.');
  stop('tam-coc','Ninh Binh y Tam Coc','ninh-binh','naturaleza',20.2155,105.9370,'images/trip-ninh-binh.jpg','principal','3–4 h','bajo','nov–abr','Arrozales y montañas de caliza; se recorre en barca de remos (las remeras reman con los pies).');
  stop('bahia-ha-long','Bahía de Ha Long','ha-long','naturaleza',20.9101,107.1839,'images/trip-ha-long.jpg','principal','1 día o noche a bordo','bajo','oct–abr','Crucero entre islotes de caliza; la cueva Sung Sot se recorre por dentro, iluminada.');
  stop('sa-pa-arrozales','Sa Pa y arrozales en terraza','sa-pa','naturaleza',22.3364,103.8438,'images/trip-sa-pa.jpg','principal','medio día','medio','sep–nov','A 1.600 metros de altura; tren de Muong Hoa, pueblos del valle y arrozales.');
  stop('fansipan','Fansipan','sa-pa','naturaleza',22.3033,103.7750,'images/trip-fansipan.jpg','principal','medio día','bajo','sep–nov','El techo de Indochina (3.143 m): se sube en teleférico, no andando.');
  stop('ban-gioc','Cascada de Ban Gioc','cao-bang','naturaleza',22.8547,106.7233,'images/trip-cao-bang.jpg','principal','2 h','bajo','sep–nov','Hace frontera con China: la mitad del salto es vietnamita y la otra mitad no.');
  stop('pu-luong','Pu Luong','pu-luong','naturaleza',20.4800,105.2000,'images/trip-pu-luong.jpg','principal','1 día','medio','sep–oct','Arrozales, norias de bambú y muy poca gente.');
  stop('ma-pi-leng','Paso de Ma Pi Leng (Ha Giang)','ha-giang','naturaleza',23.2364,105.4008,'images/trip-ha-giang.jpg','principal','2 días de circuito','bajo','sep–nov','Se abrió a mano en los años sesenta, picando la roca durante seis años.');
  stop('correos-saigon','Oficina Central de Correos','ho-chi-minh','cultura',10.7799,106.6999,'images/trip-hcmc.jpg','ligera','1 h','bajo','dic–abr','La proyectó el estudio de Gustave Eiffel y sigue funcionando como oficina de verdad.');
  stop('delta-mekong','Delta del Mekong','mekong','naturaleza',10.3600,106.3600,'images/trip-mekong.jpg','principal','1 día','bajo','dic–abr','En barca por canales de cocoteros.');
  stop('phu-quoc-isla','Isla de Phu Quoc','phu-quoc','playa',10.2270,103.9670,'images/trip-phu-quoc.jpg','principal','varios días','bajo','nov–abr','Teleférico sobre el mar de casi ocho kilómetros, pimienta, salsa de pescado y vino de sim.');

  var G = ['amigos','mayores'];
  var PEND = 'Inclusiones, alojamiento y precio: pendientes de confirmar';

  /* T(código, título corto, eslogan, días, ruta, regiones, imagen, notas, días[]) ; cada día: [título, [paradas], dato, comidas] */
  function T(code,title,tagline,days,route,region,image,notes,itin){
    D.trips.push({
      id:code+'-'+title.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,''),
      code:code, title:title, tagline:tagline, days:days, nights:days-1, video:'videos/trip-'+code+'.mp4', groups:G, tier:null,
      region:region, image:image, route:route, price:null, notes:notes,
      itinerary:itin.map(function(d,i){return {day:i+1,title:d[0],stops:d[1],pace:d[2]||'',meals:d[3]||[]};}),
      included:[], excluded:[], includedNote:PEND
    });
  }

  T('01','Hanói, Ninh Binh y Ha Long','Cuatro días con tiempo real para sentarse: Hanói, Ninh Binh y la bahía de Ha Long.',4,['Hanói','Ninh Binh','Ha Long'],['ha-noi','ninh-binh','ha-long'],'images/trip-ha-long.jpg',
    ['Salidas después de las 8:30. Dos visitas por mañana como mucho.','Hoteles en el centro y con ascensor.'],
    [['Llegada a Hanói',[],'Nada más. Se duerme.'],
     ['Hanói despacio',['lago-hoan-kiem'],'El lago Hoan Kiem al amanecer, cuando solo hay vecinos haciendo taichí.'],
     ['Ninh Binh en barca de remos',['tam-coc'],'Las remeras del Tam Coc reman con los pies, y lo veréis de cerca.'],
     ['Ha Long y vuelta',['bahia-ha-long'],'']]);

  T('02','Da Nang, Hoi An y Hue','Cuatro días entre Da Nang, Hoi An y Hue, sin prisas y con vuestro ritmo.',4,['Da Nang','Ba Na Hills','Hoi An','Hue'],['da-nang','hoi-an','hue'],'images/day2-hoi-an.jpg',
    ['Para grupos de amigos de 55 en adelante.','Al caer la tarde el centro de Hoi An se queda sin coches: solo faroles y gente paseando.'],
    [['Llegada a Da Nang',[],''],
     ['Ba Na Hills y el Puente Dorado',['ba-na-hills'],'Esas dos manos de piedra que sostienen la pasarela.'],
     ['Hoi An',['casco-antiguo-hoi-an'],'La Casa Comunal y el puente japonés cubierto, que lleva en pie más de cuatro siglos.'],
     ['Hue: la Ciudadela y la pagoda Thien Mu',['ciudadela-imperial-hue','pagoda-thien-mu'],'']]);

  T('04','Hanói, Ha Long y Ninh Binh','Cinco días para el norte, con una noche a bordo en la bahía.',5,['Hanói','Ha Long','Ninh Binh'],['ha-noi','ha-long','ninh-binh'],'images/trip-ha-long.jpg',
    ['El barco tiene ascensor y los camarotes quedan juntos. Lo preguntamos antes de reservar, siempre.'],
    [['Llegada a Hanói',[],'Sin plan. Se descansa.'],
     ['Hanói: el Templo de la Literatura',['templo-literatura'],'Fue la primera universidad del país, en 1070.'],
     ['Ha Long y crucero',['bahia-ha-long'],'La cueva Sung Sot se recorre por dentro, iluminada.'],
     ['Ninh Binh',['tam-coc'],'Entre arrozales y montañas de caliza.'],
     ['Salida',[],'']]);

  T('06','Hanói y Sa Pa','Cinco días desde Hanói hasta las montañas del norte.',5,['Hanói','Sa Pa','Fansipan'],['ha-noi','sa-pa'],'images/trip-sa-pa.jpg',
    ['Sa Pa está a 1.600 metros. En agosto se duerme con manta.','Para quien le preocupe la altura: el teleférico tarda quince minutos y hay bancos arriba en cada tramo.'],
    [['Llegada a Hanói',[],''],
     ['Hanói entera, con calma',['barrio-antiguo-hanoi'],''],
     ['Subida a Sa Pa',['sa-pa-arrozales'],'El tren de Muong Hoa cruza el valle antes del teleférico.'],
     ['Fansipan',['fansipan'],'El techo de Indochina — 3.143 metros, y se sube en teleférico, no andando.'],
     ['Vuelta y salida',[],'']]);

  T('09','Hanói, Ninh Binh y Ha Long (6 días)','Seis días por el norte, sin cambiar de hotel cada noche.',6,['Hanói','Ninh Binh','Ha Long'],['ha-noi','ninh-binh','ha-long'],'images/trip-ninh-binh.jpg',
    ['Dos noches seguidas en el mismo sitio siempre que se puede. A esta edad deshacer la maleta cada día cansa más que caminar.'],
    [['Llegada a Hanói',[],''],
     ['Hanói: el barrio antiguo',['barrio-antiguo-hanoi'],'Tiene una calle por gremio — la del papel, la de la hojalata, la de la seda.'],
     ['Ninh Binh',['tam-coc'],''],
     ['Ha Long, noche a bordo',['bahia-ha-long'],''],
     ['Vuelta a Hanói',[],''],
     ['Salida',[],'']]);

  T('10','Da Nang, Hoi An, Hue y Ba Na','Seis días en el centro de Vietnam. Vuestro grupo. Vuestro ritmo. Vuestro Vietnam.',6,['Da Nang','Ba Na Hills','Hoi An','Hue'],['da-nang','hoi-an','hue'],'images/day3-ba-na-hills.jpg',
    ['Sin prisas, para viajeros de 55 en adelante.','En Hoi An hay sastres que toman medidas por la mañana y entregan al día siguiente.'],
    [['Llegada a Da Nang',[],''],
     ['La playa de My Khe y la Dama Buda',['playa-my-khe','pagoda-linh-ung'],'La Dama Buda mide 67 metros y mira al mar.'],
     ['Ba Na Hills y el Puente Dorado',['ba-na-hills'],''],
     ['Hoi An',['casco-antiguo-hoi-an'],'Con el río Hoai al anochecer.'],
     ['Hue: la Ciudadela imperial y la tumba de Khai Dinh',['ciudadela-imperial-hue','tumba-khai-dinh'],''],
     ['Salida',[],'']]);

  T('11','Hanói y Cao Bang','Cao Bang está a siete horas de Hanói y casi no aparece en las guías españolas.',6,['Hanói','Cao Bang','Ban Gioc'],['ha-noi','cao-bang'],'images/trip-cao-bang.jpg',
    ['Es un viaje de coche. Paramos cada hora y media, sin excepción.'],
    [['Llegada a Hanói',[],''],
     ['Hanói con calma',['lago-hoan-kiem'],''],
     ['Subida a Cao Bang',[],'Por carretera de montaña.'],
     ['La cascada de Ban Gioc',['ban-gioc'],'Hace frontera con China: la mitad del salto es vietnamita y la otra mitad no.'],
     ['La Montaña del Ojo del Dios',[],'Una roca con un agujero de más de treinta metros.'],
     ['Salida',[],'']]);

  T('12','Hanói, Sa Pa y Ha Long','Montaña y mar en el mismo viaje. Seis días.',6,['Hanói','Sa Pa','Fansipan','Ha Long'],['ha-noi','sa-pa','ha-long'],'images/trip-fansipan.jpg',
    ['De 1.600 metros de altura al nivel del mar en dos días. Dejamos una mañana libre entre medias para que el cuerpo se ajuste.'],
    [['Llegada a Hanói',[],''],
     ['Hanói: el lago, el barrio antiguo y un café de huevo',['lago-hoan-kiem','barrio-antiguo-hanoi'],'El café de huevo se inventó aquí en los años cuarenta cuando faltaba leche.'],
     ['Sa Pa y los arrozales en terraza',['sa-pa-arrozales'],''],
     ['Fansipan y vuelta',['fansipan'],''],
     ['Ha Long, crucero de cinco estrellas',['bahia-ha-long'],''],
     ['Salida',[],'']]);

  T('13','Hanói, Ninh Binh y Pu Luong','Pu Luong no sale en los circuitos grandes: arrozales, norias de bambú y muy poca gente.',6,['Hanói','Ninh Binh','Pu Luong'],['ha-noi','ninh-binh','pu-luong'],'images/trip-pu-luong.jpg',
    ['Los alojamientos de Pu Luong son sencillos y están en alto. Os decimos exactamente cuántos escalones hay antes de reservar.','Vuestro grupo, sin desconocidos.'],
    [['Llegada',[],''],
     ['Hanói',['lago-hoan-kiem'],''],
     ['Ninh Binh',['tam-coc'],''],
     ['Pu Luong',['pu-luong'],'Las norias de bambú suben el agua del río a los arrozales — llevan siglos haciéndolo igual.'],
     ['Vuelta a Hanói',[],''],
     ['Salida',[],'']]);

  T('14','Hanói, Ninh Binh, Ha Long y Hue','Siete días de norte a centro, con vuelo interno para no hacer diez horas de coche.',7,['Hanói','Ninh Binh','Ha Long','Hue'],['ha-noi','ninh-binh','ha-long','hue'],'images/day4-hue.jpg',
    ['El vuelo interno son 70 minutos. Por carretera serían más de doce horas: no merece la pena a ninguna edad.'],
    [['Llegada a Hanói',[],''],
     ['Hanói',['lago-hoan-kiem'],''],
     ['Ninh Binh',['tam-coc'],''],
     ['Ha Long, noche a bordo',['bahia-ha-long'],''],
     ['Vuelo a Hue',[],''],
     ['Hue: la Ciudadela y la pagoda Thien Mu',['ciudadela-imperial-hue','pagoda-thien-mu'],'La torre de siete pisos junto al río de los Perfumes.'],
     ['Salida',[],'']]);

  T('16','Hanói, Sa Pa, Ninh Binh y Ha Long','Siete días con lo mejor del norte y sin repetir paisaje: montaña, arrozales, caliza y mar.',7,['Hanói','Sa Pa','Ninh Binh','Ha Long'],['ha-noi','sa-pa','ninh-binh','ha-long'],'images/trip-fansipan.jpg',
    ['Siempre decimos de antemano dónde hay escalones y dónde no. Preferimos que lo sepáis antes de pagar.'],
    [['Llegada a Hanói',[],''],
     ['Hanói',['barrio-antiguo-hanoi'],''],
     ['Sa Pa',['sa-pa-arrozales'],''],
     ['Los pueblos del valle de Muong Hoa y vuelta',[],''],
     ['Ninh Binh',['tam-coc'],'A la cueva Mua se sube por casi 500 escalones de piedra; no pasa nada por quedarse abajo: la vista del río también es bonita desde el pie.'],
     ['Ha Long',['bahia-ha-long'],''],
     ['Salida',[],'']]);

  T('17','Hanói, Sa Pa y Ha Long (7 días)','Siete días entre las montañas de Sa Pa y la bahía de Ha Long.',7,['Hanói','Sa Pa','Ha Long'],['ha-noi','sa-pa','ha-long'],'images/trip-sa-pa.jpg',
    ['Dos noches seguidas en Sa Pa y dos en Hanói. Menos maletas, más sobremesa.'],
    [['Llegada a Hanói',[],''],
     ['Hanói',['lago-hoan-kiem'],''],
     ['Sa Pa',['sa-pa-arrozales'],''],
     ['Los poblados de Lao Chai',[],'Las mujeres h\'mong siguen tiñendo la tela con índigo.'],
     ['Vuelta a Hanói',[],''],
     ['Ha Long, crucero de cinco estrellas',['bahia-ha-long'],'La cueva Luon se cruza en barca de remos, agachando la cabeza.'],
     ['Salida',[],'']]);

  T('18','Hanói, Ha Long, Hue y Hoi An','Ocho días de Hanói a Hoi An, con una noche durmiendo en la bahía.',8,['Hanói','Ninh Binh','Ha Long','Hue','Hoi An'],['ha-noi','ninh-binh','ha-long','hue','hoi-an'],'images/trip-ha-long.jpg',
    ['En Hue se come distinto al resto del país: fue capital imperial y la cocina se hizo para la corte, en raciones pequeñas y muchos platos.'],
    [['Llegada a Hanói',[],''],
     ['Hanói',['lago-hoan-kiem'],''],
     ['Ninh Binh',['tam-coc'],''],
     ['Ha Long, noche a bordo',['bahia-ha-long'],''],
     ['Vuelta y vuelo a Hue',[],''],
     ['Hue: la Ciudadela y la tumba de Khai Dinh',['ciudadela-imperial-hue','tumba-khai-dinh'],''],
     ['Hoi An',['casco-antiguo-hoi-an'],''],
     ['Salida por Da Nang',[],'']]);

  T('19','Ciudad Ho Chi Minh, Mekong y Phu Quoc','El sur es otro país: más calor, más ruido, más fruta. Ocho días.',8,['Ciudad Ho Chi Minh','Mekong','Phu Quoc'],['ho-chi-minh','mekong','phu-quoc'],'images/trip-mekong.jpg',
    ['Tres noches seguidas en Phu Quoc al final. El viaje termina descansando, no corriendo.'],
    [['Llegada a Ciudad Ho Chi Minh',[],''],
     ['La ciudad',['correos-saigon'],''],
     ['Delta del Mekong',['delta-mekong'],'En barca por los canales de cocoteros.'],
     ['Vuelo a Phu Quoc',[],''],
     ['La isla',['phu-quoc-isla'],'El teleférico más largo del mundo sobre el mar: casi ocho kilómetros.'],
     ['Pimienta, salsa de pescado y vino de sim',[],'Lo que se hace en la isla.'],
     ['Día libre en la playa',[],''],
     ['Salida',[],'']]);

  T('20','Hanói, Ha Giang y Ninh Binh','Ha Giang es la carretera más bonita de Vietnam y también la más lenta. Por eso le damos tres días.',8,['Hanói','Ha Giang','Ninh Binh'],['ha-noi','ha-giang','ninh-binh'],'images/trip-ha-giang.jpg',
    ['Se va en coche privado, no en moto. Paradas cada hora y media y ningún tramo de más de tres horas seguidas.'],
    [['Llegada',[],''],
     ['Hanói',['lago-hoan-kiem'],''],
     ['Subida a Ha Giang',[],''],
     ['El circuito, primer día',['ma-pi-leng'],'El paso de Ma Pi Leng se abrió a mano en los años sesenta, picando la roca durante seis años.'],
     ['El circuito, segundo día',[],''],
     ['Vuelta a Hanói',[],''],
     ['Ninh Binh',['tam-coc'],''],
     ['Salida',[],'']]);

  /* el viaje de muestra original (5 días, precio de ejemplo) se mantiene el último */
  var sample = D.trips.shift(); D.trips.push(sample);
})();
