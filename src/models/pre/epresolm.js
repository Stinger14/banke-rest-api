const Sequelize = require('sequelize');
const { sequelize } = require('../../database/db2');

const Solicitud = sequelize.define("epresolm", {
    presol_numid: { type: Sequelize.INTEGER, primaryKey: true},
    admrel_numid: { type: Sequelize.INTEGER},
    admsuc_numid: { type: Sequelize.INTEGER},
    presol_numdoc: { type: Sequelize.INTEGER },
    prefre_numid: { type: Sequelize.INTEGER },
    presol_fecha: {type: Sequelize.DATE},
    presol_issegurado: { type: Sequelize.BOOLEAN },
    presol_isseguradovida: { type: Sequelize.BOOLEAN },
    presol_tiempoactividad: { type: Sequelize.INTEGER },
    presol_condmorales: { type: Sequelize.BOOLEAN },
    presol_habadm: { type: Sequelize.BOOLEAN },
    presol_manobra: { type: Sequelize.BOOLEAN },
    presol_laboriosidad: { type: Sequelize.BOOLEAN },
    presol_isasistencia: { type: Sequelize.BOOLEAN },
    presol_instasistencia: { type: Sequelize.STRING(200) },
    presol_respropiedad: { type: Sequelize.BOOLEAN },
    presol_trabaja: { type: Sequelize.BOOLEAN },
    presol_representante: { type: Sequelize.INTEGER },
    presol_asalariado: { type: Sequelize.BOOLEAN },
    presol_partbeneficio: { type: Sequelize.BOOLEAN },
    admmon_numid: { type: Sequelize.INTEGER },
    presol_montosolicitado: { type: Sequelize.DECIMAL(12,3) },
    presol_plazo: {type: Sequelize.INTEGER},
    presol_tasaint: { type: Sequelize.DECIMAL(12,3) },
    presol_indgracia: {type: Sequelize.SMALLINT},
    presol_tasamora: { type: Sequelize.DECIMAL(12,3)},
    presol_ismultiple: { type: Sequelize.BOOLEAN },
    presol_indfinanciera: { type: Sequelize.BOOLEAN },
    presol_indcapacidadpa: { type: Sequelize.BOOLEAN },
    presol_comentario: { type: Sequelize.STRING(1000) },
    admsts_numid: { type: Sequelize.SMALLINT }
}, {
    timestamps: false,
    freezeTableName: true
});

export default Solicitud;
