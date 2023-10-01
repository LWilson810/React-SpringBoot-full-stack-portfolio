import './home.css';
import img from '../props/my_avatar.jpg';
import Buttons from '../button/button';
import { BsMouse } from 'react-icons/bs';

function Home() {
  return (
    <div id='home' className='container home-container'>
      <div className='logo'>
        <div className='hover-show'>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
        </div>

        <img src={img} alt='' />
        {/* > */}
      </div>
      <h1 style={{textAlign:'center', marginTop:0}}>Click me</h1>
      <a href='#footer' className='scroll-down'>
        <hr />
        <h5>scroll down</h5>
        <BsMouse className='scroll' />
        <hr />
      </a>

      <h2>
        <span>About Me</span> <br />
        <p className = 'center'>
          W3C certified full-stack engineer with 8 years of experience designing and developing exceptional customer
          experiences through the use of technologies such as JavaScript, TypeScript, Python, HTML/CSS and responsive web
          design.<br></br> Specifically, I am eager to incorporate advanced functionalities, such as chatbot, semantic search ,
and image processing.
        </p>
      </h2>

      <Buttons />
    </div>
  );
}

export default Home;
