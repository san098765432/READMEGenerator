
function generateMarkdown(answers) {
    return `# ${answers.Title}

## Description 
${description}

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
   ${contributing}

   ## Tests
   ${tests}

   ## Questions
   ${questions}
   *GitHub :${git}
   *Email :${email}
   
   `}