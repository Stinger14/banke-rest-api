import Sequelize from 'sequelize';
const { sequelize } = require('../../database/db_sequelize');

const Solicitud = require('../pre/epresolm')

const Relacionado = sequelize.define("xadmrelm", {
    admrel_numid: { type: Sequelize.INTEGER, primaryKey: true},
    admrel_clase: {type: Sequelize.CHAR(1)},
    admtid_numid: { type: Sequelize.INTEGER},
    admrel_codi: { type: Sequelize.INTEGER},
    admide_numero: { type: Sequelize.INTEGER },
    admrel_nombre: { type: Sequelize.INTEGER },
    admrel_nombre2: { type: Sequelize.STRING},
    admrel_apellidos: { type: Sequelize.STRING},
    admrel_apellidos2: { type: Sequelize.STRING},
    admrel_apodo: { type: Sequelize.STRING},
    admrel_sexo: { type: Sequelize.CHAR(1)},
    admsts_codi: { type: Sequelize.INTEGER},
}, {
    timestamps: false,
    freezeTableName: true
});

export default Relacionado;