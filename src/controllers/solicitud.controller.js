import Solicitud from "../models/pre/epresolm";
import Sucursal from '../models/adm/xadmsucm';


// Agregar característica async a las funciones
// que hagan consultas.

// Listar Solicitudes.
export async function getSolicitudes(req, res) {
  try {
    const solicitud = await Solicitud.findAll();
    res.json({
      data: solicitud,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: e,
    });
  }
}

// Crear Solicitud.
export async function createSolicitudes(req, res) {
  // console.log(req.body);
  const {
    presol_numid,
    admrel_numid,
    admsuc_numid,
    presol_numdoc,
    prefre_numid,
    presol_issegurado,
    presol_isseguradovida,
    presol_tiempoactividad,
    presol_condmorales,
    presol_habadm,
    presol_manobra,
    presol_laboriosidad,
    presol_isasistencia,
    presol_instasistencia,
    presol_respropiedad,
    presol_trabaja,
    presol_representante,
    presol_asalariado,
    presol_partbeneficio,
    admmon_numid,
    presol_montosolicitado,
    presol_plazo,
    presol_tasaint,
    presol_tasamora,
    presol_ismultiple,
    presol_indfinanciera,
    presol_indcapacidadpago,
    presol_comentario,
    admsts_numid,
  } = req.body;
  try {
    const newSolicitud = await Solicitud.create(
      {
        presol_numid,
        admrel_numid,
        admsuc_numid,
        presol_numdoc,
        prefre_numid,
        presol_issegurado,
        presol_isseguradovida,
        presol_tiempoactividad,
        presol_condmorales,
        presol_habadm,
        presol_manobra,
        presol_laboriosidad,
        presol_isasistencia,
        presol_instasistencia,
        presol_respropiedad,
        presol_trabaja,
        presol_representante,
        presol_asalariado,
        presol_partbeneficio,
        admmon_numid,
        presol_montosolicitado,
        presol_plazo,
        presol_tasaint,
        presol_tasamora,
        presol_ismultiple,
        presol_indfinanciera,
        presol_indcapacidadpago,
        presol_comentario,
        admsts_numid,
      },
      {
        fields: [
          "admsuc_nombre",
          "presol_numid",
          "admrel_numid",
          "admsuc_numid",
          "presol_numdo",
          "prefre_numid",
          "presol_issegurado",
          "presol_isseguradovida",
          "presol_tiempoactividad",
          "presol_condmorales",
          "presol_habadm",
          "presol_manobra",
          "presol_laboriosidad",
          "presol_isasistencia",
          "presol_instasistencia",
          "presol_respropiedad",
          "presol_trabaja",
          "presol_representante",
          "presol_asalariado",
          "presol_partbeneficio",
          "admmon_numid",
          "presol_montosolicitado",
          "presol_plazo",
          "presol_tasaint",
          "presol_tasamora",
          "presol_ismultiple",
          "presol_indfinanciera",
          "presol_indcapacidadpago",
          "presol_comentario",
          "admsts_numid",
        ],
      }
    );
    // If success
    if (newSolicitud) {
      return res.json({
        message: "Solicitud creada exitosamente.",
        data: newSolicitud,
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

// Listar Solicitudes.
export async function getSolicitud(req, res) {
  try {
    const { presol_numid } = req.params;
    const solicitud = await Solicitud.findOne({
      where: {
        presol_numid,
      },
    });
    res.json({
      data: solicitud,
    });
  } catch (e) {
    console.log(e);
  }
}

// Eliminar Solicitud.
export async function deleteSolicitud(req, res) {
  try {
    const { presol_numid } = req.params;
    // delete Solicitud.
    const deleteRowCount = await Solicitud.destroy({
      where: {
        presol_numid,
      }
    });
    res.json({
      message: "Solicitud eliminada.",
      count: deleteRowCount,
    });
  } catch (e) {
    res.status(500).json({
      message: "Algo salió mal",
    });
  }
}

// Actualizar Solicitud.
export async function updateSolicitud(req, res) {
  try {
    const { presol_numid } = req.params;
    const {
      admrel_numid,
      admsuc_numid,
      presol_issegurado,
      presol_isseguradovida,
      presol_tiempoactividad,
      prefre_numid,
      presol_manobra,
      presol_laboriosidad,
      presol_trabaja,
      presol_representante,
      presol_asalariado,
      admmon_numid,
      presol_plazo,
      presol_tasamora,
      admsts_numid,
      presol_indgracia,
      presol_indfinanciera,
      presol_comentario
    } = req.body;

    const solicitud = await Solicitud.findOne({
      attributes: [
        "presol_numid",
        "admrel_numid", 
        "admsuc_numid", 
        "presol_tiempoactividad",
        "prefre_numid", 
        "presol_issegurado",
        "presol_isseguradovida",
        "presol_manobra",
        "presol_laboriosidad",
        "presol_trabaja",
        "presol_representante",
        "presol_asalariado",
        "admmon_numid",
        "presol_plazo",
        "presol_tasamora",
        "presol_indgracia",
        "presol_indfinanciera",
        "presol_comentario",
        "admsts_numid"
      ],
      where: {presol_numid},
    });

    const updatedSolicitud = await Solicitud.update({
      presol_numid,
      admrel_numid,
      admsuc_numid,
      presol_issegurado,
      presol_isseguradovida,
      presol_tiempoactividad,
      prefre_numid,
      presol_manobra,
      presol_laboriosidad,
      presol_trabaja,
      presol_representante,
      presol_asalariado,
      admmon_numid,
      presol_plazo,
      presol_tasamora,
      presol_indgracia,
      presol_indfinanciera,
      presol_comentario,
      admsts_numid},
      {
        where: {presol_numid}
      });
        res.json({
          message: "Solicitud actualizada.",
          updatedSolicitud
        })
      // Solicitud.save();
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "Error interno. Inténtatlo más tarde.",
    });
  }
}

export async function getSolicitudBySucursal(req, res) {
  const { admsuc_numid } = req.params;
  const solicitudes = await Solicitud.findAll({
    attributes: [
          "presol_numid",
          "admrel_numid",
          "admsuc_numid",
          "presol_numdoc",
          "prefre_numid",
          "presol_issegurado",
          "presol_isseguradovida",
          "presol_tiempoactividad",
          "presol_condmorales",
          "presol_habadm",
          "presol_manobra",
          "presol_laboriosidad",
          "presol_isasistencia",
          "presol_instasistencia",
          "presol_respropiedad",
          "presol_trabaja",
          "presol_representante",
          "presol_asalariado",
          "presol_partbeneficio",
          "admmon_numid",
          "presol_montosolicitado",
          "presol_plazo",
          "presol_tasaint",
          "presol_tasamora",
          "presol_ismultiple",
          "presol_indfinanciera",
          "presol_indcapacidadpa",
          "presol_comentario",
          "admsts_numid"
    ],
    where: {admsuc_numid}
  });
  res.json({solicitudes})
}