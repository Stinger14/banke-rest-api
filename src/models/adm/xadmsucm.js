import Sequelize from 'sequelize';
import { sequelize } from '../../database/db2';

import Solicitud from '../pre/epresolm'

const Sucursal = sequelize.define("xadmsucm", {
    admsuc_numid: { type: Sequelize.INTEGER, primaryKey: true},
    admcia_numid: {type: Sequelize.INTEGER},
    admsuc_nombre: { type: Sequelize.STRING(100)}
}, {
    timestamps: false,
    freezeTableName: true
});

Sucursal.hasMany(Solicitud, { foreignKey: "admsuc_numid", sourceKey: "admsuc_numid"});
Solicitud.belongsTo(Sucursal, { foreignKey: "admsuc_numid", sourceKey: "admsuc_numid"});

// Sucursal.schema("bag");

export default Sucursal;