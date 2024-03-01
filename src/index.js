/**
 * Converts a hex color to an RGB array
 * @param {string} hex - The hex color to convert
 * @returns {number[]} The RGB array
 * @throws {Error} If the input is not a valid hex color
 * @example
 * hexToRgb('#ff0000'); // [255, 0, 0] (red)
 */
function hexToRgb(hex) {
  const regex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
  const result = regex.exec(hex);
  if (!result) {
    throw new Error("Invalid hex color");
  }
  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);
  return [r, g, b];
}

/**
 * Converts an RGB array to a hex color
 * @param {number[]} rgb - The RGB array to convert
 * @returns {string} The hex color
 * @example
 * rgbToHex([255, 0, 0]); // '#ff0000' (red)
 */
function rgbToHex([r, g, b]) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

/**
 * Lightens a color by a given percentage
 * @param {number[]} color - The RGB array to lighten
 * @param {number} percent - The percentage to lighten the color by
 * @returns {number[]} The lightened RGB array
 * @throws {Error} If the percentage is not between 0 and 100
 * @example
 * lightenColor([255, 0, 0], 50); // [255, 128, 128] (light red)
 */
function lightenColor(color, percent) {
  if (percent < 0 || percent > 100) {
    throw new Error("Percentage must be between 0 and 100");
  }
  const amount = Math.floor(255 * (percent / 100) + 0.5);
  const r = Math.min(255, color[0] + amount);
  const g = Math.min(255, color[1] + amount);
  const b = Math.min(255, color[2] + amount);
  return [r, g, b];
}

/**
 * Darkens a color by a given percentage
 * @param {number[]} color - The RGB array to darken
 * @param {number} percent - The percentage to darken the color by
 * @returns {number[]} The darkened RGB array
 * @throws {Error} If the percentage is not between 0 and 100
 * @example
 * darkenColor([255, 0, 0], 50); // [128, 0, 0] (dark red)
 */
function darkenColor(color, percent) {
  if (percent < 0 || percent > 100) {
    throw new Error("Percentage must be between 0 and 100");
  }
  const amount = Math.floor(255 * (percent / 100) - 0.5);
  const r = Math.max(0, color[0] - amount);
  const g = Math.max(0, color[1] - amount);
  const b = Math.max(0, color[2] - amount);
  return [r, g, b];
}

/**
 * Converts an RGB color to HSL 
 * @param {number[]} color - The RGB array to convert
 * @returns {number[]} The HSL array
 * @example
 * rgbToHsl([255, 0, 0]); // [0, 100, 50] (red)
 */
function rgbToHsl(color)
{
  const r = color[0] / 255;
  const g = color[1] / 255;
  const b = color[2] / 255;

  let cmin = Math.min(r,g,b),
      cmax = Math.max(r,g,b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;

  if (delta == 0)
    h = 0;
  else if (cmax == r)
    h = ((g - b) / delta) % 6;
  else if (cmax == g)
    h = (b - r) / delta + 2;
  else
    h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0)
    h += 360;

  l = (cmax + cmin) / 2;

  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return [h, s, l];
}

/**
 * Converts an HSL color to RGB
 * @param {number[]} hsl - The HSL array to convert
 * @returns {number[]} The RGB array
 * @example
 * hslToRgb([0, 100, 50]); // [255, 0, 0] (red)
 */
function hslToRgb(hsl) {
  let h = hsl[0];
  let s = hsl[1];
  let l = hsl[2];

  s /= 100;
  l /= 100;

  let c = (1 - Math.abs(2 * l - 1)) * s,
      x = c * (1 - Math.abs((h / 60) % 2 - 1)),
      m = l - c / 2,
      r = 0,
      g = 0,
      b = 0;

  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }

  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  return [r, g, b];

}

/**
 * Returns the complimentary color of a given color
 * @param {number[]} color - The RGB array to get the complimentary color of
 * @returns {number[]} The complimentary RGB array
 * @example
 * getComplimentaryColor([255, 0, 0]); // [0, 255, 255] (cyan)
 */
function getComplimentaryColor(color) {
  // compliment of black is white
  if (color[0] === 0 && color[1] === 0 && color[2] === 0) {
    return [255, 255, 255];
  }
  if (color[0] === 255 && color[1] === 255 && color[2] === 255) {
    return [0, 0, 0];
  }
  const hsl = rgbToHsl(color);
  const h = (hsl[0] + 180) % 360;
  return hslToRgb([h, hsl[1], hsl[2]]);
}

/**
 * Returns the triadic colors of a given color
 * @param {number[]} color - The RGB array to get the triadic colors of
 * @returns {number[], number[]} Returns an array containing two RGB colors
 */
function getTriadicColors(color) {
  const hsl = rgbToHsl(color);
  const h1 = (hsl[0] + 120) % 360; 
  const h2 = (hsl[0] + 240) % 360;
  return [hslToRgb([h1, hsl[1], hsl[2]]), hslToRgb([h2, hsl[1], hsl[2]])];
}

/**
 * Returns the tetra colors of a given color
 * @param {number[]} color - The RGB array to get the tetrad colors of
 * @returns {number[], number[], number[]} Returns an array containing three RGB colors
 */
function getTetradColors(color) {
  const hsl = rgbToHsl(color)
  const h1 = (hsl[0] + 90) % 360
  const h2 = (hsl[0] + 180) % 360
  const h3 = (hsl[0] + 270) % 360
  return [hslToRgb([h1, hsl[1], hsl[2] ]), hslToRgb([h2, hsl[1], hsl[2]]), hslToRgb([h3, hsl[1], hsl[2] ])];
}


module.exports = {
  hexToRgb,
  rgbToHex,
  lightenColor,
  darkenColor,
  getComplimentaryColor,
  rgbToHsl,
  hslToRgb,
  getTriadicColors,
  getTetradColors
};
