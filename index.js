const inquirer = require('inquirer');
const fs = require('fs');

//Using inquirer to generate questions
inquirer.prompt = (
     [ 
      {    type: 'input',
          message: 'What is the project title?',
          name: 'Title',
      },
      {
          type: 'input',
          message:'Provide a description of your project',
          name: 'Description',
      },
      {
        type: 'input',
        message:'Detail the installation instructions for this project',
        name: 'Installation',
      },
      {
        type: 'input',
        message:'Enter usage information for this project',
        name: 'Usage',
      },
      {
        type: 'input',
        message:'Enter contribution information for this project',
        name: 'Contribution',
       },
       {
        type: 'input',
        message:'Provide details of tests carried out if any',
        name: 'Tests',
       },
       {
        type: 'input',
        message:'Select the license applicable to your project',
        name: 'License',
        choices:["MIT", "ISC", "GNU", "APACHE 2.0", "NO LICENSE"]
       },
       {
        type: 'input',
        message:'Enter your GitHub username',
        name: 'GitHub Username',
       },
       {
        type: 'input',
        message:'Enter your email address',
        name: 'Email Address',
       }
   ]
   ).then(({
    title,
    installation,
    instructions,
    credits,
    license,
    git,
    usage,
    email,
    contribution
    })=>{
    //Template to be used
    const template = `# ${title}

   * [Installation] (#Installation)
   * [Usage] (#Usage)
   * [Contribution] (#Contribution)
   * [Credits] (#Credits)
   * [License] (#License)
   # Installation
   ${installation}
   ##Usage
   ${usage}
   ## Contribution
   ${contribution}
   ## Instructions
   ${instructions}
   ## Credits
   ${credit}
   ## License
   ${license}

   # Contact
   *GitHub :${git}
   *Email :${email}`;
    //Function to generate the ReadMe using fs
    createNewFile(title,template);
    }
    );
    //Creating our createNewFile function
    function createNewFile(fileName,data){
    //fs
    fs.writeFile(`./${fileName.toLowerCase().split('').join('')}.nd`,data,(err)=>{
    if(err){
       console.log(err)
    }
    console.log('README has been generated successfully');
    })

   } 