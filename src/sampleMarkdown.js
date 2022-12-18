const h1 = "\n\n\n\n\n\n# This is an h1 tag";
const h2 = "## This is an h2 tag";
const text = `\nYou can also make text **bold**... whoa!\n
Or _italic_.\n
Or... wait for it... **_both!_**\n
And feel free to go crazy ~~crossing stuff out~~.`;
const link = "There's also [links](https://www.freecodecamp.org)";
const blockQuote = "> Block Quotes!";
const list = `
- And of course there are lists.
  - Some are bulleted.
    - With different indentation levels.
      - That look like this.
`;
const code = "Heres some code, `<div></div>`, between 2 backticks.\
<pre>\n\
  <code>\n\
    \n\
    // this is multi-line code:\n\
    function anotherExample(firstLine, lastLine) {\n\
      if (firstLine == '```' && lastLine == '```') {\n\
        return multiLineCode;\n\
      }\n\
    }\n\
  </code>\n\
</pre>\n\
";
const image = "![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)";

export { h1, h2, link, list, blockQuote, code, image, text };
