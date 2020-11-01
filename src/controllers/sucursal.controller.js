import Sucursal from "../models/adm/xadmsucm";

// Agregar característica async a las funciones
// que hagan consultas.

// Listar sucursales.
export async function getSucursales(req, res) {
  try {
    const sucursales = await Sucursal.findAll();
    res.json({
      data: sucursales,
    });
  } catch (e) {
    res.status(500).json({
      message: e,
    });
  }
}

// Crear sucursal.
export async function createSucursales(req, res) {
  // console.log(req.body);
  const {
    admcia_numid,
    admsuc_codigo,
    admsuc_nombre,
    admsts_codigo,
  } = req.body;
  try {
    let newSucursal = await Sucursal.create(
      {
        admcia_numid,
        admsuc_nombre,
      },
      {
        fields: ["admcia_numid", "admsuc_nombre"],
      }
    );
    // If success
    if (newSucursal) {
      return res.json({
        message: "Sucursal creada exitosamente.",
        data: newSucursal,
      });
    }
    res.send("recibido");
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Algo salió mal",
      data: error,
    });
  }
}

// Listar sucursales.
export async function getSucursal(req, res) {
  try {
    const { admsuc_numid } = req.params;
    const sucursal = await Sucursal.findOne({
      where: {
        admsuc_numid,
      },
    });
    res.json({
      data: sucursal,
    });
  } catch (e) {
    console.log(e);
  }
}

// Eliminar sucursal.
export async function deleteSucursal(req, res) {
  try {
    const { admsuc_numid } = req.params;
    // delete sucursal.
    const deleteRowCount = await Sucursal.destroy({
      where: {
        admsuc_numid,
      },
    });
    res.json({
      message: "Sucursal eliminada.",
      count: deleteRowCount,
    });
  } catch (e) {
    res.status(500).json({
      message: "Algo salió mal",
    });
  }
}

// Actualizar sucursal.
export async function updateSucursal(req, res) {
  try {
    const { admsuc_numid } = req.params;
    const { admcia_numid, admsuc_nombre } = req.body;

    let sucursal = await Sucursal.findAll({
      attributes: ["admsuc_numid", "admcia_numid", "admsuc_nombre"],
      where: {
        adm_numid,
      }
    });
    if (sucursal.length > 0) {
        sucursal.forEach(async sucursal => {
            sucursal.update({
                    admcia_numid,
                    admsuc_nombre
            });
        });
        sucursal.save();
    }
  } catch (e) {
    res.status(500).json({
      message: "Error interno. Inténtatlo más tarde.",
    });
  }
}
