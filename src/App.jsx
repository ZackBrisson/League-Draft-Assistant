import './App.css'
import ChampionSlot from './components/ChampionSlot'
import { useState, useEffect } from 'react'

function App() {
  const [champions, setChampions] = useState([])
  const [inspectedChampion, setInspectedChampion] = useState("")

  const [allyTeam, setAllyTeam] = useState({
    TOP: "",
    JGL: "",
    MID: "",
    BOT: "",
    SUP: ""
  })

  const [enemyTeam, setEnemyTeam] = useState({
    TOP: "",
    JGL: "",
    MID: "",
    BOT: "",
    SUP: ""
  })

  const inspectedChampionData = champions.find(
  (champion) => champion.name === inspectedChampion
)

  useEffect(() => {
    fetch("https://ddragon.leagueoflegends.com/cdn/15.24.1/data/en_US/champion.json")
      .then((response) => response.json())
      .then((data) => setChampions(Object.values(data.data)))
      .catch((error) => console.error("Fetch failed:", error))
}, [])

useEffect(() => {
  console.log("Champion count:", champions.length)
}, [champions])  

function updateAllyTeam(role, championName) {
  setAllyTeam((previousTeam) => ({
    ...previousTeam,
    [role]: championName
  }))
}

function updateEnemyTeam(role, championName) {
  setEnemyTeam((previousTeam) => ({
    ...previousTeam,
    [role]: championName
  }))
}

const allyPicks = Object.values(allyTeam)
const selectedAllyPicks = allyPicks.filter(
  (name) => name !== ""
)
const enemyPicks = Object.values(enemyTeam)
const selectedEnemyPicks = enemyPicks.filter(
  (name) => name !== ""
)

console.log("Stored champions:", champions)
console.log("Inspected champion:", inspectedChampion)
console.log("Inspected champion data:", inspectedChampionData)
console.log("Ally Team:", allyTeam)
console.log("Enemy Team:", enemyTeam)
console.log("Selected allies:", selectedAllyPicks)
console.log("Selected enemies:", selectedEnemyPicks)

  return (
    <main className="draft-layout">
      <h1>League Draft Assistant</h1>
      <section className="left-panel">
        <h2>{inspectedChampion || "Champion Name"}</h2>
        <div className="champion-bio">
          <h3>{inspectedChampionData?.title || "Champion Title"}</h3>
          <p>{inspectedChampionData?.blurb || "Champion Bio"}</p>
          {inspectedChampionData?.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
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
             <ChampionSlot role="TOP" champions={champions} onSelect={setInspectedChampion} onTeamUpdate={updateAllyTeam}/>
              <ChampionSlot role="JGL" champions={champions} onSelect={setInspectedChampion} onTeamUpdate={updateAllyTeam}/>
              <ChampionSlot role="MID" champions={champions} onSelect={setInspectedChampion} onTeamUpdate={updateAllyTeam}/>
              <ChampionSlot role="BOT" champions={champions} onSelect={setInspectedChampion} onTeamUpdate={updateAllyTeam}/>
              <ChampionSlot role="SUP" champions={champions} onSelect={setInspectedChampion} onTeamUpdate={updateAllyTeam}/>
            </div>
          </div>
          <div className="enemy-champions">
            <h4>Enemy Team</h4>
            <div className="champion-row">
              <ChampionSlot role="TOP" champions={champions} onSelect={setInspectedChampion} onTeamUpdate={updateEnemyTeam}/>
              <ChampionSlot role="JGL" champions={champions} onSelect={setInspectedChampion} onTeamUpdate={updateEnemyTeam}/>
              <ChampionSlot role="MID" champions={champions} onSelect={setInspectedChampion} onTeamUpdate={updateEnemyTeam}/>
              <ChampionSlot role="BOT" champions={champions} onSelect={setInspectedChampion} onTeamUpdate={updateEnemyTeam}/>
              <ChampionSlot role="SUP" champions={champions} onSelect={setInspectedChampion} onTeamUpdate={updateEnemyTeam}/>
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