import Sequelize from 'sequelize';
import { sequelize } from '../../database/db2';

const Solicitud = require('../pre/epresolm')

const Relacionado = sequelize.define("xadmrelm", {
    admrel_numid: { type: Sequelize.INTEGER, primaryKey: true},
    admrel_clase: {type: Sequelize.CHAR(1)},
    admtid_numid: { type: Sequelize.INTEGER},
    admrel_codigo: { type: Sequelize.INTEGER},
    admide_numero: { type: Sequelize.INTEGER },
    admrel_nombre: { type: Sequelize.INTEGER },
    admrel_nombre2: { type: Sequelize.STRING},
    admrel_Apellidos: { type: Sequelize.STRING},
    admrel_Apellidos2: { type: Sequelize.STRING},
    admrel_apodo: { type: Sequelize.STRING},
    admrel_Sexo: { type: Sequelize.CHAR(1)},
    admsts_codigo: { type: Sequelize.INTEGER},
}, {
    timestamps: false,
    freezeTableName: true
});

export default Relacionado;