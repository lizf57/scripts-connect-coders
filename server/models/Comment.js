const { Schema, model } = require('mongoose')

const commentSchema = new Schema ({
    commentId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    commentBody: {
        type: String,
        required: true,
        maxlength: 255
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (date) => {
            if (date) return date.toISOString().split("T")[0]
        }
    }
}, {
    toJSON: {
        getters: true
    },
    id: false,
    timestamps: true
})



module.exports = commentSchema