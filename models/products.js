import mongoose, {Schema, model, models} from "mongoose"

const ProductSchema=new Schema({
    title:{type:String,require:true},
    price:{type:Number,require:true},
    description:String,
    images: [{type:String}],
    category: {type:mongoose.Types.ObjectId, ref:'Category'},
    productProperties:{type:Object}
})
export const Product=models.Product||model("Product",ProductSchema)