import React, { useState } from 'react';
import Editor from './Editor';
import Preview from './Preview';
import '../custom.css';

function App () {
  const [ markdown, setMarkdown ] = useState(
    `# Heading 1   
---
## Subheading
---

[This is a link](https://example.com)

Here is some \`<div>inline code</div>\`

\`\`\`
// This is a code block

function helloWorld() {
console.log('Hello, World!');
}

\`\`\`

- Here is an unordered list item
- Here is another unordered list item
    - Here is a nested list item
        - And a further nested list item

1. Here is an ordered list item
2. Here is a second ordered list item
    2.1. Here is a sub-ordered list item

> This is a blockquote

And here is an image:
![This is image Alt text](https://via.placeholder.com/150)

**This is Bolded Text**

_This is Italicized Text_

~This is Strikethrough Text~` );

  const handleChange = ( e ) => {
    setMarkdown( e.target.value );
  };

  return (
    <div className='App'>
      <div className='container mt-3'>

        <header className='mb-5 border-bottom'><h1 className='text-info text-center mb-3'><i class="bi bi-filetype-md me-2"></i>Markdown Previewer</h1></header>

        <div className='row'>

          <div className='text-center rounded w-75 m-auto mb-5 pt-2 bg-info-subtle'>
            <p>To learn more about Markdown and view more examples, visit <a id='p-link' href='https://nix7amcm.github.io/FCC-Technical-Documentation-Page/' target='_blank' rel='noopener noreferrer'>Markdown Docs</a>.</p>
          </div>

          <div className='col-md-6 editor-wrap bg-info-subtle py-3'>
            <Editor markdown={markdown} onChange={handleChange} />
          </div>

          <div className='col-md-6 preview-wrap bg-info-subtle py-3'>
            <Preview markdown={markdown} />
          </div>

        </div>

        <footer class="d-flex justify-content-center align-items-end border-top mt-5 pt-4 pb-2">
          <p class='fs-6 mb-0'>
            Coded by
            <a
              id="footer-link"
              href="https://github.com/Nix7amcm"
              target='_blank'
              rel='noopener noreferrer'
            > Nix7amcm⚡</a>
          </p>
        </footer>

      </div>
    </div>
  );

}

export default App;