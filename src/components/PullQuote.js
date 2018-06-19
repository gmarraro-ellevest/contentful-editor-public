import React from 'react';
import ReactDOMServer from 'react-dom/server';
import FroalaEditor from 'react-froala-wysiwyg';
import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';
import $ from 'jquery';

class PullQuote extends React.Component {

  quote(quote, url) {
    const tweetQuote = encodeURIComponent(`“${quote}”`)
    return `https://twitter.com/intent/tweet?text=${tweetQuote}&url=${encodeURIComponent(url + '?utm_medium=social&utm_source=twitter&utm_content=share-quote')}&via=ellevest`
  }

  render(quote) {
    return (
      <blockquote className="pullquote">
        <span className="pullquote__text">
          &ldquo;{quote}&rdquo;
          <br/>
          <a href={this.quote(quote)} target="_blank" className="pullquote__tweet">
            <i className="fa fa-twitter fa-2x" aria-hidden="true" ></i>
          </a>
        </span>
      </blockquote>
    )
  }

}


const handlePullQuote = () => {
  $.FroalaEditor.DefineIcon('pullquote', { NAME: 'twitter'})
  $.FroalaEditor.RegisterCommand('pullquote', {
    title: 'Pull Quote',
    type: 'icon',
    callback: function() {
      const PQ = new PullQuote
      let quote = this.selection.text()
      this.html.insert(ReactDOMServer.renderToString(PQ.render(quote)))
    }
  })
}

handlePullQuote()

export default PullQuote
