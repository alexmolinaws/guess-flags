import countriesList from "./countries.js";

import { useState, useEffect } from "react";
import Button, { Option, Bar } from "./components/InputComponents.jsx";
import Score, { Header, Footer, Flag, Notification } from "./components/OutputComponents.jsx";


function App() {
  const [flag, setFlag] = useState("");
  const [choice, setChoice] = useState("");
  const [amount, setAmount] = useState(10);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => { getCountry() }, []);
    
  function getCountry() {
    const randomId = Math.floor(Math.random() * 195);
    const country = countriesList[randomId];
    setFlag(country);
    return;
  }

  // Select field validation
  function checkChoice() {
    const list = [];
    countriesList.forEach(country => list.push(country.name));
    list.includes(choice) ? checkBet() : alert('Please, select a country.');
    return;
  }

  // Range bar validation
  function checkBet() {
    const bet = Number(amount);
    if (bet <= 0) {
      alert('A valid bet starts at $10');
    } else {
      playBet(bet);
    }
    return;
  }

  function skipBet() {
    setMessage("skip");
    getCountry();
    return;
  }

  function playBet(num) {
    if (choice === flag.name) {
      setMessage("good");
      setScore(score + num);
    } else {
      setMessage("bad");
      loseBet(num);
    }
    getCountry();
    return;
  }

  function loseBet(num) {
    setScore(score - num);

    if (score - num <= 0) {
      setScore(0);
      alert(`------ Game Over! ------\n\nYou lost that $${amount} bet, so you've ran out of money to continue betting.\n\nBut you can play again!`);
    } else {
      setMessage("bad");
    }
    return;
  }

  return (
    <>
      <Header />

      <section className="px-4 md:px-0">
        <div className="max-w-xl pt-11 pb-9 px-7 rounded-xl mx-auto text-center bg-gray-900">

          <Flag name={flag.name} code={flag.code} />

          <div className="flex justify-between items-center w-5/6 mx-auto mb-10">
            <p className="w-2/6 text-left">Country:</p>
            
            <select 
              name="dropdown" id="dropdown"
              className="w-4/6 py-1.5 px-4 border border-white rounded-lg text-white bg-gray-800"
              onChange={e => setChoice(e.target.value)}
            >
              <Option name="Select..." />
              { countriesList.map(country => <Option key={country.code} name={country.name} /> )}
            </select>
          </div>

          <Bar bet={amount} setBet={setAmount} />

          <Button action={skipBet} body="No Idea" />
          <span className="inline-block mr-4"></span>
          <Button action={checkChoice} body="Bet & See" isMain={true} />

        </div>
      </section>

      <Score value={score} />

      <Notification type={message} modifier={setMessage} amount={amount} />

      <Footer />
    </>
  )
}

export default App
