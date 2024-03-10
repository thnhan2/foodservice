const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: {
        en: {
            type: String,
            required: true
        },
        vn: {
            type: String,
            required: false
        }
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    active: {
        type: Boolean,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        en: {
            type: String,
            required: true
        },
        vn: {
            type: String,
            required: false
        },
    },
    unit: {
        en: {
            type: String,
            required: true
        },
        vn: {
            type: String,
            required: false
        },
    },
    imageUrl: {
        type: String,
        default: '',
        required: false
    }   
}, {timestamps: true});

const Item = mongoose.model('Item', ItemSchema);
module.exports = Item;