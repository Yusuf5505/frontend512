import React from "react";

class User extends React.Component{
    componentWillUnmount(){
        alert("Пользователь удален")
    }
    render(){
        return(
            <div>
                <ul>
                    <li>Name: Yusuf</li>
                    <li>Email: Yusuf@gmail.ru</li>
                    <li>Contact: +3 000 595 78 90</li>
                </ul>
            </div>
        )
    }
}
export default User;