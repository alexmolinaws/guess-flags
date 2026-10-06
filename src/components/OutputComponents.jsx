import { useEffect, useState } from "react";

export function Header() {
  return (
    <header className="max-w-xl pt-12 mb-8 mx-auto text-center">
      <h1 className="mb-3 text-4xl font-bold">
        Guess the Flag!
      </h1>
      <p className="px-4 md:px-0 leading-relaxed">
        Select the right country and bet!
      </p>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="max-w-xl py-8 pb-14 mx-auto text-sm text-center">
      <p className="px-4 md:px-0 mb-6">
        Developed by Alex Molina | License: <a href="https://creativecommons.org/licenses/by/4.0/" className="font-bold hover:underline hover:text-amber-400">CC BY 4.0</a><img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" className="inline-block max-w-4 max-h-4 ml-2 mr-1" /><img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="" className="inline-block max-w-4 max-h-4 mr-1" /> | <a href="https://github.com/alexmolinaws/guess-flags" className="hover:underline hover:text-amber-400">Source Code</a> | <a href="https://linktr.ee/alexmolinaws" className="hover:text-amber-400 hover:underline">Portfolio</a>
      </p>
    </footer>
  )
}

export function Flag({name, code}) {
  return (
    <img
      src={`https://flagcdn.com/${code}.svg`}
      alt={name}
      width="47%"
      className="block mx-auto mb-11 border-2 border-white"
    />
  )
}

export function Notification({type, modifier, amount}) {
  const [visible, setVisible] = useState(false);

  let textColor, textContent;

  switch (type) {
    case "bad":
      textColor = "text-red-400";
      textContent = `You lost that $${amount} bet.`;
      break;
    case "good":
      textColor = "text-green-300";
      textContent = `Right! You've earned $${amount}`;
      break;
    case "skip":
      textColor = "text-white";
      textContent = "Okay, let's skip that one!";
      break;
    default:
      break;
  }

  useEffect(() => {
    if (!textContent) return;
    
    setVisible(true);

    const hide = setTimeout(() => {
      setVisible(false);
      modifier("");
    }, 1500);

    // Prevents background timers
    return () => clearTimeout(hide);
  }, [type, modifier]);

  if (!visible) return null;

  return (
    <div 
      className={`fixed bottom-4 right-4 p-6 border border-amber-400 rounded-2xl font-semibold ${textColor} bg-gray-900`}
    >
      <p>{textContent}</p>
    </div>
  )
}

export default function Score({value}) {
  return (
    <section className="px-4 md:px-00">
      <div className="max-w-xl py-5 px-6 rounded-xl mt-7 mx-auto text-center bg-gray-900">
        <p className="text-lg">
          Your earnings: <span className="font-bold text-amber-400">${value}</span>
        </p>
      </div>
    </section>
  )
}