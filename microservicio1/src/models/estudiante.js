const {Schema, model} = require('mongoose');

const estudianteSchema = new Schema({
  nombre:{
    type: String
  },
  apellido:{
    type: String
  },
  _facultad:{
    type: Schema.Types.ObjectId,
    ref:'Facultad'
  },
  email:{
    type: String
  },
  password:{
    type: String
  }
});

estudianteSchema.methods.toJSON = function(){
  let estudiante = this.toObject();
  delete estudiante.password;
  return estudiante;
};

module.exports = model('Estudiante',estudianteSchema);