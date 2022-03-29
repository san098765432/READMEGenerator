const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = "./utils/generateMarkdown";

//Using inquirer to generate questions
const questions = [
    { type: "input", message: "What is the project title?", name: "Title" },
    {
      type: "input",
      message: "Provide a description of your project",
      name: "Description",
    },
    {
      type: "input",
      message: "Detail the installation instructions for this project",
      name: "Installation",
    },
    {
      type: "input",
      message: "Enter usage information for this project",
      name: "Usage",
    },
    {
      type: "input",
      message: "Enter contribution information for this project",
      name: "Contribution",
    },
    {
      type: "input",
      message: "Provide details of tests carried out if any",
      name: "Tests",
    },
    {
      type: "list",
      message: "Select the license applicable to your project",
      name: "License",
      choices: ["MIT", "ISC", "GNU", "APACHE 2.0", "NO LICENSE"],
    },
    {
      type: "input",
      message: "Enter your GitHub username",
      name: "Git",
    },
    {
      type: "input",
      message: "Enter your email address",
      name: "Email",
    },
  ];
 
//Creating createNewFile function
function createNewFile(fileName, data) {
  fs.writeFileSync(path.join(process.cwd(),fileName), data, function (err) {
    if (err) {
      console.log(err);
    }
  });
} 

function init () {
  inquirer.prompt(questions).then(response => {
  createNewFile("README.md", generateMarkdown({...response})) 
  })
}

//calling init function
init();