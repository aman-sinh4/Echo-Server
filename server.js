const app = require("./index");
const mongoose = require("mongoose");
// vymlTblCNPpdJIVg
// aman
async function intializeDbConnection() {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB CONNECTED!!!!");
  } catch (err) {
    console.log("DB CONNECTION ERROR: ", err);
  }
}

intializeDbConnection();

app.get("/", (req, res) => {
  res.json("Express server running");
});

const port = process.env.PORT | 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
