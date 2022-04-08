import React from "react";

const allCountryScores = [
  {
    name: "Ethiopia",
    scores: [
      { n: "Sub", s: 9990 },
      { n: "lucy", s: "4134234" },
      { n: "DWH", s: 9999 },
      { n: "Hanif", s: 999999999 },
    ],
  },
  {
    name: "Scotland",
    scores: [
      { n: "groundkeeper willie", s: 4000 },
      { n: "Neill", s: 999999 },
      { n: "braveheart", s: -200 },
    ],
  },
  {
    name: "England",
    scores: [
      { n: "Jonny", s: 202020 },
      { n: "Chris", s: 202021 },
    ],
  },
  {
    name: "Brazil",
    scores: [{ n: "Mozart", s: 999 }],
  },
  {
    name: "Colombia",
    scores: [
      { n: "Maria", s: 6000 },
      { n: "Melanie", s: "99999999" },
      { n: "Ali", s: 5000 },
    ],
  },
  {
    name: "Turkey",
    scores: [
      { n: "selim", s: 900 },
      { n: "mahmut", s: 1000 },
      { n: "morat", s: 999 },
    ],
  },
  {
    name: "Iran",
    scores: [
      { n: "arosha", s: 5550 },
      { n: "zahra", s: 3000 },
      { n: "nader", s: 2000 },
      { n: "Bani", s: 1999 },
    ],
  },
  {
    name: "Bangladesh",
    scores: [
      { n: "rahman", s: 700200 },
      { n: "rayhan", s: 18238123 },
      { n: "ali", s: 5400000 },
    ],
  },
];
//function for showing all Scores
function Scores() {
  return (
    <div className="highScores-Main">
      <p>High Scores per Country</p>
      {allCountryScores.map((countryScore, index) => {
        return (
          <div key={index} className="HighScores-Country">
            <p>High Scores: {countryScore.name} </p>
            <table className="Scores-Tables">
              <tbody>
                {countryScore.scores.map((score, index1) => {
                  return (
                    <tr key={index1}>
                      <td>{score.n}</td>
                      <td className="score">{score.s}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
}

export default Scores;
