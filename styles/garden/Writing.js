import styled from "styled-components"

export const SyledMarkdownWrapper = styled.div(({ theme }) => {
  const {
    colors: { primary, secondary },
    settings: {
      small: { size, line_height },
    },
  } = theme

  return `
    details {
      display: block;
    }

    summary {
      display: list-item;
    }

    a {
      background-color: initial;
    }

    a:active,
    a:hover {
      outline-width: 0;
    }

    strong {
      font-weight: inherit;
      font-weight: bolder;
    }

    h1 {
      margin: 0.67em 0;
    }

    img {
      border-style: none;
    }

    code,
    kbd,
    pre {
      font-family: monospace, monospace;
    }

    hr {
      box-sizing: initial;
      height: 0;
      overflow: visible;
    }

    input {
      font: inherit;
      margin: 0;
    }

    input {
      overflow: visible;
    }

    [type="checkbox"] {
      box-sizing: border-box;
      padding: 0;
    }

    * {
      box-sizing: border-box;
    }

    input {
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
    }

    a {
      color: #0366d6;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    strong {
      font-weight: 600;
    }

    hr {
      height: 0;
      margin: 15px 0;
      overflow: hidden;
      background: transparent;
      border: 0;
      border-bottom: 1px solid #dfe2e5;
    }

    hr:after,
    hr:before {
      display: table;
      content: "";
    }

    hr:after {
      clear: both;
    }

    table {
      border-spacing: 0;
      border-collapse: collapse;
    }

    td,
    th {
      padding: 0;
    }

    details summary {
      cursor: pointer;
    }

    kbd {
      display: inline-block;
      padding: 3px 5px;
      font: 11px SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
      line-height: 10px;
      color: #444d56;
      vertical-align: middle;
      background-color: #fafbfc;
      border: 1px solid #d1d5da;
      border-radius: 3px;
      box-shadow: inset 0 -1px 0 #d1d5da;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-top: 0;
      margin-bottom: 0;
    }

   

    h1,
    h2 {
      font-weight: 600;
    }



    h3,
    h4 {
      font-weight: 600;
    }



    h5,
    h6 {
      font-weight: 600;
    }

    p {
      margin-top: 0;
      margin-bottom: 10px;
    }

    blockquote {
      margin: 0;
    }

    ol,
    ul {
      padding-left: 0;
      margin-top: 0;
      margin-bottom: 0;
    }

    ol ol,
    ul ol {
      list-style-type: lower-roman;
    }

    ol ol ol,
    ol ul ol,
    ul ol ol,
    ul ul ol {
      list-style-type: lower-alpha;
    }

    dd {
      margin-left: 0;
    }

    code,
    pre {
      font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
      font-size: 12px;
    }

    pre {
      margin-top: 0;
      margin-bottom: 0;
    }

    hr {
      border-bottom-color: #eee;
    }

    kbd {
      display: inline-block;
      padding: 3px 5px;
      font: 11px SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
      line-height: 10px;
      color: #444d56;
      vertical-align: middle;
      background-color: #fafbfc;
      border: 1px solid #d1d5da;
      border-radius: 3px;
      box-shadow: inset 0 -1px 0 #d1d5da;
    }

    after,
    before {
      display: table;
      content: "";
    }

    after {
      clear: both;
    }

    :first-child {
      margin-top: 0 !important;
    }

    :last-child {
      margin-bottom: 0 !important;
    }

    a:not([href]) {
      color: inherit;
      text-decoration: none;
    }

    blockquote,
    details,
    dl,
    ol,
    p,
    pre,
    table,
    ul {
      margin-top: 0;
      margin-bottom: 16px;
    }

    hr {
      height: 0.25em;
      padding: 0;
      margin: 24px 0;
      background-color: #e1e4e8;
      border: 0;
    }

    blockquote {
      padding: 0 1em;
      color: #6a737d;
      border-left: 0.25em solid #dfe2e5;
    }

    blockquote > :first-child {
      margin-top: 0;
    }

    blockquote > :last-child {
      margin-bottom: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-top: 24px;
      margin-bottom: 16px;
      font-weight: 600;
      line-height: 1.25;
    }


    ol,
    ul {
      padding-left: 2em;
    }

    ol ol,
    ol ul,
    ul ol,
    ul ul {
      margin-top: 0;
      margin-bottom: 0;
    }

    li {
      word-wrap: break-all;
    }

    li > p {
      margin-top: 16px;
    }

    li + li {
      margin-top: 0.25em;
    }

    dl {
      padding: 0;
    }

    dl dt {
      padding: 0;
      margin-top: 16px;
      font-style: italic;
      font-weight: 600;
    }

    dl dd {
      padding: 0 16px;
      margin-bottom: 16px;
    }

    table {
      display: block;
      width: 100%;
      overflow: auto;
    }

    table th {
      font-weight: 600;
    }

    table td,
    table th {
      padding: 6px 13px;
      border: 1px solid #dfe2e5;
    }

    table tr {
      background-color: #fff;
      border-top: 1px solid #c6cbd1;
    }

    table tr:nth-child(2n) {
      background-color: #f6f8fa;
    }

    img {
      max-width: 100%;
      box-sizing: initial;
      background-color: #fff;
    }

    img[align="right"] {
      padding-left: 20px;
    }

    img[align="left"] {
      padding-right: 20px;
    }

    code {
      padding: 0.2em 0.4em;
      margin: 0;
      font-size: 85%;
      background-color: ${secondary[2]};
      color: ${primary[0]};
      border-radius: 3px;
    }

    pre {
      word-wrap: normal;
    }

    pre > code {
      padding: 0;
      margin: 0;
      font-size: 100%;
      word-break: normal;
      white-space: pre;
      background: transparent;
      border: 0;
    }

    .highlight {
      margin-bottom: 16px;
    }

    .highlight pre {
      margin-bottom: 0;
      word-break: normal;
    }

    .highlight pre,
    pre {
      padding: 16px;
      overflow: auto;
      font-size: 85%;
      line-height: 1.45;
      background-color: #f6f8fa;
      border-radius: 3px;
    }

    pre code {
      display: inline;
      max-width: auto;
      padding: 0;
      margin: 0;
      overflow: visible;
      line-height: inherit;
      word-wrap: normal;
      background-color: initial;
      border: 0;
    }

    p {
      margin: 0;
      margin-bottom: 1rem;
      font-size: ${size};
      line-height: ${line_height};
      color: ${secondary[2]};
    }
  `
})
