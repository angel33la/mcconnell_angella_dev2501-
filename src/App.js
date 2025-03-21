import React, { Component } from 'react';
import Header from './components/Header.js';
import Navigation from './components/Navigation.js';
import AdCard from './components/AdCard.js';
import PostCard from './components/PostCard.js';
import Form from './components/Form.js';
// images
// import ImageUrl from './images/vecteezy_cute-animal-on-nature-ai-image_26992352.jpg';
// import ImageUrl2 from './images/vecteezy_cute-animal-on-nature-ai-image_26992429.jpg'
// import ImageUrl3 from './images/vecteezy_cute-animal-on-nature-ai-image_26993651.jpg';


class App extends Component {
  // 1. Declare the state object
  state = {
    // create an array to hold posts
    post: [{
      title: 'Sample Title',
      description: 'Sample Description',
      // image: 'https://via.placeholder.com/150'
    },
  {
      title: 'Sample Title',
      description: 'Sample Description',
      // image: 'https://via.placeholder.com/150'
    },
  {
      title: 'Sample Title',
      description: 'Sample Description',
      // image: 'https://via.placeholder.com/150'
    }]
  }

//2. Create your lifecycle methods - componentDidMount, componentDidUpdate, componentWillUnmount

  
// 3. Create your custom functions

  // 4. Get input values
  // create function for input values
  getInput = e => {
    this.setState({ title: e.target.value, description: e.target.value, image: e.target.value });
    // this.setState({[e.target.name]: e.target.value});
    // console.log(this.state.title, this.state.description, this.state.image);
  }
  // 5.Create Method - CRUD
  addItem = e => {
    console.log('Add Item');
    e.preventDefault();
    this.setState({ post: [...this.state.post, { title: this.state.title, description: this.state.description, image: this.state.image }] });
    // Reset the form
    // this.setState({ title: '', description: '', image: '' })
    e.target.reset()

  }

  // 6. Delete Method - CRUD - USE THE FILTER METHOD FOR THIS. MDN has a good example.


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
                  // These are not needed.  Match the input with the function name.
                  // title={this.state.title} 
                  // description={this.state.description}
                  // image={this.state.image}
                  getInput={this.getInput}
                  // This needs to match what is on the form and the function. 
                  // addItem={this.handleSubmit} 
                  addItem={this.addItem}
                  // This should be the prop from the button. Look to see what you called it.
                  // Button="Submit"
                  children="Submit"
                />
                {post}
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
    // Added this to push the nav left and the ads right
    justifyContent: 'space-between',
    height: '100%',
    backgroundColor: '#f0f0f0'
  },
  navigation: {
    display: 'flex',
  },
  middle: {
    display: 'flex',
    flexDirection: 'column',
    padding: '2%'
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