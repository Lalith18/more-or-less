import './Carousel.css';
import Profile from './Profile';
import { useMediaQuery } from 'react-responsive'

const Carousel = ({profiles, x, checkMore, checkLess}) => {
    const isPhone  = useMediaQuery({ query: '(max-width: 650px)' })
    return (
        <div className="carousel">
          {profiles.map((profile, index) => {
            return (
              <div
                key={index}
                className="slide"
                style={{ transform: isPhone ? `translateY(${x}%)` : `translateX(${x}%)` }}
              >
                <Profile
                  name={profile.name}
                  prevName= {index !== 0? profiles[index-1].name : 'something'}
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