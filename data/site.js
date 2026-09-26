/* Datos compartidos. Para añadir viajes/paradas basta con añadir objetos a estos arrays. */
window.ESENCIA_DATA = {
  config: {
    brand: 'Esencia Vietnam',
    whatsapp: '84333067385',
    whatsappLabel: '+84 333 067 385',
    email: 'esenciavietnam@gmail.com',
    tripadvisor: 'https://www.tripadvisor.com.vn/Attraction_Review-g293924-d28038416-Reviews-Piu_Piu_Travel-Hanoi.html',
    demo: true,          // muestra la banda "vista previa"
    showPrices: false,   // sin precios por ahora
    licenseNumber: null  // null => se muestra "pendiente"
  },

  /* peso: 'principal' cuenta para el aviso de ritmo (máx. 2 por día); 'ligera' no cuenta */
  stops: [
    {id:'playa-my-khe', name:'Playa de My Khe', region:'da-nang', type:'playa', lat:16.0544, lng:108.2478,
     image:'images/stop-my-khe.jpg', weight:'ligera', duration:'1–2 h', walking:'bajo',
     bestSeason:'feb–ago', summary:'Larga playa urbana de arena clara, ideal para un primer paseo tranquilo tras el vuelo.'},
    {id:'puente-del-dragon', name:'Puente del Dragón', region:'da-nang', type:'ciudad', lat:16.0611, lng:108.2269,
     image:'images/day1-da-nang.jpg', weight:'ligera', duration:'1 h', walking:'bajo',
     bestSeason:'todo el año', summary:'Icono de Da Nang sobre el río Han; iluminado por la noche, con espectáculo algunos fines de semana.'},
    {id:'pagoda-linh-ung', name:'Pagoda Linh Ung (Son Tra)', region:'da-nang', type:'cultura', lat:16.1078, lng:108.2778,
     image:'images/stop-linh-ung.jpg', weight:'ligera', duration:'1–1,5 h', walking:'bajo',
     bestSeason:'feb–ago', summary:'Pagoda en la península de Son Tra, con una gran estatua blanca de Buda y vistas a la costa.'},
    {id:'montanas-de-marmol', name:'Montañas de Mármol', region:'da-nang', type:'naturaleza', lat:16.0031, lng:108.2635,
     image:'images/stop-marmol.jpg', weight:'principal', duration:'2 h', walking:'alto',
     bestSeason:'feb–may', summary:'Cinco colinas de mármol con cuevas, pagodas y miradores. Hay escaleras; existe ascensor a la parte alta.'},
    {id:'aldea-cam-thanh', name:'Aldea de Cam Thanh', region:'hoi-an', type:'pueblo', lat:15.9110, lng:108.3690,
     image:'images/stop-cam-thanh.jpg', weight:'principal', duration:'1,5–2 h', walking:'bajo',
     bestSeason:'feb–ago', summary:'Bosque de cocoteros de agua que se recorre en barca cesta; una actividad tranquila y divertida para los niños.'},
    {id:'casco-antiguo-hoi-an', name:'Casco antiguo de Hoi An', region:'hoi-an', type:'cultura', lat:15.8801, lng:108.3380,
     image:'images/day2-hoi-an.jpg', weight:'principal', duration:'3 h', walking:'medio',
     bestSeason:'feb–may', summary:'Patrimonio Mundial de la UNESCO: casas amarillas, faroles y calles peatonales, mejor al atardecer.'},
    {id:'aldea-ceramica-thanh-ha', name:'Aldea de cerámica de Thanh Ha', region:'hoi-an', type:'pueblo', lat:15.8737, lng:108.3000,
     image:'images/stop-thanh-ha.jpg', weight:'principal', duration:'1,5 h', walking:'bajo',
     bestSeason:'todo el año', summary:'Taller de cerámica donde toda la familia puede modelar su propia pieza.'},
    {id:'ba-na-hills', name:'Ba Na Hills y Puente Dorado', region:'da-nang', type:'naturaleza', lat:15.9970, lng:107.9880,
     image:'images/day3-ba-na-hills.jpg', weight:'principal', duration:'5–6 h', walking:'medio',
     bestSeason:'feb–may', summary:'Teleférico sobre las nubes, el Puente Dorado y jardines de montaña; fresco incluso en verano.'},
    {id:'paso-hai-van', name:'Paso de Hai Van', region:'da-nang', type:'naturaleza', lat:16.2003, lng:108.1259,
     image:'images/stop-hai-van.jpg', weight:'ligera', duration:'30–45 min', walking:'bajo',
     bestSeason:'feb–ago', summary:'Puerto de montaña entre Da Nang y Hue; parada de mirador en el trayecto por carretera.'},
    {id:'ciudadela-imperial-hue', name:'Ciudadela Imperial de Hue', region:'hue', type:'cultura', lat:16.4698, lng:107.5786,
     image:'images/day4-hue.jpg', weight:'principal', duration:'2–3 h', walking:'medio',
     bestSeason:'mar–ago', summary:'Antigua capital de la dinastía Nguyen, Patrimonio Mundial, con la Puerta del Mediodía (Ngo Mon).'},
    {id:'pagoda-thien-mu', name:'Pagoda Thien Mu', region:'hue', type:'cultura', lat:16.4538, lng:107.5445,
     image:'images/stop-thien-mu.jpg', weight:'ligera', duration:'1 h', walking:'bajo',
     bestSeason:'mar–ago', summary:'Pagoda con torre de siete pisos a orillas del río de los Perfumes; se puede llegar en barco.'},
    {id:'tumba-khai-dinh', name:'Tumba del emperador Khai Dinh', region:'hue', type:'cultura', lat:16.3964, lng:107.5893,
     image:'images/stop-khai-dinh.jpg', weight:'principal', duration:'1,5 h', walking:'medio',
     bestSeason:'mar–ago', summary:'Mausoleo imperial de estilo ecléctico, con interiores decorados con mosaicos de porcelana.'}
  ],

  /* Alojamiento y experiencias: datos de ejemplo; nombres reales pendientes */
  stays: [
    {id:'hotel-da-nang-ejemplo', kind:'hotel', name:'Hotel 4–5★ en Da Nang', region:'da-nang', stars:4,
     image:'images/day5-danang-departure.jpg', summary:'Habitaciones comunicadas o cercanas y piscina.', todo:'nombre real del hotel'},
    {id:'hotel-hoi-an-ejemplo', kind:'hotel', name:'Hotel 4–5★ en Hoi An', region:'hoi-an', stars:4,
     image:'images/day2-hoi-an.jpg', summary:'A pocos minutos del casco antiguo.', todo:'nombre real del hotel'},
    {id:'exp-faroles', kind:'experiencia', name:'Taller de faroles en Hoi An', region:'hoi-an',
     image:'images/day2-hoi-an.jpg', summary:'Cada miembro de la familia arma su propio farol.'},
    {id:'exp-cocina', kind:'experiencia', name:'Clase de cocina con una familia local', region:'hoi-an',
     image:'images/stop-cam-thanh.jpg', summary:'Cocinar y comer juntos, con menú adaptado a mayores y niños.'},
    {id:'exp-fotos', kind:'experiencia', name:'Sesión de fotos familiar', region:'hoi-an',
     image:'images/day2-hoi-an.jpg', summary:'Retratos en áo dài y el casco antiguo de noche.'}
  ],

  /* Viajes. Precio = MUESTRA (demo). Al recibir el precio real basta con cambiar estos campos. */
  trips: [
    {
      id:'tres-generaciones-centro-vietnam',
      title:'Tres generaciones en el Centro de Vietnam',
      tagline:'Da Nang, Hoi An y Hue a ritmo lento, pensado para abuelos, padres y niños.',
      days:5, nights:4,
      groups:['multigeneracional','mayores'],
      tier:'4–5★',
      region:['da-nang','hoi-an','hue'],
      image:'images/day3-ba-na-hills.jpg',
      route:['Da Nang','Hoi An','Ba Na Hills','Hue'],
      price:{amount:1250, currency:'USD', per:'persona', basis:'grupo de 6 personas', sample:true},
      itinerary:[
        {day:1, title:'Llegada a Da Nang', stops:['playa-my-khe'], meals:[], pace:'Día ligero: descanso tras el vuelo.'},
        {day:2, title:'Linh Ung, Montañas de Mármol, Cam Thanh y Hoi An', stops:['pagoda-linh-ung','montanas-de-marmol','aldea-cam-thanh','casco-antiguo-hoi-an'], meals:['Desayuno','Almuerzo','Cena'], pace:'Día largo: se puede omitir una parada según el ánimo del grupo.'},
        {day:3, title:'Ba Na Hills, día completo', stops:['ba-na-hills'], meals:['Desayuno','Almuerzo'], pace:'Una sola parada principal, con descansos.'},
        {day:4, title:'Hue, día completo', stops:['ciudadela-imperial-hue','pagoda-thien-mu'], meals:['Desayuno','Almuerzo'], pace:'Día histórico y pausado.'},
        {day:5, title:'Salida desde Da Nang', stops:[], meals:['Desayuno'], pace:'Mañana tranquila antes del traslado al aeropuerto.'}
      ],
      included:['Vehículo privado con el mismo conductor','Guía en español/inglés','Alojamiento 4–5★','Comidas indicadas en el itinerario','Seguro de viaje y asistencia médica 24/7','Sesión de fotos familiar','Videollamada de planificación previa'],
      excluded:['Vuelos internacionales y domésticos','Gastos personales y propinas','Suplementos por festivos (Tet)'],
      includedNote:'Listas de ejemplo: pendientes de confirmar con el equipo.'
    }
  ],

  team: [
    {id:'dieu-linh', name:'Nguyễn Thị Diệu Linh', role:'Responsable de ventas para viajeros internacionales', languages:null,
     bio:'Guía voluntaria desde 2022, ha acompañado a más de 100 grupos internacionales, incluidos grupos de habla hispana.', photo:null}
  ],

  reviews: [
    {id:'yc77', author:'YC77', origin:'Singapur', trip:'Da Nang–Hoi An–Hue, 7 días, en familia', date:'junio 2026', source:'Tripadvisor',
     text:'Un agradecimiento especial a Becky, cuya comunicación rápida y cercana por WhatsApp hizo que toda la planificación previa al viaje fuera sencilla — desde ajustar el itinerario hasta enviarnos recordatorios sobre el clima local, qué empacar y la confirmación del vuelo.',
     permission:false},
    {id:'tanya-r', author:'Tanya R', origin:null, trip:'Centro de Vietnam, 6 días, familia de 5 con un niño', date:'julio 2026', source:'Tripadvisor',
     text:'Somos un grupo familiar de 5 personas viajando con un niño... Chris fue muy conocedor y cercano... Al ser un tour privado, la agencia fue muy flexible y adaptó el itinerario a nuestros intereses y nuestro ritmo.',
     permission:false}
  ],

  credits: {} // se rellena: { 'images/archivo.jpg': {author:'…', license:'CC BY-SA 4.0', url:'…'} }
};
