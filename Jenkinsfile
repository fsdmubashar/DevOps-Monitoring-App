pipeline {
    agent any

    environment {
        DOCKER_IMAGE   = "mubasharkaramatali/mubashar-devops-app"
        DOCKER_TAG     = "latest"
        CONTAINER_NAME = "mubashar-app"
        APP_PORT       = "3000"
    }

    stages {

        stage('Code Checkout') {
            steps {
                git branch: 'main',
                    credentialsId: 'github-credentials',
                    url: 'https://github.com/fsdmubashar/DevOps-Monitoring-App.git'
                echo "✅ Code checkout ho gaya"
            }
        }

        stage('Docker Image Build') {
            steps {
                sh "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} ."
                echo "✅ Docker image ban gayi"
            }
        }

        stage('Push to DockerHub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-credentials',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh "echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin"
                    sh "docker push ${DOCKER_IMAGE}:${DOCKER_TAG}"
                    echo "✅ DockerHub pe push ho gaya"
                }
            }
        }

        stage('Deploy Application') {
            steps {
                sh """
                    docker stop ${CONTAINER_NAME} || true
                    docker rm   ${CONTAINER_NAME} || true
                    docker pull ${DOCKER_IMAGE}:${DOCKER_TAG}
                    docker run -d \
                        --name ${CONTAINER_NAME} \
                        -p ${APP_PORT}:${APP_PORT} \
                        --restart unless-stopped \
                        ${DOCKER_IMAGE}:${DOCKER_TAG}
                """
                echo "✅ Application deploy ho gayi"
            }
        }
    }

    post {
        success { echo "🎉 Pipeline SUCCESS!" }
        failure { echo "❌ Pipeline FAILED!" }
    }
}
