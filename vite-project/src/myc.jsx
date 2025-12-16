import { useState } from "react";



function MyComponent() {
    const [count, setCount] = useState(0)
    const changeCount = () => {
        setCount((count) => count + 1)
        setCount((count) => count + 1)
        
    }
    return (
            <div>
                <h1>My Component</h1>
                <p>Count: {count}</p>
                <button onClick={changeCount}>Button</button>
            </div>
    )
}


export default MyComponent