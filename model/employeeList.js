const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({

name:{
    type: 'string',
    required: true,
},
location:{
    type: 'string',
    required: true,
},
position:{
    type: 'string',
    required: true,
},
salary:{
    type: 'number',
    required: true,
}
})

const employeeModel = new mongoose.model("Employee", employeeSchema)

module.exports = {employeeModel};