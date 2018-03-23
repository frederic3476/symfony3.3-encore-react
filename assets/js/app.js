

// assets/js/app.js
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import tether from 'tether';
//import bootstrap from 'bootstrap';

import ItemCard from './Components/ItemCard';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      entries: []
    };
  }

  componentDidMount() {
    fetch('/data')
      .then(response => response.json())
      .then(entries => {
        this.setState({
          entries
        });
      });
  }

  handleClick(i) {
    alert(i);
  }

  render() {
    return (
      <MuiThemeProvider>
        <div style={{ display: 'flex' }}>
          {this.state.entries.map(
            ({ id, author, avatarUrl, title, description }) => (
              <ItemCard
                key={id}
                author={author}
                title={title}
                subtitle = 'toto'
                avatarUrl={avatarUrl}
                children = 'tata'
                style={{ flex: 1, margin: 10 }}
                onClick= {() => this.handleClick(id)}
              >
                {description}
              </ItemCard>
            )
          )}
        </div>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

