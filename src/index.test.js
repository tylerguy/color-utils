const colorUtils = require("./index");

describe("colorUtils", () => {
  describe("hexToRgb", () => {
    it("should convert a hex color to RGB", () => {
      // Test cases
      expect(colorUtils.hexToRgb("#000000")).toEqual([0, 0, 0]);
      expect(colorUtils.hexToRgb("#ffffff")).toEqual([255, 255, 255]);
      expect(colorUtils.hexToRgb("#ff0000")).toEqual([255, 0, 0]);
      expect(colorUtils.hexToRgb("#00ff00")).toEqual([0, 255, 0]);
      expect(colorUtils.hexToRgb("#0000ff")).toEqual([0, 0, 255]);
    });
  });

  describe("rgbToHex", () => {
    it("should convert RGB values to a hex color", () => {
      // Test cases
      expect(colorUtils.rgbToHex([0, 0, 0])).toBe("#000000");
      expect(colorUtils.rgbToHex([255, 255, 255])).toBe("#ffffff");
      expect(colorUtils.rgbToHex([255, 0, 0])).toBe("#ff0000");
      expect(colorUtils.rgbToHex([0, 255, 0])).toBe("#00ff00");
      expect(colorUtils.rgbToHex([0, 0, 255])).toBe("#0000ff");
    });
  });

  describe("lightenColor", () => {
    it("should lighten a color by a given percentage", () => {
      // Test cases
      expect(colorUtils.lightenColor([0, 0, 0], 50)).toEqual([128, 128, 128]);
      expect(colorUtils.lightenColor([255, 255, 255], 50)).toEqual([
        255, 255, 255,
      ]);
      expect(colorUtils.lightenColor([255, 0, 0], 50)).toEqual([255, 128, 128]);
      expect(colorUtils.lightenColor([0, 255, 0], 50)).toEqual([128, 255, 128]);
      expect(colorUtils.lightenColor([0, 255, 0], 50)).toEqual([128, 255, 128]);
    });
  });

  describe("darkenColor", () => {
    it("should darken a color by a given percentage", () => {
      // Test cases
      expect(colorUtils.darkenColor([0, 0, 0], 50)).toEqual([0, 0, 0]);
      expect(colorUtils.darkenColor([255, 255, 255], 50)).toEqual([
        128, 128, 128,
      ]);
      expect(colorUtils.darkenColor([255, 0, 0], 50)).toEqual([128, 0, 0]);
      expect(colorUtils.darkenColor([0, 255, 0], 50)).toEqual([0, 128, 0]);
      expect(colorUtils.darkenColor([0, 0, 255], 50)).toEqual([0, 0, 128]);
    });
  });
});
