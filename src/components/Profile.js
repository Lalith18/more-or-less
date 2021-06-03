import "./Profile.css";
import Countup from "react-countup";
import Options from "./Options";

const Profile = ({ name, followers, photo, showAns, checkMore, checkLess }) => {
  return (
    <div className="image" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${photo})` }}>
      <div className="details">
        <h2 className="profile-name">{name}</h2>
        {displayAns(showAns, followers, checkMore, checkLess)}
      </div>
    </div>
  );
};

const displayAns = (showAns, followers, checkMore, checkLess) => {
  if (showAns === "show") {
    return <h3 className='followers'>{followers.toLocaleString()}</h3>;
  } else if (showAns === "animate") {
    return (
      <h3 className='followers'>
        <Countup end={followers} duration={1.5} separator={','} />
      </h3>
    );
  } else {
    return <Options checkMore={checkMore} checkLess={checkLess} />;
  }
};

export default Profile;