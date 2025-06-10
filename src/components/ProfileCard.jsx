import "./ProfileCard.css";

const ProfileCard = ({ src, name, bio }) => {
  return (
    <div className="profile-card-bg">
      <div className="profile-card">
        <img className="profile-card-img" src={src} />
        <h2 className="profile-card-name">{name}</h2>
        <p className="profile-card-bio">{bio}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
