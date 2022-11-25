import Box from './Box';
import Profile from './01-profile';
import Statistics from './02-statistics';
import FriendList from './03-friendList';
import TransactionHistory from './04-transactionHistory';

import user from '../data/user';
import data from '../data/data';
import friends from '../data/friends';
import transactions from '../data/transactions';

const App = () => {
 return (
  <Box
   bg="background"
   color="text"
   display="grid"
   alignItems="center"
   fontSize={14}
   pt={4}
   pb={4}
   as="main"
  >
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
  </Box>
 );
};

export default App;
