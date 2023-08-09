import { StatsList } from '../ProfileStatsList/ProfStatsList';
import { Card, Avatar, Name, Tag, Location } from './Profile.styled';
export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Card className="profile">
      <div className="description">
        <Avatar src={avatar} alt="User avatar" className="avatar" />
        <Name className="name">
          <b>{username}</b>
        </Name>
        <Tag className="tag">@{tag}</Tag>
        <Location className="location">{location}</Location>
      </div>
      <StatsList stats={stats} />
    </Card>
  );
};
export default Profile;
