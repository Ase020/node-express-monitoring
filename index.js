import express from 'express';
import client from 'prom-client'

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());

client.collectDefaultMetrics({ timeout: 5000 });

app.get('/', (req, res) => {
  res.send('NodeJS Monitoring in Kubernetes using Prometheus and Grafana!');
})

app.get('/metrics', async  (req, res) => {
    res.set('Content-Type', client.register.contentType);
    res.end(await client.register.metrics());
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})