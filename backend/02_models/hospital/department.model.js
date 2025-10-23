import mg from 'mongoose';

const deptSchema = mg.Schema(
{
    name:
    {
        type: String,
        required: true
    },
    hospital:
    {
        type: [mg.Schema.Types.ObjectID],
        ref: 'Hospital'
    },
    deptDoctors:
    {
        type: [mg.Schema.Types.ObjectId],
        ref: 'Doctor'
    },
    floorAssigned:
    {
        type: Number,
        required: true
    },
    availableDays:
    {
        type: String,
        enum: ['Mon','Tues','Wed','Thurs','Fri','Sat'],
        required: true
    },
}, {timestamps: true});

export const Depatment = new mg.model('Depatment',deptSchema);