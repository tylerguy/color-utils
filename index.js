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

module.exports = {
  hexToRgb,
  rgbToHex,
  lightenColor,
  darkenColor,
};
