import { useState } from "react";

function Example(){
    const [team, setTeam] = useState({
        team:"Real Madrid",
        coach:"Xabi Alonso",
        captain:"Federico Valverde"

    });

    const changeTeam = (event) => {
        setTeam((e)=>({...e, team: event.target.value}))
    }

    const changeCaptain = (event) => {
        setTeam((e)=>({...e, captain: event.target.value}))
    }

    const changeCoach = (event) => {
        setTeam((e)=>({...e, coach: event.target.value}))
    }


    return(
        <div>
            <p>{team.team}  {team.coach}  {team.captain} </p>

            <p>
                <label > Team</label>
                <input type="text" value={team.team} onChange={changeTeam}/>
            </p>
            <p>
                <label >Coach</label>
                <input type="text" value={team.coach}  onChange={changeCoach}/>
            </p>
            <p>
                <label >Captain</label>
                <input type="text" value={team.captain}  onChange={changeCaptain}/>
            </p>


        
        </div>
    )
}



export default Example;