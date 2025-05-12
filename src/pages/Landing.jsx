import CompHero from '../components/CompHero'
import CompModal from '../components/CompModal'
import CompNewsTicker from '../components/CompNewsticker'
import CompTeam from '../components/CompTeam'
import WordOfTheDay from '../components/WordOfTheDay'

const Landing = () => {
  return (
    <>
      <CompModal />
      <CompNewsTicker />
      <CompHero />
      <CompTeam />
      <WordOfTheDay />
    </>
  )
}
export default Landing
