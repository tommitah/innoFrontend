pipeline {
  agent {
    docker {
      image 'node:lts-alpine'
      args '-p 3002:3000'
    }
  }
  environment {
    CI = 'true' 
  }
  stages {
    stage('Build stage') {
      steps {
        echo 'Build stage'
        sh 'npm install'
        sh 'npm run build'
      }
    }
    stage('Test stage') {
      steps {
        echo 'Test stage'
        sh 'npm test -- --coverage'
      }
      post {
        always {
          step([$class: 'CoberturaPublisher', coberturaReportFile: 'coverage/cobertura-coverage.xml'])
        }
      }
    }
    stage('Deploy stage') {
      steps {
        echo 'Deploy stage'
      }
    }
  }
}