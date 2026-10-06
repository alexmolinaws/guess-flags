export function Option({name}) {
  return (
    <option value={name}>{name}</option>
  );
}

export function Bar({bet, setBet}) {
  const MIN = 0;
  const MAX = 100;
  const STEP = 10;

  return(
    <div>
      <input
        type="range"
        id="range"
        className="w-5/6 mb-5 mx-auto accent-amber-500 hover:accent-amber-700"
        min={MIN}
        max={MAX}
        step={STEP}
        value={bet}
        onChange={ e => setBet(e.target.value) }
      />
      <p className="mb-8 text-xl">
        Betting: <span className="text-3xl font-bold text-amber-400">${bet}</span>
      </p>
    </div>
  )
}

export default function Button({body, action, isMain = false}) {
  const mainStyles = "w-32 px-5 py-2 rounded-xl uppercase font-bold text-gray-900 bg-amber-500 hover:bg-amber-200 cursor-pointer transition-colors duration-150";
  const secStyles = "w-32 px-5 py-2 rounded-xl uppercase font-bold text-white bg-gray-700 hover:text-gray-900 hover:bg-white cursor-pointer transition-colors duration-150";

  return (
    <button
      type="button"
      className={ isMain ? mainStyles : secStyles }
      onClick={action}
    >
      {body}
    </button>
  )
}