import { useState } from "react";



function Comp(){
    
  const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [gender, setGender] = useState("");
    const [country, setCountry] = useState("Kazakhstan");
    const [city, setCity] = useState("");


    const changename = (js) => {
        setName(js.target.value);
      };
      const changeEmail = (js) => {
        setEmail(js.target.value);
      };
    const changeBirthDate = (e) => {
        setBirthDate(e.target.value)};
    const changeGender = (e) => {
        setGender(e.target.value)};
    const changeCountry = (e) =>{
         setCountry(e.target.value)};

    const changeCity = (e) => {
        setCity(e.target.value)}

    return (
        <div>
            <h2>User Form</h2>

            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange = {changename}
            />
              <p>Name: {name}</p>

            <br /><br />

            <input
                type="email"
                placeholder="Email"
                value={email}
               onChange={changeEmail}
            />
             <p>Email: {email}</p>

            <br /><br />

           <input
                type="date"
                value={birthDate}
                onChange={changeBirthDate}
            />
            <p>Date of Birth: {birthDate}</p>

            <br /><br />

            <div>
                Gender:
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="Male"
                        onChange={changeGender}
                    />
                    Male
                </label>

                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="Female"
                        onChange={changeGender}
                    />
                    Female
                </label>
            </div>
            <p>Gender: {gender}</p>

            <br />

            <select value={country} onChange={changeCountry}>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="USA">USA</option>
                <option value="Germany">Germany</option>
                <option value="Japan">Japan</option>
            </select>
            <p>Country: {country}</p>

            <br /><br />

            <input
                type="text"
                placeholder="City"
                value={city}
                onChange={changeCity}
            />
            <p>City: {city}</p>
        </div>
    );
        
}

export default Comp;