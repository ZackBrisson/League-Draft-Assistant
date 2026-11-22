import { useState } from 'react'
function ChampionSlot({ role }) {
  const [selectedChampion, setSelectedChampion] = useState("")
  return (
    <div className="champion-slot">
                <div className="champion-portrait">
                  <p>{selectedChampion || "Role"}</p>
                </div>
                <select value={selectedChampion} onChange={(event) => setSelectedChampion(event.target.value)}>
                  <option value="">Select Champion</option>
                  <option value="Ahri">Ahri</option>
                  <option value="Garen">Garen</option>
                </select>
              </div>
  )
}


export default ChampionSlot