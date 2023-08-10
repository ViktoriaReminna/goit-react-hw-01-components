import { FriendListItem } from 'components//FriendListItem/FriendListItem';
import { StyledFriendList } from './FriendList.styled';
export const FriendList = ({ friends }) => {
  return (
    <StyledFriendList className="friend-list">
      {friends.map(friend => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </StyledFriendList>
  );
};
export default FriendList;
