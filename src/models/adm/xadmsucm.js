import Sequelize from 'sequelize';
import { sequelize } from '../../database/db_sequelize';

import Solicitud from '../pre/epresolm'
import Relacionado from '../adm/xadmrelm'

const Sucursal = sequelize.define("xadmsucm", {
    admsuc_numid: { type: Sequelize.INTEGER, primaryKey: true},
    admcia_numid: {type: Sequelize.INTEGER},
    admsuc_nombre: { type: Sequelize.STRING(100)}
}, {
    timestamps: false,
    freezeTableName: true
});

// Relación Sucursal-Solicitud
Sucursal.hasMany(Solicitud, { foreignKey: "admsuc_numid", sourceKey: "admsuc_numid"});
Solicitud.belongsTo(Sucursal, { foreignKey: "admsuc_numid", sourceKey: "admsuc_numid"});

// Relación Sucursal-Relacionado
// Sucursal.hasMany(Relacionado, { foreignKey: "admsuc_numid", sourceKey: "admsuc_numid"});
// Relacionado.belongsTo(Sucursal, {foreignKey: "admsuc_numid", sourceKey: "admsuc_numid"})
// Sucursal.schema("bag");

export default Sucursal;