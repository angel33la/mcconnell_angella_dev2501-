import React, { Component } from 'react';
import Header from './components/Header.js';
import Nav from './components/Nav.js';
import Footer from'./components/Footer.js';
import Ads from './components/Ads.js';
import MyForm from './components/MyForm.js';
import MyBtn from './components/buttons/MyBtn.js';
import ButtonStandard from './components/buttons/ButtonStandard.js';
import ButtonSmall from './components/buttons/ButtonSmall.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header pgTitle="Home" placeholder="Search..."/>
        <div style={styles.container}>
          <Nav style={styles.nav}/>
          <div style={styles.content}>
            <MyForm />
            <div>
              <MyBtn btnText="Click Me" />
              <ButtonStandard btnText="Standard Button" />
              <ButtonSmall btnText="Small Button" />
            </div>
          </div>
          <aside style={styles.ads}>
            Advertisement
            <Ads adsTitle="Ads"                                              
            adsSubTitle="Advertise with us"
            adsContent="ad content"/>
            <Ads adsTitle="Ads"
            adsSubTitle="Advertise with us"
            adsContent="ad content"/>
            <Ads adsTitle="Ads"
            adsSubTitle="Advertise with us"
            adsContent="ad content"/>
          </aside>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    background: 'WhiteSmoke',
    padding: '10px',
    height: '100vh'
  },
  '@media (min-width: 1024px)': {
    button: {
      fontSize: 16
    }
  },
  nav: {
    display: 'flex',
  },
  content: {
    display: 'flex',
    flex: 2
  },
  ads: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: 'White',
    height: 'fit-content'
  }
}
