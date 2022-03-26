
function generateMarkdown(answers) {
    return `# ${answers.Title}

## Description 
${answers.Description}

## Table of Contents

   * [Installation] (#Installation)
   * [Usage] (#Usage)
   * [License] (#License)
   * [Contributing] (#Contributing)
   * [Tests] (#Tests)
   * [Questions] (#Questions)


   ## Installation
   ${answers.Installation}

   ## Usage
   ${answers.Usage}

   ## License
   ${answers.License}

   ## Contributing
   ${answers.Contributing}

   ## Tests
   ${answers.Tests}

   ## Questions
   ${answers.Questions}
   *GitHub :${answers.Git}
   *Email :${answers.Email}
   
   `}