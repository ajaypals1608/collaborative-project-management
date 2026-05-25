import express from "express";
import healthRoutes from "./routes/healthRoutes.js";
const app = express();
const PORT = 3000;

app.use(express.json());
app.use((req, res, next) => {
	console.log(`${req.method} ${req.url}`);
	next();
});

/* app.post("/test", (req, res) => {
	console.log(req.body);
	res.json({
		receivedData: req.body,
	});
}); */

app.use("/health", healthRoutes);
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
