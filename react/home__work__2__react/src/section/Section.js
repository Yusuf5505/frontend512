import "./Section.css";

function Section(props) {

    return (
        <section>

            <div className="content">
                <h2>Цитаты</h2>
                <p>
                    <span className="bold">
                        О душе и теле
                    </span>
                    {props.quotes}
                </p>
                <p>
                    <span className="bold">
                        О мыслях и страстях
                    </span>
                     {props.quotes2}
                </p>
                <p>
                    <span className="bold">
                         О времени и мире этом
                    </span>
                    {props.quotes3}
                </p>
            </div>
        </section>
    )
}
export default Section;