import mongoose from "npm:mongoose"

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
})

export default mongoose.model("Todo", todoSchema)