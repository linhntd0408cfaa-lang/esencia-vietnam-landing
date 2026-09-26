/*
 * Esencia Vietnam - datos por mes (mejor epoca por zona).
 * NOTA DE FIABILIDAD: contenido orientativo; confirmar con el equipo antes de publicar o
 * de comprometerse con un cliente. Fuente: cuaderno interno de la empresa (guia general de
 * Vietnam y ficha del publico 55-70), no datos meteorologicos oficiales. El clima real varia
 * cada ano (tormentas, lluvias, fecha del Tet); comprobar siempre la prevision antes de reservar.
 * Zonas: norte = Hanoi, Ninh Binh, Ha Long, Sa Pa, Cao Bang, Pu Luong, Ha Giang, Mai Chau;
 *        centro = Da Nang, Hoi An, Hue; sur = Ciudad Ho Chi Minh, Mekong, Phu Quoc.
 * Valores: 'bueno' | 'regular' | 'evitar'. Donde la fuente es ambigua se marca 'regular'.
 */
window.ESENCIA_DATA = window.ESENCIA_DATA || {};
window.ESENCIA_DATA.months = [
  {m:1, name:'Enero',
   weather:'Invierno en el norte, seco y soleado en el sur. Entre enero y febrero cae el Tet (Año Nuevo lunar): muchos servicios y comercios cierran entre 3 y 5 días o más.',
   zones:{norte:'regular',centro:'regular',sur:'bueno'},
   zoneNotes:{
     norte:'Frío y con neblina; en las montañas (Sa Pa, Ha Giang, Cao Bang) puede bajar de 0°C. Las ciudades y Ninh Binh se pueden visitar, pero conviene ir bien abrigado.',
     centro:'Hoi An y Da Nang están en su época seca (unos 18-23°C en Hoi An), pero en Hue todavía pueden quedar lluvias del final de año; ser prudente.',
     sur:'Temporada seca con mucho sol (22-33°C aprox.); época muy buena para Ciudad Ho Chi Minh, el Mekong y Phu Quoc.'}},
  {m:2, name:'Febrero',
   weather:'Frío de final de invierno en el norte y tiempo seco en el resto. El Tet (enero o febrero según el año) cierra muchos servicios varios días: comprobar la fecha del año.',
   zones:{norte:'regular',centro:'bueno',sur:'bueno'},
   zoneNotes:{
     norte:'Fin del invierno, fresco y con «nòm» (humedad alta durante unas dos semanas entre febrero y abril); en las montañas aún puede hacer mucho frío. Mucha actividad de festivales.',
     centro:'Comienza la temporada seca y soleada (20-34°C aprox. en la región).',
     sur:'Seco y soleado; temporada alta en Phu Quoc (diciembre a febrero).'}},
  {m:3, name:'Marzo',
   weather:'Mes muy recomendable para viajeros de 55-70 años: temperaturas agradables y poca lluvia en casi todo el país. Evitar coincidir con la Semana Santa, cuya fecha cambia cada año.',
   zones:{norte:'bueno',centro:'bueno',sur:'bueno'},
   zoneNotes:{
     norte:'Primavera fresca y agradable, en general seca; posible «nòm» (humedad) unos días. Buen mes para Sa Pa, Mai Chau y Ha Giang.',
     centro:'Seco y soleado; en Hoi An las buganvillas están en su mejor momento y la temperatura es suave.',
     sur:'Seco y soleado, con calor creciente (aprox. 22-33°C en la temporada seca).'}},
  {m:4, name:'Abril',
   weather:'Tiempo seco en buena parte del país y calor en aumento. Hay fiestas nacionales el 30 de abril y el 1 de mayo, con más gente y desplazamientos.',
   zones:{norte:'bueno',centro:'bueno',sur:'regular'},
   zoneNotes:{
     norte:'Final de la primavera, soleado o nublado y con poca lluvia; buen mes para Ninh Binh, Ha Long y las montañas.',
     centro:'Seco y soleado, ideal para playa y visitas al aire libre (en Hue hay festival a finales de abril).',
     sur:'Final de la temporada seca, con calor fuerte; sigue siendo viable pero cansa más que en meses anteriores.'}},
  {m:5, name:'Mayo',
   weather:'Empieza el calor fuerte y la humedad. La lluvia aumenta poco a poco en el sur; en las montañas del norte llega la cosecha del arroz.',
   zones:{norte:'bueno',centro:'bueno',sur:'regular'},
   zoneNotes:{
     norte:'Todavía agradable en general; en Mai Chau y las terrazas de arroz llega la cosecha en mayo o junio.',
     centro:'Seco y cálido; buen mes en Da Nang, Hoi An y Hue.',
     sur:'Comienza la temporada de lluvias, normalmente con chubascos por la tarde; más calor y humedad.'}},
  {m:6, name:'Junio',
   weather:'Verano caluroso y húmedo en el norte y en el sur; los viajeros sensibles al calor lo pasarían mal. Fuegos artificiales internacionales de Da Nang en junio.',
   zones:{norte:'evitar',centro:'regular',sur:'regular'},
   zoneNotes:{
     norte:'Calor y humedad altos, con días de hasta 40°C y lluvias; no es el mejor momento para grupos de 55-70 años.',
     centro:'Seco y muy caluroso; en Da Nang y las playas es temporada alta, aunque el calor y la humedad pueden fatigar.',
     sur:'Temporada de lluvias con chubascos vespertinos, calor y humedad.'}},
  {m:7, name:'Julio',
   weather:'Pleno verano: calor y humedad en casi todo el país; lluvias en el norte y en el sur.',
   zones:{norte:'evitar',centro:'regular',sur:'regular'},
   zoneNotes:{
     norte:'Calor, humedad y lluvia; posibles tormentas en la región. Poco recomendable para el público de 55-70 años.',
     centro:'Calor intenso en la costa (25-35°C aprox.) y mucha gente en temporada alta; poco recomendable para quien lleva mal el calor.',
     sur:'Temporada de lluvias con chubascos, calor y humedad.'}},
  {m:8, name:'Agosto',
   weather:'Verano tardío, húmedo y caluroso; el norte empieza a refrescar hacia el final del mes. Según nuestra guía interna es un mes a evitar para viajeros de 55-70 años, por el calor y el riesgo de tormentas.',
   zones:{norte:'regular',centro:'regular',sur:'regular'},
   zoneNotes:{
     norte:'La fuente es ambigua: la guía general lo cuenta como inicio de la buena época, pero en zonas de montaña sigue habiendo calor, humedad, lluvia y posibles tormentas.',
     centro:'Todavía en época mayormente seca, pero con mucho calor; hay que vigilar el riesgo de tormentas de cara a septiembre.',
     sur:'Temporada de lluvias con chubascos vespertinos; calor y humedad.'}},
  {m:9, name:'Septiembre',
   weather:'El norte entra en el otoño, pero en el centro empieza el riesgo de tormentas y lluvias fuertes (hasta mediados de octubre). Mes poco recomendable para el público de 55-70 por ese riesgo.',
   zones:{norte:'bueno',centro:'evitar',sur:'regular'},
   zoneNotes:{
     norte:'Otoño agradable; las terrazas de arroz de Sa Pa y Ha Giang empiezan a ponerse doradas.',
     centro:'Riesgo de tormentas y lluvias fuertes; puede haber inundaciones y accesos cortados (Hue y Phong Nha lo notan más).',
     sur:'Temporada de lluvias, con posibles tormentas; se puede viajar con planes flexibles.'}},
  {m:10, name:'Octubre',
   weather:'Otoño en el norte, con tiempo agradable; en el centro sigue habiendo riesgo de tormentas y lluvias fuertes, sobre todo hasta mediados de mes.',
   zones:{norte:'bueno',centro:'evitar',sur:'regular'},
   zoneNotes:{
     norte:'Otoño fresco y agradable, buena época en las terrazas de arroz (Sa Pa, Ha Giang); temporada de cosecha en Ninh Binh.',
     centro:'Tormentas, depresiones tropicales y lluvias entre octubre y diciembre; no se recomienda para este público.',
     sur:'Final de la temporada de lluvias; conviene llevar plan alternativo por posibles tormentas.'}},
  {m:11, name:'Noviembre',
   weather:'Mes recomendado para viajeros de 55-70: otoño agradable en el norte y comienzo de la temporada seca en el sur. En el centro hay que vigilar la previsión por posibles tormentas.',
   zones:{norte:'bueno',centro:'regular',sur:'bueno'},
   zoneNotes:{
     norte:'Otoño fresco (17-33°C aprox. entre agosto y noviembre), buena visibilidad; en las montañas empieza a enfriar.',
     centro:'Nuestra guía interna recomienda noviembre para el público de 55-70, pero otra fuente señala tormentas y lluvia entre octubre y diciembre; se marca con prudencia y hay que revisar la previsión.',
     sur:'Empieza la temporada seca, con mucho sol (22-33°C aprox.).'}},
  {m:12, name:'Diciembre',
   weather:'Invierno en el norte, seco en el sur y lluvias posibles en el centro. Fiestas de fin de año: algunos negocios cierran unos días. En enero o febrero cae el Tet.',
   zones:{norte:'regular',centro:'regular',sur:'bueno'},
   zoneNotes:{
     norte:'Frío y con neblina en las montañas (posible helada); en las ciudades se puede viajar con ropa de abrigo.',
     centro:'Puede haber lluvias, tormentas o depresiones tropicales (octubre-diciembre); prudencia y plan alternativo.',
     sur:'Temporada seca y alta, con sol y buen tiempo; ideal para Phu Quoc, el Mekong y Ciudad Ho Chi Minh.'}}
];
