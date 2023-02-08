import { useState } from "react";
import { marked } from "marked";
import "./App.css";

/* a heading element (H1 size), a sub heading element (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.*/

function App() {
  const [text, setText] = useState(`
  # H1
  ## H2
  [link](https://www.freecodecamp.org/)
  \`inline code\`
  \`\`\`
  code block
  \`\`\`
  * list item
  > blockquote
  ![image](https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/FreeCodeCamp_logo.png/800px-FreeCodeCamp_logo.png)
  **bolded text**
  `);

  marked.setOptions({
    breaks: true
  });

  return (
    <div className="App">
      <textarea
        id="editor"
        onChange={(event) => {
          setText(event.target.value);
        }}
        value={text}
      ></textarea>
      <div
        id="preview"
        dangerouslySetInnerHTML={{
          __html: marked(text),
        }}
      ></div>
    </div>
  );
}

export default App;
