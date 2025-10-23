import mg from 'mongoose';
const orderItemSchema = new mg.Schema(
{
    prodID: 
    {
        type: mg.Schema.Types.ObjectId,
        ref: 'Products'
    },
    quantity:
    {
        type: Number,
        default: 0,
        required: true
    }
});

const orderSchema = new mg.Schema(
{
    totalPrice: 
    {
        type: Number,
        required: true,
        default: 0
    },
    customer:
    {
        type: mg.Schema.Types.ObjectId,
        ref: 'Users'
    },
    orderItems:
    {
        type: 
        [orderItemSchema]
    },
    address:
    {
        type: String,
        required: true
    },
    deliveryStatus:
    {
        type: String,
        enum: ['Pending','Shipped','Dispatched','Delivered'],
        default: 'Pending',
        required: true
    }
});

export const Orders = mg.model('Orders', orderSchema);