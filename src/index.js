const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    const hookUrl = core.getInput('hook-url');
    
    console.log("hookUrl ===============")
    console.log(hookUrl)

    const msg = {
      text: "consegui!!"
    }

    const body = JSON.parse(msg);

    if(hookUrl) {
      const response = await fetch(hookUrl, {
        body,
        method: "POST"
      })
      
      const app = await response.json()
      console.log(app)
      console.log('passou aqui')
      core.setOutput("debug", app);
    } else {
      console.log('else ----------------------')
      core.setOutput("debug", "hookUrl é obrigatório");
    }

    console.log('finalizou aqui')


  } catch (error) {
    
  }
  
}

run()