const colorUtils = require("./index");

describe("colorUtils", () => {
  describe("hexToRgb", () => {
    it("should convert a hex color to RGB", () => {
      // Test cases
      expect(colorUtils.hexToRgb("#000000")).toEqual({ r: 0, g: 0, b: 0 });
      expect(colorUtils.hexToRgb("#ffffff")).toEqual({
        r: 255,
        g: 255,
        b: 255,
      });
      expect(colorUtils.hexToRgb("#ff0000")).toEqual({ r: 255, g: 0, b: 0 });
      expect(colorUtils.hexToRgb("#00ff00")).toEqual({ r: 0, g: 255, b: 0 });
      expect(colorUtils.hexToRgb("#0000ff")).toEqual({ r: 0, g: 0, b: 255 });
    });
  });

  describe("rgbToHex", () => {
    it("should convert RGB values to a hex color", () => {
      // Test cases
      expect(colorUtils.rgbToHex(0, 0, 0)).toBe("#000000");
      expect(colorUtils.rgbToHex(255, 255, 255)).toBe("#ffffff");
      expect(colorUtils.rgbToHex(255, 0, 0)).toBe("#ff0000");
      expect(colorUtils.rgbToHex(0, 255, 0)).toBe("#00ff00");
      expect(colorUtils.rgbToHex(0, 0, 255)).toBe("#0000ff");
    });
  });

  describe("lightenColor", () => {
    it("should lighten a color by a given percentage", () => {
      // Test cases
      expect(colorUtils.lightenColor({ r: 0, g: 0, b: 0 }, 50)).toEqual({
        r: 128,
        g: 128,
        b: 128,
      });
      expect(colorUtils.lightenColor({ r: 255, g: 255, b: 255 }, 50)).toEqual({
        r: 255,
        g: 255,
        b: 255,
      });
      expect(colorUtils.lightenColor({ r: 255, g: 0, b: 0 }, 50)).toEqual({
        r: 255,
        g: 128,
        b: 128,
      });
      expect(colorUtils.lightenColor({ r: 0, g: 255, b: 0 }, 50)).toEqual({
        r: 128,
        g: 255,
        b: 128,
      });
      expect(colorUtils.lightenColor({ r: 0, g: 0, b: 255 }, 50)).toEqual({
        r: 128,
        g: 128,
        b: 255,
      });
    });
  });

  describe("darkenColor", () => {
    it("should darken a color by a given percentage", () => {
      // Test cases
      expect(colorUtils.darkenColor({ r: 0, g: 0, b: 0 }, 50)).toEqual({
        r: 0,
        g: 0,
        b: 0,
      });
      expect(colorUtils.darkenColor({ r: 255, g: 255, b: 255 }, 50)).toEqual({
        r: 128,
        g: 128,
        b: 128,
      });
      expect(colorUtils.darkenColor({ r: 255, g: 0, b: 0 }, 50)).toEqual({
        r: 128,
        g: 0,
        b: 0,
      });
      expect(colorUtils.darkenColor({ r: 0, g: 255, b: 0 }, 50)).toEqual({
        r: 0,
        g: 128,
        b: 0,
      });
      expect(colorUtils.darkenColor({ r: 0, g: 0, b: 255 }, 50)).toEqual({
        r: 0,
        g: 0,
        b: 128,
      });
    });
  });
});
