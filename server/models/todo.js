import { Schema, model } from 'mongoose'

const ToDo = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        detail: {
            type: String,
            required: false
        },
        done: {
            type: Boolean,
            required: true
        }
    },
    { timestamps: true }
)

export default model('ToDo', ToDo)