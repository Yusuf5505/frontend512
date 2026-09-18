import "./Nav.css"
function Nav(props) {
    return (
        <nav>

            <ul>
                {
                    Object.keys(props.nav).map(e => {
                        return (
                            <li>
                                <a href="">{e}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}
export default Nav