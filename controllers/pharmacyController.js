import pharmacyModel from "../model/pharmacyModel.js";
import { isValid } from "../util/validator.js";
//REGISTER USER
export const registerPharmacy = async (req, res) => {
    const data = req.body;

    try {
        //CHECK FOR VALIDATIONS
        const error = isValid(data.email, data.password);
        if (error) {
            throw Error(error)
        }

        const isExist = await pharmacyModel.findOne({email: data.email });
        if (isExist) {
            throw Error('Account Already Exist !')
        } else {
            const result = await pharmacyModel.create(data);
            if (result) {
                res.status(200).json({ message: 'Registration Successfull' })
            }
        }

    } catch (error) {
        //console.log(error);
        res.status(401).json({message:error.message})
    }

}

//LOGIN USER
export const loginPharmacy = async (req, res) => {
    const { email, password } = req.body;

    try {
        const isExist = await pharmacyModel.findOne({ email });

        //CHECH IS ACCOUNT IS EXIST OR NOT
        if (!isExist) {
            throw Error('Email Not Exist');
        }

        //CHECK IS PASSWORD IS MATCH
        const isMatched = await isExist.isPasswordMatched(password);

        if (!isMatched) {
            throw Error('Password Not Matched');
        }
        //SEND THE TOKEN
        res.status(200).json({ message: 'Login Success', user:isExist })
    } catch (error) {
        //console.log(error);
        res.status(401).json({message:error.message});
    }
}

//GET USER
export const getUser = async (req, res) => {
    const { createdBy } = req.body;
    console.log(createdBy);
    
    
    try {
      //  const _id = getId(token);
        const isExist = await pharmacyModel.findById(createdBy);

        //CHECH IS ACCOUNT IS EXIST OR NOT
        if (!isExist) {
            throw Error('Account Not Exist');
        }

        //SEND THE TOKEN
        res.status(200).json(isExist);
    } catch (error) {
        //console.log(error);
        res.status(401).json({message:error.message});
    }
}

