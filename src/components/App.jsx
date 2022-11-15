import Profile from './Profile'
import user from '../data/user'
import Statistics from './Statistics'
import data from '../data/data'
import FriendList from './FriendList'
import friends from '../data/friends'
import TransactionHistory from './TransactionHistory'
import transactions from '../data/transactions'

const App = () =>
{
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
    />
      <Statistics 
        title="Upload stats"  
        stats={data}
      />
      <FriendList 
        friends={friends}
      />
      <TransactionHistory 
        items={transactions}
      />
    </div>
  );
};
export default App;