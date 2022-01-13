const {Schema, model} = require('mongoose');

const actividadSchema = new Schema({
  titulo:{
    type: String
  },
  descripcion:{
    type: String
  },
  fechaRegistro:{
    type: Date,
    default: Date.now()
  },
  fechaLimite:{
    type: Date
  },
  cupos:{
    type: Number
  },
  _facultad:{
    type: Schema.Types.ObjectId,
    ref: 'Facultad'
  },
  estudiantes:[{
    type: Schema.Types.ObjectId,
    ref: 'Estudiante'
  }],
  estado:{
    type: Boolean,
    default: true
  }
});


module.exports = model('Actividad',actividadSchema);