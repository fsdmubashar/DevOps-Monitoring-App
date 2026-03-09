# 🚀 DevOps Monitoring App

**Developed by:** Muhammad Mubashar Karamat Ali  
**Role:** Junior DevSecOps Engineer  
**Platform:** DigitalOcean (Ubuntu 24.04 LTS)

---

## 📋 Project Overview

A complete end-to-end DevOps project implementing a full **CI/CD pipeline** with **real-time monitoring**, **log management**, and **automated alerting** using industry-standard open-source tools.

The application is a **NodeJS Express web app** deployed via Docker, continuously integrated through Jenkins, and monitored using the Prometheus + Grafana + Loki stack.

---

## 🏗️ Architecture

```
GitHub Push
    ↓
Jenkins CI/CD Pipeline
    ↓
Docker Build → DockerHub Push → Deploy Container
    ↓
Application (Port 3000)
    ↓
Prometheus (Scrapes Metrics)
├── Node Exporter     → Server Metrics (CPU, RAM, Disk)
└── Blackbox Exporter → Website Uptime & Response Time
    ↓
Grafana (Visualization - Port 3001)
├── Dashboard 1860 → Node Exporter Full
└── Dashboard 7587 → Blackbox Exporter
    ↓
Loki + Promtail → Log Collection & Storage
    ↓
AlertManager → Slack Notifications
```

---

## 🛠️ Tech Stack

| Category | Tool | Version |
|---|---|---|
| **Application** | NodeJS + Express | v18.20.8 |
| **Containerization** | Docker | 29.3.0 |
| **Container Registry** | DockerHub | - |
| **CI/CD** | Jenkins | 2.541.2 |
| **Metrics** | Prometheus | v2.51.0 |
| **Server Monitoring** | Node Exporter | v1.7.0 |
| **Website Monitoring** | Blackbox Exporter | v0.24.0 |
| **Visualization** | Grafana | v12.4.0 |
| **Log Collection** | Promtail | v2.9.0 |
| **Log Storage** | Loki | v2.9.0 |
| **Alerting** | AlertManager | v0.27.0 |
| **Notifications** | Slack Webhooks | - |
| **IaC** | Systemd Services | - |
| **OS** | Ubuntu 24.04 LTS | - |

---

## 📁 Project Structure

```
DevOps-Monitoring-App/
├── app.js              # NodeJS Express application
├── package.json        # Node dependencies
├── package-lock.json   # Locked dependencies
├── Dockerfile          # Docker image definition
├── Jenkinsfile         # CI/CD pipeline definition
├── .dockerignore       # Docker build exclusions
└── .gitignore          # Git exclusions
```

---

## 🚀 Application Endpoints

| Endpoint | Description |
|---|---|
| `GET /` | Main dashboard UI |
| `GET /health` | Health check (JSON) — used by Blackbox Exporter |
| `GET /api/info` | Server info (hostname, platform, uptime) |

---

## ⚙️ Jenkins Pipeline Stages

```groovy
1. Code Checkout   → GitHub se latest code pull
2. Docker Build    → Image build karna
3. Push to DockerHub → Image registry pe push
4. Deploy          → Container stop/start with latest image
```

**Trigger:** GitHub Webhook — har `git push` pe automatic pipeline run hoti hai

---

## 📊 Monitoring Stack

### Prometheus (Port 9090)
- **Node Exporter** — CPU, Memory, Disk, Network metrics
- **Blackbox Exporter** — HTTP uptime checks on `/` and `/health`
- **Scrape interval:** 15 seconds

### Grafana (Port 3001)
- **Dashboard 1860** — Node Exporter Full (Server metrics)
- **Dashboard 7587** — Prometheus Blackbox Exporter (Website uptime)

### Loki + Promtail (Port 3100)
- System logs (`/var/log/syslog`)
- Docker container logs

---

## 🚨 Alert Rules

| Alert | Condition | Severity |
|---|---|---|
| **AppDown** | `probe_success == 0` for 1 min | Critical 🔴 |
| **HighCPU** | CPU > 80% for 2 min | Warning ⚠️ |
| **HighMemory** | Memory > 80% for 2 min | Warning ⚠️ |

Alerts are sent to **Slack** via AlertManager webhooks.

---

## 🔧 Services & Ports

| Service | Port | Status |
|---|---|---|
| NodeJS App | 3000 | ✅ Running (Docker) |
| Jenkins | 8080 | ✅ Running (Systemd) |
| Prometheus | 9090 | ✅ Running (Systemd) |
| Node Exporter | 9100 | ✅ Running (Systemd) |
| Blackbox Exporter | 9115 | ✅ Running (Systemd) |
| Grafana | 3001 | ✅ Running (Systemd) |
| Loki | 3100 | ✅ Running (Systemd) |
| Promtail | 9080 | ✅ Running (Systemd) |
| AlertManager | 9093 | ✅ Running (Systemd) |

---

## 🐳 Docker

**DockerHub Image:** `mubasharkaramatali/mubashar-devops-app:latest`

```bash
# Pull and run manually
docker pull mubasharkaramatali/mubashar-devops-app:latest
docker run -d --name mubashar-app -p 3000:3000 mubasharkaramatali/mubashar-devops-app:latest
```

---

## 🔁 CI/CD Flow

```
Developer → git push → GitHub
                          ↓
                    Webhook Trigger
                          ↓
                    Jenkins Pipeline
                    ├── Checkout Code
                    ├── Docker Build
                    ├── Push to DockerHub
                    └── Deploy Container
                          ↓
                    App Live on Port 3000
```

---

## 📦 Local Setup

```bash
# Clone repo
git clone https://github.com/fsdmubashar/DevOps-Monitoring-App.git
cd DevOps-Monitoring-App

# Install dependencies
npm install

# Run locally
node app.js

# Or with Docker
docker build -t mubashar-devops-app .
docker run -d -p 3000:3000 mubashar-devops-app
```

---

## 👨‍💻 Author

**Muhammad Mubashar Karamat Ali**  
Junior DevSecOps Engineer  
GitHub: [@fsdmubashar](https://github.com/fsdmubashar)  
DockerHub: [mubasharkaramatali](https://hub.docker.com/u/mubasharkaramatali)

---

## 📚 Key Resources

- [Prometheus Docs](https://prometheus.io/docs/)
- [Grafana Docs](https://grafana.com/docs/)
- [Loki Docs](https://grafana.com/docs/loki/)
- [Jenkins Docs](https://www.jenkins.io/doc/)
- [Docker Docs](https://docs.docker.com/)
