import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { handleDemo } from "./routes/demo.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function createServer() {
  const app = express();

  app.use(cors());
  app.use(express.json());

  // API routes
  app.get("/api/ping", (req, res) => {
    res.json({ status: "ok", timestamp: Date.now() });
  });

  app.get("/api/demo", handleDemo);

  // Serve static files from the dist/spa directory
  const spaPath = path.join(__dirname, "../spa");
  app.use(express.static(spaPath));

  // Handle client-side routing by serving index.html for all non-API routes
  app.get("*", (req, res) => {
    if (!req.path.startsWith("/api")) {
      res.sendFile(path.join(spaPath, "index.html"));
    } else {
      res.status(404).json({ error: "API endpoint not found" });
    }
  });

  return app;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const app = createServer();
  const port = process.env.PORT || 8080;
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}
