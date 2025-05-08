const express = require("express");
const app = express();
const port = 4000;
const postsRouter = require("./routers/postsRouter.js");
const errorHandler = require("./middlewares/errorHandler.js");
const pageNotFound = require("./middlewares/pageNotFound.js");


app.use(express.static("./public"));
app.use(express.json());

// Post Routers 
app.use("/posts", postsRouter);


//Error Handler
app.use(errorHandler);

// Page not Found Error 
app.use(pageNotFound);
//Starting Live Server
app.listen(port, ()=>{
	console.log(`Server Live nella Porta ${port}`);
});
