class Circle {
    constructor(text, shapeColor, textColor) {
        this.text = text;
        this.shapeColor = shapeColor;
        this.textColor = textColor;
    }

    render() {
        return `
        <svg width="200" height="200">
          <style>
            :root {
              --shape-color: ${this.shapeColor};
              --text-color: ${this.textColor};
            }
          </style>
          <circle cx="100" cy="100" r="100" fill="var(--shape-color)" />
          <text x="100" y="110" text-anchor="middle" fill="var(--text-color)">${this.text}</text>
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
          <style>
            :root {
              --shape-color: ${this.shapeColor};
              --text-color: ${this.textColor};
            }
          </style>
          <polygon points="150, 18 244, 182 56, 182" fill="var(--shape-color)" />
          <text x="150" y="110" text-anchor="middle" fill="var(--text-color)">${this.text}</text>
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
        <svg width="200" height="200">
          <style>
            :root {
              --shape-color: ${this.shapeColor};
              --text-color: ${this.textColor};
            }
          </style>
          <rect width="200" height="200" fill="var(--shape-color)" />
          <text x="100" y="110" text-anchor="middle" fill="var(--text-color)">${this.text}</text>
        </svg>
      `;
    }
}

module.exports = { Circle, Triangle, Square };
