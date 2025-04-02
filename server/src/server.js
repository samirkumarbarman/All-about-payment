import app from "./app.js";

const PORT = process.env.PORT || 3040;

app.listen(PORT, ()=>{
    console.log(`The server is listening at:${PORT}`)
});