import { css } from 'lit';

const sakura = css`

  /* Universal Sakura Styles using variables */
  * {
    font-size: 62.5%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
  }

  :host {
    font-size: 1.8rem;
    line-height: 1.618;
    max-width: 38em;
    margin: auto;
    color: var(--text-color);
    background-color: var(--primary-background);
    padding: 13px;
    display: block;
  }

  @media (max-width: 684px) {
    :host {
      font-size: 1.53rem;
    }
  }
  @media (max-width: 382px) {
    :host {
      font-size: 1.35rem;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.1;
    font-family: inherit;
    font-weight: 700;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    word-break: break-word;
  }

  h1 { font-size: 2.35em; }
  h2 { font-size: 2em; }
  h3 { font-size: 1.75em; }
  h4 { font-size: 1.5em; }
  h5 { font-size: 1.25em; }
  h6 { font-size: 1em; }

  p {
    margin: 0 0 2.5rem;
  }

  small, sub, sup {
    font-size: 75%;
  }

  hr {
    border-color: var(--primary-color);
  }

  a {
    text-decoration: none;
    color: var(--primary-color);
  }
  a:visited {
    color: var(--text-color);
  }
  a:hover {
    color: var(--secondary-color);
    border-bottom: 2px solid var(--link-hover-border);
  }

  ul {
    padding-left: 1.4em;
    margin-bottom: 2.5rem;
  }

  li {
    margin-bottom: 0.4em;
  }

  blockquote {
    padding: 0.8em;
    border-left: 5px solid var(--primary-color);
    background-color: var(--secondary-background);
    margin-bottom: 2.5rem;
  }

  blockquote p {
    margin-bottom: 0;
  }

  img, video {
    height: auto;
    max-width: 100%;
    margin-bottom: 2.5rem;
  }

  pre {
    background-color: var(--secondary-background);
    padding: 1em;
    overflow-x: auto;
    margin-bottom: 2.5rem;
    font-size: 0.9em;
  }

  code, kbd, samp {
    font-size: 0.9em;
    padding: 0 0.5em;
    background-color: var(--secondary-background);
    white-space: pre-wrap;
  }

  pre > code {
    padding: 0;
    background-color: transparent;
    white-space: pre;
    font-size: 1em;
  }

  .card {
      background: var(--secondary-background);
      padding: 1rem;
      border-radius: 0.5rem;
      white-space: normal;
      overflow-wrap: break-word;
      max-width: 100%;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 2rem;
  }

  td, th {
    padding: 0.5em;
    border-bottom: 1px solid var(--secondary-background);
  }

  input, textarea {
    border: 1px solid var(--text-color);
  }

  input:focus, textarea:focus {
    border: 1px solid var(--primary-color);
  }

  textarea {
    width: 100%;
  }

  .button, button, input[type=submit], input[type=reset], input[type=button], input[type=file]::file-selector-button {
    display: inline-block;
    padding: 5px 10px;
    background-color: var(--primary-color);
    color: var(--primary-background);
    border: 1px solid var(--primary-color);
    border-radius: 1px;
    cursor: pointer;
    box-sizing: border-box;
  }

  .button:hover, button:hover, input[type=submit]:hover, input[type=reset]:hover, input[type=button]:hover, input[type=file]::file-selector-button:hover {
    background-color: var(--secondary-color);
    color: var(--primary-background);
  }

  .button:focus-visible, button:focus-visible, input[type=submit]:focus-visible, input[type=reset]:focus-visible, input[type=button]:focus-visible, input[type=file]::file-selector-button:focus-visible {
    outline: 2px solid var(--secondary-color);
  }

  textarea, select, input {
    color: var(--text-color);
    padding: 6px 10px;
    background-color: var(--secondary-background);
    border: 1px solid var(--secondary-background);
    border-radius: 4px;
    box-shadow: none;
    box-sizing: border-box;
  }

  textarea:focus, select:focus, input:focus {
    border: 1px solid var(--primary-color);
    outline: 0;
  }

  input[type=checkbox]:focus {
    outline: 1px dotted var(--primary-color);
  }

  label, legend, fieldset {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

`;

export const light = css`
  /* Light Theme (default) */
  :host {
    --primary-color: #1d7484;
    --primary-background: #f9f9f9;
    --secondary-color: #982c61;
    --secondary-background: #f1f1f1;
    --text-color: #4a4a4a;
    --link-hover-border: #4a4a4a;
  }
${sakura}`;

export const dark = css`
  /* Dark Theme */
  :host {
    --primary-color: #90cdf4;
    --primary-background: #1a202c;
    --secondary-color: #63b3ed;
    --secondary-background: #2d3748;
    --text-color: #e2e8f0;
    --link-hover-border: #718096;
  }
${sakura}`;

export const red = css`
  /* Red Theme */
  :host {
    --primary-color: #c0392b;
    --primary-background: #fff5f5;
    --secondary-color: #e74c3c;
    --secondary-background: #fbeaea;
    --text-color: #5a1a15;
    --link-hover-border: #90271f;
  }
${sakura}`;

export const orange = css`
  /* Orange Theme */
  :host {
    --primary-color: #e67e22;
    --primary-background: #fff8f0;
    --secondary-color: #d35400;
    --secondary-background: #fdf2e9;
    --text-color: #4a2e0f;
    --link-hover-border: #6e3b0c;
  }
${sakura}`;

export const blue = css`
  /* Blue Theme */
  :host {
    --primary-color: #2980b9;
    --primary-background: #f0f8ff;
    --secondary-color: #3498db;
    --secondary-background: #eaf6fc;
    --text-color: #1c2c40;
    --link-hover-border: #2c3e50;
  }
${sakura}`;

export const green = css`
  /* Green Theme */
  :host {
    --primary-color: #27ae60;
    --primary-background: #f3fff5;
    --secondary-color: #2ecc71;
    --secondary-background: #e9fbe9;
    --text-color: #224d2c;
    --link-hover-border: #145a32;
  }
${sakura}`;

export const darkRed = css`
  /* Red Dark Theme */
  :host {
    --primary-color: #feb2b2;
    --primary-background: #2a1a1a;
    --secondary-color: #fc8181;
    --secondary-background: #441e1e;
    --text-color: #ffeef0;
    --link-hover-border: #f56565;
  }
${sakura}`;

export const darkBlue = css`
  /* Blue Dark Theme */
  :host {
    --primary-color: #90cdf4;
    --primary-background: #1a202c;
    --secondary-color: #63b3ed;
    --secondary-background: #2a4365;
    --text-color: #e2e8f0;
    --link-hover-border: #4fd1c5;
  }
${sakura}`;

export const darkOrange = css`
  /* Orange Dark Theme */
  :host {
    --primary-color: #f6ad55;
    --primary-background: #2a1f14;
    --secondary-color: #ed8936;
    --secondary-background: #3b2615;
    --text-color: #fffaf0;
    --link-hover-border: #fbd38d;
  }
${sakura}`;

export const darkGreen = css`
  /* Green Dark Theme */
  :host {
    --primary-color: #9ae6b4;
    --primary-background: #1a2e1d;
    --secondary-color: #68d391;
    --secondary-background: #25432f;
    --text-color: #e6fffa;
    --link-hover-border: #81e6d9;
  }
${sakura}`;
