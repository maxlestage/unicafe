import { useState } from "react";
// import "./table.css";

const StatisticLine = ({ text, value }) => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th style={{ width: 70, textAlign: "start" }}>{text}:</th>
            <td>{value}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

const Statistics = ({ userChoice }) => {
  // console.log(userChoice);

  const good = userChoice.good;
  const neutral = userChoice.neutral;
  const bad = userChoice.bad;

  const calcAll = () => {
    let result = userChoice.good + userChoice.neutral + userChoice.bad;
    return <span>{result}</span>;
  };
  const clicksResult = calcAll();

  const average = () => {
    let calcAverageGood = [];
    let calcAverageNeutral = [];
    let calcAverageBad = [];

    let result = userChoice.good + userChoice.neutral + userChoice.bad;

    if (userChoice.good) {
      calcAverageGood.push(userChoice.good);
    }

    if (userChoice.neutral) {
      calcAverageNeutral.push(userChoice.neutral);
    }

    if (userChoice.bad) {
      calcAverageBad.push(userChoice.bad);
    }

    return (calcAverageGood - calcAverageBad) / result;
  };
  const totalAverage = average();

  const positive = () => {
    let result = userChoice.good + userChoice.neutral + userChoice.bad;
    let calcAverageGood = [];
    if (userChoice.good) {
      calcAverageGood.push(userChoice.good);
    }
    return ((calcAverageGood / result) * 100).toFixed(3);
  };
  const positiveReview = positive();

  if (
    userChoice.good === 0 &&
    userChoice.neutral === 0 &&
    userChoice.bad === 0
  ) {
    return (
      <div>
        <p>Vous n'avez pas encore ajouté de valeurs.</p>
      </div>
    );
  }

  return (
    <div>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="All clicks" value={clicksResult} />
      <StatisticLine text="Average" value={totalAverage} />
      <StatisticLine text="Positive review" value={positiveReview} />
      {/* <p>Good: {userChoice.good}</p> */}
      {/* <p>Neutral: {userChoice.neutral}</p> */}
      {/* <p>Bad: {userChoice.bad}</p> */}
      {/* <p>All clicks: {calcAll()}</p> */}
      {/* <p>Average: {average()}</p> */}
      {/* <p>Positive review: {positive()}% </p> */}
    </div>
  );
};

const Buttons = () => {
  // save clicks of each button to its own state
  // const [good, setGood] = useState(0);
  // const [neutral, setNeutral] = useState(0);
  // const [bad, setBad] = useState(0);

  const [choice, setChoice] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const [allClicks, setAllClicks] = useState([]);

  const handleClickReset = () => {
    setAllClicks(allClicks.concat("neutral"));
    // setNeutral(neutral + 1);
    // console.log("Choix neutre", neutral);
    setChoice({ ...choice, neutral: choice.neutral + 1 });
    // console.log({ neutral: choice.neutral });
  };

  const handleClickLeft = () => {
    setAllClicks(allClicks.concat("good"));
    // setGood(good + 1);
    // console.log("Choix bon", good);
    setChoice({ ...choice, good: choice.good + 1 });
    // console.log({ good: choice.good });
  };

  const handleClickRight = () => {
    setAllClicks(allClicks.concat("bad"));
    // setBad(bad + 1);
    // console.log("Choix bad", bad);
    setChoice({ ...choice, bad: choice.bad + 1 });
    // console.log({ bad: choice.bad });
  };
  // console.log(choice);

  return (
    <div>
      <button onClick={handleClickLeft}>good</button>
      <button onClick={handleClickReset}>neutral</button>
      <button onClick={handleClickRight}>bad</button>
      <div>
        <h2>Statistics</h2>
        <Statistics userChoice={choice} />
      </div>
    </div>
  );
};

function App() {
  return (
    <div>
      <h1>Give feedback</h1>
      <Buttons />
    </div>
  );
}

export default App;
