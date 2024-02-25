# Color-Utils

## Description

Provides several utilities for color manipulation

## Installation

Create a `.npmrc` file at the root of your project, adding the following on a new line

```ini
registry=https://npm.pkg.github.com/
```

You can then add this as a dependency using:

```shell
npm install @tylerguy/color-utils
```

## Usage

```js
rgbToHex(r, g, b) // returns a string in the format "#rrggbb"
```

Converts a rgb color to its hex equivalent

```js
hexToRgb("#rrggbb") // returns an array of integers '[ r, g, b ]'
```

Converts a hexadecimal color to its rgb equivalent

```js 
darkenColor([r, g, b], percent) // returns an array of integers '[ r, g, b ]'
```

Darkens an input rgb color by a percentage ( 0 - 100 )

```js
lightenColor([r, g, b], percent) // returns an array of integers '[ r, g, b ]'
```

Lightens an input rgb color by a percentage ( 0 - 100 )

## License

This project is licensed under the [MIT License](LICENSE)
