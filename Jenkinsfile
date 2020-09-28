pipeline {
  agent any
  environment {
    CI = 'true' 
  }
  stages {
    stage('Build stage') {
      steps {
        echo 'Build stage'
        sh 'npm install'
      }
    }
    stage('Test stage') {
      steps {
        echo 'Test stage'
        sh 'npm test'
      }
    }
    stage('Deploy stage') {
      steps {
        echo 'Deploy stage'
      }
    }
  }
}