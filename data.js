module.exports = function () {

    var data = {
      TipoSuscripcion: [
        {
          id: 1,
          descripcionTipo: "Sin descuento",
          precio: 500,
          descuento: 0,
        },

        {

          id: 2,
          descripcionTipo: "Sin descuento",
          precio: 250,
          descuento: 0,

        },

        {

          id: 3,
          descripcionTipo: "Sin Descuento",
          precio: 400,
          descuento: 0,

        }



      ],
        Suscripcion: [
            {
                id: 1,
                nombreSuscripcion: "Mensual",
                fechaInicio: "15/09/2022",
                fechaFin: "15/10/2022",
            },
            {
                id: 2,
                nombreSuscripcion: "Semestral",
                fechaInicio: "15/09/2022",
                fechaFin: "15/03/2023",
            },
            {

                id: 3,
                nombreSuscripcion: "Anual",
                fechaInicio: "15/09/2022",
                fechaFin: "15/09/2023",


            },
            {

                id: 4,
                nombreSuscripcion: "Bimestral",
                fechaInicio: "15/09/2022",
                fechaFin: "15/11/2022",



            },
            {
                id: 5,
                nombreSuscripcion:"Trimestral",
                fechaInicio: "15/09/2022",
                fechaFin: "15/12/2022",

            }
        ]
    }
    return data
}
