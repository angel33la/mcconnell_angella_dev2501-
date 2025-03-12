import React, { Component } from 'react';
import Header from './components/Header.js';
import Navigation from './components/Navigation.js';
import AdCard from './components/AdCard.js';
import PostCard from './components/PostCard.js';
import Form from './components/Form.js';
//images
import Logo from './images/logo.png';
import AvatarSrc from './images/avatar.png';

class App extends Component {
  render() {
    // const logo = '../images/logo.png';
    // const searchPlaceholder = 'Search';
    // const avatarSrc = '../images/avatar.png';
    // const adImage1 = 'https://via.placeholder.com/300x150';
    // const adTitle1 = 'Ad Title 1';
    // const adSubtitle1 = 'Ad Subtitle 1';
    // const adImage2 = 'https://via.placeholder.com/300x150';
    // const adTitle2 = 'Ad Title 2';
    // const adSubtitle2 = 'Ad Subtitle 2';
    // const postAvatar = 'https://via.placeholder.com/40x40';
    // const postTitle = 'Post Title';
    // const postDescription = 'Post Description';

    // const handleEdit = () => {
    //   console.log('Edit button clicked');
    // };

    // const handleDelete = () => {
    //   console.log('Delete button clicked');
    // };

    // const handleSubmit = (event) => {
    //   event.preventDefault();
    //   console.log('Form submitted');
    // };

    return (
      <div>
        <Header logo={Logo} searchPlaceholder="Search" avatarSrc={AvatarSrc} />
        <main>
          <Navigation />
          <div>
            <Form title="Post Title" description="Post Description" />
            <PostCard/>
          </div>
          <aside style={{ padding: '20px' }}>
            <AdCard  title="Ad Title 1" subtitle="Ad Subtitle 1" />
            <AdCard  title="Ad Title 2" subtitle="Ad Subtitle 1" /> 
          </aside>
        </main>
      </div>
    );
  }
}

export default App;
