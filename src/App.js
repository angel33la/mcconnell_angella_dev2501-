import React, { Component } from 'react';
import Header from './components/Header.js';
import Navigation from './components/Navigation.js';
import AdCard from './components/AdCard.js';
import PostCard from './components/PostCard.js';
import Form from './components/Form.js';
// images
// import ImageUrl from './images/womanSmiling.png';
// import ImageUrl2 from './images/open-doodles-dog-jumping.png'
// import ImageUrl3 from './images/pixeltrue-yoga.svg';


class App extends Component {
  // 1. Delcare the state object
  state = {
    // create an array to hold posts
    post: [{
      title: 'Sample Title',
      description: 'Sample Description',
      image: 'https://via.placeholder.com/150'
    },
  {
      title: 'Sample Title',
      description: 'Sample Description',
      image: 'https://via.placeholder.com/150'
    },
  {
      title: 'Sample Title',
      description: 'Sample Description',
      image: 'https://via.placeholder.com/150'
    }]
  }

//2. Create your lifeclcle methods - componentDidMount, componentDidUpdate, componentWillUnmount

  
// 3. Create your custom functions

  // 4. Get input values
  // create function for input values
  getInput = e => {
    this.setState({ title: e.target.value, description: e.target.value, image: e.target.value });
  }
  // 5.Create Method - CRUD
  addItem = e => {
    console.log('Add Item');
    e.preventDefault();
    this.setState({ post: [...this.state.post, { title: this.state.title, description: this.state.description, image: this.state.image }] });
    // Reset the form
    this.setState({ title: '', description: '', image: '' })

  }

  // 6. Delete Method - CRUD

//7. Update Method - CRUD

  render() {
  // map through the post array and create a Form component for each post
  let post = this.state.post.map((element, i) => {
    return <PostCard key={i} val={element} />
  }) 

    return (
      <div>
        <Header pgTitle='MingoBook' searchPlaceholder="Search" />
          <main style={styles.container}>
            <Navigation style={styles.navigation} />
            {/* <main style={styles.main}> */}
              <div style={styles.middle}>
                <Form 
                  title={this.state.title} 
                  description={this.state.description}
                  image={this.state.image} 
                  addItem={this.handleSubmit} 
                  Button="Submit"
                />
                card here - {post}
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
  middle: {
    display: 'flex',
    flexDirection: 'column',
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