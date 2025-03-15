import React, { Component } from 'react';
import Header from './components/Header.js';
import Navigation from './components/Navigation.js';
import AdCard from './components/AdCard.js';
import PostCard from './components/PostCard.js';
import Form from './components/Form.js';
// images


class App extends Component {
  state = {
    title: '',
    description: '',
    image: ''
  }
  addItem = e => {
    e.preventDefault();
    console.log(this.state.title, this.state.description, this.state.image);
    // Reset the form
    this.setState({ title: '', description: '', image: '' });
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value});
  }
  // Handle form submission
  handleSubmit = e => {
    e.preventDefault();
    this.addItem(e);
  }
  // Handle input changes
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }
  // Handle button click
  handleButtonClick = e => {
    e.preventDefault();
    this.addItem(e);
  }
  render() {
    return (
      <div>
        <Header pgTitle='MingoBook' searchPlaceholder="Search" />
          <div style={styles.container}>
            <Navigation style={styles.navigation} />
            <main style={styles.main}>
              <div style={styles.form}>
                <Form 
                  title={this.state.title} 
                  description={this.state.description}
                  image={this.state.image} 
                  addItem={this.handleSubmit} 
                  handleChange={this.handleInputChange} 
                  handleButtonClick={this.handleButtonClick}
                />
              </div>
                <aside style={styles.aside}>
                Advertisers
                  <AdCard  title="Ad Title 1" subtitle="Ad Subtitle 1" adsContent="Ad Content 1"/>
                  <AdCard  title="Ad Title 2" subtitle="Ad Subtitle 2" adsContent="Ad Content 2"/>
                  <AdCard  title="Ad Title 3" subtitle="Ad Subtitle 3" adsContent="Ad Content 3"/>  
                </aside>
                <div>
                  <PostCard />
                </div>
            </main>
          </div>
        </div>
    );
  }
}

export default App;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  },
  navigation: {
    display: 'flex',
  },
  main: {
    display: 'flex',
    flex: 2,
  },
  aside: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#f0f0f0',
    paddingLeft: 20,
    paddingRight: 20,
    color: '#00bbf9ff',
  },
};