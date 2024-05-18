import { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Planets() {
  const { id } = useParams();
  const [planets, setPlanets] = useState({});
  const [error, setError] = useState("")


  useEffect(() => {
    axios.get(`https://swapi.dev/api/planets/${id}`).
    then(response => {
      setPlanets(response.data)
      setError("")
    }).
    catch(err => setError(err))
  }, [id])


  return (
    <div>
      {
        error ?
        <>
          <h3>These arent the droids you are looking for</h3>
        </>
        :
        <>
        <h1>{planets.name}</h1>
        <p>Climate: {planets.climate}</p>
        <p>Terrain: {planets.terrain}</p>
        <p>Surface Water: {planets.surface_water}</p>
        <p>Population: {planets.population}</p>
        </>
      }
    </div>
  )
}

export default Planets
