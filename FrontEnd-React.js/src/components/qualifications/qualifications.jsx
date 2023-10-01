import "./qualifications.css";
import { Carousel } from 'react-bootstrap'

const Qualifications = () => {
  return (
    <div>
      <span className="quali-text">My Skils</span>
      <div className="qualifications-container">
        <Carousel>
          <Carousel.Item>
            <div className="qualification">
              <div className="content html"></div>
              <Carousel.Caption>
                <h1>html</h1>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="qualification">
              <div className="content css"></div>
              <Carousel.Caption><h1>css</h1></Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="qualification">
              <div className="content javascript"></div>
              <Carousel.Caption><h1>javascript</h1></Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="qualification">
              <div className="content bootstrap"></div>
              <Carousel.Caption><h1>bootstrap</h1></Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="qualification">
              <div className="content react"></div>
              <Carousel.Caption><h1>react</h1></Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="qualification">
              <div className="content vue"></div>
              <Carousel.Caption><h1>vue</h1></Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="qualification">
              <div className="content angular"></div>
              <Carousel.Caption><h1>angular</h1></Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="qualification">
              <div className="content c-plus-plus"></div>
              <Carousel.Caption><h1>c++</h1></Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="qualification">
              <div className="content c-sharp"></div>
              <Carousel.Caption><h1>c#</h1></Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="qualification">
              <div className="content kotlin"></div>
              <Carousel.Caption><h1>kotlin</h1></Carousel.Caption>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Qualifications;
