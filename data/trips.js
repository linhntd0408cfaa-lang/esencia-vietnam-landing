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

  stop('mai-chau','Valle de Mai Chau','mai-chau','pueblo',20.6580,105.0500,'images/stop-mai-chau.jpg','principal','1 día','bajo','sep–nov','Valle de arrozales y casas sobre pilotes de la etnia thai, a ritmo de pueblo.');
  stop('my-son','Santuario de My Son','da-nang','cultura',15.7640,108.1240,'images/stop-my-son.jpg','principal','2–3 h','medio','feb–abr','Ruinas del reino de Champa, Patrimonio Mundial, entre montañas.');
  stop('tuneles-cu-chi','Túneles de Cu Chi','ho-chi-minh','cultura',11.1420,106.4620,'images/stop-cu-chi.jpg','principal','medio día','medio','dic–abr','Red de túneles de la guerra, a las afueras de Ciudad Ho Chi Minh.');
  stop('can-tho','Can Tho y mercado flotante','mekong','pueblo',10.0452,105.7469,'images/stop-can-tho.jpg','principal','medio día','bajo','dic–abr','Capital del delta del Mekong, con mercados flotantes al amanecer.');

  D.trips.push.apply(D.trips, [
 {
  "id": "01-hanoi-ninh-binh-y-ha-long",
  "code": "01",
  "title": "Hanói, Ninh Binh y Ha Long",
  "tagline": "Ninguno de los cuatro días se va en carretera de vuelta.",
  "intro": "Cuatro días dan para tres sitios, no para diez. El error habitual es meter Sa Pa en medio y pasar dos noches en un coche. Esta versión deja Hanói de base y sale a los dos sitios que sí caben.",
  "days": 4,
  "nights": 3,
  "groups": [
   "amigos",
   "mayores"
  ],
  "tier": null,
  "region": [
   "ha-noi",
   "ninh-binh",
   "ha-long"
  ],
  "image": "images/trip-ha-long.jpg",
  "route": [
   "Hanói",
   "Ninh Binh",
   "Ha Long"
  ],
  "price": null,
  "notes": [
   "Las remeras del Tam Coc reman con los pies. Lo veréis desde la barca, a un metro."
  ],
  "itinerary": [
   {
    "day": "1–2",
    "span": 2,
    "title": "Hanói",
    "stops": [
     "templo-literatura",
     "barrio-antiguo-hanoi"
    ],
    "pace": "La pagoda Tran Quoc, el Templo de la Literatura, el Casco Antiguo y el mercado de Hang Be. Taller de nem ran y café con huevo.",
    "meals": []
   },
   {
    "day": 3,
    "span": 1,
    "title": "Ninh Binh",
    "stops": [
     "tam-coc"
    ],
    "pace": "Dos horas desde Hanói. Hoa Lu, barca de remos por Trang An y el estanque de lotos de la Cueva Mua.",
    "meals": []
   },
   {
    "day": 4,
    "span": 1,
    "title": "Bahía de Ha Long",
    "stops": [
     "bahia-ha-long"
    ],
    "pace": "Crucero de cinco estrellas: islotes kársticos, la Cueva Luon en barca de bambú y té al atardecer en cubierta.",
    "meals": []
   }
  ],
  "included": [],
  "excluded": [],
  "includedNote": "Inclusiones, alojamiento y precio: pendientes de confirmar",
  "cats": [
   "naturaleza",
   "cultura",
   "gastronomia"
  ],
  "effort": "suave",
  "video": "videos/trip-01.mp4"
 },
 {
  "id": "02-hoi-an-y-hue",
  "code": "02",
  "title": "Hoi An y Hue",
  "tagline": "Cuatro días en el centro: una ciudad imperial, un casco antiguo de farolillos y ni un traslado largo. 🏮",
  "intro": "Hue y Hoi An están a tres horas la una de la otra, y casi todos los itinerarios las separan en dos viajes distintos. Caben en el mismo, con base en Hoi An.",
  "days": 4,
  "nights": 3,
  "groups": [
   "amigos",
   "mayores"
  ],
  "tier": null,
  "region": [
   "hoi-an",
   "hue"
  ],
  "image": "images/day2-hoi-an.jpg",
  "route": [
   "Hoi An",
   "Hue"
  ],
  "price": null,
  "notes": [
   "La Ciudadela se recorre en buggy: son seiscientas hectáreas y a pie se hacen largas.",
   "Enviádselo a quien viajaría con vosotros."
  ],
  "itinerary": [
   {
    "day": 1,
    "span": 1,
    "title": "Llegada a Da Nang",
    "stops": [
     "casco-antiguo-hoi-an"
    ],
    "pace": "Hoi An queda a 45 minutos del aeropuerto.",
    "meals": []
   },
   {
    "day": 2,
    "span": 1,
    "title": "Hoi An",
    "stops": [
     "aldea-cam-thanh",
     "casco-antiguo-hoi-an"
    ],
    "pace": "Huerto y clase de cocina en Tra Que, barca cesta en Cam Thanh sin giros, taller de farolillos y el Casco Antiguo al caer la tarde.",
    "meals": []
   },
   {
    "day": 3,
    "span": 1,
    "title": "Hue",
    "stops": [
     "paso-hai-van",
     "ciudadela-imperial-hue",
     "pagoda-thien-mu"
    ],
    "pace": "Tres horas por el paso de Hai Van. La Ciudadela Imperial en buggy, la pagoda Thien Mu, taller de incienso y sombrero cónico.",
    "meals": []
   },
   {
    "day": 4,
    "span": 1,
    "title": "Salida desde Da Nang",
    "stops": [],
    "pace": "",
    "meals": []
   }
  ],
  "included": [],
  "excluded": [],
  "includedNote": "Inclusiones, alojamiento y precio: pendientes de confirmar",
  "cats": [
   "cultura",
   "gastronomia"
  ],
  "effort": "suave",
  "video": "videos/trip-02.mp4"
 },
 {
  "id": "04-hanoi-ha-long-y-ninh-binh",
  "code": "04",
  "title": "Hanói, Ha Long y Ninh Binh",
  "tagline": "Cinco días, y la bahía va antes que Ninh Binh. Hay un motivo. 🚢",
  "intro": "El crucero sale a mediodía, así que ponerlo el día tres deja la mañana libre en Hanói y evita madrugar. Ninh Binh, que es una excursión de día entero, va después.",
  "days": 5,
  "nights": 4,
  "groups": [
   "amigos",
   "mayores"
  ],
  "tier": null,
  "region": [
   "ha-noi",
   "ha-long",
   "ninh-binh"
  ],
  "image": "images/trip-ha-long.jpg",
  "route": [
   "Hanói",
   "Ha Long",
   "Ninh Binh"
  ],
  "price": null,
  "notes": [
   "El orden de los días es lo que decide si un viaje corto se disfruta o se corre."
  ],
  "itinerary": [
   {
    "day": "1–2",
    "span": 2,
    "title": "Hanói",
    "stops": [
     "templo-literatura",
     "barrio-antiguo-hanoi"
    ],
    "pace": "Tran Quoc, el Templo de la Literatura, el Casco Antiguo y Hang Be. Taller de nem ran y café con huevo.",
    "meals": []
   },
   {
    "day": 3,
    "span": 1,
    "title": "Bahía de Ha Long",
    "stops": [
     "bahia-ha-long"
    ],
    "pace": "Dos horas y media desde Hanói. Islotes kársticos, Cueva Luon en barca de bambú y té al atardecer.",
    "meals": []
   },
   {
    "day": 4,
    "span": 1,
    "title": "Ninh Binh",
    "stops": [
     "tam-coc"
    ],
    "pace": "Dos horas. Hoa Lu, Trang An en barca de remos y los lotos de la Cueva Mua.",
    "meals": []
   },
   {
    "day": 5,
    "span": 1,
    "title": "Salida",
    "stops": [],
    "pace": "",
    "meals": []
   }
  ],
  "included": [],
  "excluded": [],
  "includedNote": "Inclusiones, alojamiento y precio: pendientes de confirmar",
  "cats": [
   "naturaleza",
   "cultura",
   "gastronomia"
  ],
  "effort": "suave",
  "video": "videos/trip-04.mp4"
 },
 {
  "id": "06-hanoi-y-sa-pa",
  "code": "06",
  "title": "Hanói y Sa Pa",
  "tagline": "Sa Pa merece más que una excursión de un día. Aquí van cinco días que le dejan sitio. ⛰️",
  "intro": "Sa Pa está a cinco horas de Hanói y muchos la venden como salida de una jornada. Sale de noche y vuelve de noche. Nosotros dormimos allí.",
  "days": 5,
  "nights": 4,
  "groups": [
   "amigos",
   "mayores"
  ],
  "tier": null,
  "region": [
   "ha-noi",
   "sa-pa"
  ],
  "image": "images/trip-sa-pa.jpg",
  "route": [
   "Hanói",
   "Sa Pa"
  ],
  "price": null,
  "notes": [
   "Al Fansipan se sube en teleférico y después en funicular hasta la cima. No hay escalones obligatorios."
  ],
  "itinerary": [
   {
    "day": "1–2",
    "span": 2,
    "title": "Hanói",
    "stops": [
     "templo-literatura",
     "barrio-antiguo-hanoi"
    ],
    "pace": "Tran Quoc, el Templo de la Literatura, el Casco Antiguo y Hang Be.",
    "meals": []
   },
   {
    "day": 3,
    "span": 1,
    "title": "Subida a Sa Pa en coche privado",
    "stops": [
     "sa-pa-arrozales"
    ],
    "pace": "Cinco horas con paradas. El pueblo, el mirador del lago, la Cascada de Plata y el paso O Quy Ho.",
    "meals": []
   },
   {
    "day": 4,
    "span": 1,
    "title": "Fansipan en teleférico y funicular, sin caminar la montaña",
    "stops": [
     "fansipan"
    ],
    "pace": "Baño de pies con hierbas Dao Rojo y vuelta a Hanói.",
    "meals": []
   },
   {
    "day": 5,
    "span": 1,
    "title": "Salida",
    "stops": [],
    "pace": "",
    "meals": []
   }
  ],
  "included": [],
  "excluded": [],
  "includedNote": "Inclusiones, alojamiento y precio: pendientes de confirmar",
  "cats": [
   "montanas",
   "cultura"
  ],
  "effort": "moderado",
  "video": "videos/trip-06.mp4"
 },
 {
  "id": "09-hanoi-ninh-binh-y-ha-long",
  "code": "09",
  "title": "Hanói, Ninh Binh y Ha Long",
  "tagline": "Seis días: dos en Hanói, uno en Ninh Binh y una noche entera a bordo. 🌾",
  "intro": "La diferencia entre ver Ha Long y dormir en Ha Long es la mañana siguiente: la bahía sin barcos de día, con tai chi en cubierta antes del desayuno.",
  "days": 6,
  "nights": 5,
  "groups": [
   "amigos",
   "mayores"
  ],
  "tier": null,
  "region": [
   "ha-noi",
   "ninh-binh",
   "ha-long"
  ],
  "image": "images/trip-ha-long.jpg",
  "route": [
   "Hanói",
   "Ninh Binh",
   "Ha Long"
  ],
  "price": null,
  "notes": [
   "Los cruceros de día salen y vuelven en seis horas. Con noche a bordo se ve la bahía cuando no hay nadie."
  ],
  "itinerary": [
   {
    "day": "1–2",
    "span": 2,
    "title": "Hanói",
    "stops": [
     "templo-literatura",
     "barrio-antiguo-hanoi"
    ],
    "pace": "Tran Quoc, el Templo de la Literatura, el Casco Antiguo y Hang Be. Taller de nem ran y café con huevo.",
    "meals": []
   },
   {
    "day": 3,
    "span": 1,
    "title": "Ninh Binh",
    "stops": [
     "tam-coc"
    ],
    "pace": "Dos horas. Hoa Lu, Trang An y los lotos de la Cueva Mua.",
    "meals": []
   },
   {
    "day": "4–5",
    "span": 2,
    "title": "Bahía de Ha Long",
    "stops": [
     "bahia-ha-long"
    ],
    "pace": "Crucero de cinco estrellas con noche a bordo: Cueva Luon en barca de bambú, demostración de cocina, té al atardecer. Tai chi y brunch antes de desembarcar.",
    "meals": []
   },
   {
    "day": 6,
    "span": 1,
    "title": "Salida",
    "stops": [],
    "pace": "",
    "meals": []
   }
  ],
  "included": [],
  "excluded": [],
  "includedNote": "Inclusiones, alojamiento y precio: pendientes de confirmar",
  "cats": [
   "naturaleza",
   "cultura",
   "gastronomia"
  ],
  "effort": "suave",
  "video": "videos/trip-09.mp4"
 },
 {
  "id": "10-hoi-an-hue-y-da-nang",
  "code": "10",
  "title": "Hoi An, Hue y Da Nang",
  "tagline": "Seis días en el centro sin cambiar de hotel más de una vez. 🏮",
  "intro": "Hoi An, Hue, Ba Na y Da Nang están dentro de un radio de tres horas. Se pueden ver los cuatro desde una misma base, y eso ahorra cuatro maletas hechas y deshechas.",
  "days": 6,
  "nights": 5,
  "groups": [
   "amigos",
   "mayores"
  ],
  "tier": null,
  "region": [
   "hoi-an",
   "hue",
   "da-nang"
  ],
  "image": "images/day4-hue.jpg",
  "route": [
   "Hoi An",
   "Hue",
   "Da Nang"
  ],
  "price": null,
  "notes": [
   "El teleférico de Ba Na sube mil trescientos metros en veinte minutos. Es la forma cómoda de llegar arriba.",
   "Enviádselo a quien odia hacer la maleta cada dos días."
  ],
  "itinerary": [
   {
    "day": 1,
    "span": 1,
    "title": "Llegada a Da Nang",
    "stops": [
     "casco-antiguo-hoi-an"
    ],
    "pace": "Hoi An a 45 minutos.",
    "meals": []
   },
   {
    "day": 2,
    "span": 1,
    "title": "Hoi An",
    "stops": [
     "aldea-cam-thanh",
     "casco-antiguo-hoi-an"
    ],
    "pace": "Tra Que, barca cesta en Cam Thanh, taller de farolillos y el Casco Antiguo.",
    "meals": []
   },
   {
    "day": 3,
    "span": 1,
    "title": "Hue",
    "stops": [
     "paso-hai-van",
     "ciudadela-imperial-hue",
     "pagoda-thien-mu"
    ],
    "pace": "Tres horas por Hai Van. Ciudadela en buggy, Thien Mu, incienso y sombrero cónico.",
    "meals": []
   },
   {
    "day": 4,
    "span": 1,
    "title": "Colinas de Ba Na",
    "stops": [
     "ba-na-hills"
    ],
    "pace": "El Puente Dorado, la Aldea Francesa y el teleférico.",
    "meals": []
   },
   {
    "day": 5,
    "span": 1,
    "title": "Da Nang",
    "stops": [
     "montanas-de-marmol"
    ],
    "pace": "Montañas de Mármol, península de Son Tra y degustación en el Mercado Han.",
    "meals": []
   },
   {
    "day": 6,
    "span": 1,
    "title": "Salida",
    "stops": [],
    "pace": "",
    "meals": []
   }
  ],
  "included": [],
  "excluded": [],
  "includedNote": "Inclusiones, alojamiento y precio: pendientes de confirmar",
  "cats": [
   "cultura",
   "gastronomia"
  ],
  "effort": "suave",
  "video": "videos/trip-10.mp4"
 },
 {
  "id": "11-hanoi-y-cao-bang",
  "code": "11",
  "title": "Hanói y Cao Bang",
  "tagline": "A partir del tercer día no volvéis a ver una ciudad. Seis días hasta Cao Bang. 🏞️",
  "intro": "Cao Bang está a seis horas de Hanói y casi nadie la vende. Por eso la cascada de Ban Gioc, que hace treinta metros de caída, se ve sin cola y sin barandilla llena.",
  "days": 6,
  "nights": 5,
  "groups": [
   "amigos",
   "mayores"
  ],
  "tier": null,
  "region": [
   "ha-noi",
   "cao-bang"
  ],
  "image": "images/trip-cao-bang.jpg",
  "route": [
   "Hanói",
   "Cao Bang"
  ],
  "price": null,
  "notes": [
   "Ban Gioc es la mayor cascada natural del sudeste asiático y aun así llega poca gente. La carretera es la razón."
  ],
  "itinerary": [
   {
    "day": "1–2",
    "span": 2,
    "title": "Hanói",
    "stops": [
     "templo-literatura",
     "barrio-antiguo-hanoi"
    ],
    "pace": "Tran Quoc, el Templo de la Literatura, el Casco Antiguo y Hang Be.",
    "meals": []
   },
   {
    "day": 3,
    "span": 1,
    "title": "Subida a Cao Bang",
    "stops": [],
    "pace": "Seis horas con paradas. Sitio histórico de Pac Bo.",
    "meals": []
   },
   {
    "day": 4,
    "span": 1,
    "title": "Cascada de Ban Gioc, cueva Nguom Ngao, forja en Phuc Sen y tejido Nung",
    "stops": [
     "ban-gioc"
    ],
    "pace": "",
    "meals": []
   },
   {
    "day": 5,
    "span": 1,
    "title": "Aldea de piedra Khuoi Ky, almuerzo de pato asado a las siete especias y ruta panorámica de vuelta",
    "stops": [],
    "pace": "",
    "meals": []
   },
   {
    "day": 6,
    "span": 1,
    "title": "Salida",
    "stops": [],
    "pace": "",
    "meals": []
   }
  ],
  "included": [],
  "excluded": [],
  "includedNote": "Inclusiones, alojamiento y precio: pendientes de confirmar",
  "cats": [
   "montanas",
   "cultura"
  ],
  "effort": "activo",
  "video": "videos/trip-11.mp4"
 },
 {
  "id": "12-hanoi-sa-pa-y-ha-long",
  "code": "12",
  "title": "Hanói, Sa Pa y Ha Long",
  "tagline": "Seis días que empiezan en la montaña y acaban en el agua. ⛰️",
  "intro": "Sa Pa y Ha Long están en extremos opuestos del norte, y juntarlas suele significar dos madrugones. Se resuelve durmiendo en Sa Pa y dejando la bahía para el final.",
  "days": 6,
  "nights": 5,
  "groups": [
   "amigos",
   "mayores"
  ],
  "tier": null,
  "region": [
   "ha-noi",
   "sa-pa",
   "ha-long"
  ],
  "image": "images/trip-sa-pa.jpg",
  "route": [
   "Hanói",
   "Sa Pa",
   "Ha Long"
  ],
  "price": null,
  "notes": [
   "El valle de Muong Hoa se ve desde el coche. No hace falta bajar a los arrozales para verlos."
  ],
  "itinerary": [
   {
    "day": "1–2",
    "span": 2,
    "title": "Hanói",
    "stops": [
     "templo-literatura",
     "barrio-antiguo-hanoi"
    ],
    "pace": "Tran Quoc, el Templo de la Literatura, el Casco Antiguo y Hang Be.",
    "meals": []
   },
   {
    "day": 3,
    "span": 1,
    "title": "Subida a Sa Pa",
    "stops": [
     "sa-pa-arrozales"
    ],
    "pace": "Cinco horas en coche privado. El pueblo, el mirador del lago, la Cascada de Plata y el paso O Quy Ho.",
    "meals": []
   },
   {
    "day": 4,
    "span": 1,
    "title": "Fansipan en teleférico y funicular, miradores del valle de Muong Hoa en vehículo, baño de pies con hierbas Dao Rojo",
    "stops": [
     "fansipan"
    ],
    "pace": "",
    "meals": []
   },
   {
    "day": 5,
    "span": 1,
    "title": "Bahía de Ha Long",
    "stops": [
     "bahia-ha-long"
    ],
    "pace": "Crucero de cinco estrellas: Cueva Luon en barca de bambú y té al atardecer.",
    "meals": []
   },
   {
    "day": 6,
    "span": 1,
    "title": "Salida",
    "stops": [],
    "pace": "",
    "meals": []
   }
  ],
  "included": [],
  "excluded": [],
  "includedNote": "Inclusiones, alojamiento y precio: pendientes de confirmar",
  "cats": [
   "montanas",
   "naturaleza",
   "cultura"
  ],
  "effort": "moderado",
  "video": "videos/trip-12.mp4"
 },
 {
  "id": "13-hanoi-ninh-binh-y-pu-luong",
  "code": "13",
  "title": "Hanói, Ninh Binh y Pu Luong",
  "tagline": "Dos de los seis días transcurren en un valle de casas sobre pilotes. 🌾",
  "intro": "Pu Luong está a tres horas y media de Hanói y no sale en las listas. Es arroz en terrazas, ruedas de agua de bambú y ninguna tienda de recuerdos.",
  "days": 6,
  "nights": 5,
  "groups": [
   "amigos",
   "mayores"
  ],
  "tier": null,
  "region": [
   "ha-noi",
   "ninh-binh",
   "pu-luong"
  ],
  "image": "images/trip-pu-luong.jpg",
  "route": [
   "Hanói",
   "Ninh Binh",
   "Pu Luong"
  ],
  "price": null,
  "notes": [
   "Las ruedas de agua de Pu Luong siguen regando los arrozales. No están puestas para las fotos.",
   "Enviádselo a quien quiera el norte sin multitudes."
  ],
  "itinerary": [
   {
    "day": "1–2",
    "span": 2,
    "title": "Hanói",
    "stops": [
     "templo-literatura",
     "barrio-antiguo-hanoi"
    ],
    "pace": "Tour cultural: Tran Quoc, el Templo de la Literatura, el Casco Antiguo y Hang Be.",
    "meals": []
   },
   {
    "day": 3,
    "span": 1,
    "title": "Ninh Binh",
    "stops": [
     "tam-coc"
    ],
    "pace": "Dos horas. Hoa Lu, Trang An en barca de remos y cocina con una familia local.",
    "meals": []
   },
   {
    "day": 4,
    "span": 1,
    "title": "Subida a Pu Luong",
    "stops": [
     "pu-luong"
    ],
    "pace": "Tres horas y media con miradores y paradas. Cena con una familia Thai.",
    "meals": []
   },
   {
    "day": 5,
    "span": 1,
    "title": "Pu Luong",
    "stops": [
     "pu-luong"
    ],
    "pace": "Ruedas de agua, tramo tranquilo en balsa de bambú, almuerzo de pato Co Lung y tejido Thai. Sin rápidos ni trekking.",
    "meals": []
   },
   {
    "day": 6,
    "span": 1,
    "title": "Salida",
    "stops": [],
    "pace": "",
    "meals": []
   }
  ],
  "included": [],
  "excluded": [],
  "includedNote": "Inclusiones, alojamiento y precio: pendientes de confirmar",
  "cats": [
   "montanas",
   "naturaleza",
   "cultura",
   "gastronomia"
  ],
  "effort": "activo",
  "video": "videos/trip-13.mp4"
 },
 {
  "id": "14-hanoi-ninh-binh-ha-long-y-hue",
  "code": "14",
  "title": "Hanói, Ninh Binh, Ha Long y Hue",
  "tagline": "El traslado más largo de estos siete días dura una hora y cuarto. ✈️",
  "intro": "Bajar de Hanói a Hue por carretera son catorce horas. Por eso este itinerario vuela ese tramo y deja el coche solo para las distancias cortas.",
  "days": 7,
  "nights": 6,
  "groups": [
   "amigos",
   "mayores"
  ],
  "tier": null,
  "region": [
   "ha-noi",
   "ninh-binh",
   "ha-long",
   "hue"
  ],
  "image": "images/day4-hue.jpg",
  "route": [
   "Hanói",
   "Ninh Binh",
   "Ha Long",
   "Hue"
  ],
  "price": null,
  "notes": [
   "La cocina vegetariana de Hue viene de los monasterios. Se come en casa particular, no en restaurante."
  ],
  "itinerary": [
   {
    "day": "1–2",
    "span": 2,
    "title": "Hanói",
    "stops": [
     "templo-literatura",
     "barrio-antiguo-hanoi"
    ],
    "pace": "Tran Quoc, el Templo de la Literatura, el Casco Antiguo y Hang Be. Taller de nem ran y café con huevo.",
    "meals": []
   },
   {
    "day": 3,
    "span": 1,
    "title": "Ninh Binh",
    "stops": [
     "tam-coc"
    ],
    "pace": "Dos horas. Hoa Lu, Trang An y los lotos de la Cueva Mua.",
    "meals": []
   },
   {
    "day": "4–5",
    "span": 2,
    "title": "Bahía de Ha Long",
    "stops": [
     "bahia-ha-long"
    ],
    "pace": "Noche a bordo en crucero de cinco estrellas. Al bajar, vuelo a Hue.",
    "meals": []
   },
   {
    "day": 6,
    "span": 1,
    "title": "Hue",
    "stops": [
     "ciudadela-imperial-hue",
     "pagoda-thien-mu"
    ],
    "pace": "Ciudadela Imperial en buggy, pagoda Thien Mu, taller de incienso y sombrero cónico, cocina vegetariana en una casa con jardín.",
    "meals": []
   },
   {
    "day": 7,
    "span": 1,
    "title": "Salida desde Hue",
    "stops": [],
    "pace": "",
    "meals": []
   }
  ],
  "included": [],
  "excluded": [],
  "includedNote": "Inclusiones, alojamiento y precio: pendientes de confirmar",
  "cats": [
   "naturaleza",
   "cultura",
   "gastronomia"
  ],
  "effort": "suave",
  "video": "videos/trip-14.mp4"
 },
 {
  "id": "16-hanoi-sa-pa-y-ninh-binh",
  "code": "16",
  "title": "Hanói, Sa Pa y Ninh Binh",
  "tagline": "Siete días en el norte: dos en Hanói, dos en la montaña y dos sobre el agua. ⛰️",
  "intro": "Sa Pa, Ninh Binh y Ha Long en un mismo viaje suelen convertirse en carreteras encadenadas. Aquí Hanói hace de eje y ningún trayecto pasa de cinco horas.",
  "days": 7,
  "nights": 6,
  "groups": [
   "amigos",
   "mayores"
  ],
  "tier": null,
  "region": [
   "ha-noi",
   "sa-pa",
   "ninh-binh",
   "ha-long"
  ],
  "image": "images/trip-ninh-binh.jpg",
  "route": [
   "Hanói",
   "Sa Pa",
   "Ninh Binh"
  ],
  "price": null,
  "notes": [
   "Ta Van y Lao Chai son dos aldeas distintas a veinte minutos una de otra. Casi todos los tours solo paran en una."
  ],
  "itinerary": [
   {
    "day": "1–2",
    "span": 2,
    "title": "Hanói",
    "stops": [
     "templo-literatura",
     "barrio-antiguo-hanoi"
    ],
    "pace": "Tran Quoc, el Templo de la Literatura, el Casco Antiguo y Hang Be.",
    "meals": []
   },
   {
    "day": 3,
    "span": 1,
    "title": "Subida a Sa Pa",
    "stops": [
     "sa-pa-arrozales"
    ],
    "pace": "Cinco horas. El pueblo, el mirador del lago, el paso O Quy Ho y baño de pies con hierbas Dao Rojo.",
    "meals": []
   },
   {
    "day": 4,
    "span": 1,
    "title": "Valle de Muong Hoa, aldeas de Ta Van y Lao Chai, Fansipan",
    "stops": [
     "fansipan"
    ],
    "pace": "Vuelta a Hanói.",
    "meals": []
   },
   {
    "day": 5,
    "span": 1,
    "title": "Ninh Binh",
    "stops": [
     "tam-coc"
    ],
    "pace": "Dos horas. Hoa Lu, Trang An y los lotos de la Cueva Mua.",
    "meals": []
   },
   {
    "day": 6,
    "span": 1,
    "title": "Bahía de Ha Long",
    "stops": [
     "bahia-ha-long"
    ],
    "pace": "Tai chi en cubierta, brunch y desembarque.",
    "meals": []
   },
   {
    "day": 7,
    "span": 1,
    "title": "Salida",
    "stops": [],
    "pace": "",
    "meals": []
   }
  ],
  "included": [],
  "excluded": [],
  "includedNote": "Inclusiones, alojamiento y precio: pendientes de confirmar",
  "cats": [
   "montanas",
   "naturaleza",
   "cultura"
  ],
  "effort": "moderado",
  "video": "videos/trip-16.mp4"
 },
 {
  "id": "17-hanoi-sa-pa-y-ha-long",
  "code": "17",
  "title": "Hanói, Sa Pa y Ha Long",
  "tagline": "¿Solo siete días y queréis Sa Pa? Se puede, y sin dormir en un autocar. ⛰️",
  "intro": "La versión rápida de Sa Pa sale de noche en tren y llega deshecha. Esta va en coche privado de día, con paradas, y deja la bahía para el final.",
  "days": 7,
  "nights": 6,
  "groups": [
   "amigos",
   "mayores"
  ],
  "tier": null,
  "region": [
   "ha-noi",
   "sa-pa",
   "ha-long"
  ],
  "image": "images/trip-ha-long.jpg",
  "route": [
   "Hanói",
   "Sa Pa",
   "Ha Long"
  ],
  "price": null,
  "notes": [
   "Se sube de día para ver la carretera. De noche es el mismo trayecto sin nada que mirar.",
   "Enviádselo a quien esté dudando entre tren y coche."
  ],
  "itinerary": [
   {
    "day": "1–2",
    "span": 2,
    "title": "Hanói",
    "stops": [
     "templo-literatura",
     "barrio-antiguo-hanoi"
    ],
    "pace": "Tran Quoc, el Templo de la Literatura, el Casco Antiguo y Hang Be.",
    "meals": []
   },
   {
    "day": 3,
    "span": 1,
    "title": "Subida a Sa Pa en coche privado",
    "stops": [
     "sa-pa-arrozales"
    ],
    "pace": "Cinco horas. El pueblo, el mirador del lago, la Cascada de Plata y el paso O Quy Ho.",
    "meals": []
   },
   {
    "day": 4,
    "span": 1,
    "title": "Fansipan en teleférico y funicular, valle de Muong Hoa en vehículo, baño de pies con hierbas Dao Rojo",
    "stops": [
     "fansipan"
    ],
    "pace": "",
    "meals": []
   },
   {
    "day": 5,
    "span": 1,
    "title": "Mercado local y vuelta a Hanói por la ruta panorámica, con paradas de descanso",
    "stops": [],
    "pace": "",
    "meals": []
   },
   {
    "day": 6,
    "span": 1,
    "title": "Bahía de Ha Long",
    "stops": [
     "bahia-ha-long"
    ],
    "pace": "Cueva Luon en barca de bambú y la isla Titop vista desde el crucero.",
    "meals": []
   },
   {
    "day": 7,
    "span": 1,
    "title": "Salida",
    "stops": [],
    "pace": "",
    "meals": []
   }
  ],
  "included": [],
  "excluded": [],
  "includedNote": "Inclusiones, alojamiento y precio: pendientes de confirmar",
  "cats": [
   "montanas",
   "naturaleza",
   "cultura",
   "gastronomia"
  ],
  "effort": "moderado",
  "video": "videos/trip-17.mp4"
 },
 {
  "id": "18-hanoi-ninh-binh-ha-long-y-hue",
  "code": "18",
  "title": "Hanói, Ninh Binh, Ha Long y Hue",
  "tagline": "Del norte al centro en ocho días, sin repetir una sola carretera.",
  "intro": "Vietnam mide mil seiscientos kilómetros. Los itinerarios que van y vuelven pierden dos días enteros en el mismo asfalto. Este va en una dirección.",
  "days": 8,
  "nights": 7,
  "groups": [
   "amigos",
   "mayores"
  ],
  "tier": null,
  "region": [
   "ha-noi",
   "ninh-binh",
   "ha-long",
   "hue",
   "hoi-an",
   "da-nang"
  ],
  "image": "images/day2-hoi-an.jpg",
  "route": [
   "Hanói",
   "Ninh Binh",
   "Ha Long",
   "Hue"
  ],
  "price": null,
  "notes": [
   "El paso de Hai Van se cruza por arriba, no por el túnel. Son treinta minutos más y la vista es el motivo."
  ],
  "itinerary": [
   {
    "day": "1–2",
    "span": 2,
    "title": "Hanói",
    "stops": [
     "templo-literatura",
     "barrio-antiguo-hanoi"
    ],
    "pace": "Tran Quoc, el Templo de la Literatura, el Casco Antiguo y Hang Be.",
    "meals": []
   },
   {
    "day": 3,
    "span": 1,
    "title": "Ninh Binh",
    "stops": [
     "tam-coc"
    ],
    "pace": "Dos horas. Hoa Lu, Trang An y los lotos de la Cueva Mua.",
    "meals": []
   },
   {
    "day": "4–5",
    "span": 2,
    "title": "Bahía de Ha Long",
    "stops": [
     "bahia-ha-long"
    ],
    "pace": "Noche a bordo. Al desembarcar, vuelo a Hue.",
    "meals": []
   },
   {
    "day": 6,
    "span": 1,
    "title": "Hue",
    "stops": [
     "ciudadela-imperial-hue",
     "pagoda-thien-mu"
    ],
    "pace": "Ciudadela en buggy, Thien Mu, incienso y sombrero cónico.",
    "meals": []
   },
   {
    "day": 7,
    "span": 1,
    "title": "Hue a Hoi An",
    "stops": [
     "paso-hai-van",
     "montanas-de-marmol",
     "casco-antiguo-hoi-an"
    ],
    "pace": "Tres horas por el paso de Hai Van, con parada en las Montañas de Mármol.",
    "meals": []
   },
   {
    "day": 8,
    "span": 1,
    "title": "Salida desde Da Nang",
    "stops": [],
    "pace": "",
    "meals": []
   }
  ],
  "included": [],
  "excluded": [],
  "includedNote": "Inclusiones, alojamiento y precio: pendientes de confirmar",
  "cats": [
   "naturaleza",
   "cultura"
  ],
  "effort": "suave",
  "video": "videos/trip-18.mp4"
 },
 {
  "id": "19-ciudad-ho-chi-minh-mekong-y-phu-quoc",
  "code": "19",
  "title": "Ciudad Ho Chi Minh, Mekong y Phu Quoc",
  "tagline": "Ocho días en el sur, y tres de ellos sin reloj. 🏝️",
  "intro": "El sur se suele vender como dos días de ciudad y un salto a la playa. Aquí Saigón y el Mekong ocupan lo suyo, y Phu Quoc son cuatro días de verdad, no una escala.",
  "days": 8,
  "nights": 7,
  "groups": [
   "amigos",
   "mayores"
  ],
  "tier": null,
  "region": [
   "ho-chi-minh",
   "mekong",
   "phu-quoc"
  ],
  "image": "images/trip-mekong.jpg",
  "route": [
   "Ciudad Ho Chi Minh",
   "Mekong",
   "Phu Quoc"
  ],
  "price": null,
  "notes": [
   "La salsa de pescado de Phu Quoc fermenta un año en barricas de madera. La casa que visitáis sigue haciéndola así."
  ],
  "itinerary": [
   {
    "day": "1–2",
    "span": 2,
    "title": "Ciudad Ho Chi Minh",
    "stops": [
     "correos-saigon"
    ],
    "pace": "Palacio de la Independencia, Oficina Central de Correos, Cho Lon, el refugio de Biet Dong y café filtrado con tela.",
    "meals": []
   },
   {
    "day": 3,
    "span": 1,
    "title": "Delta del Mekong",
    "stops": [
     "delta-mekong"
    ],
    "pace": "Dos horas. Canales de coco de Ben Tre en bote, huerto frutal y banh xeo con una familia local.",
    "meals": []
   },
   {
    "day": "4–5",
    "span": 2,
    "title": "Vuelo a Phu Quoc",
    "stops": [
     "phu-quoc-isla"
    ],
    "pace": "Teleférico de Hon Thom, Sunset Town y barco con fondo de cristal.",
    "meals": []
   },
   {
    "day": 6,
    "span": 1,
    "title": "Finca de pimienta, casa tradicional de salsa de pescado y taller de vino de sim",
    "stops": [],
    "pace": "",
    "meals": []
   },
   {
    "day": 7,
    "span": 1,
    "title": "Playa, spa suave y cena al atardecer",
    "stops": [],
    "pace": "",
    "meals": []
   },
   {
    "day": 8,
    "span": 1,
    "title": "Salida desde Phu Quoc",
    "stops": [
     "phu-quoc-isla"
    ],
    "pace": "",
    "meals": []
   }
  ],
  "included": [],
  "excluded": [],
  "includedNote": "Inclusiones, alojamiento y precio: pendientes de confirmar",
  "cats": [
   "naturaleza",
   "playa",
   "gastronomia"
  ],
  "effort": "suave",
  "video": "videos/trip-19.mp4"
 },
 {
  "id": "20-hanoi-ha-giang-y-ninh-binh",
  "code": "20",
  "title": "Hanói, Ha Giang y Ninh Binh",
  "tagline": "El circuito de Ha Giang se puede hacer en coche. Ocho días para verlo. 🏍️",
  "intro": "La carretera del norte es la más bonita del país y también la que más accidentes tiene en moto. En coche privado se ve igual, con paradas cada hora y media.",
  "days": 8,
  "nights": 7,
  "groups": [
   "amigos",
   "mayores"
  ],
  "tier": null,
  "region": [
   "ha-noi",
   "ha-giang",
   "ninh-binh"
  ],
  "image": "images/trip-ha-giang.jpg",
  "route": [
   "Hanói",
   "Ha Giang",
   "Ninh Binh"
  ],
  "price": null,
  "notes": [
   "El paso de Ma Pi Leng se abrió a mano en los años sesenta: seis años picando roca con martillo.",
   "Enviádselo a quien os dijo que Ha Giang solo se hace en moto."
  ],
  "itinerary": [
   {
    "day": "1–2",
    "span": 2,
    "title": "Hanói",
    "stops": [
     "templo-literatura",
     "barrio-antiguo-hanoi"
    ],
    "pace": "Tran Quoc, el Templo de la Literatura, el Casco Antiguo y Hang Be.",
    "meals": []
   },
   {
    "day": 3,
    "span": 1,
    "title": "Subida a Ha Giang",
    "stops": [],
    "pace": "Seis horas. Puerta del Cielo de Quan Ba y las Montañas Gemelas.",
    "meals": []
   },
   {
    "day": "4–5",
    "span": 2,
    "title": "El circuito",
    "stops": [
     "ma-pi-leng"
    ],
    "pace": "Meseta kárstica de Dong Van, miradores de Ma Pi Leng y tejido de lino H'Mong en Lung Tam.",
    "meals": []
   },
   {
    "day": 6,
    "span": 1,
    "title": "Mercado local y vuelta a Hanói por la ruta panorámica",
    "stops": [],
    "pace": "",
    "meals": []
   },
   {
    "day": 7,
    "span": 1,
    "title": "Ninh Binh",
    "stops": [
     "tam-coc"
    ],
    "pace": "Dos horas. Hoa Lu, Trang An y los lotos de la Cueva Mua.",
    "meals": []
   },
   {
    "day": 8,
    "span": 1,
    "title": "Salida",
    "stops": [],
    "pace": "",
    "meals": []
   }
  ],
  "included": [],
  "excluded": [],
  "includedNote": "Inclusiones, alojamiento y precio: pendientes de confirmar",
  "cats": [
   "montanas",
   "naturaleza",
   "cultura",
   "gastronomia"
  ],
  "effort": "activo",
  "video": "videos/trip-20.mp4"
 },
 {
  "id": "21-hanoi-ha-giang-y-ha-long",
  "code": "21",
  "title": "Hanói, Ha Giang y Ha Long",
  "tagline": "A Ha Giang le damos tres días en vez de dos. Ocho en total. 🏔️",
  "intro": "El circuito comprimido en dos jornadas son ocho horas de coche al día. Con tres, cada tramo baja a cuatro y sobra tiempo para bajarse a mirar.",
  "days": 8,
  "nights": 7,
  "groups": [
   "amigos",
   "mayores"
  ],
  "tier": null,
  "region": [
   "ha-noi",
   "ha-giang",
   "ha-long"
  ],
  "image": "images/trip-ha-long.jpg",
  "route": [
   "Hanói",
   "Ha Giang",
   "Ha Long"
  ],
  "price": null,
  "notes": [
   "Las casas de tierra apisonada de Lo Lo Chai mantienen dieciocho grados en verano. Se entra a una."
  ],
  "itinerary": [
   {
    "day": "1–2",
    "span": 2,
    "title": "Hanói",
    "stops": [
     "templo-literatura",
     "barrio-antiguo-hanoi"
    ],
    "pace": "Tran Quoc, el Templo de la Literatura, el Casco Antiguo y Hang Be.",
    "meals": []
   },
   {
    "day": 3,
    "span": 1,
    "title": "Subida a Ha Giang",
    "stops": [],
    "pace": "Seis horas. La ciudad y el mirador junto al río.",
    "meals": []
   },
   {
    "day": 4,
    "span": 1,
    "title": "Puerta del Cielo de Quan Ba, Montañas Gemelas y tejido de lino H'Mong en Lung Tam",
    "stops": [],
    "pace": "",
    "meals": []
   },
   {
    "day": 5,
    "span": 1,
    "title": "Casco Antiguo de Dong Van, miradores de Ma Pi Leng, casa de tierra en Lo Lo Chai y almuerzo con una familia H'Mong",
    "stops": [
     "ma-pi-leng",
     "barrio-antiguo-hanoi"
    ],
    "pace": "",
    "meals": []
   },
   {
    "day": 6,
    "span": 1,
    "title": "Vuelta a Hanói por la ruta panorámica",
    "stops": [],
    "pace": "",
    "meals": []
   },
   {
    "day": 7,
    "span": 1,
    "title": "Bahía de Ha Long",
    "stops": [
     "bahia-ha-long"
    ],
    "pace": "Crucero de cinco estrellas y té al atardecer.",
    "meals": []
   },
   {
    "day": 8,
    "span": 1,
    "title": "Salida",
    "stops": [],
    "pace": "",
    "meals": []
   }
  ],
  "included": [],
  "excluded": [],
  "includedNote": "Inclusiones, alojamiento y precio: pendientes de confirmar",
  "cats": [
   "montanas",
   "naturaleza",
   "cultura"
  ],
  "effort": "activo",
  "video": "videos/trip-21.mp4"
 },
 {
  "id": "22-hanoi-ninh-binh-ha-long-y-hue",
  "code": "22",
  "title": "Hanói, Ninh Binh, Ha Long y Hue",
  "tagline": "Cinco provincias en nueve días, y ni una vuelta atrás.",
  "intro": "De Hanói se sube a la bahía, se vuela a Hue y se baja por tierra hasta Hoi An. Cada traslado deja algo nuevo detrás.",
  "days": 9,
  "nights": 8,
  "groups": [
   "amigos",
   "mayores"
  ],
  "tier": null,
  "region": [
   "ha-noi",
   "ninh-binh",
   "ha-long",
   "hue",
   "hoi-an",
   "da-nang"
  ],
  "image": "images/day4-hue.jpg",
  "route": [
   "Hanói",
   "Ninh Binh",
   "Ha Long",
   "Hue"
  ],
  "price": null,
  "notes": [
   "En Cam Thanh la barca cesta se puede hacer sin los giros rápidos. Basta pedirlo antes de subir."
  ],
  "itinerary": [
   {
    "day": "1–2",
    "span": 2,
    "title": "Hanói",
    "stops": [
     "templo-literatura",
     "barrio-antiguo-hanoi"
    ],
    "pace": "Tran Quoc, el Templo de la Literatura, el Casco Antiguo y Hang Be.",
    "meals": []
   },
   {
    "day": 3,
    "span": 1,
    "title": "Ninh Binh",
    "stops": [
     "tam-coc"
    ],
    "pace": "Dos horas. Hoa Lu, Trang An y los lotos de la Cueva Mua.",
    "meals": []
   },
   {
    "day": "4–5",
    "span": 2,
    "title": "Bahía de Ha Long",
    "stops": [
     "bahia-ha-long"
    ],
    "pace": "Noche a bordo. Al desembarcar, vuelo a Hue.",
    "meals": []
   },
   {
    "day": 6,
    "span": 1,
    "title": "Hue",
    "stops": [
     "ciudadela-imperial-hue",
     "pagoda-thien-mu"
    ],
    "pace": "Ciudadela en buggy, Thien Mu, incienso y sombrero cónico.",
    "meals": []
   },
   {
    "day": 7,
    "span": 1,
    "title": "Hue a Hoi An",
    "stops": [
     "paso-hai-van",
     "montanas-de-marmol",
     "casco-antiguo-hoi-an"
    ],
    "pace": "Tres horas por Hai Van, con parada en las Montañas de Mármol.",
    "meals": []
   },
   {
    "day": 8,
    "span": 1,
    "title": "Hoi An",
    "stops": [
     "aldea-cam-thanh",
     "casco-antiguo-hoi-an"
    ],
    "pace": "Tra Que, barca cesta en Cam Thanh sin giros, taller de farolillos y el Casco Antiguo.",
    "meals": []
   },
   {
    "day": 9,
    "span": 1,
    "title": "Salida desde Da Nang",
    "stops": [],
    "pace": "",
    "meals": []
   }
  ],
  "included": [],
  "excluded": [],
  "includedNote": "Inclusiones, alojamiento y precio: pendientes de confirmar",
  "cats": [
   "naturaleza",
   "cultura"
  ],
  "effort": "suave",
  "video": "videos/trip-22.mp4"
 },
 {
  "id": "23-hanoi-ninh-binh-ha-long-y-da-nang",
  "code": "23",
  "title": "Hanói, Ninh Binh, Ha Long y Da Nang",
  "tagline": "Once días para las tres regiones, y aun así se come sentado.",
  "intro": "Vietnam mide 1.650 km de punta a punta. En once días caben las tres regiones si se reparten bien las noches: cuatro arriba, tres en el centro, tres abajo.",
  "days": 11,
  "nights": 10,
  "groups": [
   "amigos",
   "mayores"
  ],
  "tier": null,
  "region": [
   "ha-noi",
   "ninh-binh",
   "ha-long",
   "hoi-an",
   "hue",
   "ho-chi-minh",
   "mekong"
  ],
  "image": "images/trip-mekong.jpg",
  "route": [
   "Hanói",
   "Ninh Binh",
   "Ha Long",
   "Da Nang"
  ],
  "price": null,
  "notes": [
   "En Hue, la tumba de Khai Dinh está a media hora del centro y no se parece a nada del resto del país."
  ],
  "itinerary": [
   {
    "day": "1–4",
    "span": 4,
    "title": "Hanói, Ninh Binh y Ha Long",
    "stops": [
     "templo-literatura",
     "tam-coc",
     "bahia-ha-long"
    ],
    "pace": "La pagoda Tran Quoc, el Templo de la Literatura, Tam Coc en sampán y una noche en la bahía.",
    "meals": []
   },
   {
    "day": "5–8",
    "span": 4,
    "title": "Hoi An y Hue",
    "stops": [
     "paso-hai-van",
     "ciudadela-imperial-hue",
     "tumba-khai-dinh",
     "casco-antiguo-hoi-an"
    ],
    "pace": "Vuelo a Da Nang, callejuelas y casas de mercaderes, y el paso de Hai Van hasta la Ciudadela Imperial y las tumbas de Minh Mang y Khai Dinh.",
    "meals": []
   },
   {
    "day": "9–11",
    "span": 3,
    "title": "Saigón y Ben Tre",
    "stops": [
     "delta-mekong"
    ],
    "pace": "Ayuntamiento, calle Dong Khoi, mercado Ben Thanh y un día entero en el delta entre hornos de ladrillo y talleres de coco.",
    "meals": []
   }
  ],
  "included": [],
  "excluded": [],
  "includedNote": "Inclusiones, alojamiento y precio: pendientes de confirmar",
  "cats": [
   "naturaleza",
   "cultura",
   "gastronomia"
  ],
  "effort": "suave"
 },
 {
  "id": "24-ciudad-ho-chi-minh-mekong-y-phu-quoc",
  "code": "24",
  "title": "Ciudad Ho Chi Minh, Mekong y Phu Quoc",
  "tagline": "Cuatro noches de delta y cuatro días de isla. Nada más.",
  "intro": "Hay viajes que no necesitan más sitios, necesitan más tiempo en cada uno. Este se queda en el sur y no sube al norte.",
  "days": 9,
  "nights": 8,
  "groups": [
   "amigos",
   "mayores"
  ],
  "tier": null,
  "region": [
   "ho-chi-minh",
   "mekong",
   "phu-quoc"
  ],
  "image": "images/trip-hcmc.jpg",
  "route": [
   "Ciudad Ho Chi Minh",
   "Mekong",
   "Phu Quoc"
  ],
  "price": null,
  "notes": [
   "En el homestay de Ben Tre el baño de pies con hierbas es de la casa, no de un spa."
  ],
  "itinerary": [
   {
    "day": "1–2",
    "span": 2,
    "title": "Ciudad Ho Chi Minh",
    "stops": [],
    "pace": "Parque Tao Dan por la mañana, Palacio de la Independencia y Teatro Municipal, y ruta nocturna en Vespa para cenar donde cenan los de aquí.",
    "meals": []
   },
   {
    "day": "3–4",
    "span": 2,
    "title": "Ben Tre y Vinh Long",
    "stops": [
     "delta-mekong"
    ],
    "pace": "Dos horas desde Saigón. Se duerme en casa de una familia, se hace el almuerzo con ellos y se pedalea por el campo al atardecer.",
    "meals": []
   },
   {
    "day": 5,
    "span": 1,
    "title": "Can Tho",
    "stops": [
     "phu-quoc-isla",
     "can-tho"
    ],
    "pace": "El mercado flotante de Cai Rang al amanecer y ferry a Phu Quoc.",
    "meals": []
   },
   {
    "day": "6–9",
    "span": 4,
    "title": "Phu Quoc",
    "stops": [
     "phu-quoc-isla"
    ],
    "pace": "Cuatro días sin nada apuntado en la agenda.",
    "meals": []
   }
  ],
  "included": [],
  "excluded": [],
  "includedNote": "Inclusiones, alojamiento y precio: pendientes de confirmar",
  "cats": [
   "naturaleza",
   "playa",
   "gastronomia"
  ],
  "effort": "suave",
  "video": "videos/trip-24.mp4"
 },
 {
  "id": "25-hanoi-sa-pa-ninh-binh-y-ha-long",
  "code": "25",
  "title": "Hanói, Sa Pa, Ninh Binh y Ha Long",
  "tagline": "Ocho días solo por el norte, que es donde está el paisaje.",
  "intro": "Ocho días dan para bajar al sur y no ver nada, o para quedarse arriba y verlo entero. Esta versión se queda.",
  "days": 8,
  "nights": 7,
  "groups": [
   "amigos",
   "mayores"
  ],
  "tier": null,
  "region": [
   "ha-noi",
   "ho-chi-minh",
   "sa-pa",
   "ninh-binh",
   "ha-long"
  ],
  "image": "images/trip-sa-pa.jpg",
  "route": [
   "Hanói",
   "Sa Pa",
   "Ninh Binh",
   "Ha Long"
  ],
  "price": null,
  "notes": [
   "El tren nocturno a Lao Cai sale sobre las diez y se llega con el desayuno hecho."
  ],
  "itinerary": [
   {
    "day": "1–2",
    "span": 2,
    "title": "Hanói",
    "stops": [
     "templo-literatura",
     "barrio-antiguo-hanoi"
    ],
    "pace": "Casa y monumentos de Ho Chi Minh, Templo de la Literatura, Museo de Etnología y el Casco Antiguo. Tren nocturno a Lao Cai.",
    "meals": []
   },
   {
    "day": "3–4",
    "span": 2,
    "title": "Sa Pa",
    "stops": [
     "sa-pa-arrozales"
    ],
    "pace": "La Cascada de Plata, la Puerta del Cielo y el paso Tram Ton, a 2.047 metros. Bajada a pie por el valle de Ma Tra.",
    "meals": []
   },
   {
    "day": 5,
    "span": 1,
    "title": "Ninh Binh",
    "stops": [
     "tam-coc"
    ],
    "pace": "Dos horas desde Hanói: templos de Hoa Lu y barca por Trang An.",
    "meals": []
   },
   {
    "day": "6–7",
    "span": 2,
    "title": "Bahía de Ha Long",
    "stops": [
     "bahia-ha-long"
    ],
    "pace": "Cueva kárstica, kayak y noche a bordo.",
    "meals": []
   }
  ],
  "included": [],
  "excluded": [],
  "includedNote": "Inclusiones, alojamiento y precio: pendientes de confirmar",
  "cats": [
   "montanas",
   "naturaleza",
   "cultura"
  ],
  "effort": "moderado",
  "video": "videos/trip-25.mp4"
 },
 {
  "id": "26-ciudad-ho-chi-minh-mekong-da-nang-y-my-son",
  "code": "26",
  "title": "Ciudad Ho Chi Minh, Mekong, Da Nang y My Son",
  "tagline": "Doce días de Saigón a Hanói, en el orden que tiene sentido.",
  "intro": "De sur a norte se viaja mejor: se empieza con calor y mercado, y se termina con la bahía y el frío suave del norte.",
  "days": 12,
  "nights": 11,
  "groups": [
   "amigos",
   "mayores"
  ],
  "tier": null,
  "region": [
   "ho-chi-minh",
   "mekong",
   "hoi-an",
   "da-nang",
   "hue",
   "ha-noi",
   "ha-long"
  ],
  "image": "images/day2-hoi-an.jpg",
  "route": [
   "Ciudad Ho Chi Minh",
   "Mekong",
   "Da Nang",
   "My Son"
  ],
  "price": null,
  "notes": [
   "My Son es del siglo IV. Estaba en pie mil años antes que la Ciudadela de Hue."
  ],
  "itinerary": [
   {
    "day": "1–3",
    "span": 3,
    "title": "Saigón y el Mekong",
    "stops": [
     "delta-mekong",
     "tuneles-cu-chi"
    ],
    "pace": "Cu Chi, el Museo de los Vestigios de la Guerra y un día entero entre huertos de Cai Be y talleres de las aldeas.",
    "meals": []
   },
   {
    "day": "4–5",
    "span": 2,
    "title": "Hoi An y My Son",
    "stops": [
     "my-son",
     "casco-antiguo-hoi-an"
    ],
    "pace": "Vuelo a Da Nang, el antiguo puerto comercial a pie y las torres cham de My Son, a una hora del pueblo.",
    "meals": []
   },
   {
    "day": "6–7",
    "span": 2,
    "title": "Hue",
    "stops": [
     "ciudadela-imperial-hue",
     "montanas-de-marmol"
    ],
    "pace": "Montañas de Mármol de camino, Ciudadela Imperial, barco dragón por el río de los Perfumes y la tumba de Tu Duc.",
    "meals": []
   },
   {
    "day": "8–12",
    "span": 5,
    "title": "Hanói y Ha Long",
    "stops": [
     "bahia-ha-long"
    ],
    "pace": "Complejo Ho Chi Minh, marionetas de agua y dos días de bahía con noche a bordo.",
    "meals": []
   }
  ],
  "included": [],
  "excluded": [],
  "includedNote": "Inclusiones, alojamiento y precio: pendientes de confirmar",
  "cats": [
   "naturaleza",
   "cultura",
   "gastronomia"
  ],
  "effort": "suave"
 },
 {
  "id": "27-ciudad-ho-chi-minh-mekong-da-nang-y-hoi-an",
  "code": "27",
  "title": "Ciudad Ho Chi Minh, Mekong, Da Nang y Hoi An",
  "tagline": "Once días de sur a norte con dos días enteros de playa por medio.",
  "intro": "No hace falta elegir entre cultura y descanso. Aquí el descanso está en Hoi An, que es donde se aprovecha.",
  "days": 11,
  "nights": 10,
  "groups": [
   "amigos",
   "mayores"
  ],
  "tier": null,
  "region": [
   "ho-chi-minh",
   "mekong",
   "hoi-an",
   "da-nang",
   "hue",
   "ha-noi",
   "ha-long"
  ],
  "image": "images/day3-ba-na-hills.jpg",
  "route": [
   "Ciudad Ho Chi Minh",
   "Mekong",
   "Da Nang",
   "Hoi An"
  ],
  "price": null,
  "notes": [
   "En Hoi An los sastres tardan un día. Si encargáis el primer día, lo recogéis antes de salir."
  ],
  "itinerary": [
   {
    "day": "1–3",
    "span": 3,
    "title": "Saigón y Ben Tre",
    "stops": [
     "delta-mekong",
     "tuneles-cu-chi"
    ],
    "pace": "Ciudad a pie, Cu Chi y un día de delta en barca por los canales.",
    "meals": []
   },
   {
    "day": "4–5",
    "span": 2,
    "title": "Hoi An",
    "stops": [
     "casco-antiguo-hoi-an"
    ],
    "pace": "Vuelo a Da Nang y 45 minutos de coche. Casco Antiguo, sastres, y la playa de Cua Dai a diez minutos en bici.",
    "meals": []
   },
   {
    "day": 6,
    "span": 1,
    "title": "Paso de Hai Van",
    "stops": [
     "paso-hai-van"
    ],
    "pace": "Tres horas de costa hasta Hue, con parada en la laguna de Lang Co.",
    "meals": []
   },
   {
    "day": "7–11",
    "span": 5,
    "title": "Hanói y Ha Long",
    "stops": [
     "templo-literatura",
     "bahia-ha-long",
     "barrio-antiguo-hanoi"
    ],
    "pace": "Templo de la Literatura, ciclo por el Casco Antiguo y noche a bordo entre islotes.",
    "meals": []
   }
  ],
  "included": [],
  "excluded": [],
  "includedNote": "Inclusiones, alojamiento y precio: pendientes de confirmar",
  "cats": [
   "naturaleza",
   "cultura"
  ],
  "effort": "suave",
  "video": "videos/trip-27.mp4"
 },
 {
  "id": "28-ciudad-ho-chi-minh-mekong-da-nang-hoi-an-y-hue",
  "code": "28",
  "title": "Ciudad Ho Chi Minh, Mekong, Da Nang, Hoi An y Hue",
  "tagline": "Dieciséis días de sur a norte, y los últimos cinco son de montaña y bahía.",
  "intro": "Casi todos los viajes de dos semanas acaban en la playa. Este sube: empieza en el calor del Mekong y termina en la niebla de Sa Pa y en la cubierta de un barco en Ha Long.",
  "days": 16,
  "nights": 15,
  "groups": [
   "amigos",
   "mayores"
  ],
  "tier": null,
  "region": [
   "ho-chi-minh",
   "mekong",
   "hoi-an",
   "hue",
   "sa-pa",
   "ha-noi",
   "ha-long"
  ],
  "image": "images/trip-sa-pa.jpg",
  "route": [
   "Ciudad Ho Chi Minh",
   "Mekong",
   "Da Nang",
   "Hoi An",
   "Hue"
  ],
  "price": null,
  "notes": [
   "Subir de sur a norte deja lo más fresco para el final. En Sa Pa se duerme con manta."
  ],
  "itinerary": [
   {
    "day": "1–3",
    "span": 3,
    "title": "Saigón, Cu Chi y el Delta del Mekong en Ben Tre",
    "stops": [
     "delta-mekong",
     "tuneles-cu-chi"
    ],
    "pace": "",
    "meals": []
   },
   {
    "day": "4–6",
    "span": 3,
    "title": "Vuelo a Da Nang",
    "stops": [
     "casco-antiguo-hoi-an"
    ],
    "pace": "Hoi An, con un día libre para el Casco Antiguo sin prisa.",
    "meals": []
   },
   {
    "day": "7–8",
    "span": 2,
    "title": "Hue por el paso de Hai Van",
    "stops": [
     "paso-hai-van"
    ],
    "pace": "Después, vuelo a Hanói.",
    "meals": []
   },
   {
    "day": "9–12",
    "span": 4,
    "title": "Sa Pa",
    "stops": [
     "fansipan",
     "sa-pa-arrozales"
    ],
    "pace": "Dos días completos en los valles y el Fansipan antes de volver a Hanói.",
    "meals": []
   },
   {
    "day": "13–14",
    "span": 2,
    "title": "Bahía de Ha Long, con noche a bordo",
    "stops": [
     "bahia-ha-long"
    ],
    "pace": "",
    "meals": []
   },
   {
    "day": "15–16",
    "span": 2,
    "title": "Salida",
    "stops": [],
    "pace": "",
    "meals": []
   }
  ],
  "included": [],
  "excluded": [],
  "includedNote": "Inclusiones, alojamiento y precio: pendientes de confirmar",
  "cats": [
   "montanas",
   "naturaleza",
   "cultura"
  ],
  "effort": "moderado",
  "video": "videos/trip-28.mp4"
 },
 {
  "id": "29-hanoi-ha-long-da-nang-y-hoi-an",
  "code": "29",
  "title": "Hanói, Ha Long, Da Nang y Hoi An",
  "tagline": "Doce días y la bahía de Ha Long el tercero, no el último.",
  "intro": "Poner Ha Long al principio tiene una ventaja: si el tiempo falla, quedan días para moverlo. Al final del viaje no queda margen.",
  "days": 12,
  "nights": 11,
  "groups": [
   "amigos",
   "mayores"
  ],
  "tier": null,
  "region": [
   "ha-noi",
   "ha-long",
   "hoi-an",
   "hue",
   "ho-chi-minh",
   "mekong"
  ],
  "image": "images/trip-mekong.jpg",
  "route": [
   "Hanói",
   "Ha Long",
   "Da Nang",
   "Hoi An"
  ],
  "price": null,
  "notes": [
   "A Cu Chi se puede llegar por el río. Es una hora de lancha y se evita toda la carretera."
  ],
  "itinerary": [
   {
    "day": "1–3",
    "span": 3,
    "title": "Hanói y Ha Long",
    "stops": [
     "bahia-ha-long",
     "barrio-antiguo-hanoi"
    ],
    "pace": "Mausoleo, casa sobre pilotes y ciclo por el Casco Antiguo; después junco tradicional, cueva de Cat Ba y clase de cocina a bordo.",
    "meals": []
   },
   {
    "day": "4–6",
    "span": 3,
    "title": "Hoi An",
    "stops": [
     "casco-antiguo-hoi-an"
    ],
    "pace": "Vuelo a Da Nang, Puente Cubierto Japonés, aldea ecológica de Thanh Dong y un día para el taller de farolillos o la salida con pescadores.",
    "meals": []
   },
   {
    "day": "7–8",
    "span": 2,
    "title": "Hue",
    "stops": [
     "paso-hai-van",
     "ciudadela-imperial-hue"
    ],
    "pace": "Escuela de cocina Red Bridge de camino, paso de Hai Van, Ciudadela y barco dragón.",
    "meals": []
   },
   {
    "day": "9–12",
    "span": 4,
    "title": "Saigón, el Mekong y Cu Chi",
    "stops": [
     "delta-mekong",
     "tuneles-cu-chi"
    ],
    "pace": "Cai Be en sampán, casa familiar del siglo XIX y los túneles en lancha rápida.",
    "meals": []
   }
  ],
  "included": [],
  "excluded": [],
  "includedNote": "Inclusiones, alojamiento y precio: pendientes de confirmar",
  "cats": [
   "naturaleza",
   "cultura",
   "gastronomia"
  ],
  "effort": "suave",
  "video": "videos/trip-29.mp4"
 },
 {
  "id": "30-hanoi-mai-chau-ha-long-y-hue",
  "code": "30",
  "title": "Hanói, Mai Chau, Ha Long y Hue",
  "tagline": "Dieciséis días que terminan con tres de playa en Mui Ne.",
  "intro": "La parte cultural primero, el descanso después. Así nadie vuelve más cansado de lo que se fue.",
  "days": 16,
  "nights": 15,
  "groups": [
   "amigos",
   "mayores"
  ],
  "tier": null,
  "region": [
   "ha-noi",
   "mai-chau",
   "ha-long",
   "hue",
   "hoi-an",
   "ho-chi-minh",
   "mekong"
  ],
  "image": "images/stop-mai-chau.jpg",
  "route": [
   "Hanói",
   "Mai Chau",
   "Ha Long",
   "Hue"
  ],
  "price": null,
  "notes": [
   "En Mai Chau se duerme en la misma casa donde cena la familia. No es un hotel disfrazado."
  ],
  "itinerary": [
   {
    "day": "1–4",
    "span": 4,
    "title": "Hanói y Mai Chau",
    "stops": [
     "mai-chau"
    ],
    "pace": "Museo de Etnología y Palacio Presidencial, y tres horas y media hasta el valle: caminata de 4 km a la aldea de Lac y noche en casa sobre pilotes.",
    "meals": []
   },
   {
    "day": "5–6",
    "span": 2,
    "title": "Bahía de Ha Long",
    "stops": [
     "bahia-ha-long"
    ],
    "pace": "Junco, Cueva Trinh Nu, kayak y cena de marisco a bordo.",
    "meals": []
   },
   {
    "day": "7–9",
    "span": 3,
    "title": "Hue y Hoi An",
    "stops": [
     "paso-hai-van",
     "ciudadela-imperial-hue",
     "casco-antiguo-hoi-an"
    ],
    "pace": "Ciudadela y tumbas reales, paso de Hai Van y un día libre entre sastres y farolillos.",
    "meals": []
   },
   {
    "day": "10–12",
    "span": 3,
    "title": "Saigón y Ben Tre",
    "stops": [
     "delta-mekong",
     "tuneles-cu-chi"
    ],
    "pace": "Ciudad, Cu Chi y sampán por los canales del delta.",
    "meals": []
   },
   {
    "day": "13–16",
    "span": 4,
    "title": "Mui Ne",
    "stops": [],
    "pace": "Cuatro horas y media desde Saigón. Dunas, Arroyo de las Hadas y resort de playa.",
    "meals": []
   }
  ],
  "included": [],
  "excluded": [],
  "includedNote": "Inclusiones, alojamiento y precio: pendientes de confirmar",
  "cats": [
   "montanas",
   "naturaleza",
   "cultura"
  ],
  "effort": "moderado"
 },
 {
  "id": "31-hanoi-ha-long-hue-y-hoi-an",
  "code": "31",
  "title": "Hanói, Ha Long, Hue y Hoi An",
  "tagline": "Catorce días con dos noches de tren y ninguna de más en carretera.",
  "intro": "El tren nocturno de Hanói a Hue ahorra un día entero de viaje y una noche de hotel. Se sale después de cenar y se llega con la mañana.",
  "days": 14,
  "nights": 13,
  "groups": [
   "amigos",
   "mayores"
  ],
  "tier": null,
  "region": [
   "ha-noi",
   "ha-long",
   "hue",
   "hoi-an",
   "da-nang",
   "ho-chi-minh",
   "mekong"
  ],
  "image": "images/day4-hue.jpg",
  "route": [
   "Hanói",
   "Ha Long",
   "Hue",
   "Hoi An"
  ],
  "price": null,
  "notes": [
   "En la Ciudad Púrpura Prohibida solo entraban el emperador y su familia. Hoy se entra andando."
  ],
  "itinerary": [
   {
    "day": "1–4",
    "span": 4,
    "title": "Hanói y Ha Long",
    "stops": [
     "templo-literatura",
     "bahia-ha-long"
    ],
    "pace": "Templo de la Literatura, prisión de Hoa Lo, y la bahía con baño desde el barco y atardecer en cubierta.",
    "meals": []
   },
   {
    "day": "5–6",
    "span": 2,
    "title": "Hue",
    "stops": [
     "ciudadela-imperial-hue",
     "pagoda-thien-mu"
    ],
    "pace": "Murallas de la Ciudadela, Ciudad Púrpura Prohibida, Pagoda Thien Mu y la tumba de Tu Duc.",
    "meals": []
   },
   {
    "day": "7–9",
    "span": 3,
    "title": "Hoi An y My Son",
    "stops": [
     "paso-hai-van",
     "my-son",
     "casco-antiguo-hoi-an"
    ],
    "pace": "Lang Co y el paso de Hai Van de camino, el viejo puerto comercial a pie y las torres cham.",
    "meals": []
   },
   {
    "day": "10–14",
    "span": 5,
    "title": "Saigón, Cu Chi y el Mekong",
    "stops": [
     "delta-mekong",
     "tuneles-cu-chi"
    ],
    "pace": "Ben Thanh, el Museo de los Vestigios de la Guerra, los túneles y una noche en el delta.",
    "meals": []
   }
  ],
  "included": [],
  "excluded": [],
  "includedNote": "Inclusiones, alojamiento y precio: pendientes de confirmar",
  "cats": [
   "naturaleza",
   "cultura"
  ],
  "effort": "moderado"
 },
 {
  "id": "32-hanoi-ninh-binh-ha-long-da-nang-y-hoi-an",
  "code": "32",
  "title": "Hanói, Ninh Binh, Ha Long, Da Nang y Hoi An",
  "tagline": "Catorce días, y Ninh Binh tiene noche propia en vez de ser una excursión. 🌾",
  "intro": "Ninh Binh suele meterse como salida de un día desde Hanói: cuatro horas de carretera para ver dos sitios. Durmiendo allí se ven los arrozales con la luz de la mañana, cuando todavía no han llegado los autocares.",
  "days": 14,
  "nights": 13,
  "groups": [
   "amigos",
   "mayores"
  ],
  "tier": null,
  "region": [
   "ha-noi",
   "ninh-binh",
   "ha-long",
   "da-nang",
   "hoi-an",
   "ho-chi-minh",
   "mekong"
  ],
  "image": "images/day3-ba-na-hills.jpg",
  "route": [
   "Hanói",
   "Ninh Binh",
   "Ha Long",
   "Da Nang",
   "Hoi An"
  ],
  "price": null,
  "notes": [
   "Volar desde Hai Phong, al lado de la bahía, ahorra la vuelta a Hanói: tres horas menos de coche."
  ],
  "itinerary": [
   {
    "day": "1–3",
    "span": 3,
    "title": "Hanói",
    "stops": [
     "templo-literatura",
     "barrio-antiguo-hanoi"
    ],
    "pace": "El Casco Antiguo, el Templo de la Literatura y un día más a vuestro ritmo.",
    "meals": []
   },
   {
    "day": "4–5",
    "span": 2,
    "title": "Ninh Binh, con noche allí",
    "stops": [
     "tam-coc"
    ],
    "pace": "",
    "meals": []
   },
   {
    "day": "6–7",
    "span": 2,
    "title": "Bahía de Ha Long",
    "stops": [
     "bahia-ha-long"
    ],
    "pace": "Noche a bordo y una más en Ha Long.",
    "meals": []
   },
   {
    "day": "8–10",
    "span": 3,
    "title": "Vuelo de Hai Phong a Da Nang",
    "stops": [
     "casco-antiguo-hoi-an"
    ],
    "pace": "Hoi An con dos días completos.",
    "meals": []
   },
   {
    "day": "11–13",
    "span": 3,
    "title": "Vuelo a Saigón",
    "stops": [
     "delta-mekong",
     "tuneles-cu-chi"
    ],
    "pace": "Túneles de Cu Chi y el Delta del Mekong en Ben Tre.",
    "meals": []
   },
   {
    "day": 14,
    "span": 1,
    "title": "Salida",
    "stops": [],
    "pace": "",
    "meals": []
   }
  ],
  "included": [],
  "excluded": [],
  "includedNote": "Inclusiones, alojamiento y precio: pendientes de confirmar",
  "cats": [
   "naturaleza",
   "cultura"
  ],
  "effort": "moderado"
 },
 {
  "id": "33-phu-quoc-can-tho-mekong-y-ciudad-ho-chi-minh",
  "code": "33",
  "title": "Phu Quoc, Can Tho, Mekong y Ciudad Ho Chi Minh",
  "tagline": "Tres días de isla y tres de delta. Ese es el viaje entero.",
  "intro": "Una semana no da para el país, pero sí da para el sur bien hecho: playa primero, río después, y a casa desde Saigón.",
  "days": 7,
  "nights": 6,
  "groups": [
   "amigos",
   "mayores"
  ],
  "tier": null,
  "region": [
   "phu-quoc",
   "mekong",
   "ho-chi-minh",
   "ninh-binh"
  ],
  "image": "images/trip-mekong.jpg",
  "route": [
   "Phu Quoc",
   "Can Tho",
   "Mekong",
   "Ciudad Ho Chi Minh"
  ],
  "price": null,
  "notes": [
   "En Cai Rang cada barca cuelga en un palo lo que vende. Se compra desde el agua."
  ],
  "itinerary": [
   {
    "day": "1–3",
    "span": 3,
    "title": "Phu Quoc",
    "stops": [
     "phu-quoc-isla"
    ],
    "pace": "Playa, la granja de perlas, las cascadas de Suoi Tranh y el pueblo pesquero de Ham Ninh.",
    "meals": []
   },
   {
    "day": 4,
    "span": 1,
    "title": "Can Tho",
    "stops": [
     "can-tho"
    ],
    "pace": "Lancha rápida hasta el delta y el puente Nguyen Trai al anochecer.",
    "meals": []
   },
   {
    "day": 5,
    "span": 1,
    "title": "Cai Rang",
    "stops": [
     "can-tho"
    ],
    "pace": "El mercado flotante al amanecer, huertos frutales en tuk-tuk y canales en sampán.",
    "meals": []
   },
   {
    "day": "6–7",
    "span": 2,
    "title": "Ben Tre y Saigón",
    "stops": [
     "tam-coc",
     "delta-mekong"
    ],
    "pace": "Bicicleta entre huertos, criaderos flotantes de peces y la Pagoda Vinh Trang antes de volver.",
    "meals": []
   }
  ],
  "included": [],
  "excluded": [],
  "includedNote": "Inclusiones, alojamiento y precio: pendientes de confirmar",
  "cats": [
   "naturaleza",
   "playa",
   "gastronomia"
  ],
  "effort": "suave"
 },
 {
  "id": "34-hanoi-ha-long-hoi-an-y-ciudad-ho-chi-minh",
  "code": "34",
  "title": "Hanói, Ha Long, Hoi An y Ciudad Ho Chi Minh",
  "tagline": "Quince días que acaban en una isla que casi nadie pisa.",
  "intro": "Con Dao está a una hora de vuelo de Saigón y sigue sin aparecer en los circuitos. Playas vacías, selva y muy poca gente.",
  "days": 15,
  "nights": 14,
  "groups": [
   "amigos",
   "mayores"
  ],
  "tier": null,
  "region": [
   "ha-noi",
   "ha-long",
   "ho-chi-minh",
   "hoi-an"
  ],
  "image": "images/trip-hcmc.jpg",
  "route": [
   "Hanói",
   "Ha Long",
   "Hoi An",
   "Ciudad Ho Chi Minh"
  ],
  "price": null,
  "notes": [
   "En Con Dao hay más tortugas marinas que hoteles. La temporada de puesta va de junio a septiembre."
  ],
  "itinerary": [
   {
    "day": "1–4",
    "span": 4,
    "title": "Hanói y Ha Long",
    "stops": [
     "bahia-ha-long",
     "barrio-antiguo-hanoi"
    ],
    "pace": "Complejo Ho Chi Minh, Casco Antiguo, y cuatro horas de carretera hasta el junco para dormir en la bahía.",
    "meals": []
   },
   {
    "day": "5–7",
    "span": 3,
    "title": "Hoi An",
    "stops": [
     "casco-antiguo-hoi-an"
    ],
    "pace": "Casco Antiguo histórico, Vespa por el campo y barco por el Thu Bon al atardecer.",
    "meals": []
   },
   {
    "day": "8–10",
    "span": 3,
    "title": "Saigón",
    "stops": [
     "tuneles-cu-chi"
    ],
    "pace": "Los túneles de Cu Chi en lancha rápida, la ciudad histórica y otra ruta de comida en Vespa.",
    "meals": []
   },
   {
    "day": "11–15",
    "span": 5,
    "title": "Con Dao",
    "stops": [],
    "pace": "Vuelo de una hora. Trekking por la selva, snorkel y días de playa sin nada apuntado.",
    "meals": []
   }
  ],
  "included": [],
  "excluded": [],
  "includedNote": "Inclusiones, alojamiento y precio: pendientes de confirmar",
  "cats": [
   "naturaleza",
   "cultura",
   "gastronomia"
  ],
  "effort": "moderado"
 },
 {
  "id": "35-hanoi-ha-long-da-nang-hoi-an-y-hue",
  "code": "35",
  "title": "Hanói, Ha Long, Da Nang, Hoi An y Hue",
  "tagline": "Nueve días en tierra y las cuatro paradas que todo el mundo quiere.",
  "intro": "Nueve días son justos, así que aquí no hay desvíos: Hanói, la bahía, el centro histórico y el delta. Nada más y nada menos.",
  "days": 9,
  "nights": 8,
  "groups": [
   "amigos",
   "mayores"
  ],
  "tier": null,
  "region": [
   "ha-noi",
   "ha-long",
   "hoi-an",
   "hue",
   "ho-chi-minh",
   "mekong"
  ],
  "image": "images/trip-ha-long.jpg",
  "route": [
   "Hanói",
   "Ha Long",
   "Da Nang",
   "Hoi An",
   "Hue"
  ],
  "price": null,
  "notes": [
   "El barco de Ha Long es de madera, no de acero. Se oye el agua desde el camarote."
  ],
  "itinerary": [
   {
    "day": "1–2",
    "span": 2,
    "title": "Hanói",
    "stops": [
     "barrio-antiguo-hanoi"
    ],
    "pace": "Zona del Mausoleo, templos y ciclo por el Casco Antiguo.",
    "meals": []
   },
   {
    "day": "3–4",
    "span": 2,
    "title": "Bahía de Ha Long",
    "stops": [
     "bahia-ha-long"
    ],
    "pace": "Barco de madera tradicional entre islotes, tai chi al amanecer y vuelo a Da Nang.",
    "meals": []
   },
   {
    "day": "5–6",
    "span": 2,
    "title": "Hoi An y Hue",
    "stops": [
     "casco-antiguo-hoi-an"
    ],
    "pace": "Casas de mercaderes, el Puente Cubierto Japonés y los mausoleos de los emperadores.",
    "meals": []
   },
   {
    "day": "7–9",
    "span": 3,
    "title": "Saigón y el Mekong",
    "stops": [
     "delta-mekong"
    ],
    "pace": "Río de los Perfumes antes de volar, y un día entero de delta antes del vuelo de vuelta.",
    "meals": []
   }
  ],
  "included": [],
  "excluded": [],
  "includedNote": "Inclusiones, alojamiento y precio: pendientes de confirmar",
  "cats": [
   "naturaleza",
   "cultura"
  ],
  "effort": "suave"
 },
 {
  "id": "36-hanoi-ha-long-da-nang-hoi-an-hue-y-ciudad-ho-chi-minh",
  "code": "36",
  "title": "Hanói, Ha Long, Da Nang, Hoi An, Hue y Ciudad Ho Chi Minh",
  "tagline": "Nueve días para cruzar el país entero. Se puede, si los tramos largos se hacen en avión. ✈️",
  "intro": "Por carretera, de Hanói a Saigón hay más de treinta horas. Con dos vuelos internos se quedan en tres, y los nueve días dan para cinco sitios sin ir corriendo.",
  "days": 9,
  "nights": 8,
  "groups": [
   "amigos",
   "mayores"
  ],
  "tier": null,
  "region": [
   "ha-noi",
   "ha-long",
   "hoi-an",
   "hue",
   "ho-chi-minh",
   "mekong"
  ],
  "image": "images/day2-hoi-an.jpg",
  "route": [
   "Hanói",
   "Ha Long",
   "Da Nang",
   "Hoi An",
   "Hue",
   "Ciudad Ho Chi Minh"
  ],
  "price": null,
  "notes": [
   "Nueve días es el mínimo para ver norte, centro y sur. Con menos, conviene elegir dos.",
   "Enviádselo a quien solo tiene una semana y media de vacaciones."
  ],
  "itinerary": [
   {
    "day": "1–2",
    "span": 2,
    "title": "Hanói",
    "stops": [
     "templo-literatura",
     "lago-hoan-kiem",
     "barrio-antiguo-hanoi"
    ],
    "pace": "Casco Antiguo, Templo de la Literatura y el lago Hoan Kiem.",
    "meals": []
   },
   {
    "day": "3–4",
    "span": 2,
    "title": "Bahía de Ha Long",
    "stops": [
     "bahia-ha-long",
     "casco-antiguo-hoi-an"
    ],
    "pace": "Al volver, vuelo a Da Nang y traslado a Hoi An, a 45 minutos.",
    "meals": []
   },
   {
    "day": "5–6",
    "span": 2,
    "title": "Hoi An, y por la tarde a Hue por la costa",
    "stops": [
     "casco-antiguo-hoi-an"
    ],
    "pace": "",
    "meals": []
   },
   {
    "day": 7,
    "span": 1,
    "title": "Hue",
    "stops": [],
    "pace": "Después, vuelo a Saigón.",
    "meals": []
   },
   {
    "day": "8–9",
    "span": 2,
    "title": "Saigón y los túneles de Cu Chi",
    "stops": [
     "delta-mekong",
     "tuneles-cu-chi"
    ],
    "pace": "El último día, el Delta del Mekong antes del vuelo de salida.",
    "meals": []
   }
  ],
  "included": [],
  "excluded": [],
  "includedNote": "Inclusiones, alojamiento y precio: pendientes de confirmar",
  "cats": [
   "naturaleza",
   "cultura"
  ],
  "effort": "suave"
 },
 {
  "id": "37-ciudad-ho-chi-minh-hue-hoi-an-y-hanoi",
  "code": "37",
  "title": "Ciudad Ho Chi Minh, Hue, Hoi An y Hanói",
  "tagline": "Trece días de Saigón a Sa Pa, con días libres de verdad.",
  "intro": "Tres días de este viaje no tienen nada apuntado. No es un descuido: en un viaje de trece días hace falta parar.",
  "days": 13,
  "nights": 12,
  "groups": [
   "amigos",
   "mayores"
  ],
  "tier": null,
  "region": [
   "ho-chi-minh",
   "mekong",
   "hue",
   "hoi-an",
   "ha-noi",
   "ha-long",
   "sa-pa"
  ],
  "image": "images/trip-mekong.jpg",
  "route": [
   "Ciudad Ho Chi Minh",
   "Hue",
   "Hoi An",
   "Hanói"
  ],
  "price": null,
  "notes": [
   "En Muong Hoa las guías son mujeres de la aldea. Caminan el valle todos los días."
  ],
  "itinerary": [
   {
    "day": "1–3",
    "span": 3,
    "title": "Saigón",
    "stops": [
     "delta-mekong"
    ],
    "pace": "Palacio de la Independencia, Catedral de Notre Dame, y un día libre entero para el Mekong o para no hacer nada.",
    "meals": []
   },
   {
    "day": "4–6",
    "span": 3,
    "title": "Hue y Hoi An",
    "stops": [
     "casco-antiguo-hoi-an"
    ],
    "pace": "Vuelo al centro, ruta costera y el Puente Cubierto Japonés a pie; después, otro día libre.",
    "meals": []
   },
   {
    "day": "7–9",
    "span": 3,
    "title": "Hanói y Ha Long",
    "stops": [
     "bahia-ha-long",
     "barrio-antiguo-hanoi"
    ],
    "pace": "Casco Antiguo y noche a bordo en la bahía.",
    "meals": []
   },
   {
    "day": "10–13",
    "span": 4,
    "title": "Sa Pa",
    "stops": [
     "sa-pa-arrozales"
    ],
    "pace": "Bus hasta el valle, aldea H'Mong y un día completo de trekking por el valle de Muong Hoa con guías locales.",
    "meals": []
   }
  ],
  "included": [],
  "excluded": [],
  "includedNote": "Inclusiones, alojamiento y precio: pendientes de confirmar",
  "cats": [
   "montanas",
   "naturaleza",
   "cultura"
  ],
  "effort": "moderado"
 },
 {
  "id": "38-hanoi-ninh-binh-ha-long-hoi-an-y-ciudad-ho-chi-minh",
  "code": "38",
  "title": "Hanói, Ninh Binh, Ha Long, Hoi An y Ciudad Ho Chi Minh",
  "tagline": "¿Cuánto cabe en nueve días? Hanói, Ninh Binh, Ha Long, Hoi An y Saigón, sin días de relleno.",
  "intro": "Nueve días para cinco regiones es un calendario apretado si se improvisa. Montado con orden, cada jornada tiene un solo traslado y el resto del día es para estar.",
  "days": 9,
  "nights": 8,
  "groups": [
   "amigos",
   "mayores"
  ],
  "tier": null,
  "region": [
   "ha-noi",
   "ninh-binh",
   "ha-long",
   "hoi-an",
   "da-nang",
   "ho-chi-minh",
   "mekong"
  ],
  "image": "images/day2-hoi-an.jpg",
  "route": [
   "Hanói",
   "Ninh Binh",
   "Ha Long",
   "Hoi An",
   "Ciudad Ho Chi Minh"
  ],
  "price": null,
  "notes": [
   "Las marionetas de agua nacieron en los arrozales inundados del norte. El escenario sigue siendo un estanque.",
   "Enviádselo a quien diga que nueve días no dan para nada."
  ],
  "itinerary": [
   {
    "day": "1–3",
    "span": 3,
    "title": "Hanói y Ninh Binh, a dos horas",
    "stops": [
     "tam-coc",
     "barrio-antiguo-hanoi"
    ],
    "pace": "Cyclo por el Casco Antiguo, Hoa Lu, la pagoda Bich Dong y Tam Coc en barca. Marionetas de agua de vuelta en Hanói.",
    "meals": []
   },
   {
    "day": "4–5",
    "span": 2,
    "title": "Bahía de Ha Long en crucero y vuelo a Da Nang",
    "stops": [
     "bahia-ha-long",
     "casco-antiguo-hoi-an"
    ],
    "pace": "Hoi An queda a 45 minutos.",
    "meals": []
   },
   {
    "day": 6,
    "span": 1,
    "title": "Tra Que en bici, clase de cocina y farolillos soltados al río por la noche",
    "stops": [],
    "pace": "",
    "meals": []
   },
   {
    "day": 7,
    "span": 1,
    "title": "Ba Na y el Puente Dorado, sostenido por dos manos de piedra",
    "stops": [
     "ba-na-hills"
    ],
    "pace": "Vuelo a Saigón.",
    "meals": []
   },
   {
    "day": "8–9",
    "span": 2,
    "title": "Los túneles de Cu Chi y el Delta del Mekong, con su aldea artesana del coco",
    "stops": [
     "delta-mekong",
     "tuneles-cu-chi"
    ],
    "pace": "",
    "meals": []
   }
  ],
  "included": [],
  "excluded": [],
  "includedNote": "Inclusiones, alojamiento y precio: pendientes de confirmar",
  "cats": [
   "naturaleza",
   "cultura",
   "gastronomia"
  ],
  "effort": "suave"
 },
 {
  "id": "39-hanoi-sa-pa-ha-long-hoi-an-y-hue",
  "code": "39",
  "title": "Hanói, Sa Pa, Ha Long, Hoi An y Hue",
  "tagline": "Un tren nocturno a Lao Cai os regala un día entero en Sa Pa. Diez días, de la montaña al Mekong. 🚂",
  "intro": "Sa Pa está a más de cinco horas de Hanói. Hacer ese tramo de noche, en litera, significa despertar en la montaña con el día por delante.",
  "days": 10,
  "nights": 9,
  "groups": [
   "amigos",
   "mayores"
  ],
  "tier": null,
  "region": [
   "ha-noi",
   "sa-pa",
   "ha-long",
   "hoi-an",
   "hue",
   "ho-chi-minh",
   "mekong"
  ],
  "image": "images/day4-hue.jpg",
  "route": [
   "Hanói",
   "Sa Pa",
   "Ha Long",
   "Hoi An",
   "Hue"
  ],
  "price": null,
  "notes": [
   "El Templo de la Literatura acogió la primera universidad de Vietnam en 1076."
  ],
  "itinerary": [
   {
    "day": "1–2",
    "span": 2,
    "title": "Hanói",
    "stops": [
     "templo-literatura",
     "barrio-antiguo-hanoi"
    ],
    "pace": "Cyclo por el Casco Antiguo, el Templo de la Literatura y la pagoda Tran Quoc. Por la noche, tren a Lao Cai.",
    "meals": []
   },
   {
    "day": "3–4",
    "span": 2,
    "title": "Sa Pa",
    "stops": [
     "sa-pa-arrozales"
    ],
    "pace": "Aldeas de los pueblos H'Mong y Giay, y vuelta a Hanói.",
    "meals": []
   },
   {
    "day": "5–6",
    "span": 2,
    "title": "Bahía de Ha Long en crucero y vuelo a Da Nang para llegar a Hoi An",
    "stops": [
     "bahia-ha-long",
     "casco-antiguo-hoi-an"
    ],
    "pace": "",
    "meals": []
   },
   {
    "day": 7,
    "span": 1,
    "title": "Hoi An y una aldea alfarera a las afueras",
    "stops": [
     "casco-antiguo-hoi-an"
    ],
    "pace": "",
    "meals": []
   },
   {
    "day": 8,
    "span": 1,
    "title": "Hue: la Ciudadela Imperial y la tumba de Tu Duc",
    "stops": [
     "ciudadela-imperial-hue"
    ],
    "pace": "",
    "meals": []
   },
   {
    "day": "9–10",
    "span": 2,
    "title": "Saigón y el Delta del Mekong",
    "stops": [
     "delta-mekong"
    ],
    "pace": "",
    "meals": []
   }
  ],
  "included": [],
  "excluded": [],
  "includedNote": "Inclusiones, alojamiento y precio: pendientes de confirmar",
  "cats": [
   "montanas",
   "naturaleza",
   "cultura"
  ],
  "effort": "moderado"
 },
 {
  "id": "40-hanoi-mai-chau-ninh-binh-ha-long-y-hue",
  "code": "40",
  "title": "Hanói, Mai Chau, Ninh Binh, Ha Long y Hue",
  "tagline": "Se empieza en Mai Chau, entre casas sobre pilotes, y se termina en el Mekong. Once días. 🌾",
  "intro": "Casi todos los viajes al norte van directos a la bahía. Este sube antes a los valles de la etnia thai y a la reserva de Pu Luong, donde los arrozales se siguen regando con ruedas de bambú.",
  "days": 11,
  "nights": 10,
  "groups": [
   "amigos",
   "mayores"
  ],
  "tier": null,
  "region": [
   "ha-noi",
   "mai-chau",
   "pu-luong",
   "ninh-binh",
   "ha-long",
   "hue",
   "hoi-an",
   "mekong"
  ],
  "image": "images/day2-hoi-an.jpg",
  "route": [
   "Hanói",
   "Mai Chau",
   "Ninh Binh",
   "Ha Long",
   "Hue"
  ],
  "price": null,
  "notes": [
   "En Mai Chau se duerme en casas thai levantadas sobre pilotes de madera, como hace un siglo."
  ],
  "itinerary": [
   {
    "day": 1,
    "span": 1,
    "title": "Hanói",
    "stops": [],
    "pace": "",
    "meals": []
   },
   {
    "day": "2–3",
    "span": 2,
    "title": "Mai Chau, a tres horas y media: las aldeas de Lac y Pom Coong",
    "stops": [
     "pu-luong",
     "mai-chau"
    ],
    "pace": "Después, trekking en Pu Luong hasta la aldea de Kho Muong.",
    "meals": []
   },
   {
    "day": "4–5",
    "span": 2,
    "title": "Ninh Binh: Tam Coc, la pagoda Bai Dinh y Hoa Lu",
    "stops": [
     "tam-coc"
    ],
    "pace": "",
    "meals": []
   },
   {
    "day": 6,
    "span": 1,
    "title": "Bahía de Ha Long con noche a bordo y la cueva Sung Sot",
    "stops": [
     "bahia-ha-long"
    ],
    "pace": "",
    "meals": []
   },
   {
    "day": "7–8",
    "span": 2,
    "title": "Tren nocturno a Hue",
    "stops": [
     "ciudadela-imperial-hue"
    ],
    "pace": "La Ciudadela Imperial y las tumbas reales.",
    "meals": []
   },
   {
    "day": "9–10",
    "span": 2,
    "title": "Hoi An, dos días enteros, con sus farolillos",
    "stops": [
     "casco-antiguo-hoi-an"
    ],
    "pace": "",
    "meals": []
   },
   {
    "day": 11,
    "span": 1,
    "title": "El Delta del Mekong",
    "stops": [
     "delta-mekong"
    ],
    "pace": "",
    "meals": []
   }
  ],
  "included": [],
  "excluded": [],
  "includedNote": "Inclusiones, alojamiento y precio: pendientes de confirmar",
  "cats": [
   "montanas",
   "naturaleza",
   "cultura"
  ],
  "effort": "activo"
 },
 {
  "id": "41-hanoi-ha-long-hoi-an-hue-y-ciudad-ho-chi-minh",
  "code": "41",
  "title": "Hanói, Ha Long, Hoi An, Hue y Ciudad Ho Chi Minh",
  "tagline": "Norte, centro y sur en siete días: se vuela lo largo y se camina lo corto. ✈️",
  "intro": "Una semana no da para todo, pero sí para lo esencial si cada tramo largo se hace en avión. En tierra quedan solo los trayectos que merecen mirarse por la ventanilla.",
  "days": 6,
  "nights": 5,
  "groups": [
   "amigos",
   "mayores"
  ],
  "tier": null,
  "region": [
   "ha-noi",
   "ha-long",
   "hue",
   "hoi-an",
   "ho-chi-minh"
  ],
  "image": "images/day4-hue.jpg",
  "route": [
   "Hanói",
   "Ha Long",
   "Hoi An",
   "Hue",
   "Ciudad Ho Chi Minh"
  ],
  "price": null,
  "notes": [
   "El paso de Hai Van se hace por tierra: la costa desde arriba merece las tres horas.",
   "Enviádselo a quien solo tiene una semana."
  ],
  "itinerary": [
   {
    "day": "1–2",
    "span": 2,
    "title": "Hanói",
    "stops": [
     "templo-literatura",
     "lago-hoan-kiem"
    ],
    "pace": "El mausoleo, el Templo de la Literatura, el lago Hoan Kiem y un paseo en cyclo.",
    "meals": []
   },
   {
    "day": "3–4",
    "span": 2,
    "title": "Bahía de Ha Long en junco",
    "stops": [
     "bahia-ha-long",
     "casco-antiguo-hoi-an"
    ],
    "pace": "Después, vuelo a Da Nang y el casco antiguo de Hoi An.",
    "meals": []
   },
   {
    "day": 5,
    "span": 1,
    "title": "Hue por el paso de Hai Van, tres horas de costa",
    "stops": [
     "paso-hai-van",
     "tumba-khai-dinh"
    ],
    "pace": "Tumbas de Tu Duc y Khai Dinh.",
    "meals": []
   },
   {
    "day": 6,
    "span": 1,
    "title": "El río Perfume, la pagoda Thien Mu y la Ciudadela",
    "stops": [
     "ciudadela-imperial-hue",
     "pagoda-thien-mu"
    ],
    "pace": "",
    "meals": []
   },
   {
    "day": 7,
    "span": 1,
    "title": "Vuelo a Saigón y el Delta del Mekong en Ben Tre",
    "stops": [
     "delta-mekong"
    ],
    "pace": "",
    "meals": []
   }
  ],
  "included": [],
  "excluded": [],
  "includedNote": "Inclusiones, alojamiento y precio: pendientes de confirmar",
  "cats": [
   "naturaleza",
   "cultura"
  ],
  "effort": "suave"
 },
 {
  "id": "42-ciudad-ho-chi-minh-hue-hoi-an-hanoi-y-ha-long",
  "code": "42",
  "title": "Ciudad Ho Chi Minh, Hue, Hoi An, Hanói y Ha Long",
  "tagline": "Este viaje va al revés: Saigón primero, Ninh Binh al final. Ocho días.",
  "intro": "Empezar por el sur tiene una ventaja: el calor queda al principio y el viaje se va refrescando a medida que sube hacia el norte.",
  "days": 8,
  "nights": 7,
  "groups": [
   "amigos",
   "mayores"
  ],
  "tier": null,
  "region": [
   "ho-chi-minh",
   "mekong",
   "hue",
   "hoi-an",
   "ha-long",
   "ha-noi",
   "ninh-binh"
  ],
  "image": "images/trip-hcmc.jpg",
  "route": [
   "Ciudad Ho Chi Minh",
   "Hue",
   "Hoi An",
   "Hanói",
   "Ha Long"
  ],
  "price": null,
  "notes": [
   "Hoa Lu fue la primera capital del país, antes que Hanói."
  ],
  "itinerary": [
   {
    "day": 1,
    "span": 1,
    "title": "Saigón",
    "stops": [
     "correos-saigon"
    ],
    "pace": "El Palacio de la Reunificación, la catedral de Notre-Dame, la Oficina Central de Correos y el mercado Ben Thanh.",
    "meals": []
   },
   {
    "day": 2,
    "span": 1,
    "title": "La pagoda Thien Hau y el Delta del Mekong en My Tho, a dos horas",
    "stops": [
     "delta-mekong"
    ],
    "pace": "",
    "meals": []
   },
   {
    "day": 3,
    "span": 1,
    "title": "Los túneles de Cu Chi y vuelo a Hue",
    "stops": [
     "tuneles-cu-chi"
    ],
    "pace": "",
    "meals": []
   },
   {
    "day": 4,
    "span": 1,
    "title": "La Ciudadela Imperial, el río Perfume y las tumbas de Minh Mang y Khai Dinh, de camino a Hoi An",
    "stops": [
     "ciudadela-imperial-hue",
     "tumba-khai-dinh",
     "casco-antiguo-hoi-an"
    ],
    "pace": "",
    "meals": []
   },
   {
    "day": 5,
    "span": 1,
    "title": "El casco antiguo de Hoi An",
    "stops": [
     "casco-antiguo-hoi-an"
    ],
    "pace": "",
    "meals": []
   },
   {
    "day": "6–8",
    "span": 3,
    "title": "Bahía de Ha Long, Hanói y, para cerrar, Ninh Binh: Trang An y Hoa Lu",
    "stops": [
     "tam-coc",
     "bahia-ha-long"
    ],
    "pace": "",
    "meals": []
   }
  ],
  "included": [],
  "excluded": [],
  "includedNote": "Inclusiones, alojamiento y precio: pendientes de confirmar",
  "cats": [
   "naturaleza",
   "cultura",
   "gastronomia"
  ],
  "effort": "suave"
 },
 {
  "id": "48-hanoi-mai-chau-ninh-binh-y-ha-long",
  "code": "48",
  "title": "Hanói, Mai Chau, Ninh Binh y Ha Long",
  "tagline": "Por el norte rural a pie y en bici: Mai Chau, Ba Thuoc y Ninh Binh, y la bahía para cerrar. Diez días. 🌾",
  "intro": "Este es el norte que se recorre despacio. Caminatas cortas entre aldeas, bici por arrozales llanos y ninguna jornada larga de coche.",
  "days": 10,
  "nights": 9,
  "groups": [
   "amigos",
   "mayores"
  ],
  "tier": null,
  "region": [
   "ha-noi",
   "mai-chau",
   "ninh-binh",
   "ha-long"
  ],
  "image": "images/stop-mai-chau.jpg",
  "route": [
   "Hanói",
   "Mai Chau",
   "Ninh Binh",
   "Ha Long"
  ],
  "price": null,
  "notes": [
   "La pesca de calamares se hace de noche desde el barco, con una lámpara que los atrae a la superficie."
  ],
  "itinerary": [
   {
    "day": "1–2",
    "span": 2,
    "title": "Hanói",
    "stops": [
     "lago-hoan-kiem"
    ],
    "pace": "El templo Bach Ma, el puente Long Bien, el mercado Dong Xuan y el lago Hoan Kiem.",
    "meals": []
   },
   {
    "day": "3–4",
    "span": 2,
    "title": "Mai Chau, a tres horas y media",
    "stops": [
     "mai-chau"
    ],
    "pace": "Bici entre arrozales, aldeas thai y un bosque de bambú.",
    "meals": []
   },
   {
    "day": 5,
    "span": 1,
    "title": "Ba Thuoc: un puente colgante y las ruedas de agua",
    "stops": [],
    "pace": "",
    "meals": []
   },
   {
    "day": "6–7",
    "span": 2,
    "title": "Ninh Binh",
    "stops": [
     "tam-coc"
    ],
    "pace": "Las aldeas de Uoi y Lan, el río Ngo Dong en barca, la Cueva Mua y la pagoda Bich Dong.",
    "meals": []
   },
   {
    "day": "8–9",
    "span": 2,
    "title": "Bahía de Ha Long en junco: kayak, pesca de calamares por la noche, la isla de Cat Ba y la cueva Trung Trang",
    "stops": [
     "bahia-ha-long"
    ],
    "pace": "",
    "meals": []
   },
   {
    "day": 10,
    "span": 1,
    "title": "Clase de cocina en un proyecto comunitario de Hanói",
    "stops": [],
    "pace": "",
    "meals": []
   }
  ],
  "included": [],
  "excluded": [],
  "includedNote": "Inclusiones, alojamiento y precio: pendientes de confirmar",
  "cats": [
   "montanas",
   "naturaleza",
   "cultura",
   "gastronomia"
  ],
  "effort": "moderado"
 },
 {
  "id": "49-hanoi-ha-long-ninh-binh-hue-y-hoi-an",
  "code": "49",
  "title": "Hanói, Ha Long, Ninh Binh, Hue y Hoi An",
  "tagline": "¿Qué une un junco en Ha Long y un mercado flotante en Cai Rang? Once días de Hanói a Can Tho. 🛶",
  "intro": "Los dos extremos del país se viven desde el agua. Entre uno y otro, Ninh Binh en sampán y Hue con su aldea de sombreros cónicos.",
  "days": 11,
  "nights": 10,
  "groups": [
   "amigos",
   "mayores"
  ],
  "tier": null,
  "region": [
   "ha-noi",
   "ha-long",
   "ninh-binh",
   "hue",
   "hoi-an",
   "ho-chi-minh",
   "mekong"
  ],
  "image": "images/trip-ninh-binh.jpg",
  "route": [
   "Hanói",
   "Ha Long",
   "Ninh Binh",
   "Hue",
   "Hoi An"
  ],
  "price": null,
  "notes": [
   "En Cai Rang cada barca cuelga de un palo lo que vende. Así se anuncia desde lejos.",
   "Enviádselo a quien le gusta ver un país desde el agua."
  ],
  "itinerary": [
   {
    "day": "1–2",
    "span": 2,
    "title": "Hanói",
    "stops": [],
    "pace": "Pagodas, templos y un recorrido en vespa.",
    "meals": []
   },
   {
    "day": "3–4",
    "span": 2,
    "title": "Bahía de Ha Long en junco y, de camino a Ninh Binh, la cueva Thien Canh Son",
    "stops": [
     "tam-coc",
     "bahia-ha-long"
    ],
    "pace": "",
    "meals": []
   },
   {
    "day": 5,
    "span": 1,
    "title": "Ninh Binh en bici y en sampán",
    "stops": [
     "tam-coc"
    ],
    "pace": "",
    "meals": []
   },
   {
    "day": "6–7",
    "span": 2,
    "title": "Hue: la aldea de los sombreros cónicos y la Ciudadela",
    "stops": [
     "paso-hai-van",
     "ciudadela-imperial-hue",
     "casco-antiguo-hoi-an"
    ],
    "pace": "El río Perfume, las tumbas reales y el paso de Hai Van hasta Hoi An.",
    "meals": []
   },
   {
    "day": 8,
    "span": 1,
    "title": "El casco antiguo de Hoi An",
    "stops": [
     "casco-antiguo-hoi-an"
    ],
    "pace": "",
    "meals": []
   },
   {
    "day": "9–11",
    "span": 3,
    "title": "Saigón, con su barrio chino",
    "stops": [
     "delta-mekong",
     "can-tho"
    ],
    "pace": "Los canales del Mekong en Can Tho, a tres horas y media, y el mercado flotante de Cai Rang.",
    "meals": []
   }
  ],
  "included": [],
  "excluded": [],
  "includedNote": "Inclusiones, alojamiento y precio: pendientes de confirmar",
  "cats": [
   "naturaleza",
   "cultura",
   "gastronomia"
  ],
  "effort": "suave"
 },
 {
  "id": "50-hanoi-mai-chau-ha-long-hue-y-hoi-an",
  "code": "50",
  "title": "Hanói, Mai Chau, Ha Long, Hue y Hoi An",
  "tagline": "Tiempo de sobra en Hoi An: tres días de los trece, entre Mai Chau y Saigón. 🏮",
  "intro": "Hoi An es la ciudad que más se disfruta sin prisa, y casi siempre se le da uno. Aquí tiene tres, con un día libre para la playa de Cua Dai.",
  "days": 13,
  "nights": 12,
  "groups": [
   "amigos",
   "mayores"
  ],
  "tier": null,
  "region": [
   "ha-noi",
   "mai-chau",
   "ha-long",
   "hue",
   "hoi-an",
   "ho-chi-minh"
  ],
  "image": "images/stop-mai-chau.jpg",
  "route": [
   "Hanói",
   "Mai Chau",
   "Ha Long",
   "Hue",
   "Hoi An"
  ],
  "price": null,
  "notes": [
   "Los farolillos de Hoi An se montan sobre varillas de bambú y seda. En el taller os enseñan a hacer uno."
  ],
  "itinerary": [
   {
    "day": "1–2",
    "span": 2,
    "title": "Hanói y Mai Chau: el mausoleo, la prisión de Hoa Lo y un paseo en cyclo antes de salir hacia el valle",
    "stops": [
     "mai-chau"
    ],
    "pace": "",
    "meals": []
   },
   {
    "day": "3–4",
    "span": 2,
    "title": "Mai Chau",
    "stops": [
     "mai-chau"
    ],
    "pace": "Paseo por los arrozales, mercado local y vuelta a Hanói.",
    "meals": []
   },
   {
    "day": 5,
    "span": 1,
    "title": "Bahía de Ha Long con noche a bordo",
    "stops": [
     "bahia-ha-long"
    ],
    "pace": "",
    "meals": []
   },
   {
    "day": "6–7",
    "span": 2,
    "title": "Vuelo a Hue",
    "stops": [
     "ciudadela-imperial-hue"
    ],
    "pace": "Las tumbas reales y la Ciudadela.",
    "meals": []
   },
   {
    "day": "8–10",
    "span": 3,
    "title": "Hoi An: el casco antiguo, un taller de farolillos, el mercado, una clase de cocina y un día en Cua Dai",
    "stops": [
     "casco-antiguo-hoi-an"
    ],
    "pace": "",
    "meals": []
   },
   {
    "day": "11–13",
    "span": 3,
    "title": "Saigón y los túneles de Cu Chi",
    "stops": [
     "tuneles-cu-chi"
    ],
    "pace": "",
    "meals": []
   }
  ],
  "included": [],
  "excluded": [],
  "includedNote": "Inclusiones, alojamiento y precio: pendientes de confirmar",
  "cats": [
   "montanas",
   "naturaleza",
   "cultura",
   "gastronomia"
  ],
  "effort": "moderado"
 },
 {
  "id": "51-hanoi-ha-long-hoi-an-y-ciudad-ho-chi-minh",
  "code": "51",
  "title": "Hanói, Ha Long, Hoi An y Ciudad Ho Chi Minh",
  "tagline": "Cuatro ciudades y una noche a bordo en Ha Long. Ocho días, de Hanói a Saigón. 🚢",
  "intro": "Ocho días no dan para todo el país, pero sí para una línea limpia: la bahía, Hanói con calma, Hoi An y el sur.",
  "days": 8,
  "nights": 7,
  "groups": [
   "amigos",
   "mayores"
  ],
  "tier": null,
  "region": [
   "ha-noi",
   "ha-long",
   "hoi-an",
   "ho-chi-minh"
  ],
  "image": "images/trip-ha-long.jpg",
  "route": [
   "Hanói",
   "Ha Long",
   "Hoi An",
   "Ciudad Ho Chi Minh"
  ],
  "price": null,
  "notes": [
   "En el barrio francés de Hanói las calles son anchas y arboladas. El casco antiguo, a diez minutos a pie, es justo lo contrario.",
   "Enviádselo a quien busca una primera vez en Vietnam sin prisas."
  ],
  "itinerary": [
   {
    "day": 1,
    "span": 1,
    "title": "Hanói",
    "stops": [],
    "pace": "",
    "meals": []
   },
   {
    "day": 2,
    "span": 1,
    "title": "Bahía de Ha Long con noche a bordo y kayak",
    "stops": [
     "bahia-ha-long"
    ],
    "pace": "",
    "meals": []
   },
   {
    "day": 3,
    "span": 1,
    "title": "Hanói despacio: el barrio francés, el casco antiguo y una casa de té",
    "stops": [
     "barrio-antiguo-hanoi"
    ],
    "pace": "",
    "meals": []
   },
   {
    "day": "4–5",
    "span": 2,
    "title": "Hoi An",
    "stops": [
     "casco-antiguo-hoi-an"
    ],
    "pace": "Los salones de las asambleas chinas, el Puente Cubierto Japonés y un día libre.",
    "meals": []
   },
   {
    "day": "6–8",
    "span": 3,
    "title": "Saigón: un taller de café, un paseo a pie y los túneles de Cu Chi",
    "stops": [
     "tuneles-cu-chi"
    ],
    "pace": "",
    "meals": []
   }
  ],
  "included": [],
  "excluded": [],
  "includedNote": "Inclusiones, alojamiento y precio: pendientes de confirmar",
  "cats": [
   "naturaleza",
   "cultura",
   "gastronomia"
  ],
  "effort": "suave"
 },
 {
  "id": "52-ciudad-ho-chi-minh-mekong-hoi-an-hue-y-hanoi",
  "code": "52",
  "title": "Ciudad Ho Chi Minh, Mekong, Hoi An, Hue y Hanói",
  "tagline": "Quince días de sur a norte con tiempo para quedarse: tres en Hoi An, dos en Hue, dos en Ninh Binh.",
  "intro": "Con quince días el viaje deja de ser una lista de paradas. Cada sitio tiene al menos dos noches y hay días sin programa.",
  "days": 15,
  "nights": 14,
  "groups": [
   "amigos",
   "mayores"
  ],
  "tier": null,
  "region": [
   "ho-chi-minh",
   "mekong",
   "hoi-an",
   "hue",
   "ha-noi",
   "ninh-binh",
   "ha-long"
  ],
  "image": "images/trip-ninh-binh.jpg",
  "route": [
   "Ciudad Ho Chi Minh",
   "Mekong",
   "Hoi An",
   "Hue",
   "Hanói"
  ],
  "price": null,
  "notes": [
   "El centro de rescate de Cuc Phuong recupera primates en peligro. Se visita con un cuidador."
  ],
  "itinerary": [
   {
    "day": "1–4",
    "span": 4,
    "title": "Saigón, los túneles de Cu Chi y el Delta del Mekong en barca",
    "stops": [
     "delta-mekong",
     "tuneles-cu-chi"
    ],
    "pace": "",
    "meals": []
   },
   {
    "day": "5–7",
    "span": 3,
    "title": "Hoi An, con dos días libres y una clase de cocina por la noche",
    "stops": [
     "casco-antiguo-hoi-an"
    ],
    "pace": "",
    "meals": []
   },
   {
    "day": "8–9",
    "span": 2,
    "title": "Hue por el paso de Hai Van",
    "stops": [
     "paso-hai-van",
     "ciudadela-imperial-hue",
     "pagoda-thien-mu"
    ],
    "pace": "La Ciudadela, la Ciudad Púrpura Prohibida, la pagoda Thien Mu y las tumbas reales.",
    "meals": []
   },
   {
    "day": 10,
    "span": 1,
    "title": "Hanói: el Templo de la Literatura, la pagoda de un Pilar y las marionetas de agua",
    "stops": [
     "templo-literatura"
    ],
    "pace": "",
    "meals": []
   },
   {
    "day": "11–12",
    "span": 2,
    "title": "Ninh Binh",
    "stops": [
     "tam-coc"
    ],
    "pace": "El parque nacional de Cuc Phuong, con su centro de rescate de fauna, y la barca entre cuevas.",
    "meals": []
   },
   {
    "day": "13–15",
    "span": 3,
    "title": "Bahía de Ha Long con noche a bordo y los últimos días en Hanói",
    "stops": [
     "bahia-ha-long"
    ],
    "pace": "",
    "meals": []
   }
  ],
  "included": [],
  "excluded": [],
  "includedNote": "Inclusiones, alojamiento y precio: pendientes de confirmar",
  "cats": [
   "naturaleza",
   "cultura",
   "gastronomia"
  ],
  "effort": "moderado"
 },
 {
  "id": "53-hanoi-ninh-binh-ha-long-da-nang-y-hoi-an",
  "code": "53",
  "title": "Hanói, Ninh Binh, Ha Long, Da Nang y Hoi An",
  "tagline": "El Puente Dorado de Ba Na queda justo a mitad de camino. Nueve días de Hanói a Saigón. 🌉",
  "intro": "Nueve días de norte a sur, con un día libre en Da Nang para romper el ritmo antes del sur.",
  "days": 9,
  "nights": 8,
  "groups": [
   "amigos",
   "mayores"
  ],
  "tier": null,
  "region": [
   "ha-noi",
   "ninh-binh",
   "ha-long",
   "da-nang",
   "hoi-an",
   "mekong",
   "ho-chi-minh"
  ],
  "image": "images/trip-hcmc.jpg",
  "route": [
   "Hanói",
   "Ninh Binh",
   "Ha Long",
   "Da Nang",
   "Hoi An"
  ],
  "price": null,
  "notes": [
   "El Puente Dorado está a más de mil metros de altura y lo sostienen dos manos de piedra cubiertas de musgo.",
   "Enviádselo a quien quiere ver norte y sur con un respiro en medio."
  ],
  "itinerary": [
   {
    "day": 1,
    "span": 1,
    "title": "Hanói",
    "stops": [
     "templo-literatura"
    ],
    "pace": "El Templo de la Literatura, la prisión de Hoa Lo y el templo Ngoc Son.",
    "meals": []
   },
   {
    "day": 2,
    "span": 1,
    "title": "Ninh Binh, a dos horas: Hoa Lu y Trang An",
    "stops": [
     "tam-coc"
    ],
    "pace": "",
    "meals": []
   },
   {
    "day": "3–4",
    "span": 2,
    "title": "Bahía de Ha Long con kayak y las cuevas Oscura y Clara",
    "stops": [
     "bahia-ha-long"
    ],
    "pace": "Vuelo a Da Nang.",
    "meals": []
   },
   {
    "day": "5–7",
    "span": 3,
    "title": "Ba Na y el Puente Dorado, las Montañas de Mármol, Hoi An y un día libre en Da Nang",
    "stops": [
     "ba-na-hills",
     "montanas-de-marmol",
     "casco-antiguo-hoi-an"
    ],
    "pace": "",
    "meals": []
   },
   {
    "day": "8–9",
    "span": 2,
    "title": "El Delta del Mekong y Saigón: el Palacio de la Independencia, la catedral de Notre-Dame y el museo de los Vestigios de la Guerra",
    "stops": [
     "delta-mekong"
    ],
    "pace": "",
    "meals": []
   }
  ],
  "included": [],
  "excluded": [],
  "includedNote": "Inclusiones, alojamiento y precio: pendientes de confirmar",
  "cats": [
   "naturaleza",
   "cultura"
  ],
  "effort": "suave"
 },
 {
  "id": "54-ciudad-ho-chi-minh-can-tho-hoi-an-hue-y-hanoi",
  "code": "54",
  "title": "Ciudad Ho Chi Minh, Can Tho, Hoi An, Hue y Hanói",
  "tagline": "Hay que madrugar en el Mekong: los mercados flotantes empiezan con la primera luz. Diez días de Saigón a Ha Long. 🛶",
  "intro": "Este viaje empieza donde casi todos terminan. Dos días en el delta, con noche en Can Tho, y después hacia el norte por el centro.",
  "days": 10,
  "nights": 9,
  "groups": [
   "amigos",
   "mayores"
  ],
  "tier": null,
  "region": [
   "ho-chi-minh",
   "mekong",
   "hoi-an",
   "hue",
   "da-nang",
   "ninh-binh",
   "ha-long",
   "ha-noi"
  ],
  "image": "images/trip-ninh-binh.jpg",
  "route": [
   "Ciudad Ho Chi Minh",
   "Can Tho",
   "Hoi An",
   "Hue",
   "Hanói"
  ],
  "price": null,
  "notes": [
   "La laguna de Lap An queda al pie del paso de Hai Van. Por la mañana el agua refleja las montañas."
  ],
  "itinerary": [
   {
    "day": 1,
    "span": 1,
    "title": "Saigón",
    "stops": [],
    "pace": "",
    "meals": []
   },
   {
    "day": "2–3",
    "span": 2,
    "title": "Cai Be y Can Tho: dos mercados flotantes, bici por caminos rurales y el río Bassac",
    "stops": [
     "can-tho"
    ],
    "pace": "Vuelta a Saigón.",
    "meals": []
   },
   {
    "day": "4–5",
    "span": 2,
    "title": "Vuelo a Da Nang",
    "stops": [
     "aldea-cam-thanh",
     "casco-antiguo-hoi-an"
    ],
    "pace": "El bosque de cocoteros de Cam Thanh en barca cesta y Hoi An.",
    "meals": []
   },
   {
    "day": 6,
    "span": 1,
    "title": "El paso de Hai Van, la laguna de Lap An, la tumba de Khai Dinh, la Ciudadela de Hue y la pagoda Thien Mu",
    "stops": [
     "paso-hai-van",
     "ciudadela-imperial-hue",
     "pagoda-thien-mu",
     "tumba-khai-dinh"
    ],
    "pace": "",
    "meals": []
   },
   {
    "day": 7,
    "span": 1,
    "title": "Ba Na y el Puente Dorado",
    "stops": [
     "ba-na-hills"
    ],
    "pace": "Vuelo a Hanói.",
    "meals": []
   },
   {
    "day": "8–10",
    "span": 3,
    "title": "Ninh Binh: Hoa Lu y Trang An",
    "stops": [
     "tam-coc",
     "bahia-ha-long"
    ],
    "pace": "La bahía de Ha Long en crucero y las cuevas Oscura y Clara.",
    "meals": []
   }
  ],
  "included": [],
  "excluded": [],
  "includedNote": "Inclusiones, alojamiento y precio: pendientes de confirmar",
  "cats": [
   "naturaleza",
   "cultura",
   "gastronomia"
  ],
  "effort": "suave"
 },
 {
  "id": "55-hanoi-ha-long-sa-pa-hoi-an-y-ciudad-ho-chi-minh",
  "code": "55",
  "title": "Hanói, Ha Long, Sa Pa, Hoi An y Ciudad Ho Chi Minh",
  "tagline": "Montaña, bahía, casco antiguo y una isla para terminar: catorce días de Hanói a Con Dao. 🏝️",
  "intro": "Con Dao es un archipiélago al sur que casi nadie incluye. Aquí cierra el viaje con tres días de playa después de todo el norte y el centro.",
  "days": 14,
  "nights": 13,
  "groups": [
   "amigos",
   "mayores"
  ],
  "tier": null,
  "region": [
   "ha-noi",
   "ha-long",
   "sa-pa",
   "hoi-an",
   "ho-chi-minh"
  ],
  "image": "images/trip-hcmc.jpg",
  "route": [
   "Hanói",
   "Ha Long",
   "Sa Pa",
   "Hoi An",
   "Ciudad Ho Chi Minh"
  ],
  "price": null,
  "notes": [
   "En Cua Van vive una aldea de pescadores sobre casas flotantes, dentro de la bahía.",
   "Enviádselo a quien quiere acabar lejos de todo."
  ],
  "itinerary": [
   {
    "day": "1–2",
    "span": 2,
    "title": "Hanói",
    "stops": [
     "templo-literatura",
     "lago-hoan-kiem"
    ],
    "pace": "El mausoleo, la pagoda de un Pilar, el Templo de la Literatura y el lago Hoan Kiem.",
    "meals": []
   },
   {
    "day": "3–4",
    "span": 2,
    "title": "Bahía de Ha Long en crucero: la cueva Tien Ong, la zona de Cua Van y tai chi por la mañana",
    "stops": [
     "bahia-ha-long"
    ],
    "pace": "",
    "meals": []
   },
   {
    "day": "5–6",
    "span": 2,
    "title": "Sa Pa",
    "stops": [
     "sa-pa-arrozales"
    ],
    "pace": "Mercados de las etnias, la cultura tay y la caminata por Suoi Hoi y Ta Phin, entre arrozales y colinas de té.",
    "meals": []
   },
   {
    "day": "7–8",
    "span": 2,
    "title": "Vuelo a Hoi An",
    "stops": [],
    "pace": "Casas de comerciantes, el Puente Cubierto Japonés y el salón de la asamblea Trieu Chau.",
    "meals": []
   },
   {
    "day": "9–10",
    "span": 2,
    "title": "Saigón: Correos, el Palacio de la Independencia y el museo de los Vestigios de la Guerra",
    "stops": [
     "correos-saigon"
    ],
    "pace": "",
    "meals": []
   },
   {
    "day": "11–14",
    "span": 4,
    "title": "Con Dao, a una hora de vuelo",
    "stops": [],
    "pace": "Playa y descanso.",
    "meals": []
   }
  ],
  "included": [],
  "excluded": [],
  "includedNote": "Inclusiones, alojamiento y precio: pendientes de confirmar",
  "cats": [
   "montanas",
   "naturaleza",
   "cultura",
   "gastronomia"
  ],
  "effort": "moderado"
 }
]);
  var sample = D.trips.shift(); D.trips.push(sample);
  D.trips.forEach(function(t){ if(!t.cats){ t.cats=['cultura','naturaleza']; t.effort='moderado'; } });
})();
