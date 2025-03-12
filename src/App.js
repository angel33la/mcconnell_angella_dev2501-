import React, { Component } from 'react';
import Header from '../components/Header.js';
import Navigation from './components/Navigation.js';
import AdCard from '../components/AdCard.js';
import PostCard from '../components/PostCard.js';
import Form from '../components/Form.js';


class App extends Component {
  render() {
    const logo = '../images/logo.png';
    const searchPlaceholder = 'Search';
    const avatarSrc = '../images/avatar.png';
    const adImage1 = 'https://via.placeholder.com/300x150';
    const adTitle1 = 'Ad Title 1';
    const adSubtitle1 = 'Ad Subtitle 1';
    const adImage2 = 'https://via.placeholder.com/300x150';
    const adTitle2 = 'Ad Title 2';
    const adSubtitle2 = 'Ad Subtitle 2';
    const postAvatar = 'https://via.placeholder.com/40x40';
    const postTitle = 'Post Title';
    const postDescription = 'Post Description';

    const handleEdit = () => {
      console.log('Edit button clicked');
    };

    const handleDelete = () => {
      console.log('Delete button clicked');
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Form submitted');
    };

    return (
      <div>
        <Header logo={logo} searchPlaceholder={searchPlaceholder} avatarSrc={avatarSrc} />
        <div style={{ display: 'flex' }}>
          <Navigation />
          <div style={{ padding: '20px' }}>
            <Form title="Post Title" description="Post Description" onSubmit={handleSubmit} />
            <PostCard
              avatar={postAvatar}
              title={postTitle}
              description={postDescription}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </div>
          <div style={{ padding: '20px' }}>
            <AdCard image={adImage1} title={adTitle1} subtitle={adSubtitle1} />
            <AdCard image={adImage2} title={adTitle2} subtitle={adSubtitle2} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
