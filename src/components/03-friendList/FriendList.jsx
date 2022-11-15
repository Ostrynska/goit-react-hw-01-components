import PropTypes from 'prop-types';
import defaultUserImage from '../images/user.png';

export default function FriendList({friends}) {
    return (
        <ul class="friend-list">
            {friends.map(({id, avatar = defaultUserImage, name, status}) => { 
                return (
                <li class="item" key={id}>
                    <span class="status">{status}</span>
                    <img class="avatar" src={avatar} alt="User avatar" width="48" />
                    <p class="name">{name}</p>
                </li>
            )})
        }
        </ul>
)};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        avatar: PropTypes.string,
        name: PropTypes.string,
        status: PropTypes.bool,
    })
    )
}