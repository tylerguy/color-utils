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

function rgbToHex([r, g, b]) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

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

module.exports = {
  hexToRgb,
  rgbToHex,
  lightenColor,
  darkenColor,
  getComplimentaryColor,
  rgbToHsl,
  hslToRgb
};
