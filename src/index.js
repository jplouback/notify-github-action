const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    const hookUrl = core.getInput('hook-url');
    
    console.log("hookUrl ===============")
    console.log(hookUrl)

    if(hookUrl) {
      const response = await fetch(hookUrl, {
        body: {
          "text": "consegui!!"
        },
        method: "POST"
      })
      const app = await response.json()
      console.log(app)
      core.setOutput("debug", app);
    } else {
      core.setOutput("debug", "hookUrl é obrigatório");
    }


  } catch (error) {
    
  }
  
}

run()