# Sakura Themes

Sakura themes for both Lit and direct usage in any project by CDN

## Themes

light, dark, red, orange, blue, green, darkRed, darkBlue, darkOrange, darkGreen

## Usage in Lit

First, in your Lit project, run:
```
npm install sakura-themes
```

Then at the top of your Lit Component do as follows.

Example using 'light' (default ) theme:
```
import { LitElement, html, css } from 'lit';

import { light } from 'sakura-themes';

class MyWebCom extends LitElement {
  static styles = light;
  
```

Example using 'dark' theme:
```
import { LitElement, html, css } from 'lit';

import { dark } from 'sakura-themes';

class MyWebCom extends LitElement {
  static styles = dark;
  
```

If you like to define your own css combined with a sakura theme:
```
import { LitElement, html, css } from 'lit';

import { light } from 'sakura-themes';

class MyWebComponent extends LitElement {
  static styles = [light,
  css`
    h1 { color: #ff0000 }
  `];
```

## Usage in index.html

**CDN** (*recommended*):

1. Simply add this in your `<head>` tag:

    ```html
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sakura-themes/sakura.css" type="text/css">
    ```

**Manually**:

1. Download the file:

    ```bash
    wget "https://raw.githubusercontent.com/biensurerodezee/sakura-themes/master/sakura.css"
    ```

    **OR** download directly:
    [sakura.css](https://raw.githubusercontent.com/biensurerodezee/sakura-themes/master/sakura.css)

2. Link it from HTML:

    ```html
    <link rel="stylesheet" href="sakura.css" type="text/css">
    ```

## Example

https://raw.githubusercontent.com/biensurerodezee/sakura-themes/master/index.html
