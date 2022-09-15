
module.exports = function () {
    var data = {
      reserva: [
        {
          idrs:1,
          fecha: "15/07",
          iduser: 505050,
          idses:10
        },
        {
          idrs:2,
          fecha: "16/09",
          iduser: 452822,
          idses:40
        },
        {
          idrs:3,
          fecha: "02/05",
          iduser: 785425,
          idses:12
        },
        {
          idrs:4,
          fecha: "31/01",
          iduser: 744412,
          idses:3

        }
      ],
      categoria:[
        {
          idcat:1,
          nombrecat: "depresion",
         
          propietario:{
            idrs:2
          }
        },
        {
          idcat:2,
          nombrecat: "ansiedad",
         
          propietario:{
            idrs:3
          }
        }
      ]

    }

    return data
  }
