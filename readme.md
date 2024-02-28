<!-- markdownlint-disable MD033 MD036 -->
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

## Functions

<dl>
<dt><a href="#hexToRgb">hexToRgb(hex)</a> ⇒ <code>Array.&lt;number&gt;</code></dt>
<dd><p>Converts a hex color to an RGB array</p>
</dd>
<dt><a href="#rgbToHex">rgbToHex(rgb)</a> ⇒ <code>string</code></dt>
<dd><p>Converts an RGB array to a hex color</p>
</dd>
<dt><a href="#lightenColor">lightenColor(color, percent)</a> ⇒ <code>Array.&lt;number&gt;</code></dt>
<dd><p>Lightens a color by a given percentage</p>
</dd>
<dt><a href="#darkenColor">darkenColor(color, percent)</a> ⇒ <code>Array.&lt;number&gt;</code></dt>
<dd><p>Darkens a color by a given percentage</p>
</dd>
<dt><a href="#rgbToHsl">rgbToHsl(color)</a> ⇒ <code>Array.&lt;number&gt;</code></dt>
<dd><p>Converts an RGB color to HSL</p>
</dd>
<dt><a href="#hslToRgb">hslToRgb(hsl)</a> ⇒ <code>Array.&lt;number&gt;</code></dt>
<dd><p>Converts an HSL color to RGB</p>
</dd>
<dt><a href="#getComplimentaryColor">getComplimentaryColor(color)</a> ⇒ <code>Array.&lt;number&gt;</code></dt>
<dd><p>Returns the complimentary color of a given color</p>
</dd>
</dl>

<a name="hexToRgb"></a>

## hexToRgb(hex) ⇒ <code>Array.&lt;number&gt;</code>

Converts a hex color to an RGB array

**Kind**: global function
**Returns**: <code>Array.&lt;number&gt;</code> - The RGB array
**Throws**:

- <code>Error</code> If the input is not a valid hex color

| Param | Type | Description |
| --- | --- | --- |
| hex | <code>string</code> | The hex color to convert |

**Example**

```js
hexToRgb('#ff0000'); // [255, 0, 0] (red)
```

<a name="rgbToHex"></a>

## rgbToHex(rgb) ⇒ <code>string</code>

Converts an RGB array to a hex color

**Kind**: global function
**Returns**: <code>string</code> - The hex color

| Param | Type | Description |
| --- | --- | --- |
| rgb | <code>Array.&lt;number&gt;</code> | The RGB array to convert |

**Example**

```js
rgbToHex([255, 0, 0]); // '#ff0000' (red)
```

<a name="lightenColor"></a>

## lightenColor(color, percent) ⇒ <code>Array.&lt;number&gt;</code>

Lightens a color by a given percentage

**Kind**: global function
**Returns**: <code>Array.&lt;number&gt;</code> - The lightened RGB array
**Throws**:

- <code>Error</code> If the percentage is not between 0 and 100

| Param | Type | Description |
| --- | --- | --- |
| color | <code>Array.&lt;number&gt;</code> | The RGB array to lighten |
| percent | <code>number</code> | The percentage to lighten the color by |

**Example**

```js
lightenColor([255, 0, 0], 50); // [255, 128, 128] (light red)
```

<a name="darkenColor"></a>

## darkenColor(color, percent) ⇒ <code>Array.&lt;number&gt;</code>

Darkens a color by a given percentage

**Kind**: global function
**Returns**: <code>Array.&lt;number&gt;</code> - The darkened RGB array
**Throws**:

- <code>Error</code> If the percentage is not between 0 and 100

| Param | Type | Description |
| --- | --- | --- |
| color | <code>Array.&lt;number&gt;</code> | The RGB array to darken |
| percent | <code>number</code> | The percentage to darken the color by |

**Example**

```js
darkenColor([255, 0, 0], 50); // [128, 0, 0] (dark red)
```

<a name="rgbToHsl"></a>

## rgbToHsl(color) ⇒ <code>Array.&lt;number&gt;</code>

Converts an RGB color to HSL

**Kind**: global function
**Returns**: <code>Array.&lt;number&gt;</code> - The HSL array

| Param | Type | Description |
| --- | --- | --- |
| color | <code>Array.&lt;number&gt;</code> | The RGB array to convert |

**Example**

```js
rgbToHsl([255, 0, 0]); // [0, 100, 50] (red)
```

<a name="hslToRgb"></a>

## hslToRgb(hsl) ⇒ <code>Array.&lt;number&gt;</code>

Converts an HSL color to RGB

**Kind**: global function
**Returns**: <code>Array.&lt;number&gt;</code> - The RGB array

| Param | Type | Description |
| --- | --- | --- |
| hsl | <code>Array.&lt;number&gt;</code> | The HSL array to convert |

**Example**

```js
hslToRgb([0, 100, 50]); // [255, 0, 0] (red)
```

<a name="getComplimentaryColor"></a>

## getComplimentaryColor(color) ⇒ <code>Array.&lt;number&gt;</code>

Returns the complimentary color of a given color

**Kind**: global function
**Returns**: <code>Array.&lt;number&gt;</code> - The complimentary RGB array

| Param | Type | Description |
| --- | --- | --- |
| color | <code>Array.&lt;number&gt;</code> | The RGB array to get the complimentary color of |

**Example**

```js
getComplimentaryColor([255, 0, 0]); // [0, 255, 255] (cyan)
```

<a name="getComplimentaryColor.rgbToHsl"></a>

### getComplimentaryColor.rgbToHsl(color) ⇒ <code>Array.&lt;number&gt;</code>

Converts an RGB color to HSL

**Kind**: static method of [<code>getComplimentaryColor</code>](#getComplimentaryColor)
**Returns**: <code>Array.&lt;number&gt;</code> - The HSL array

| Param | Type | Description |
| --- | --- | --- |
| color | <code>Array.&lt;number&gt;</code> | The RGB array to convert |

**Example**

```js
rgbToHsl([255, 0, 0]); // [0, 100, 50] (red)
```

## License

This project is licensed under the [MIT License](LICENSE)
