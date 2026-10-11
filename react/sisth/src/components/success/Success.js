import './Success.css';
function Success({count}){
    return(
        <div className="success-block">
            <h3>Успешно </h3>
            <p>Все <b>{count}</b> пользователям отправленный приглашени</p>
            <button className='send-invite-btn' onClick={()=>window.location.reload()}>Назад</button>
        </div>
    )
}
export default Success;