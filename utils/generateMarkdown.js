
function generateMarkdown(answers) {
    return `# ${answers.Title}

<img src="https://img.shields.io/badge/License-${answers.License}-blueviolet.svg">

## Description 
${answers.Description}

## Table of Contents

   * [Installation](#installation)
   * [Usage](#usage)
   * [License](#license)
   * [Contributing](#contributing)
   * [Tests](#tests)
   * [Questions](#questions)


   ## Installation
   ${answers.Installation}

   ## Usage
   ${answers.Usage}

   ## License
   ${answers.License}

   ## Contributing
   ${answers.Contribution}

   ## Tests
   ${answers.Tests}

   ## Questions
   If you have any questions you can contact me on 
   Email :${answers.Email}
   You can find more of my work at [${answers.Git}](https://github.com/${answers.Git})
   `}

   module.exports = generateMarkdown;