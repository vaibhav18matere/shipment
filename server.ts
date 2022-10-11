import app from "./src/app";
import connectDatabase from "./config/database";

connectDatabase();
app.listen(3000, () => {
  console.log("app running at PORT 3000");
});
