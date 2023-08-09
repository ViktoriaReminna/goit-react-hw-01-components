import { Stats } from './ProfStatList.styled';
export const StatsList = ({ stats: { followers, views, likes } }) => {
  return (
    <Stats className="stats">
      <li>
        <span className="label">followers</span>
        <span className="quantity"> {followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity"> {views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity"> {likes}</span>
      </li>
    </Stats>
  );
};
