import mongoose from "mongoose";
import bcrypt from 'bcrypt';
const pharmacySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    location:{
        type: String
    },
    mobile:{
        type:String
    }

})

//Encrypt the password before saving the document
pharmacySchema.pre("save", async function (next){
    if(!this.isModified('password')){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
});

//Password compare method
pharmacySchema.methods.isPasswordMatched = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
}
const pharmacyModel = mongoose.model('Pharmacy', pharmacySchema);
export default pharmacyModel;