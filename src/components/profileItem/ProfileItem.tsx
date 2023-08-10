type profileProps = {
  offer: string;
  quality: string;
  action: string;
  isActivated: boolean;
};

import "./profileItem.css";

const ProfileItem = ({ offer, quality, action, isActivated }: profileProps) => {
  return (
    <li className="item">
      <div className="item__content">
        <h1 className="item__title">{offer}</h1>
        <h2 className="item__subtitle">{quality}</h2>
      </div>

      <button disabled={isActivated} className="item__btn">
        {" "}
        {action}{" "}
      </button>
    </li>
  );
};

export default ProfileItem;
