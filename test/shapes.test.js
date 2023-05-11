const { Circle, Triangle, Square } = require('../lib/shapes');

// Function to remove leading whitespace and indentation
function trimSvgCode(code) {
    return code.replace(/\n\s*/g, '');
}

describe('Circle', () => {
    test('render() should return the SVG code with the correct shape and color', () => {
        const shape = new Circle('text', 'blue', 'white');
        // Makes sure the SVG code created matches expected code
        expect(trimSvgCode(shape.render())).toEqual(
            '<svg width="300" height="200"><circle cx="150" cy="100" r="80" fill="blue" stroke="black" stroke-width="2" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">text</text></svg>'
        );
    });
});

describe('Triangle', () => {
    test('render() should return the SVG code with the correct shape and color', () => {
        const shape = new Triangle('text', 'red', 'black');
        // Makes sure the SVG code created matches expected code
        expect(trimSvgCode(shape.render())).toEqual(
            '<svg width="300" height="200" viewBox="0 0 300 200"><polygon points="150, 18 244, 182 56, 182" fill="red" stroke="black" stroke-width="2" /><text x="150" y="145" font-size="50" text-anchor="middle" fill="black">text</text></svg>'
        );
    });
});

describe('Square', () => {
    test('render() should return the SVG code with the correct shape and color', () => {
        const shape = new Square('text', 'green', 'yellow');
        expect(trimSvgCode(shape.render())).toEqual('<svg width="300" height="200" viewBox="0 0 200 200"><rect width="200" height="200" fill="green" stroke="black" stroke-width="2" /><text x="100" y="100" font-size="60" text-anchor="middle" alignment-baseline="middle" fill="yellow">text</text></svg>');
    });
});  
