import React, { Component } from 'react';
import Header from './components/Header.js';
import Navigation from './components/Navigation.js';
import AdCard from './components/AdCard.js';
import PostCard from './components/PostCard.js';
import Form from './components/Form.js';
//import Button from './components/buttons/Button.js';
// images
import ImageUrl from './images/vecteezy_cute-animal-on-nature-ai-image_26992352.jpg';
import ImageUrl2 from './images/vecteezy_cute-animal-on-nature-ai-image_26993651.jpg'
import ImageUrl3 from './images/vecteezy_cute-animal-on-nature-ai-image_26992429.jpg';


class App extends Component {
  state = {
    // create an array to hold posts
  post: [{
      image: ImageUrl,
      imageAlt: 'Woman Profile',
      title: 'Sample Title',
      description: 'Sample Description'
    },
  {
      image: ImageUrl2,
      imageAlt: 'Man Profile',  
      title: 'Sample Title',
      description: 'Sample Description'
      
    },
  {
      image: ImageUrl3,
      imageAlt: 'Woman Profile',
      title: 'Sample Title',
      description: 'Sample Description'
      
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
// delete function
 deleteItem = key => {
  const newPost = [...this.state.post];
  newPost.splice(key, 1);
  this.setState(() => ({
    post: newPost
  })); 
  /* removeItem=(key) =>{
    const newPost = this.state.post.filter(posts => posts.key !== key);
    this.setState({posts: newPost});
  }; */
}
  render() {
  // map through the post array and create a Form component for each post
  let thePost = this.state.post.map((element, i) => {
    //add delete button
    return <Form key={i} val={element}
    deleteItem={() => this.deleteItem(i)} 
    /> 
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
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: '#f0f0f0',
  },
  form: {
    minHeight: '400px',
    width: '400px',
    margin: '10px',
    border: '2px solid #00bbf9ff',
  },
  /* navigation: {
    width: '200px',
    background: '#f0f0f0',
    paddingLeft: 20,
    paddingRight: 20,
    color: '#00bbf9ff',  
  },*/
  main: {
   /*  display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-around', */
    background: '#f0f0f0',
    paddingLeft: 20,
    paddingRight: 20,
    color: '#00bbf9ff',
  },
  aside: {
    minHeight: '400px',
    width: '300px',
    margin: '10px',
    padding: '5px',
    paddingBottom: '60px',
    border: '2px solid #00bbf9ff',
  },
  post: {
    minHeight: '100px',
    width: '50px',
    margin: '10px',
    border: '2px solid #00bbf9ff',
  }
};