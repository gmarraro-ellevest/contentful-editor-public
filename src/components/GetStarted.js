import React from 'react';
import ReactDOMServer from 'react-dom/server';
import FroalaEditor from 'react-froala-wysiwyg';
import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';
import $ from 'jquery';

class GetStarted extends React.Component {
  
  inlineDestinationURL = () => {
    return prompt('Enter URL')
  }

  inlineButtonText = () => {
    return prompt('Enter Button Text (or Enter to use default: "Get Started")') || 'Get Started'
  }

  render() {
    return (
      <div className="article__module">
        <h6>Money is Power.</h6>
  
        <p>
          <em>Invest Like a Woman.</em>
        </p>
  
        <a 
          href={this.inlineDestinationURL()} 
          className="button button--primary button--inverse"
        >
          {this.inlineButtonText()}
        </a>
      </div>
    )
  }

}

const handleGetStarted = () => {
  $.FroalaEditor.DefineIcon('get-started', { NAME: 'user-plus' })
  $.FroalaEditor.RegisterCommand('get-started', {
    title: 'Get Started',
    type: 'icon',
    callback: function() {
      const GS = new GetStarted
      this.html.insert(ReactDOMServer.renderToString(GS.render()))
    }
  })
}

handleGetStarted()

export default GetStarted
