import "./Nav.css";

function Nav(props) {
    let { navigation: n } = props;

    return (
        <nav>
            <ul>
                {Object.keys(n).map(elem => (
                    <li key={elem}>
                        <a href={n[elem]}>{elem}</a>   {/* ← n, не props.n */}
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;