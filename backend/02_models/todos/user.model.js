import mg from 'mongoose'
const userSchema = new mg.Schema(
{
    username: 
    {
        type: String, 
        required: true, 
        unique: true,
        lowercase: true
    },
    email:
    {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password:
    {
        type: String,
        required: 
        [ 
            true,'Password is necessary to proceed further' 
        ]
    }
});
export const User = mg.model('User',userSchema);

// Note: in MongoDB, all the DBs are stored in lowercases and as plural immaterial of the name given
// eg User -> stored as users