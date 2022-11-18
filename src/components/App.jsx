import { Profile } from './01-profile/Profile'
import user from '../data/user'
import { Statistics } from './02-statistics/Statistics'
import data from '../data/data'
import { FriendList } from './03-friendList/FriendList'
import friends from '../data/friends'
import { TransactionHistory } from './04-transactionHistory/TransactionHistory'
import transactions from '../data/transactions'
import { Box } from "./Box";

export const App = () => {
  return (
    <Box
      bg='background'
      color='text'
      display='grid'
      alignItems='center'
      fontSize={14}
      pt={4}
      pb={4}
    as='main'>
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
    </Box>
  )
};
