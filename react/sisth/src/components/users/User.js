
function User({ id, email, first_name, last_name, avatar, onClickIncite, isInvite }) {
    return (
        <li>
            <div className="avatar">
                <img src={avatar} alt="" />
                <div className="text">
                    <h3>{first_name} {last_name}</h3>
                    <p>{email}</p>
                </div>
                <div className="button"><b onClick={() => onClickIncite(id)}>{isInvite ? "-" : "+"}</b></div>
            </div>
        </li>
    )
}
export default User;