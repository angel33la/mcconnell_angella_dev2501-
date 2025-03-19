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
      image: ImageUrl,
      imageAlt: 'Woman Profile'
    },
  {
      title: 'Sample Title',
      description: 'Sample Description',
      image: ImageUrl2,
      imageAlt: 'Man Profile'
    },
  {
      title: 'Sample Title',
      description: 'Sample Description',
      image: ImageUrl3,
      imageAlt: 'Woman Profile'
    }]
  }
  // create function for input values
  getInput = e => {
    this.setState({title: e.target.value});
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
  let thePost = this.state.post.map((element, i) => {
    return <Form key={i} val={element} />
  //return <PostCard key={i} val={element} />
  }) 
    return (
      <div style={styles.container}>
        <Header pgTitle='MingoBook' searchPlaceholder="Search" />
          <main style={styles.main}>
            <Navigation style={styles.navigation} />
            <PostCard/>
            <div style={styles.form}>
                <Form 
                  getInput={this.getInput} 
                  addItem={this.addItem} 
                  Button="Post"
                />
            </div>
                <div style={styles.post}>
                  {thePost}
                </div>
              <aside style={styles.aside}>
                Advertisers
                  <AdCard  title="Ad Title 1" subtitle="Ad Subtitle 1" adsContent="Ad Content 1"/>
                  <AdCard  title="Ad Title 2" subtitle="Ad Subtitle 2" adsContent="Ad Content 2"/>
                  <AdCard  title="Ad Title 3" subtitle="Ad Subtitle 3" adsContent="Ad Content 3"/>  
                </aside>
            </main>
            </div>
    );
  }
}

export default App;

const styles = {
  container: {
   /*  display: 'flex',
    flexDirection: 'column', */
    backgroundColor: '#f0f0f0',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  navigation: {
    display: 'flex',
  },
  main: {
    display: 'flex',
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#f0f0f0',
    paddingLeft: 20,
    paddingRight: 20,
    color: '#00bbf9ff',
  },
  aside: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    background: '#f0f0f0',
    paddingLeft: 20,
    paddingRight: 20,
    color: '#00bbf9ff',
  },
};