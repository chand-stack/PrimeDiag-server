const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config();
const port = 5000;

// diagnostic
// KqphM5Xg0YhfYSeC

// "mongodb://diagnostic:KqphM5Xg0YhfYSeC@ac-wlwgtvd-shard-00-00.svtmaib.mongodb.net:27017,ac-wlwgtvd-shard-00-01.svtmaib.mongodb.net:27017,ac-wlwgtvd-shard-00-02.svtmaib.mongodb.net:27017/diagnostic-server?ssl=true&replicaSet=atlas-7847a9-shard-0&authSource=admin&retryWrites=true&w=majority"

const main = async () => {
  try {
    mongoose.connect(process.env.DB_URI);
    console.log(`
      ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓    
      ┃       DATABASE CONNECTED 🎉     ┃        
      ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
      `);

    app.listen(port, () => {
      console.log(`🏃‍♂️ App Running On:  ${port}`);
    });
  } catch (error) {
    console.log("⚠️ Connection Error: ", error);
  }
};

main();
