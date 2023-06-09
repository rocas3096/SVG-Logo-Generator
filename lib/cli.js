const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const { Circle, Triangle, Square } = require('./shapes')
const { createLogo } = require('./document.js');

class Logo {
    run() {
        //Asks user for logo details and processes their choices
        this.promptuser()
            .then(({ text, shapeColor, textColor, shape, title }) => {
                let shapeComponent;

                //creates the shape component according to user choices
                if (shape === 'Circle') {
                    shapeComponent = new Circle(text.toUpperCase(), shapeColor.toLowerCase(), textColor.toLowerCase());
                } else if (shape === 'Square') {
                    shapeComponent = new Square(text.toUpperCase(), shapeColor.toLowerCase(), textColor.toLowerCase());
                } else if (shape === 'Triangle') {
                    shapeComponent = new Triangle(text.toUpperCase(), shapeColor.toLowerCase(), textColor.toLowerCase());
                } else {
                    console.log('Invalid shape choice. Please select from circle, square or triangle.')
                    return;
                }

                //creates logo using the shape component created above
                const logo = createLogo(title, shapeComponent.render());

                const folderPath = './examples'; 
                const filePath = `${folderPath}/${title}.html`;

                //writes the logo to a file
                return writeFile(filePath, logo);

            })

            .then(() => {
                console.log('Your logo has been generated!');
            })
            .catch((error) => {
                console.error('Error', error);
            });
    }

    //Prompts the user for logo details
    promptuser() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'title',
                message: 'Please enter the title of your document:',
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Select a shape for your logo',
                choices: ['Circle', 'Square', 'Triangle'],
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Please enter the color you would like your shape to be:',
            },
            {
                type: 'input',
                name: 'text',
                message: 'Please enter up to three letters for your logo text:',
                validate: function (input) {
                    if (input.length > 3) {
                        return 'Please enter up to 3 letters';
                    }
                    return true;
                },
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Please enter the color you would like your text to be:',
            },
        ]);
    }
}

module.exports = Logo

