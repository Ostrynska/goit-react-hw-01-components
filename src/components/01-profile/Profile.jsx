import PropTypes from 'prop-types';
import defaultUserImage from '../../images/user.png';
import {
 ProfileCard,
 Description,
 Avatar,
 Name,
 Tag,
 Location,
 Stats,
 StatsItem,
 Label,
 Quantity,
} from './Profile.styled';

const Profile = ({
 username,
 tag,
 location,
 avatar = defaultUserImage,
 stats,
}) => {
 return (
  <ProfileCard>
   <Description>
    <Avatar src={avatar} alt="User avatar" width="100" />
    <Name>{username}</Name>
    <Tag>@{tag}</Tag>
    <Location>{location}</Location>
   </Description>

   <Stats>
    <StatsItem>
     <Label>Followers</Label>
     <Quantity>{stats.followers}</Quantity>
    </StatsItem>
    <StatsItem>
     <Label>Views</Label>
     <Quantity>{stats.views}</Quantity>
    </StatsItem>
    <StatsItem>
     <Label>Likes</Label>
     <Quantity>{stats.likes}</Quantity>
    </StatsItem>
   </Stats>
  </ProfileCard>
 );
};

export default Profile;

Profile.propTypes = {
 username: PropTypes.string.isRequired,
 tag: PropTypes.string.isRequired,
 location: PropTypes.string.isRequired,
 avatar: PropTypes.string.isRequired,
 stats: PropTypes.object,
};
