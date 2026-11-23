import './App.css'
import ChampionSlot from './components/ChampionSlot'
import { useState, useEffect } from 'react'

function App() {
  const [champions, setChampions] = useState([])
  const [inspectedChampion, setInspectedChampion]= useState("")

  useEffect(() => {
    fetch("https://ddragon.leagueoflegends.com/cdn/15.24.1/data/en_US/champion.json")
      .then((response) => response.json())
      .then((data) => setChampions(Object.values(data.data)))
      .catch((error) => console.error("Fetch failed:", error))
}, [])

useEffect(() => {
  console.log("Champion count:", champions.length)
}, [champions])  

console.log("Stored champions:", champions)
console.log("Inspected champion:", inspectedChampion)

  return (
    <main className="draft-layout">
      <h1>League Draft Assistant</h1>
      <section className="left-panel">
        <h2>{inspectedChampion || "Champion Name"}</h2>
        <div className="champion-bio">
          <h3>Champion Bio</h3>
        </div>
        <div className="champion-strengths">
          <h3>Champion Strengths</h3>
        </div>
        <div className="champion-weaknesses">
          <h3>Champion Weaknesses</h3>
        </div>
        <div className="champion-recommendations">
          <h3>Champion Recommendations</h3>
        </div>
      </section>
      <section className="right-panel">
        <h2>Draft Analysis</h2>
        <div className="draft-board">
          <h3>Draft Board</h3>
          <div className="ally-champions">
            <h4>Ally team</h4>
            <div className="champion-row">
             <ChampionSlot role="TOP" champions={champions} onSelect={setInspectedChampion} />
              <ChampionSlot role="JGL" champions={champions} />
              <ChampionSlot role="MID" champions={champions} />
              <ChampionSlot role="BOT" champions={champions} />
              <ChampionSlot role="SUP" champions={champions} />
            </div>
          </div>
          <div className="enemy-champions">
            <h4>Enemy Team</h4>
            <div className="champion-row">
              <ChampionSlot role="TOP" champions={champions} />
              <ChampionSlot role="JGL" champions={champions} />
              <ChampionSlot role="MID" champions={champions} />
              <ChampionSlot role="BOT" champions={champions} />
              <ChampionSlot role="SUP" champions={champions} />
            </div>
          </div>
        </div>
      </section>

      <section className="bottom-panel">
        <div className="team-strengths">
          <h3>Team Strengths</h3>
        </div>
        <div className="team-weaknesses">
          <h3>Team Weaknesses</h3>
        </div>
        <div className="team-strategy">
          <h3>Team Strategy</h3>
        </div>
      </section>

    </main>
  )
}

export default App
