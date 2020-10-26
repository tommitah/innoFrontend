pipeline {
  // 	This image parameter (of the agent section’s docker parameter) downloads the node:6-alpine Docker image (if it’s not already available on your machine) and runs this image as a separate container. This means that:
  //You’ll have separate Jenkins and Node containers running locally in Docker.
  //The Node container becomes the agent that Jenkins uses to run your Pipeline project. However, this container is short-lived - its lifespan is only that of the duration of your Pipeline’s execution.
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
        echo '------> Build stage <------'
        echo "Install node modules"
        sh 'npm install'
        sh 'npm run build'
      }
      
    }
    stage('Test stage') {
      steps {
        echo '------> Test stage <------'
        sh 'npm test'
      }
      post{
        always {
          publishHTML target: [
            allowMissing         : false,
            alwaysLinkToLastBuild: false,
            keepAll             : true,
            reportDir            : 'output/coverage/jest',
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
