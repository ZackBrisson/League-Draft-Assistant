import { useState } from 'react'
function ChampionSlot({ role, champions, onSelect }) {
  const [selectedChampion, setSelectedChampion] = useState("")
  const championData = champions.find(
  (champion) => champion.name === selectedChampion
)
 return (
  <div className="champion-slot">
    <div className="champion-portrait">
      {championData ? (
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/15.24.1/img/champion/${championData.id}.png`}
          alt={selectedChampion}
        />
      ) : (
        <p>{role}</p>
      )}
    </div>

               <select
  value={selectedChampion}
  onChange={(event) => {
    setSelectedChampion(event.target.value)
    onSelect(event.target.value)
  }}
>
  <option value="">Select Champion</option>

  {champions.map((champion) => (
    <option key={champion.id} value={champion.name}>
      {champion.name}
    </option>
  ))}
</select>
              </div>
  )
}


export default ChampionSlot