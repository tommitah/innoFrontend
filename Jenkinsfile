pipeline {
  agent {
    docker {
      image 'node:lts-alpine'
      args '-p 3000:3000'
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
          publishHTML target: [
            allowMissing         : false,
            alwaysLinkToLastBuild: false,
            keepAll             : true,
            reportDir            : 'coverage/lcov-report',
            reportFiles          : 'index.html',
            reportName           : 'Test Report'
          ]
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
