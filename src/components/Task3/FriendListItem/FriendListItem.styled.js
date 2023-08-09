import styled, { css } from 'styled-components';
export const StyledFriendListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  max-width: 100%;
  border: 1px solid #ccc;

  ${props =>
    props.isOnline &&
    css`
      background-color: lightgreen;
    `}
`;

export const StatusIndicator = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  margin-right: 10px;
`;

export const Name = styled.p`
  font-weight: bold;
`;
