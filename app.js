const express = require('express')
const os = require('os')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Cloud DevSceOps Monitoring App - Muhammad Mubashar Karamat Ali</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', sans-serif; background: #0f172a; color: #e2e8f0; }

        header {
          background: linear-gradient(135deg, #1e293b, #0f172a);
          padding: 28px 40px;
          border-bottom: 2px solid #3b82f6;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .header-left h1 { color: #3b82f6; font-size: 26px; }
        .header-left p  { color: #94a3b8; font-size: 13px; margin-top: 6px; }
        .header-right {
          text-align: right;
          background: #0f172a;
          border: 1px solid #3b82f6;
          border-radius: 10px;
          padding: 12px 20px;
        }
        .header-right .dev-name {
          color: #3b82f6;
          font-size: 16px;
          font-weight: bold;
        }
        .header-right .dev-title {
          color: #94a3b8;
          font-size: 12px;
          margin-top: 4px;
        }
        .header-right .dev-stack {
          color: #64748b;
          font-size: 11px;
          margin-top: 4px;
        }

        .badge {
          display: inline-block;
          background: #22c55e22;
          color: #22c55e;
          border: 1px solid #22c55e;
          padding: 3px 12px;
          border-radius: 20px;
          font-size: 12px;
          margin-top: 6px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          padding: 36px 40px;
        }
        .card {
          background: #1e293b;
          border-radius: 12px;
          padding: 24px;
          border-left: 4px solid #3b82f6;
          transition: transform 0.2s;
        }
        .card:hover { transform: translateY(-3px); }
        .card h3 {
          color: #94a3b8;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .card .value {
          font-size: 26px;
          font-weight: bold;
          color: #f1f5f9;
          margin: 10px 0 4px;
        }
        .card .sub { font-size: 12px; color: #64748b; }

        .about {
          margin: 0 40px 30px;
          background: #1e293b;
          border-radius: 12px;
          padding: 24px 30px;
          border-left: 4px solid #a855f7;
        }
        .about h2 { color: #a855f7; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 14px; }
        .about .skills {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .skill-tag {
          background: #0f172a;
          color: #94a3b8;
          border: 1px solid #334155;
          padding: 5px 14px;
          border-radius: 20px;
          font-size: 12px;
        }

        footer {
          text-align: center;
          padding: 20px;
          color: #475569;
          font-size: 12px;
          border-top: 1px solid #1e293b;
        }
        footer span { color: #3b82f6; }
      </style>
    </head>
    <body>

      <header>
        <div class="header-left">
          <h1>🚀 DevOps Monitoring Dashboard</h1>
          <p>Real-time server metrics &nbsp;|&nbsp; Live infrastructure visibility</p>
          <span class="badge">● LIVE</span>
        </div>
        <div class="header-right">
          <div class="dev-name">👨‍💻 Muhammad Mubashar Karamat Ali</div>
          <div class="dev-title">Junior Cloud DevSecOps Engineer</div>
          <div class="dev-stack">AWS • Terraform • Jenkins • Docker • Kubernetes</div>
        </div>
      </header>

      <div class="grid">
        <div class="card">
          <h3>Hostname</h3>
          <div class="value">${os.hostname()}</div>
          <div class="sub">Server Identity</div>
        </div>
        <div class="card">
          <h3>Platform</h3>
          <div class="value">${os.platform()}</div>
          <div class="sub">${os.arch()} architecture</div>
        </div>
        <div class="card">
          <h3>Server Uptime</h3>
          <div class="value">${Math.floor(os.uptime() / 3600)}h ${Math.floor((os.uptime() % 3600) / 60)}m</div>
          <div class="sub">Continuously running</div>
        </div>
        <div class="card">
          <h3>Total RAM</h3>
          <div class="value">${(os.totalmem() / 1024 / 1024 / 1024).toFixed(1)} GB</div>
          <div class="sub">Free: ${(os.freemem() / 1024 / 1024 / 1024).toFixed(1)} GB</div>
        </div>
        <div class="card">
          <h3>CPU Cores</h3>
          <div class="value">${os.cpus().length}</div>
          <div class="sub">${os.cpus()[0].model.split(' ').slice(0,3).join(' ')}</div>
        </div>
        <div class="card">
          <h3>Node Version</h3>
          <div class="value">${process.version}</div>
          <div class="sub">App Port: ${PORT}</div>
        </div>
      </div>

      <div class="about">
        <h2>🛠️ Project Tech Stack</h2>
        <div class="skills">
          <span class="skill-tag">⚙️ Jenkins CI/CD</span>
          <span class="skill-tag">🐳 Docker</span>
          <span class="skill-tag">📦 Docker Hub</span>
          <span class="skill-tag">📊 Prometheus</span>
          <span class="skill-tag">🔍 Blackbox Exporter</span>
          <span class="skill-tag">📈 Grafana</span>
          <span class="skill-tag">📝 Loki</span>
          <span class="skill-tag">🔔 Slack Alerts</span>
          <span class="skill-tag">☁️ AWS EC2</span>
          <span class="skill-tag">🖥️ Node Exporter</span>
        </div>
      </div>

      <footer>
        © 2026 <span>Muhammad Mubashar Karamat Ali</span> &nbsp;|&nbsp;
        Junior DevSecOps Engineer &nbsp;|&nbsp;
        AWS • Terraform • Jenkins • Docker • Kubernetes • Ansible
      </footer>

    </body>
    </html>
  `)
})

// Health Check endpoint — Blackbox Exporter isko monitor karega
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    owner: 'Muhammad Mubashar Karamat Ali',
    uptime_seconds: Math.floor(process.uptime()),
    memory_mb: Math.round(process.memoryUsage().rss / 1024 / 1024),
    timestamp: new Date().toISOString()
  })
})

// API Info endpoint
app.get('/api/info', (req, res) => {
  res.json({
    app: 'DevOps Monitoring App',
    version: '1.0.0',
    developer: 'Muhammad Mubashar Karamat Ali',
    role: 'Junior DevSecOps Engineer',
    environment: process.env.NODE_ENV || 'development',
    server: os.hostname()
  })
})

app.listen(PORT, () => {
  console.log(`✅ App running at http://localhost:${PORT}`)
  console.log(`👨‍💻 Developer: Muhammad Mubashar Karamat Ali`)
})
