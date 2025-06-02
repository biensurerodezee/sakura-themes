# Sakura Themes

Sakura themes for Lit

## Themes

light, dark, red, orange, blue, green, darkRed, darkBlue, darkOrange, darkGreen

## Usage

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
