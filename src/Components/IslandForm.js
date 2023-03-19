import { useState } from "react";

export default function IslandForm({ island, setCounter, counter }) {
  // const [userInput, setUserInput] = useState({});

  // function handleNameInput(e) {
  //   setUserInput({ ...userInput, [e.target.name]: e.target.value });
  // }

  // {id:1, counter:1}
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleNameInput = (e) => {
    setName(e.target.value);
  };

  const handlePhoneInput = (e) => {
    setPhone(e.target.value);
  };

  return (
    <div className="form">
      <h2>{island.name}</h2>
      <img src={island.img} alt={island.name} />
      <h3>Book a trip to {island.name} island</h3>
      <input
        placeholder="Type Full Name"
        name="name"
        onChange={handleNameInput}
        value={name}
      />
      <input
        placeholder="Type Phone Number"
        name="phone"
        onChange={handlePhoneInput}
        value={phone}
      />

      <button
        className="book"
        onClick={() => {
          if (
            window.confirm(
              `You have booked a trip to ${island.name} island!\n your name is ${name} and your phone number is ${phone}`
            )
          ) {
            // increse the counter of visitor by 1
            const newCounter = counter.map((x) => x);
            newCounter[island.id - 1] += 1;

            setCounter(newCounter);
          }
        }}
      >
        Book for today!
      </button>
    </div>
  );
}
