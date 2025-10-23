import mg from 'mongoose'
let minAge;
let maxAge;
const productSchema = new mg.Schema(
{
    name: 
    {type: String, required: true},
    description:
    {
        type: String,
        required: true
    },
    productImage:
    {
        type: String
    },
    category: 
    {
        type: mg.Schema.Types.OrderID, ref: 'Category'
    },
    stock:
    {
        type: Number,
        default: 0,
        required: true
    },
    sellerName:
    {
        type: String,
        required: true
    },
    price:
    {
        type: Number,
        default: 0,
        required: true
    },
    sellerName:
    {
        type: String,
        default: 'Unlisted',
        required: true
    },
    manfDate: 
    {
        type: Date,
        required: true
    },
    expiryDate:
    {
        type: Date
    },
    CountryOfOrigin:
    {
        type: String,
        required: true
    },
    BrandName:
    {
        type: String,
        required: true
    }
}, {timestamps: true});

export const Products = mg.model('Products', productSchema);