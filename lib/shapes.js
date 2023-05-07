class Circle {
  constructor(text, shapeColor, textColor) {
    this.text = text;
    this.shapeColor = shapeColor;
    this.textColor = textColor;
  }

  render() {
    return `
      <svg width="300" height="200">
        <circle cx="150" cy="100" r="80" fill=${this.shapeColor} stroke="black" stroke-width="2" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.textColor}>${this.text}</text>
      </svg>
    `;
  }
}

class Triangle {
  constructor(text, shapeColor, textColor) {
    this.text = text;
    this.shapeColor = shapeColor;
    this.textColor = textColor;
  }

  render() {
    return `
      <svg width="300" height="200">
        <polygon points="150, 18 244, 182 56, 182" fill=${this.shapeColor} stroke="black" stroke-width="2" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.textColor}>${this.text}</text>
      </svg>
    `;
  }
}

class Square {
  constructor(text, shapeColor, textColor) {
    this.text = text;
    this.shapeColor = shapeColor;
    this.textColor = textColor;
  }

  render() {
    return `
      <svg width="300" height="200">
        <rect width="300" height="200" fill=${this.shapeColor} stroke="black" stroke-width="2" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.textColor}>${this.text}</text>
      </svg>
    `;
  }
}

module.exports = { Circle, Triangle, Square };
