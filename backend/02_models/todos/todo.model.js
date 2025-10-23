import mongoose from 'mongoose';
import mg from 'mongoose'
const todoSchema = new mg.Schema(
{
    title:
    {
        type: String,
        required: true,
        default: 'Untitled'
    },
    createdBy:
    {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    completionStatus:
    {
        type: Boolean,
        default: false
    },
    subTodos:
    [
        {
            type: mg.Schema.Types.ObjectId, ref: 'subTodos'
        }
        // Array of sub todos
    ]
}, {timestamps: true});

export const todo = mg.model('Todo',todoSchema);

/* Note:
1. The ref name must be same as that inside the export statment
2. It is a better practice to keep the export var name and the DB name same, while it is acceptable to keep them differently
*/