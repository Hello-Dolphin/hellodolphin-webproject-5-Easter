
// Define variables
def scmVars

// Start Pipeline
pipeline {

  // Configure Jenkins Slave
  agent any

  // Start Pipeline
  stages {


    stage ('Install node'){
      steps{ 
          sh 'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.0/install.sh | bash'
          sh 'export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"'
          sh '[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"'
      }
    }
    
    
   
    


  } // End stages
} // End pipeline
