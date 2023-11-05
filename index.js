const {default: axios} = require("axios");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
app.use(bodyParser.json());

app.get("", async (req, res) => {
	res.send(`Server is working`);
});

app.get("/products", async (req, res) => {
	const {
		data: {products},
	} = await axios.get("https://dummyjson.com/products");
	res.send(products);
});

app.get("/product", async (req, res) => {
	const id = req.query.id;
	const {data} = await axios.get(`https://dummyjson.com/products/${id}`);
	res.send(data);
});

app.post("/product", async (req, res) => {
	const body = req.body;
	const {data} = await axios.post("https://dummyjson.com/products/add", body);
	res.send({msg: `Product created successfully with id `, data});
});

app.listen(2000, () => {
	console.log(`Server Started successfully`);
});
