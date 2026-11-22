import './App.css'
import ChampionSlot from './components/ChampionSlot'
import { useState } from 'react'

function App() {

  return (
    <main className="draft-layout">
      <h1>League Draft Assistant</h1>
      <section className="left-panel">
        <h2>Champion Name</h2>
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
              <ChampionSlot role="TOP" />
              <ChampionSlot role="JGL" />
              <ChampionSlot role="MID" />
              <ChampionSlot role="BOT" />
              <ChampionSlot role="SUP" />
            </div>
          </div>
          <div className="enemy-champions">
            <h4>Enemy Team</h4>
            <div className="champion-row">
              <ChampionSlot role="TOP" />
              <ChampionSlot role="JGL" />
              <ChampionSlot role="MID" />
              <ChampionSlot role="BOT" />
              <ChampionSlot role="SUP" />
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
