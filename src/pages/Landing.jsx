import CompHero from '../components/CompHero'
import CompModal from '../components/CompModal'
import CompNewsTicker from '../components/CompNewsticker'
import CompTeam from '../components/CompTeam'
import Footer from '../components/Footer'
import WordOfTheDay from '../components/WordOfTheDay'

const Landing = () => {
  return (
    <>
      <CompModal />
      <CompNewsTicker />
      <CompHero />
      <CompTeam />
      <WordOfTheDay />
      <Footer />
    </>
  )
}
export default Landing
