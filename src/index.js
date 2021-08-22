import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import 'font-awesome/css/font-awesome.min.css';
import marked from 'marked';


// Toolbar component
const Toolbar = (props) => {
  return (
    <div className="toolbar" >
      {props.text}

    </div>
  );
};

// Preview component
const Preview = (props) => {
  return (
    <div id="preview"
      dangerouslySetInnerHTML={{
        __html: marked(props.markdown)
      }}
    />
  );
};

// Editor component
const Editor = (props) => {
  return (
    <textarea
      id="editor"
      type="text"
      onChange={props.onChange}
      value={props.markdown}
    />
  );
};

// Main app component
class App extends React.Component {
  constructor() {
    super()
    //state
    this.state = {
      markdown: PLACEHOLDER,
      editorMaxed: false,
      previewMaxed: false
    };
    // binding
    this.handleChange = this.handleChange.bind(this);
    this.maxEditor    = this.maxEditor.bind(this);
    this.maxPreview   = this.maxPreview.bind(this);
  }

  // functions
  handleChange(event) {
    this.setState({
      markdown: event.target.value
    });
  }
  maxEditor(event) {
    this.setState({
      editorMaxed: !this.state.editorMaxed
    })
  }
  maxPreview(event) {
    this.setState({
      previewMaxed: !this.state.previewMaxed
    })
  }
  // html content
  render() {
    return (
      <div>
        <div className="editorContainer">
          <Toolbar
            text= "Editor"
            onClick={this.maxEditor} />
          <Editor  markdown={this.state.markdown} onChange={this.handleChange} />
        </div>
        <div className="previewContainer">
          <Toolbar text= "Preview" onclick={this.maxPreview} />
          <Preview markdown={this.state.markdown} />
        </div>
      </div>
    )
  }
}

const PLACEHOLDER = `# Markdown Previewer/cheat sheet, Powered By React.

# This is an h1 header
## This is an h2 header
### This is an h3 header

Code is made like so: \`<div></div>\`, between 2 escaped backticks.

\`\`\`
// this is multi-line code:

function example(arg1, arg2) {
  if (arg1 == '\`\`\`' && arg2 == '\`\`\`') {
    return result;
  }
}
\`\`\`

This makes text **bold** or _italic_.

This makes it **_both!_**

Here is how to ~~cross something out~~.

[Links](https://www.freecodecamp.org) are made with brackets followed by (url)

> Block Quotes are made with >

Tables:

Header1 | Header2 | Header3
------------ | ------------- | -------------
Content | between | lines
cols will expand | to fit | content appropriately

- Lists
  - made with
     - indented dashes
        - each further indent
          - gives another level


1. numbered lists
12. any number
65. followed by .

## Images are imbedded by ![name] followed by (url)

![React Logo](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiFn7os6CfuLKMSW7Gfoz-woJc8Oe02RQJcA&usqp=CAU)
`;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
