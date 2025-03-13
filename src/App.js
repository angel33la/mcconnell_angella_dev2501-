import React, { Component } from 'react';
import Header from './components/Header.js';
import Navigation from './components/Navigation.js';
import AdCard from './components/AdCard.js';
import PostCard from './components/PostCard.js';
import Form from './components/Form.js';
// images
import Logo from './images/logo.png';
import AvatarSrc from './images/icons8-fortune-teller-48.png';
import MyAvatar from './components/MyAvatar.js';


class App extends Component {
  render() {
    return (
      <div>
        <Header pgTitle='MingoBook' searchPlaceholder="Search" />
        <div style={styles.container}>
          <Navigation style={styles.navigation} />
          <div style={styles.main}>
            <Form />
          </div>
          <aside style={styles.aside}>
            Advertisers
              <AdCard  title="Ad Title 1" subtitle="Ad Subtitle 1" adsContent="Ad Content 1"/>
              <AdCard  title="Ad Title 2" subtitle="Ad Subtitle 2" adsContent="Ad Content 2"/>
              <AdCard  title="Ad Title 3" subtitle="Ad Subtitle 3" adsContent="Ad Content 3"/>  
            </aside>
        </div>
        <PostCard />
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