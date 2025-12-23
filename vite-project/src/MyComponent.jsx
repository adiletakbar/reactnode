import { useState } from "react";

function MyComponent() {

    const [users,setUsers] = useState([
        {id:1,name:'John'},
        {id:2,name:'Jane'},
        
    ])
    return (
        <div>
        <div className="border border-dashed  border-blue-500  p-7" >
            <h1 className="text-3xl font-bold">My Component</h1>
            <p className="m-4">This is my component</p>
            <button className="bg-blue-500 hover:bg-blue-700
             text-white font-bold py-2 px-4 rounded">Click</button>            
        </div>


        <div>
            {users.map((user)=>(
            <div key={user.id} className="p-4 m-2 border border-gray-300 rounded">
                <p className="text-lg font-medium text-gray-800">{user.name}</p>
            </div>)
            )}
        </div>
       </div>
    );
}


export default MyComponent