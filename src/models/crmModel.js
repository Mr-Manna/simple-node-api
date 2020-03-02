import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const contactSchema = new Schema({
    name: {
        type: String,
        required: true
      },
    email: {
      type: String,
      required: true
    },
    phone:{
        type: Number
    },
    created_on:{
        type: Date,
        default: Date.now
    }
});

