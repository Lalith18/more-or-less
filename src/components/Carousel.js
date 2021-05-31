import './Carousel.css';
import Profile from './Profile';

const Carousel = ({profiles, x, checkMore, checkLess}) => {
    return (
        <div className="carousel">
          {profiles.map((profile, index) => {
            return (
              <div
                key={index}
                className="slide"
                style={{ transform: `translate(${x}%)` }}
              >
                <Profile
                  name={profile.name}
                  followers={profile.followers}
                  photo={profile.photo}
                  showAns={profile.showAns}
                  checkMore={checkMore}
                  checkLess={checkLess}
                />
              </div>
            );
          })}
        </div>
    )
}

export default Carousel;