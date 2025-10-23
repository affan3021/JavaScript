import mg from 'mongoose';
const categorySchema = new mg.Schema(
{
    name: 
    { type: String, required: true },
    description:
    { type: String, required: true }
});
export const Category = mg.model('Category', categorySchema);