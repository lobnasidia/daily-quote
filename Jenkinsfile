pipeline {
    agent any

    environment {
        IMAGE_NAME = "daily-quote-app"
        DEPLOY_FILE = "daily-quote.yml"
    }

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t ${IMAGE_NAME}:latest ."
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                script {
                    sh "kubectl apply -f ${DEPLOY_FILE}"
                }
            }
        }

        stage('Verify Deployment') {
            steps {
                script {
                    sh "kubectl get pods"
                    sh "kubectl get svc"
                    sh "kubectl get ingress"
                }
            }
        }
    }
}
