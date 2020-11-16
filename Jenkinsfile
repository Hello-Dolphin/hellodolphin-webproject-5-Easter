
// Define variables
def scmVars

// Start Pipeline
pipeline {

  // Configure Jenkins Slave
  agent {
    docker { image 'node:12.19.0' }
  }

  // Start Pipeline
  stages {

    /*stage('Clone Hellodolphin-WebPR code') {
      // Steps to run build
      steps {
          sh 'git clone https://github.com/Hello-Dolphin/hellodolphin-webproject-5-Easter.git'
          
      } // End steps
    } // End stage*/

    stage ('Install node'){
      steps{ 
          sh 'node -v' // 8.10.0
          sh 'npm -v' // 5.6.0
      }
    }
    
    stage ('Depndencies'){
      steps{
          sh 'pwd'
          sh 'ls'
          sh 'yarn' 
      }
    }
   
    


  } // End stages
} // End pipeline
