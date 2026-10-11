import { NavLink, Outlet } from 'react-router-dom';
function Layount() {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/" className='my' >Home page</NavLink>
                </li>
                <li>
                    <NavLink to="/About" className={({ isActive }) => isActive ? 'orange' : "my"}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/Articles" style={({ isActive }) => ({
                        color: isActive ? "green" : "blue"
                    })}>Articles</NavLink>
                </li>
            </ul>
            <Outlet />
        </div>
    )
}
export default Layount;