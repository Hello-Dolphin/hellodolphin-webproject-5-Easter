
// Define variables
def scmVars

// Start Pipeline
pipeline {

  // Configure Jenkins Slave
  agent any
    environment {
    ENV_NAME = "${BRANCH_NAME == "master" ? "main" : "${BRANCH_NAME}"}"
  }

  // Start Pipeline
  stages {

    stage('Clone Hellodolphin-WebPR code') {
      // Steps to run build
      steps {
          // Use script to run
          script {
            // Git clone repo and checkout branch as we put in parameter
            scmVars = git branch: "${BRANCH_NAME}",
                          url: 'https://github.com/Hello-Dolphin/hellodolphin-webproject-5-Easter.git'
          } // End script
      } // End steps
    } // End stage

    stage('Install dependencies and build files') {
      steps {
          sh 'nvm install node'
          sh 'node -v'
          sh 'npm install -g yarn'
          sh 'cd hellodolphin-webproject-5-Easter'
          sh 'yarn'
          sh 'yarn build'
      } // End steps
    } // End stage

    stage('Build Docker Image') {
      steps {
        sh ' sudo docker build -t eastertemp . '
      } // End steps
    } // End stage

    


  } // End stages
} // End pipeline
