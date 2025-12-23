import { useState } from "react";


function Cards({tasks}){
   
    return(
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3  bg-slate-800  border rounded-xl
        border-blue-500 hover:shadow-lg">
            {tasks.map((task)=>(
            <div key={task.id} className="flex flex-col p-4 m-2 border border-gray-300 rounded">
                <p className="text-lg font-medium text-green-50">{task.title}</p>
                <p className="text-sm text-emerald-50">{task.description}</p>
            </div>)
            )}
        </div>
    )
}

export default Cards;