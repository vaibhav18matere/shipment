import app from "./src/app";
import connectDatabase from "./config/database";

connectDatabase();
app.listen(3000, () => {
  console.log("The App Is Running At PORT 3000");
});
