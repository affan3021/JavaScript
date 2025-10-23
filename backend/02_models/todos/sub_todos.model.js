import mg from 'mongoose';
const subTodosSchema = new mg.Schema(
{
    content:
    {
        type: String,
        required: true
    }
    completionStatus:
    {
        type: Boolean,
        default: false,
        required: true
    },
    createdAt:
    {
        type: Date,
    },
    updatedAt:
    {
        type: Date,
    },
    completedAt:
    {
        type: Date
    },
    createdBy:
    {
        type: mg.Schema.Types.ObjectId, ref: 'User'
    }
}, { timestamps: true });
export const subTodos = mg.model('subTodos', subTodosSchema);