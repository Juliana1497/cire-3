/* The data is created in a constant stored in a JSON that will contain each service and its 
individual properties. */

const data = {
  status: "success",
  services: [
    {
      id: 1,
      image: require('./img/RE.jpeg'),
      name: "Refuerzo Escolar",
      price: 80000,
      conditions: "*Pago mensual",
      category: "Escolar",
      description: "Se trabaja con cada alumno la escritura y la lectura, reforzando",
      amount: 1,
    },

    {
      id: 2,
      image: require("./img/Psic.jpeg"),
      name: "Psicología",
      price: 10000,
      conditions: "*Precio por sesión",
      category: "Terapias",
      description: "Psicología grupal e individual. A través del arte se trabajan las emociones en la persona que requiere el servicio",
      amount: 1,
    },

    {
      id: 3,
      image: require("./img/Fono.jpeg"),
      name: "Fonoaudiología",
      price: 10000,
      conditions: "*Precio por sesión",
      category: "Terapias",
      description: "Fonoaudiología grupal e individual. Junto a la persona que requiere el servicio, se trabaja la repetición de sonidos, vocalización y pronunciación",
      amount: 1,
    },

    {
      id: 4,
      image: require("./img/TO.jpeg"),
      name: "Terapia Ocupacional",
      price: 10000,
      conditions: "*Precio por sesión",
      category: "Terapias",
      description: "Terapia Ocupacional grupal e individual. Junto a la persona que requiere el servicio, se trabaja la concentración y la atención a través del arte plastico y manual.",
      amount: 1,
    },

    {
      id: 5,
      image: require("./img/TP.jpeg"),
      name: "Terapia Psicosocial",
      price: 10000,
      conditions: "*Precio por sesión",
      category: "Terapias",
      description: "Terapia psicosocial grupal e individual. A través del arte se manejan",
      amount: 1,
    },

    {
      id: 6,
      image: require("./img/ApEs.jpg"),
      name: "Apoyo Escolar",
      price: 10000,
      conditions: "*Precio por sesión",
      category: "Escolar",
      description: "Se trabaja con cada alumno los problemas ",
      amount: 1,
    },

    {
      id: 7,
      image: require("./img/AceEs.jpg"),
      name: "Aceleración Escolar",
      price: 80000,
      conditions: "*Pago mensual",
      category: "Escolar",
      description: "aeiou",
      amount: 1,
    },

    {
      id: 8,
      image: require("./img/NivEs.jpg"),
      name: "Nivelación Escolar",
      price: 80000,
      conditions: "*Pago mensual",
      category: "Escolar",
      description: "aeiou",
      amount: 1,
    },

    {
      id: 9,
      image: require("./img/Paq.jpg"),
      name: "Paquete Completo",
      price: 80000,
      conditions: "*Pago mensual",
      description: "El paquete aplica si se percibe que la persona que requiere el servicio, necesita al menos un servicio de la categoria 'Escolar' y al menos uno de la categoria 'Terapias'",
      amount: 1,
    },
  ],
};

export default data;
