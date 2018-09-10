import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Sonny's Solutions</h1>
       <p>Hello, World! Isn't that a great line? As an experienced newbie to coding, I got to where I thought that line was silly. Now, however, I see why we use it.</p>
       <p>Oh, sure, we need some words to fill in our empty spaces, but "Hello World" seems a bit...novice? Childish? And yet, when you finally publish something to the internet, where the entire world has access to it, what better statement could there be than "Hello World". </p>
       <p>This site is not complete. It may never be. It is a continual work in progress. Here you can watch as this site is built from the ground up, starting here, with just some simple html.</p>
       <p>In order to get this far, however, I did have to do some backend work. I set up a simple node server running a MongoDB database. I also ran a create-react-app script to set up all of the necessary files and scripts to run a React App.</p>
       <p>The hardest part so far has been getting the app to run on Heroku. Follwing a tutorial on YouTube, <a href ="https://www.youtube.com/watch?v=71wSzpLyW9kI">(thanks Traversy Media!)</a> was able to get it mostly ready. </p>
       <p>After deploying, I kept getting an error, however. "Error R10 (Boot timeout) -> Web process failed to bind to $PORT within 60 seconds of launch". A quick change in my server.js file from "const port = process.env.PORT | 5000;" to "const port = process.env.PORT || 5000;" cleared it up.</p>
       <p>Well, that is all for now. Come back soon, see what has changed! Until next time! -Lawrence </p>

      </div>
    );
  }
}

export default App;
