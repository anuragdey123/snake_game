# Snake Game - Web Application

A classic Snake game implemented as a web application using Flask and JavaScript, deployed on Kubernetes with high availability and automated CI/CD pipeline.

## 🎮 Game Features

- Classic Snake gameplay in web browser
- Real-time score tracking
- Responsive canvas-based game interface
- Keyboard controls (Arrow keys)

## 🏗️ Architecture

### Application Stack
- **Backend**: Flask (Python 3.11)
- **Frontend**: HTML5 Canvas + JavaScript
- **Containerization**: Docker
- **Orchestration**: Kubernetes
- **Package Management**: Helm Charts

### Project Structure
```
snake_game/
├── app.py                 # Flask web server
├── static/               # Frontend assets
│   ├── index.html       # Game interface
│   ├── snake.js         # Game logic
│   └── style.css        # Styling
├── Dockerfile           # Container configuration
├── requirements.txt     # Python dependencies
├── jenkins-ci-cd/       # CI/CD pipeline
└── snake-game/          # Helm chart
```

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd snake_game
   ```

2. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Run the application**
   ```bash
   python app.py
   ```

4. **Access the game**
   Open your browser and navigate to `http://localhost:8080`

### Docker Deployment

1. **Build the Docker image**
   ```bash
   docker build -t snake-game .
   ```

2. **Run the container**
   ```bash
   docker run -p 8080:8080 snake-game
   ```

## ☸️ Kubernetes Deployment

### Prerequisites
- Kubernetes cluster
- Helm 3.x
- Docker registry access

### Deployment Steps

1. **Deploy using Helm**
   ```bash
   cd snake-game
   helm install snake-game . --namespace helm-snake --create-namespace
   ```

2. **Access the application**
   ```bash
   kubectl port-forward service/snake-game 8080:80 -n helm-snake
   ```

### High Availability Features

- **Rolling Updates**: Zero-downtime deployments with rolling update strategy
- **Replica Management**: Configurable replica count for load distribution
- **Health Checks**: Kubernetes readiness and liveness probes
- **Service Discovery**: ClusterIP service for internal communication
- **Resource Management**: CPU and memory limits/requests

## 🔄 CI/CD Pipeline

The project includes a comprehensive Jenkins-based CI/CD pipeline that:

1. **Source Code Management**: Clones application code from Git
2. **Container Building**: Uses Kaniko for secure, daemonless Docker builds
3. **Image Registry**: Pushes images to Docker Hub
4. **Helm Deployment**: Automatically updates and deploys to Kubernetes
5. **Rolling Updates**: Ensures zero-downtime deployments

### Pipeline Stages
- Clone App Code
- Build & Push Image (Kaniko)
- Clone Helm Chart
- Update Helm Values
- Deploy with Helm

## 🛠️ Configuration

### Environment Variables
- `PYTHONDONTWRITEBYTECODE=1`: Prevents Python bytecode generation
- `PYTHONUNBUFFERED=1`: Ensures real-time logging

### Helm Values
Key configuration options in `snake-game/values.yaml`:
- `replicaCount`: Number of application replicas
- `image.repository`: Docker image repository
- `image.tag`: Image tag/version
- `service.type`: Kubernetes service type

## 🔧 Development

### Adding New Features
1. Modify game logic in `static/snake.js`
2. Update styling in `static/style.css`
3. Extend Flask routes in `app.py` if needed
4. Test locally before committing

### Deployment Process
1. Push code changes to main branch
2. Jenkins pipeline automatically triggers
3. New Docker image is built and pushed
4. Helm chart is updated with new image tag
5. Rolling deployment updates Kubernetes pods

## 📊 Monitoring

### Application Metrics
- Game sessions and scores
- HTTP request metrics
- Container resource usage

### Kubernetes Metrics
- Pod health and status
- Service availability
- Resource consumption

## 🔐 Security

- Non-root container execution
- Minimal base image (Python slim)
- Kubernetes RBAC integration
- Secure image registry authentication

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Troubleshooting

### Common Issues

**Game not loading**
- Check browser console for JavaScript errors
- Verify Flask server is running on port 8080

**Docker build fails**
- Ensure Docker daemon is running
- Check Dockerfile syntax and dependencies

**Kubernetes deployment issues**
- Verify cluster connectivity: `kubectl cluster-info`
- Check pod status: `kubectl get pods -n helm-snake`
- View logs: `kubectl logs <pod-name> -n helm-snake`

**CI/CD pipeline failures**
- Check Jenkins build logs
- Verify Docker registry credentials
- Ensure Kubernetes cluster access

## 📞 Support

For issues and questions:
- Create an issue in the repository
- Check existing documentation
- Review pipeline logs for deployment issues
