//import mongoose
import mongoose from 'mongoose';

//create a mongoDB schema
const schema = mongoose.Schema;

//export the schema
export const UserSchema = new schema({
    name:{
        type: String,
        require : 'Please enter a name.'
    },

    class: {
        type: String,
        require: 'Please enter a class.'
    },

    admin:{
        type: Boolean,
        require: 'Please enter a status.'
    },
});