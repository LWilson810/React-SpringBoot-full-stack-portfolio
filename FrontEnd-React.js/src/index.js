import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import WebContent from './app';

ReactDOM.render(<WebContent />, document.getElementById('root'));

const toggle = document.querySelector('.hover-show');

if(toggle != null) {
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
  });
}


let Icons = document.querySelectorAll('.navigation .icon');

Icons.forEach((icon) => {
  icon.addEventListener('click', () => {
    changeactive();

    icon.classList.add('active-nav');
  });
});

function changeactive() {
  Icons.forEach((icon) => {
    icon.classList.remove('active-nav');
  });
}
