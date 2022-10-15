import mongoose from 'mongoose';

//import the student schema from restMode.js file
import { UserSchema } from '../model/restModel.js';

//pass student object to create a new student in the database
//using the model from our schema
const User = mongoose.model('User', UserSchema);


//export a function called addStudent
export const addUser = (req, res) => {

    //create new student with the data coming from the request body
    let newUser = new User(req.body);

    newUser.save((err, user) => {

        //send error message if a required field is missing
        if (err) {
            res.send(err);
        }

        //else pass the student information as a json object
        res.json(user)
    });
}


//export a function called getStudents
export const getUsers = (req, res) => {

    //find students in the databse
    User.find({}, (err, user) => {

        //send error message if not found
        if (err) {
            res.send(err);
        }

        //else pass the students
        res.json(user);
    });

}


//export a function called getStudentByID
export const getUserByID = (req, res) => {

    //find a specific student by ID
    User.findById(req.params.userID, (err, user) => {

        //send error message if not found
        if (err) {
            res.send(err);
        }

        //else pass the student
        res.json(user);
    });

}


//export a function called updateStudentByID
export const updateUserByID = (req, res) => {

    //find a specific student by ID and update
    User.findOneAndUpdate({ _id: req.params.userID },

        req.body,

        //tell mongoDB to return the new updated object
        { new: true },

        (err, user) => {

            //send error message if student can not be updated
            if (err) {
                res.send(err);
            }

            //else pass the student
            res.json(user);
        });
}


//export a function called deleteStudentByID
export const deleteUserByID = (req, res) => {

    //find a specific student by ID and remove it
    User.remove({ _id: req.params.userID },

        (err, user) => {

            //send error message if student can't be deleted
            if (err) {
                res.send(err);
            }

            //if student was deleted, pass a message
            res.json({ message: "The user was deleted." });
        });
    }


