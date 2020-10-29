import Sequelize from 'sequelize';
import { sequelize } from '../../database/db';

const Sucursal = sequelize.define('sucursal', {
    admsuc_numid: { type: Sequelize.INTEGER, primaryKey: true},
    admcia_numid: {type: Sequelize.INTEGER},
    admsuc_codigo: { type: Sequelize.STRING},
    admsuc_nombre: { type: Sequelize.STRING},
    admsts_codigo: { type: Sequelize.INTEGER }
}, {
    timestamps: false
});

export default Relacionado;