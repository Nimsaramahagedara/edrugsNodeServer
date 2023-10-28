import pharmacyModel from "../model/pharmacyModel.js";
import productModal from "../model/productModel.js";

//ADD PRODUCT
export const addProduct = async (req, res) => {
    const data = req.body;

    try {
        //CHECK IF PHARMACY EXIST
        const isExist = await pharmacyModel.findById(data.pharmacy)
        if (!isExist) {
            throw Error('That pharmacy not exist !')
        } else {
            const result = await productModal.create(data);
            if (result) {
                res.status(200).json({ message: 'Prodcuct Added Successfully' })
            }
        }

    } catch (error) {
        //console.log(error);
        res.status(401).json({message:error.message})
    }

}

//READ PRODCUT
export const getProduct = async (req, res) => {
    const {id} = req.params;

    try {
        //CHECK IF PRODUCT EXISR
        const isExist = await productModal.findById(id);
        if (!isExist) {
            throw Error('That Product not exist !')
        } else {
                res.status(200).json(isExist);
        }

    } catch (error) {
        //console.log(error);
        res.status(401).json({message:error.message})
    }

}

//DELETE PRODCUT
export const deleteProduct = async (req, res) => {
    const {id} = req.params;

    try {
        //CHECK IF PRODUCT EXISR
        const isExist = await productModal.findById(id);
        if (!isExist) {
            throw Error('That Product not exist !')
        } else {
                const result = await productModal.findByIdAndDelete(id);
                res.status(200).json({message:'Deleted Success',result});
        }

    } catch (error) {
        //console.log(error);
        res.status(401).json({message:error.message})
    }

}
//GET ALL PRODCUTS
export const getAllProducts = async (req, res) => {

    try {
    
            const result = await productModal.find();
            if(!result){
                throw Error('No Products Available');
            }
            res.status(200).json(result);

    } catch (error) {
        //console.log(error);
        res.status(401).json({message:error.message})
    }
}

//GET ALL PRODCUT BELONGS TO PHARMACY
export const getAllProduct = async (req, res) => {
    const {pharmacy} = req.body;

    try {
        //CHECK IF PRODUCT EXISR
        const isExist = await pharmacyModel.findById(id);
        if (!isExist) {
            throw Error('That Pharmacy not exist !')
        } else {
            const result = await productModal.find({pharmacy});
            if(!result){
                throw Error('No Products Available');
            }
            res.status(200).json(result);
        }

    } catch (error) {
        //console.log(error);
        res.status(401).json({message:error.message})
    }

}
//GET ALL PRODCUT BELONGS TO Serach KeyWord
export const searchProduct = async (req, res) => {
    const { keyword } = req.params;
  
    try {
      const results = await productModal.find({
        // Use a regular expression to perform a case-insensitive search on product names or descriptions
        $or: [
          { name: { $regex: new RegExp(keyword, 'i') } },
          { description: { $regex: new RegExp(keyword, 'i') } },
        ],
      });
  
      if (results.length === 0) {
        throw new Error('No matching products found');
      }
  
      res.status(200).json(results);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };