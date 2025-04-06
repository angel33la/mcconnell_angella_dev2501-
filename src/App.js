import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router";
import Header from "./components/Header.js";
import Navigation from "./components/Navigation.js";
import AdCard from "./components/AdCard.js";
//pages
import Newsfeed from "./pages/Newsfeed.js";
import Messages from "./pages/Messages.js";
import Notification from "./pages/Notification.js";
import Settings from "./pages/Settings.js";
import Dashboard from "./pages/Dashboard.js";
// images
import AdImage from "./images/bombayComm.jpg";
import AdImage2 from "./images/glassesComm.jpg";
import AdImage3 from "./images/iceCreamComm.jpg";
import Profile from "./pages/Profile.js";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

//parent component
function App() {
  const notify = () => toast("Wow so easy !");
  return (
    <div>
      <Header pgTitle="MingoBook" searchPlaceholder="Search" />
      <main style={styles.container}>
        <Navigation style={styles.navigation} />
        {/* <main style={styles.main}> */}
        <section style={styles.middle}>
          <Router>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/Newsfeed" element={<Newsfeed />} />
              <Route path="/Messages" element={<Messages />} />
              <Route path="/Notification" element={<Notification />} />
              <Route path="/Settings" element={<Settings />} />
              <Route path="/Profile" element={<Profile />} />
            </Routes>
          </Router>
          <div>
            <button onClick={notify}>Notify !</button>
            <ToastContainer />
          </div>
        </section>
        <aside style={styles.aside}>
          Advertisers
          <AdCard
            image={AdImage}
            title="Bombay Sapphire"
            subtitle="Sparkling Lemon: Drink like its friday!"
            adsContent="Ad Content 1"
          />
          <AdCard
            image={AdImage2}
            title="Designer Eyewear Inc"
            subtitle="Buy One Get One Free"
            adsContent="Ad Content 2"
          />
          <AdCard
            image={AdImage3}
            title="Vanilla Bean Creamery"
            subtitle="Hand crafted in small batches."
            adsContent="Ad Content 3"
          />
        </aside>
      </main>
    </div>
  );
}

export default App;

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    // Added this to push the nav left and the ads right
    justifyContent: "space-between",
    height: "100%",
    overflow: "hidden",
    backgroundColor: "#f0f0f0",
  },
  navigation: {
    // display: "flex",
  },
  middle: {
    // display: "flex",
    // flexDirection: "column",
    overflow: "hidden",
    width: "60%",
    padding: "2%",
    color: "#9b5de5ff",
  },
  aside: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#f0f0f0",
    padding: '2%',
    color: "#00bbf9ff",
  },
};



//Steps when creating your layout with Flexbox
// 1. Define the parent container as a flex container.
// display: flex;
// 2. Define the direction of the flex items.
// flexDirection: row; // or column
// 3. Define the alignment of the flex items.
// justifyContent: space-between; // or space-around, center, etc.
