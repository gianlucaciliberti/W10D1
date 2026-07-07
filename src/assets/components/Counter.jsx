import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const [user, setUser] = useState({ name: 'Mario', age: 30 });

    console.log(user);

    return (
        <>
        <button onClick={() => setCount(count + 1)}>incrementa</button>
        <button onClick={() => setCount(count - 1)}>decrementa</button>
        <button onClick={() => setCount(0)}>azzera</button>
        <h4>{count}</h4>
        </>
    )
}

export default Counter;