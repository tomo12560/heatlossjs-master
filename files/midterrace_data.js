var config = {
  project_name: "主要房間",

  degreedays: 1800,
  heating_MWT: 40.0,
  heatpump_flow_rate: 9.0,

  T: {
    external: -3.0,
    ground: 10.0,
    unheated: 10.0,
  },

  element_type: {
    Window: { uvalue: 1.6 },
    Door: { uvalue: 1.6 },
  },

  rooms: {
    livingroom: {
      temperature: 21.0,
      width: 3.4,
      length: 6.8,
      height: 2.4,
      air_change_an_hour: 1.5,

      elements: [
        // {
        //   type: "Wall:External",
        //   orientation: "South",
        //   width: 3.4,
        //   height: 2.4,
        // },
        {
          type: "Window",

          width: 6.8,
          height: 2.4,
          boundary: "unheated",
        },
        {
          type: "Door",

          width: 6.8,
          height: 2.4,
          boundary: "unheated",
        },
        // {
        //   type: "Wall:External",
        //   orientation: "North",
        //   width: 1.6,
        //   height: 2.4,
        // },
        // {
        //   type: "Wall:Internal",
        //   orientation: "East",
        //   width: 6.8,
        //   height: 2.4,
        //   boundary: "hall",
        // },
      ],

      // radiators: [
      //   { name: "Double Panel Convector 1200x600", heat50k: 2146 },
      //   { name: "Double Panel Convector 1200x600", heat50k: 2146 },
      //   { name: "Double Panel Convector 1200x600", heat50k: 2146 },
      // ],
    },
    /*
    hall: {
      temperature: 18.0,
      width: 1.0,
      length: 6.8,
      height: 2.4,
      air_change_an_hour: 2.0,

      elements: [
        {
          type: "Wall:External",
          orientation: "South",
          width: 1.0,
          height: 2.4,
        },
        {
          type: "Wall:Internal",
          orientation: "West",
          width: 6.8,
          height: 2.4,
          boundary: "livingroom",
        },
        {
          type: "Wall:Internal",
          orientation: "North",
          width: 1.0,
          height: 2.4,
          boundary: "livingroom",
        },
        {
          type: "Wall:Party",
          orientation: "East",
          width: 6.8,
          height: 2.4,
          boundary: "unheated",
        },
        {
          type: "Floor:Ground",
          width: 6.8,
          height: 1.0,
          boundary: "ground",
        },
        {
          type: "Floor:First",
          width: 6.8,
          height: 1.0,
          boundary: "study",
        },
        {
          type: "Glazing:Double",
          subtractfrom: 0,
          width: 0.8,
          height: 1.9,
        },
      ],

      radiators: [{ name: "Double Panel Convector 1200x600", heat50k: 2146 }],
    },

    kitchen: {
      temperature: 18.0,
      width: 2.4,
      length: 3.0,
      height: 2.4,
      air_change_an_hour: 2.0,

      elements: [
        {
          type: "Wall:Internal",
          orientation: "South",
          width: 2.4,
          height: 2.4,
          boundary: "livingroom",
        },
        {
          type: "Wall:External",
          orientation: "West",
          width: 3.0,
          height: 2.4,
        },
        {
          type: "Wall:External",
          orientation: "North",
          width: 2.4,
          height: 2.4,
        },
        {
          type: "Wall:Party",
          orientation: "East",
          width: 3.0,
          height: 2.4,
          boundary: "unheated",
        },
        {
          type: "Floor:Ground",
          width: 3.0,
          height: 2.4,
          boundary: "ground",
        },
        {
          type: "Floor:First",
          width: 3.0,
          height: 2.4,
          boundary: "bathroom",
        },
        {
          type: "Glazing:Double",
          subtractfrom: 1,
          width: 0.9,
          height: 1.3,
        },
        {
          type: "Glazing:Double",
          subtractfrom: 1,
          width: 0.8,
          height: 1.9,
        },
      ],

      radiators: [],
    },

    bed1: {
      temperature: 18.0,
      width: 3.0,
      length: 3.5,
      height: 2.4,
      air_change_an_hour: 1.0,

      elements: [
        {
          type: "Wall:Internal",
          orientation: "South",
          width: 3.0,
          height: 2.4,
          boundary: "bed2",
        },
        {
          type: "Wall:Party",
          orientation: "West",
          width: 3.5,
          height: 2.4,
          boundary: "unheated",
        },
        {
          type: "Wall:External",
          orientation: "North",
          width: 1.6,
          height: 2.4,
        },
        {
          type: "Wall:Internal",
          orientation: "North",
          width: 1.4,
          height: 2.4,
          boundary: "bathroom",
        },
        {
          type: "Wall:Internal",
          orientation: "East",
          width: 3.5,
          height: 2.4,
          boundary: "landing",
        },
        {
          type: "Floor:First",
          width: 3.0,
          height: 3.5,
          boundary: "livingroom",
        },
        {
          type: "Floor:Loft",
          width: 3.0,
          height: 3.5,
        },
        {
          type: "Glazing:Double",
          subtractfrom: 2,
          width: 0.9,
          height: 1.3,
        },
      ],

      radiators: [{ name: "Double Panel Convector 1200x500", heat50k: 1834 }],
    },

    bed2: {
      temperature: 18.0,
      width: 2.6,
      length: 3.2,
      height: 2.4,
      air_change_an_hour: 1.0,

      elements: [
        {
          type: "Wall:External",
          orientation: "South",
          width: 2.6,
          height: 2.4,
        },
        {
          type: "Wall:Party",
          orientation: "West",
          width: 3.2,
          height: 2.4,
          boundary: "unheated",
        },
        {
          type: "Wall:Internal",
          orientation: "North",
          width: 2.6,
          height: 2.4,
          boundary: "bed1",
        },
        {
          type: "Wall:Internal",
          orientation: "East",
          width: 3.2,
          height: 2.4,
          boundary: "landing",
        },
        {
          type: "Floor:First",
          width: 2.6,
          height: 3.2,
          boundary: "livingroom",
        },
        {
          type: "Floor:Loft",
          width: 2.6,
          height: 3.2,
        },
        {
          type: "Glazing:Double",
          subtractfrom: "32",
          width: 0.9,
          height: 1.3,
        },
      ],

      radiators: [{ name: "Double Panel Convector 1200x500", heat50k: 1834 }],
    },

    study: {
      temperature: 21.0,
      width: 1.8,
      length: 2.2,
      height: 2.4,
      air_change_an_hour: 1.5,

      elements: [
        {
          type: "Wall:External",
          orientation: "South",
          width: 1.8,
          height: 2.4,
        },
        {
          type: "Wall:Internal",
          orientation: "West",
          width: 2.2,
          height: 2.4,
          boundary: "bed2",
        },
        {
          type: "Wall:Internal",
          orientation: "North",
          width: 1.8,
          height: 2.4,
          boundary: "bed1",
        },
        {
          type: "Wall:Party",
          orientation: "East",
          width: 2.2,
          height: 2.4,
          boundary: "unheated",
        },
        {
          type: "Floor:First",
          width: 1.8,
          height: 2.2,
          boundary: "livingroom",
        },
        {
          type: "Floor:Loft",
          width: 1.8,
          height: 2.2,
        },
        {
          type: "Glazing:Double",
          subtractfrom: 0,
          width: 0.8,
          height: 1.4,
        },
      ],

      radiators: [{ name: "Double Panel Convector 1000x400", heat50k: 1273 }],
    },

    landing: {
      temperature: 18.0,
      width: 1.5,
      length: 4.4,
      height: 2.4,
      air_change_an_hour: 2.0,

      elements: [
        {
          type: "Wall:Internal",
          orientation: "South",
          width: 1.5,
          height: 2.4,
          boundary: "study",
        },
        {
          type: "Wall:Internal",
          orientation: "West",
          width: 4.4,
          height: 2.4,
          boundary: "bed1",
        },
        {
          type: "Wall:Internal",
          orientation: "North",
          width: 1.5,
          height: 2.4,
          boundary: "bathroom",
        },
        {
          type: "Wall:Party",
          orientation: "East",
          width: 4.4,
          height: 2.4,
          boundary: "unheated",
        },
        {
          type: "Floor:First",
          width: 1.5,
          height: 4.4,
          boundary: "hall",
        },
        {
          type: "Floor:Loft",
          width: 1.5,
          height: 4.4,
        },
      ],
    },

    bathroom: {
      temperature: 22.0,
      width: 2.4,
      length: 3.3,
      height: 2.4,
      air_change_an_hour: 3.0,

      elements: [
        {
          type: "Wall:Internal",
          orientation: "South",
          width: 2.4,
          height: 2.4,
          boundary: "landing",
        },
        {
          type: "Wall:External",
          orientation: "West",
          width: 3.3,
          height: 2.4,
        },
        {
          type: "Wall:External",
          orientation: "North",
          width: 2.4,
          height: 2.4,
        },
        {
          type: "Wall:Party",
          orientation: "East",
          width: 3.3,
          height: 2.4,
          boundary: "unheated",
        },
        {
          type: "Floor:First",
          width: 2.4,
          height: 3.3,
          boundary: "kitchen",
        },
        {
          type: "Floor:Loft",
          width: 2.4,
          height: 3.3,
        },
        {
          type: "Glazing:Double",
          subtractfrom: 2,
          width: 0.8,
          height: 0.9,
        },
      ],

      radiators: [{ name: "Double Panel Convector 800x600", heat50k: 1430 }],
    },*/
  },
};
