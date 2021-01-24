// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    // if (license === "Apache 2.0 License") {
    //     license = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    // } else if (license === "")
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
  ![badge](https://img.shields.io/badge/license-${data.license}-blue)<br/>

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
![badge](https://img.shields.io/badge/license-${data.license}-blue)
<br/>
This application is covered under ${data.license} license. 

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
Find me on GitHub: [${data.username}](https://github.com/${data.username})<br />
<br/>
Please direct contact me with any questions: ${data.email}<br /><br />
This README was generated by [README-generator](https://github.com/wendyVo/ReadMe-generator)_
`;
}

module.exports = generateMarkdown;