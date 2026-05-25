import express from "express";
const app = express();
const PORT = 3000;

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
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
