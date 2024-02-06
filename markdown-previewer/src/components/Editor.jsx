import React from 'react';
import '../custom.css';

const Editor = ({ markdown, onChange }) => {
  return (
    <div>
      <h2 className='h4 text-info mb-3'><i class="bi bi-pencil-square me-2"></i><u>Editor</u></h2>
      
      <textarea
        id='editor'
        className='form-control'
        value={markdown}
        onChange={onChange}
        rows='10'
      />
    
    </div>
  );
};

export default Editor;