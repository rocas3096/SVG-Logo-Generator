function createLogo(title, shape) {
    let shapeComponent;

    if (shape === 'Circle') {
        shapeComponent = new Circle();
    } else if (shape === 'Square') {
        shapeComponent = new Square();
    } else if (shape === 'Triangle') {
        shapeComponent = new Triangle();
    } else {
        return 'Invalid shape choice. Please select from circle, square or triangle.'
    }

    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${title}</title>
        <link rel="stylesheet" href="../dist/style.css" />
      </head>
      <body>
        <div class="card">
          ${shapeComponent.render()}
        </div>
      </body>
    </html>
    `;
}

module.exports = { createLogo };