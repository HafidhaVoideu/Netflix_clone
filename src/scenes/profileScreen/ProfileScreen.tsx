import "./profileScreen.css";
import avatar from "../../assets/avatar.png";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { getUser } from "../../redux/features/userSlice";
import { v4 as uuidV4 } from "uuid";
import ProfileItem from "../../components/profileItem/ProfileItem";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router";

const ProfileScreen = () => {
  const user = useSelector(getUser);
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        console.log("error:", error);
        // An error happened.
      });
  };

  const OFFERS = [
    {
      id: uuidV4(),
      offer: "Netflix Standard",
      quality: "1080p",
      action: "subscribe",
      isActivated: false,
    },

    {
      id: uuidV4(),

      offer: "Netflix Basic",
      quality: "780p",
      action: "subscribe",
      isActivated: false,
    },

    {
      id: uuidV4(),

      offer: "Netflix Premium",
      quality: "4k+HDR",
      action: "current package",
      isActivated: false,
    },
  ];

  return (
    <div className="padding--class">
      <section className="profile">
        <h1 className="profile__title">Edit Profile</h1>
        <article className="profile__content">
          <header className="profile__header">
            <img className="profile__img" src={avatar} alt="profile-picture" />

            <div className="profile__header-info">
              <p> {user.email}</p>
              <h1> Plans(Current Plan: premium) </h1>
            </div>
          </header>
          <p className="profile__date">Renewal date: 04/03/2021</p>

          <ul className="profile__list">
            {OFFERS.map(({ offer, quality, action, isActivated, id }) => (
              <ProfileItem
                key={id}
                offer={offer}
                quality={quality}
                action={action}
                isActivated={isActivated}
              />
            ))}
          </ul>

          <button className="profile__btn" onClick={handleLogout}>
            sign out
          </button>
        </article>
      </section>
    </div>
  );
};

export default ProfileScreen;
