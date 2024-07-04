const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    const hookUrl = core.getInput('hook-url');
    console.log('test')
    console.log("hookUrl ===============")
    console.log(hookUrl)

    console.log('passou aqui 1');

    const msg = {
      text: "consegui!!"
    };

    const body = JSON.stringify(msg);
    console.log('passou aqui 1');
    const response = await fetch(hookUrl, {
      body,
      method: "POST"
    })
      
    const app = await response.json()
    
    console.log('passou aqui')
    core.setOutput("debug", app);
    

    console.log('finalizou aqui!!')


  } catch (error) {
    console.log(error)
  }
  
}

run()