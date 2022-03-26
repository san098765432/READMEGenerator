const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = "./utils/generateMarkdown";

//Using inquirer to generate questions
inquirer
  .prompt([
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
      name: "GitHub Username",
    },
    {
      type: "input",
      message: "Enter your email address",
      name: "Email Address",
    },
  ])
  .then(function (answers) {
    const readme = `${answers.Title}`;

    createNewFile("readme-file", readme);
  });

//Creating createNewFile function
function createNewFile(fileName, data) {
  fs.writeFile("./README.md", data, function (err) {
    if (err) {
      console.log(err);
    }
  });
} 