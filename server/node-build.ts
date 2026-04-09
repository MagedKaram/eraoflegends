import { createServer } from "./index.js";

const app = createServer();
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
  console.log(`📦 Serving SPA from dist/spa`);
  console.log(`🔗 API endpoints available at /api/*`);
});
