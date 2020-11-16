
// Define variables
def scmVars

// Start Pipeline
pipeline {

  // Configure Jenkins Slave
  agent any

  // Start Pipeline
  stages {

    /*stage('Clone Hellodolphin-WebPR code') {
      // Steps to run build
      steps {
          sh 'git clone https://github.com/Hello-Dolphin/hellodolphin-webproject-5-Easter.git'
          
      } // End steps
    } // End stage*/

    stage ('Install dependencies'){
      steps{
          //sh 'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.0/install.sh | bash'
          //sh 'export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"'
          //sh '[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm'
          sh 'nvm install 12.19.0'
          sh 'npm install -g yarn'
          
          sh 'pwd'
          sh 'ls'
          
          
        
      }
    }
   
    


  } // End stages
} // End pipeline
