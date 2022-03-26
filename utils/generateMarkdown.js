
function generateMarkdown(answers) {
    return `# ${answers.Title}

## Description 

## Table of Contents

   * [Installation] (#Installation)
   * [Usage] (#Usage)
   * [License] (#License)
   * [Contributing] (#Contributing)
   * [Tests] (#Tests)
   * [Questions] (#Questions)


   ## Installation
   ${installation}

   ## Usage
   ${usage}

   ## License
   ${license}

   ## Contributing
   ${contribution}

   ## Tests
   ${tests}

   ## Questions
   *GitHub :${git}
   *Email :${email}
   
   `}