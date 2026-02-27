const app = require('./src/app');
const connectDB = require('./src/db/db');
connectDB();
app.listen(5050,()=>{
    console.log("Server running in port 5050");
})