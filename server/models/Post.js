const { Schema, model } = require('mongoose')
const commentSchema = require('./Comment')

const postSchema = new Schema({
    body: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255
    },
    profile: {
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (date) => {
            if (date) return date.toISOString().split("T")[0]
        }
    },
    likedBy: [{
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    }],
    dislikedBy: [{
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    }],
    comments: [commentSchema]
}, {
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false,
    timestamps: true
})

postSchema.virtual('commentCount').get(function() {
    return this.comments.length
})

const Post = model('Post', postSchema)

module.exports = Post