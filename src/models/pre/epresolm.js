const Sequelize = require('sequelize');
const { sequelize } = require('../../database/db');

const Solicitud = sequelize.define("epresolm", {
    presol_numid: { type: Sequelize.INTEGER, primaryKey: true},
    admrel_numid: { type: Sequelize.INTEGER},
    admsuc_numid: { type: Sequelize.INTEGER},
    presol_numdoc: { type: Sequelize.INTEGER },
    prefre_numid: { type: Sequelize.INTEGER },
    presol_IsSegurado: { type: Sequelize.BOOLEAN },
    presol_IsSeguradoVida: { type: Sequelize.BOOLEAN },
    presol_tiempoactividad: { type: Sequelize.INTEGER },
    presol_condMorales: { type: Sequelize.BOOLEAN },
    presol_Habadm: { type: Sequelize.BOOLEAN },
    presol_manObra: { type: Sequelize.BOOLEAN },
    presol_laboriosidad: { type: Sequelize.BOOLEAN },
    presol_isAsistencia: { type: Sequelize.BOOLEAN },
    presol_InstAsistencia: { type: Sequelize.STRING(200) },
    presol_resPropiedad: { type: Sequelize.BOOLEAN },
    presol_trabaja: { type: Sequelize.BOOLEAN },
    presol_representante: { type: Sequelize.INTEGER },
    presol_asalariado: { type: Sequelize.BOOLEAN },
    presol_partBeneficio: { type: Sequelize.BOOLEAN },
    admmon_numid: { type: Sequelize.INTEGER },
    presol_montoSolicitado: { type: Sequelize.DECIMAL(12,3) },
    presol_plazo: { type: Sequelize.INTEGER },
    presol_indGracia: { type: Sequelize.SMALLINT },
    presol_tasaInt: { type: Sequelize.DECIMAL(12,3) },
    presol_tasamora: { type: Sequelize.DECIMAL(12,3)},
    presol_IsMultiple: { type: Sequelize.BOOLEAN },
    presol_IndFinanciera: { type: Sequelize.BOOLEAN },
    presol_IndCapicidadPago: { type: Sequelize.BOOLEAN },
    presol_Comentario: { type: Sequelize.STRING(1000) },
    admsts_codigo: { type: Sequelize.SMALLINT }
}, {
    timestamps: false,
    freezeTableName: true
});


export default Solicitud;
