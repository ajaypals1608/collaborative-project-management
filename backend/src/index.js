import express from "express";
const app = express();
const PORT = 3000;

app.use(express.json());
app.use((req, res, next) => {
	console.log(`${req.method} ${req.url}`);
	next();
});

app.get("/health", (req, res) => {
	console.log("Health endpoint hit");
	res.json({
		status: "ok",
		message: "server running",
	});
});

app.get("/", (req, res) => {
	res.send("Welcome to collaborative PM backend");
});

app.get("/users/:id", (req, res) => {
	res.json({
		userId: req.params.id,
	});
});

app.post("/test", (req, res) => {
	console.log(req.body);
	res.json({
		receivedData: req.body,
	});
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
