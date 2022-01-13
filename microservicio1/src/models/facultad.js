const {Schema, model} = require('mongoose');

const facultadSchema = new Schema({
  nombre:{
    type: String
  },
  descripcion:{
    type: String
  },
  email:{
    type: String
  },
  password:{
    type: String
  }
});

facultadSchema.methods.toJSON = function(){
  let facultad = this.toObject();
  delete facultad.password;
  return facultad;
};

module.exports = model('Facultad',facultadSchema);