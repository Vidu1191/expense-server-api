// config/dbConnect.js
const mongoose = require('mongoose');

const dbConnect = async () => {
    try {
        const uri = 'mongodb+srv://me:pdzsLwchJ91iS0Cj@expense-tracker.iurxdjw.mongodb.net/?retryWrites=true&w=majority';
        await mongoose.connect(uri, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log('DB connected successfully');
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
};

module.exports = dbConnect;


//pdzsLwchJ91iS0Cj

//mongodb+srv://me:<password>@expense-tracker.iurxdjw.mongodb.net/?retryWrites=true&w=majority
