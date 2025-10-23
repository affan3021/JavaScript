import mg from 'mongoose';

const doctorSchema = mg.Schema(
{
    name:
    {
        type: String,
        required: true
    },
    age:
    {
        type: Number,
        default: 23,
        required: true
    },
    phoneNo:
    {
        type: Number,
        unique: true,
        required: true
    },
    emailID:
    {
        type: String,
        lowercase: true,
        unique: true,
        required: true
    },
    qualifications:
    {
        type: [String],
        required: true
    },
    gender:
    {
        type: String,
        enum: ['Male','Female','Other'],
        required: true
    },
    address:
    {
        type: String,
        required: true
    },
    specialisation:
    {
        type: mg.Schema.Types.ObjectId,
        ref: 'Department'
    }
}, {timestamps: true});

export const Doctor = new mg.model('Doctor',doctorSchema);