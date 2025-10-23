import mg from 'mongoose';

const patientSchema = mg.Schema(
{
    name:
    {
        type: String,
        required: true
    },
    age:
    {
        type: Number,
        required: true
    },
    phoneNo:
    {
        type: Number,
        unique: true,
        required: true
    },
    gender:
    {
        type: String,
        enum: ['Male','Female','Other'],
        required: true
    },
    bloodGroup:
    {
        type: String,
        enum: ['A+','A-','B+','B-','O+','O-','AB+','AB-'],
        required: true
    },
    address:
    {
        type: String,
        required: true
    }
}, {timestamps: true});

const medRecSchema = mg.Schema(
{
    patientID:
    {
        type: [patientSchema]
    },
    handlingDoctors:
    {
        type: [mg.Schema.Types.ObjectId],
        ref: 'Doctor'
    },
    concernedDept:
    {
        type: [mg.Schema.Types.ObjectId],
        ref: 'Department'
    },
    lastConsulted:
    {
        type: Date,
        required: true
    },
    nextConsult:
    {
        type: Date,
        required: true
    },
    description:
    {
        type: String
    },
    isHealthy:
    {
        type: String,
        enum: ['Yes','No'],
        default: 'No',
        required: true
    }
}, {timestamps: true});

export const medicalRecord = new mg.model('medicalRecord', medRecSchema);