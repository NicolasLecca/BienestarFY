module.exports = function () {
    var data = {
        tipoActividad: [
            {
                idTipoActividad:1,
                nombreTipoActividad: "Mejora de la calidad del sueño",
                detalleDescripcion: "Descripcion TipoActividad 1"

            },
            {
                idTipoActividad:2,
                nombreTipoActividad: "Reduccion del estres o la ansiedad",
                detalleDescripcion: "Descripcion TipoActividad 2"
            },
            {
                idTipoActividad:3,
                nombreTipoActividad: "TMejora de la concentracion ",
                detalleDescripcion: "Descripcion TipoActividad 3"
            },
            {
                idTipoActividad:4,
                nombreTipoActividad: "Superacion Personal",
                detalleDescripcion: "Descripcion TipoActividad 4"

            }
        ],
        actividad: [
            {
                idActividad:1,
                nombreActvidad: "Escuchar musica",
                descripcionActividad: "Actividad Descripcion 1",
                tipoActividad: {
                  idTipoActividad:2
                }

            },
            {
                idActividad:1,
                nombreActvidad: "Historias para dormir",
                descripcionActividad: "Actividad Descripcion 2",
                tipoActividad: {
                  idTipoActividad:1
                }
            },
            {
                idActividad:1,
                nombreActvidad: "Desarrollo de Puzzles",
                descripcionActividad: "Actividad Descripcion 3",
                tipoActividad: {
                  idTipoActividad:3
                }
            }
        ]

    }

    return data
}
