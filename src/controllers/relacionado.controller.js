import Relacionado from "../models/adm/xadmrelm";

// Agregar característica async a las funciones
// que hagan consultas.

// Listar Relacionados.
export async function getRelacionados(req, res) {
  try {
    const relacionado = await Relacionado.findAll();
    res.json({
      data: relacionado,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: e,
    });
  }
}

// Crear Solicitud.
export async function createRelacionados(req, res) {
  // console.log(req.body);
  const {
    admrel_numid,
    admrel_clase,
    admtid_numid,
    admrel_codi,
    admide_numero,
    admrel_nombre,
    admrel_nombre2,
    admrel_Apellidos,
    admrel_Apellidos2,
    admrel_apodo,
    admrel_Sexo,
    admsts_codi
  } = req.body;

  try {
    const newRelacionado = await Relacionado.create(
      {
        admrel_numid,
        admrel_clase,
        admtid_numid,
        admrel_codi,
        admide_numero,
        admrel_nombre,
        admrel_nombre2,
        admrel_Apellidos,
        admrel_Apellidos2,
        admrel_apodo,
        admrel_Sexo,
        admsts_codi,
      },
      {
        // fields you want to show.
        fields: [
          "admrel_numid",
          "admtid_numid",
          "admrel_codi",
          "admide_numero",
          "admrel_nombre",
          "admrel_Apellidos",
          "admrel_apodo",
          "admrel_Sexo",
          "admsts_codi"


        ],
      }
    );
    // If success
    if (newRelacionado) {
      return res.json({
        message: "Relacionado creado exitosamente.",
        data: newRelacionado,
      });
    }
    // res.send("recibido");
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Algo salió mal",
      data: error,
    });
  }
}

// Listar Relacionados.
export async function getRelacionado(req, res) {
  try {
    const { admrel_numid } = req.params;
    const relacionado = await Relacionado.findOne({
      where: {
        admrel_numid,
      },
    });
    res.json({
      data: relacionado,
    });
  } catch (e) {
    console.log(e);
  }
}

// Eliminar Solicitud.
export async function deleteRelacionado(req, res) {
  try {
    const { admrel_numid } = req.params;
    // delete Solicitud.
    const deleteRowCount = await Relacionado.destroy({
      where: {
        admrel_numid,
      }
    });
    res.json({
      message: "Relacionado eliminado.",
      count: deleteRowCount,
    });
  } catch (e) {
    res.status(500).json({
      message: "Algo salió mal",
    });
  }
}

// Actualizar Solicitud.
export async function updateRelacionado(req, res) {
  try {
    const { admrel_numid } = req.params;
    const {
      admrel_nombre,
      admrel_nombre2,
      admrel_apellidos,
      admrel_apellidos2,
      admrel_apodo,
      admrel_sexo,
    } = req.body;

    const solicitud = await Solicitud.findOne({
      attributes: [
        "admrel_numid",
        "admrel_nombre",
        "admrel_nombre2",
        "admrel_apellidos",
        "admrel_apellidos2",
        "admrel_apodo",
        "admrel_sexo",
      ],
      where: { admrel_numid },
    });

    const updatedRelacionado = await Relacionado.update({
      admrel_numid,
      admrel_nombre,
      admrel_nombre2,
      admrel_apellidos,
      admrel_apellidos2,
      admrel_apodo,
      admrel_sexo
    },
      {
        where: {admrel_numid}
      });
        res.json({
          message: "Solicitud actualizada.",
          updatedRelacionado
        })
      // Solicitud.save();
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "Error interno. Inténtatlo más tarde.",
    });
  }
}

export async function getRelacionadoBySucursal(req, res) {
  const { admsuc_numid } = req.params;
  const relacionados = await Relacionado.findAll({
    attributes: [
      "admrel_numid",
      "admrel_nombre",
      "admrel_nombre2",
      "admrel_apellidos",
      "admrel_apellidos2",
      "admrel_apodo",
      "admrel_sexo",
    ],
    where: {admsuc_numid}
  });
  res.json({relacionados})
}