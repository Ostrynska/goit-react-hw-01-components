import PropTypes from 'prop-types';
import { Friends, Friend, FriendAvatar, FriendStatus, FriendName } from "./FriendList.styled";

export const FriendList = ({friends}) => {
    return (
        <Friends>
            {friends.map(({id, avatar, name, isOnline}) => { 
                return (
                <Friend key={id}>
                    <FriendStatus>{isOnline}</FriendStatus>
                    <FriendAvatar src={avatar} alt="User avatar" width="48" />
                    <FriendName>{name}</FriendName>
                </Friend>
            )})
        }
        </Friends>
)};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    })
    ).isRequired
}