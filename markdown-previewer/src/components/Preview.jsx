import React from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import EmojiConvertor from 'emoji-js';
import '../custom.css';


marked.setOptions( {
  breaks: true, //--- Convert carriage returns to <br>
  gfm: true, //--- Enable GitHub Flavored Markdown (enabled by default)
  tables: true, //--- Enable GFM tables
  // sanitize: true, //--- Deprecated, use DOMPurify or similar if needed
  pedantic: false, //--- Conform to obscure parts of `markdown.pl`
  smartLists: true, //--- Use smart list behavior
  smartypants: false, //--- Use "smart" typographic punctuation
} );

//>>>Create an instance of the EmojiConvertor:
const emoji = new EmojiConvertor();
//>>> Replace with Unicode emoji characters:
emoji.replace_mode = 'unified';


const Preview = ( { markdown } ) => {
  const getMarkdownText = () => {
    //--- Convert markdown to HTML
    let html = marked( markdown );
    //--- Convert :emoji: shortcodes to Unicode emojis
    html = emoji.replace_colons( html );
    //--- Sanitize the HTML
    const sanitizedHtml = DOMPurify.sanitize( html );
    return { __html: sanitizedHtml };
  };


  return (
    <div>
      <h2 className='h4 text-info mb-3'><i class="bi bi-eye me-2"></i><u>Preview</u></h2>
      <div
        id='preview'
        className='border rounded p-3'
        dangerouslySetInnerHTML={getMarkdownText()}
      />
    </div>
  );
};

export default Preview;