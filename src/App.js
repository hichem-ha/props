import React from "react";
import HandleName from "./profile/HandleName";
import Profilee from "./profile/profilee";
import Profimg from "./profile/profimg";

function App() {
  const fullName='Jeff Bezos';
    const bio='Jeffrey Preston Jorgensen was born on January 12, 1964, in Albuquerque, New Mexico, U.S. He is an American technology entrepreneur and founder of e-commerce giant Amazon.com. The company began as an Internet merchant of books and expanded to a wide variety of products and services, most recently video streaming and audio streaming. Amazon.com is currently the world’s largest Internet sales company on the World Wide Web.';
    const profession=' Founder, Chairman & CEO of Amazon.com';
    const img='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg/800px-Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg';
  return (
    <div>
      <HandleName className='alert' fullName={fullName}/>
      <div className="App">
      <Profimg img={img} />
      <Profilee fullName={fullName} bio={bio}  profession={profession}/>
       
    </div>
    </div>
    
  );
}

export default App;
