import { useEffect, useState } from 'react'
import app from './services/api'
import './App.css'
import Header from './components/Header/Header'
import TitleDiv from './components/Title/TitleDiv'
import Cards from './components/Cards/Cards'


function App() {

  const [movie, setMovie] = useState([])
  const [busca, setBusca] = useState('')
  const [timeMedia, setTimeMedia] = useState({
    runtime: 0,
    budget: 0
  })

  useEffect(() => {

    async function loadData() {
      try {
        const { data: { docs } } = await app.get("movie")
        setMovie(docs)
      } catch (error) {
        console.error('Erro ao buscar dados: ', error)
      }
    }
    loadData()
  }, [])
  console.log(movie)

  // Filtrar os cards
  const filmesFiltrados = movie.filter((movies) => movies.name && movies.name.toLowerCase().includes(busca.toLowerCase()))

  //media
  function headValue(){
    const budget = movie.reduce( (acc, cur) => acc.budgetInMillions + cur, 0)
    const runtime = movie.reduce( (acc, cur) => acc.runtimeInMinutes + cur, 0)
    setTimeMedia({
      runtime: runtime,
      budget: budget
    })
  }

  return (
    <>
      <Header />
      <div className='content-index'>
        <TitleDiv busca={busca} setBusca={setBusca} budget={budget} runtime={runtime}/>
        <div className='content-cards'>
          {filmesFiltrados.map((movieData) => (
            <Cards movieData={movieData} key={movieData._id} />
          ))}

        </div>

      </div>
    </>
  )
}

export default App
