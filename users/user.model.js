const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    username: { type: String, unique: true, required: true },
    name: { type: String, unique: true, required: true, },
    email: { type: String, required: true, unique: true, },
    id: { type: String, required: true, },
    cpf: { type: String, required: true, unique: true },
    createdDate: { type: Date, default: Date.now, }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);
