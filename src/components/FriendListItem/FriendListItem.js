import {
  StyledFriendListItem,
  StatusIndicator,
  Avatar,
  Name,
} from './FriendListItem.styled';
export const FriendListItem = ({ avatar, name, onlineStatus }) => {
  return (
    <StyledFriendListItem isOnline={onlineStatus}>
      <StatusIndicator isOnline={onlineStatus}></StatusIndicator>
      <Avatar src={avatar} alt={`${name}'s avatar`} width="48" />
      <Name>{name}</Name>
    </StyledFriendListItem>
  );
};
