import Sucursal from "../models/adm/xadmsucm";

export async function createSucursal(req, res) {
  // console.log(req.body);
  const {
    admcia_numid, admsuc_codigo,
    admsuc_nombre,admsts_codigo 
    } = req.body;
  try {
    let newSucursal = await Sucursal.create({
        admcia_numid,
        admsuc_nombre
    }, {
        fields: [
            'admcia_numid',
            'admsuc_nombre'
        ]
    });
    // If success
    if (newSucursal) {
      return res.json({
        message: "Sucursal creada exitosamente.",
        data: newSucursal,
      });
    }
    res.send("recibido");
  } catch (error) {
      console.log(error)
      res.status(500).json({
          message: 'Algo salió mal',
          data: error
      })
  }
}
