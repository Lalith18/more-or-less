import React from 'react';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './QnPage2.css';

class MyCarousel extends React.Component {
  constructor() {
    super()
    this.state = { value: 0 };
    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.setState({ value: this.state.value + 1 });
  }

  render() {
    return (
    <div>
      <button onClick= {() => this.onChange()}>Correct</button>
      <Carousel
        value={this.state.value}
        onChange={this.onChange}
        slides={[
          (<div className='first'></div>),
          (<div className='second'></div>),
          (<div className='third'></div>),
          (<img src={'https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} />),
          (<img src={'https://cdn.britannica.com/w:1100/80/140480-131-28E57753/Dromedary-camels.jpg'} />),
          (<img src={'https://images.unsplash.com/photo-1566650554919-44ec6bbe2518?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwYW5pbWFsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'} />),
        ]}
        plugins={[
          'infinite',
          {
            resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 2
              }
          },
        ]}
      />
    </div>
    );
  }
}

export default MyCarousel;