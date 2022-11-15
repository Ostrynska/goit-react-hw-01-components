import Profile from './Profile'
import user from '../data/user';
import Statistics from './Statistics';
import data from '../data/data'

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
    </div>
  );
};
export default App;