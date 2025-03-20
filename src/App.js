import React, {
  Component
} from 'react';
import Header from './components/Header.js';
import Form from './components/Form.js';
import Navigation from './components/Navigation.js';
import AdCard from './components/AdCard.js';
import PostCard from './components/PostCard.js';
// images
import ImageUrl from './images/vecteezy_cute-animal-on-nature-ai-image_26992352.jpg';
import ImageUrl2 from './images/vecteezy_cute-animal-on-nature-ai-image_26992429.jpg';
import ImageUrl3 from './images/vecteezy_cute-animal-on-nature-ai-image_26993651.jpg';


class App extends Component {
  state = {
    // create an array to hold posts
    post: [{
      image: ImageUrl,
      imageAlt: 'Picture of cat',
      title: 'My Post Title',
      description: 'My Post Description'
    }, {
      image: ImageUrl2,
      imageAlt: 'Lioness cub',
      title: 'My Blog Title',
      description: 'My Blog Description'
    }, {
      image: ImageUrl3,
      imageAlt: 'Unicorn Profile',
      title: 'Unicorn Title',
      description: 'Unicorn Description'
    }], 
      color: 'purple',
    }
//mounting the component
componentDidMount() {
  console.log('componentDidMount() lifecycle');
  setTimeout(() => {
    this.setState({ color: 'hotpink' });
  }, 5000);
}


  // create function for input values
  getInput = e => {
    this.setState({
      title: e.target.value
    });
  }
  addItem = e => {
    e.preventDefault();
    this.setState({
      post: [...this.state.post, {
        title: this.state.title
      }]
    });
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
      return <Form key = {
        element
      }
      val = {
        element
      }
      deleteItem = {
        () => this.deleteItem(element)
      }
      />
    })
    console.log('render lifecycle');
    return ( 
    <div style = {styles.container}>
      <Header pgTitle = 'MingoBook'
      searchPlaceholder = "Search"/>
      <main style = {styles.main}>
      <Navigation style = {
        styles.navigation
      }/> <div style = {
        styles.form
      }>
      <PostCard/>
      <Form getInput = {
        this.getInput
      }
      addItem = {
        this.addItem
      }
      Button btnText = "Post"
      style = {
        this.Button
      }/> </div> <div style = {styles.post}> {thePost} </div> <aside style = {styles.aside}>
      Advertisers <AdCard title = "Ad Title 1"
      subtitle = "Ad Subtitle 1"
      adsContent = "Ad Content 1"/>
      <AdCard title = "Ad Title 2"
      subtitle = "Ad Subtitle 2"
      adsContent = "Ad Content 2"/>
      <AdCard title = "Ad Title 3"
      subtitle = "Ad Subtitle 3"
      adsContent = "Ad Content 3"/>
      </aside> </main> </div>
    );
  }
}

export default App;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: '#f0f0f0',
  },
  form: {
    display: 'flex',
    flexDirection: 'row',
    flex: '1',
    margin: '10px auto',
    padding: '20px',
    //overflowY: 'auto',
    minHeight: '400px',
    width: '400px',
    border: '2px solid #00bbf9ff',
  },
  navigation: {
    width: '20%',
    background: '#f0f4f8',
    padding: '20px',
    boxSizing: 'border-box',
    borderRight: '2px solid #ddd',
  },
  main: {
    flex: '1',
    marginTop: '60px', // Account for the fixed header
    padding: '20px',
    overflowY: 'auto',
    color: '#00bbf9ff',
    /*  display: 'flex',
     flexDirection:'row',
     justifyContent: 'space-around', */
    background: '#f0f0f0',
  },
  aside: {
    //flex: '2',
    margin: '0 auto', // Account for the fixed header
    padding: '20px',
    //overflowY: 'auto',
    minHeight: '400px',
    width: '20%',
    paddingBottom: '60px',
    border: '2px solid #00bbf9ff',
  },
  post: {
    flex: '2',
    //marginTop: '60px', // Account for the fixed header
    padding: '20px',
    //overflowY: 'auto',
    minHeight: '100px',
    width: '60%',
    textAlign: 'center',
    margin: '10px',
    border: '2px solid #00bbf9ff',
  }
};