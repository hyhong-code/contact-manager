const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect to DB
connectDB();

app.get("/", (req, res) => {
  res.json({ msg: "WELCOME!" });
});

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));
app.use("/api/users", require("./routes/users"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server up on port ${PORT}...`));
