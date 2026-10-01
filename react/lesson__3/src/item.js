import { useState } from "react";

function Item() {
    let [item, setItem] = useState([]);
    function addItem() {
        setItem([
            ...item,
            {
                id: item.length,
                value: Math.floor(Math.random() * 10) + 1
            }
        ])
    }
    console.log(item);

    return (
        <div>
            <button onClick={addItem}>Add a number</button>
            {
                item.map((i, index) => (
                    <div key={index}
                        style={{ background: index % 2 ? "silver" : "yellow" }}>
                        {i.value}
                    </div>
                ))
            }
        </div>
    )
}
export default Item;