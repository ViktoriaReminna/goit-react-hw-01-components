import {
  StyledFriendListItem,
  StatusIndicator,
  Avatar,
  Name,
} from './FriendListItem.styled';
export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <StyledFriendListItem isOnline={isOnline}>
      <StatusIndicator isOnline={isOnline}></StatusIndicator>
      <Avatar src={avatar} alt={`${name}'s avatar`} width="48" />
      <Name>{name}</Name>
    </StyledFriendListItem>
  );
};
