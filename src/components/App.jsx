import { Profile } from './Profile/Profile';
import user from '../Data/User.json';
import { Statistics } from './Statistics/Statistics';
import data from '../Data/Data.json';
import { FriendList } from './FriendList/FriendList';
import friends from '../Data/Friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../Data/Transaction.json';
import { Container } from './Container/Container';

export const App = () => {
  return (
    <Container>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};