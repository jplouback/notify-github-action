const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    const hookUrl = core.getInput('hook-url');
    const object = core.getInput('object');
    console.log('test')
    console.log("hookUrl ===============")
    console.log(hookUrl)
    
    console.log("object ================")
    console.log(object)

    const msg = {
      text: "consegui!!"
    };

    const body = JSON.stringify(msg);
    const response = await fetch(hookUrl, {
      body,
      method: "POST"
    })
      
    const app = await response.json()
    
    core.setOutput("debug", app);

    console.log('finalizou aqui!!')


  } catch (error) {
    console.log(error)
  }
  
}

run()