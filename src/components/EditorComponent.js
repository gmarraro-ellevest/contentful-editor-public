import React from 'react';
import FroalaEditor from 'react-froala-wysiwyg';
import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';
import FroalaEditorButton from 'react-froala-wysiwyg/FroalaEditorButton';
import PullQuote from './PullQuote';
import GetStarted from './GetStarted';
import $ from 'jquery';

class EditorComponent extends React.Component {
  constructor () {
    super();

    this.handleModelChange = this.handleModelChange.bind(this);

    this.state = {
      model: 'Add text',
    };

  }

  config = {
    charCounterCount: false,
    toolbarInline: false,
    pluginsEnabled: ['align', 'charCounter', 'codeBeautifier', 'codeView', 'colors', 'draggable', 'embedly', 'emoticons', 'entities', 'file', 'fontFamily', 'fontSize', 'fullscreen', 'image', 'imageManager', 'inlineStyle', 'lineBreaker', 'link', 'lists', 'paragraphFormat', 'paragraphStyle', 'quickInsert', 'quote', 'save', 'specialCharacters', 'table', 'url', 'video', 'wordPaste'],
    toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|', 'fontSize', 'color', 'paragraphStyle', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', 'check', '|', 'insertLink', 'insertImage', 'imageManager', 'insertVideo', 'embedly', 'insertFile', 'insertTable', '|', 'emoticons', 'specialCharacters', 'insertHR', 'selectAll', 'clearFormatting', '|', 'spellChecker', 'help', 'html', '|', 'undo', 'redo', '|', 'save', '|', 'dropdown', 'pullquote', 'get-started', 'embed-tweet'],
    requestWithCredentials: false,
    requestWithCORS: false
  };

  handleModelChange (model) {
    this.setState({
      model: model,
      preview: model
    });
  }

  render () {
    return (
      <div>
        <FroalaEditor
          model={this.state.model}
          onModelChange={this.handleModelChange}
          config={this.config}
          />
        <br/>
        <FroalaEditorView
          model={this.state.model}
          config={this.config}
        />
      </div>
    );
  }
}

export default EditorComponent
