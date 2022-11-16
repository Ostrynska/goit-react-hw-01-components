import PropTypes from 'prop-types';

const Friend = ({
    id,
    avatar,
    name,
    isOnline }) =>
{
    return (
        <li className="item" key={id}>
            <span className="isOnline">{isOnline}</span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </li>
    )
}

Friend.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default Friend;