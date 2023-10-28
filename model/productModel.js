import mongoose from "mongoose";

const productSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    pharmacy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Pharmacy',
        default: '653c970911295301a3f614bb'
    },
    image:{
        type:String,
    },
    price:{
        type:String,
    },
    units:{
        type: Number,
        default: 0
    }
},{timestamps: true});


const productModal = mongoose.model('product',productSchema);
export default productModal;