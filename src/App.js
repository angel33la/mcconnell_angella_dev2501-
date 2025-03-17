import React, { Component } from 'react';
import Header from './components/Header.js';
import Navigation from './components/Navigation.js';
import AdCard from './components/AdCard.js';
import PostCard from './components/PostCard.js';
import Form from './components/Form.js';
// images
import ImageUrl from './images/vecteezy_cute-animal-on-nature-ai-image_26992352.jpg';
import ImageUrl2 from './images/vecteezy_cute-animal-on-nature-ai-image_26993651.jpg'
import ImageUrl3 from './images/vecteezy_cute-animal-on-nature-ai-image_26992429.jpg';


class App extends Component {
  state = {
    // create an array to hold posts
    post: [{
      title: 'Sample Title',
      description: 'Sample Description',
      image: ImageUrl
    },
  {
      title: 'Sample Title',
      description: 'Sample Description',
      image: ImageUrl2
    },
  {
      title: 'Sample Title',
      description: 'Sample Description',
      image: ImageUrl3
    }]
  }
  // create function for input values
  getInput = e => {
    this.setState({post: e.target.value});
  }
  addItem = e => {
    e.preventDefault();
    this.setState({ 
      post: [...this.state.post, { title: this.state.title}] });
    // Reset the form
    e.target.reset();
}
  render() {
  // map through the post array and create a Form component for each post
  let myPost = this.state.post.map((element, i) => {
    return <Form key={i} val={element} />
  // return <PostCard key={index} val={element} />
  }) 
    return (
      <div>
        <Header pgTitle='MingoBook' searchPlaceholder="Search" />
          <div style={styles.container}>
            <Navigation style={styles.navigation} />
            <main style={styles.main}>
            <div>
                  <PostCard />
                </div>
              <div style={styles.form}>
                <Form 
                  getInput={this.getInput} 
                  addItem={this.addItem} 
                  Button="Submit"
                />
                {myPost}
              </div>
                <aside style={styles.aside}>
                Advertisers
                  <AdCard  title="Ad Title 1" subtitle="Ad Subtitle 1" adsContent="Ad Content 1"/>
                  <AdCard  title="Ad Title 2" subtitle="Ad Subtitle 2" adsContent="Ad Content 2"/>
                  <AdCard  title="Ad Title 3" subtitle="Ad Subtitle 3" adsContent="Ad Content 3"/>  
                </aside>
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
  },
  aside: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    background: '#f0f0f0',
    paddingLeft: 20,
    paddingRight: 20,
    color: '#00bbf9ff',
  },
};