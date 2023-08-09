import { GlobalStyle } from './GlobalStyle';
import Profile from './Task1/Profile/Profile';
import Statistics from './Task2/Statistics/Statistics';
import FriendList from './Task3/FriendList/FriendList';
import TransactionHistory from './Task4/TransactionHistory/TransactionHistory';
import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <GlobalStyle />
    </>
  );
};
