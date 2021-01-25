// function to generate markdown for README
function generateMarkdown(data) {

    //based on the license that user select, a license badge with link will be added
    let license = " ";
    if (data.license === "MIT") {
        data.license = "[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://choosealicense.com/licenses/mit/)";
    } else if (data.license === "GNU AGPLv3") {
        data.license = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://choosealicense.com/licenses/agpl-3.0/)";
    } else if (data.license === "GNU GPLv3") {
        data.license = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://choosealicense.com/licenses/gpl-3.0/)";
    } else if (data.license === "Mozilla Public License 2.0") {
        data.license = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    } else if (data.license === "Apache License 2.0") {
        data.license = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else if (data.license === "Boost Software License 1.0") {
        data.license = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
    }
    return `# ${data.title}
    
  ${data.license}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License

${data.license}
<br/>
This application is covered under ${data.license} license. 

## Contributing
Contributors: ${data.contributing}. <br/>
Please read this [Setting guidelines for repository contributors](https://docs.github.com/en/github/building-a-strong-community/setting-guidelines-for-repository-contributors) for more informations.

## Tests
${data.test}

## Questions

Please contact me should you have any questions: <br/>
:email:   Email: ${data.email} <br/>
:octocat: GitHub:  [${data.gitHub}](https://github.com/${data.gitHub})


`;
}

module.exports = generateMarkdown;