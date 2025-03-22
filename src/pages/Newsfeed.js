import React, { Component } from 'react';
import PostCard from '../components/PostCard.js';
import Form from '../components/Form.js';
import sanitizeHtml from "sanitize-html"
import ContentEditable from 'react-contenteditable';
// images
import ImageUrl from '../images/vecteezy_cute-animal-on-nature-ai-image_26992352.jpg';
import ImageUrl2 from '../images/vecteezy_cute-animal-on-nature-ai-image_26992429.jpg';
import ImageUrl3 from '../images/vecteezy_cute-animal-on-nature-ai-image_26993651.jpg';


class Newsfeed extends Component {
  // 1. Declare the state object
state = {
    // create an array to hold posts
    post: [{
        title: 'Sample Title',
        description: 'Sample Description',
        image: ImageUrl,
        imageSize: 100,
        imageAlt: 'Picture of cat',
    },
{
        title: 'Sample Title',
        description: 'Sample Description',
        image: ImageUrl2,
        imageSize: 100,
        imageAlt: 'Lioness cub',
    },
{
        title: 'Sample Title',
        description: 'Sample Description',
        image: ImageUrl3,
        imageSize: 100,
        imageAlt: 'Unicorn Profile',
    }],
    color: 'pink',
}

//mounting the component
componentDidMount() {
console.log('componentDidMount() lifecycle');
setTimeout(() => {
    this.setState({ color: 'pink' });
}, 5000);
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
    // Clear the form
    e.target.reset()

}

  // 6. Delete Method - CRUD - USE THE FILTER METHOD FOR THIS. MDN has a good example.
deleteItem = element => {
    const newPost = this.state.post.filter(post => post !== element);
    /*  [...this.state.post];
    newPost.splice(element, 1); */
    this.setState({
        post: newPost
    });
}
  // edit item function
editable = () => {
    const [content, setContent] = React.useState("")

    const onContentChange = React.useCallback(evt => {
    const sanitizeConf = {
        allowedTags: ["b", "i", "a", "p"],
        allowedAttributes: { a: ["href"] }
};

    setContent(sanitizeHtml(evt.currentTarget.innerHTML, sanitizeConf))
    }, [])

    return (
    <ContentEditable
        onChange={onContentChange}
        onBlur={onContentChange}
        html={content} />
    )
}

  //7. Update Method - CRUD


    render() {
  // map through the post array and create a Form component for each post
    let post = this.state.post.map((element, i) => {
    return <PostCard key={i} val={element} deleteItem={() => this.deleteItem(element)} editable={this.editable}/>
}) 

    return (
        <section style={styles.middle}>
                <Form 
                    getInput={this.getInput}
                    addItem={this.addItem}
                    children="Submit"
                />
                {post}
        </section>
               
    );
}
}

export default Newsfeed;

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
        padding: '2%',
        color: '#9b5de5ff',
},
    aside:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#f0f0f0',
        paddingLeft: 20,
        paddingRight: 20,
        color: '#00bbf9ff',
},
};