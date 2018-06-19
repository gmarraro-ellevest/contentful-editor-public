import React from 'react';
import ReactDOM from 'react-dom';

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import '../public/styles/editor.css'

// Require Font Awesome.
import 'font-awesome/css/font-awesome.css';
import 'froala-editor/css/plugins/special_characters.min.css';
import  'froala-editor/css/third_party/embedly.min.css';


// Require Editor JS files.
import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/js/plugins/special_characters.min.js';
import 'froala-editor/js/third_party/embedly.min.js';
import 'froala-editor/js/froala_editor.pkgd.min.js';

import EditorComponent from './components/EditorComponent';

// Include special components if required.
// import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';
// import FroalaEditorA from 'react-froala-wysiwyg/FroalaEditorA';
// import FroalaEditorButton from 'react-froala-wysiwyg/FroalaEditorButton';
// import FroalaEditorImg from 'react-froala-wysiwyg/FroalaEditorImg';
// import FroalaEditorInput from 'react-froala-wysiwyg/FroalaEditorInput';

// Render Froala Editor component.
ReactDOM.render(<EditorComponent tag='textarea'/>, document.getElementById('app'));
