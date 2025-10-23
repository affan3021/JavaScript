import mg from 'mongoose';

const hospitalSchema = mg.Schema(
{
    name:
    {
        type: String,
        required: true
    },
    address:
    {
        type: String,
        required: true
    },
    noOfDocs:
    {
        type: Number,
        default: 0,
        required: true
    },
    isICU:
    {
        type: String,
        enum: ['Available','Not Available'],
        default: 'Not Available'
    },
    wardCount:
    {
        type: Number,
        default: 1,
        required: true
    },
    perDayWardFee:
    {
        type: Number,
        default: 2000,
        required: true
    },
    doctors:
    {
        type: [mg.Schema.Types.ObjectID],
        ref: 'Doctor'
    },
    specialityIn:
    {
        type: String,
        required: true
    },
    departments:
    {
        type: [mg.Schema.Types.ObjectID],
        ref: 'Department'
    }
} ,{timestamps: true})

export const Hospital = new mg.model('Hospital', hospitalSchema);