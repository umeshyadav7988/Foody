// const mongoose = require("mongoose");

// const DB = 'mongodb://localhost:27017/foodymern';

// //Mongoose allows query filters to match multiple properties, 
// //even if they're not explicitly defined in the schema.
// mongoose.set('strictQuery', false)

// const connectDB = async () => {
//   try {
//     await mongoose.connect(DB, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     });
//     console.log("MongoDB connected successfully");
//     // const fetched_data=await mongoose.connection.db.collection("food_items");
//     // fetched_data.find({}).toArray(function(err,data){
//     // if(err)console.log(err);
//     // else{
//     //     console.log(data);
//     //   }
//     // })
//     const { MongoClient } = require('mongodb');
//     const mongoose1 = new MongoClient(DB, { useNewUrlParser: true, useUnifiedTopology: true });
//     const database = mongoose1.db('foodymern')
//     const myc = database.collection('food_items')
//     const nyc = database.collection('foodCategory')

//     // Querying data from the collection
//     const cursor = myc.find({});
//     const aursor = nyc.find({});

//     // Iterating over the results
//     await cursor.forEach(document => {

//       const foodCategory= mongoose.connection.db.collection("foodCategory");
//       cursor.forEach(catData => {
//         global.food_items=document;
//         global.foodCategory=catData;
//       });

//     });
  
//   } catch (error) {
//     console.error("MongoDB connection error:", error.message);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;


const mongoose = require('mongoose');
const mongoURL = 'mongodb://localhost:27017/foodymern';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURL, { useNewUrlParser: true });
        console.log("Connected to MongoDB");

        const fetched_data = await mongoose.connection.db.collection("food_items").find({}).toArray();
        const catData = await mongoose.connection.db.collection("foodCategory").find({}).toArray();

        global.food_items = fetched_data;
        global.foodCategory = catData;
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
        process.exit(1);
    }
}
module.exports = mongoDB;
