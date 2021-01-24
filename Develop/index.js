// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown.js")

const writeFileAsync = util.promisify(fs.writeFile);

//Questions for user to generate ReadMe files
const promptUser = () => {
    return inquirer.prompt([{
            type: 'input',
            name: 'title',
            message: 'What is your project title?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a brief description of your project: ',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Instalation instruction: ',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Usage information: '
        },
        {
            type: 'list',
            name: 'license',
            message: 'Select license for your application: ',
            choices: ["MIT", "GNU AGPLv3", "GNU GPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "Boost Software License 1.0"]
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Who are the contributors of ths project? ',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Is there any test included? ',
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'What is your GitHub username? ',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email? ',
        },
    ]);
};

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, JSON.stringify(data, null, '\t'), (err) =>
//         err ? console.log(err) : console.log('Success!')
//     );
// }


// Create a function to initialize app
const init = async() => {
    console.log('hi');
    try {
        const data = await promptUser();

        const generateReadMe = generateMarkdown(data);

        await writeFileAsync('README.md', generateReadMe);

        console.log('Successfully wrote to README.md ✅');
    } catch (err) {
        console.log(err);
    }
};


// Function call to initialize app
init();