import CompHero from '../components/CompHero'
// import CompModal from '../components/CompModal'
import CompNewsTicker from '../components/CompNewsticker'
import WordOfTheDay from '../components/WordOfTheDay'

const Landing = () => {
  return (
    <>
      {/* <CompModal /> */}
      <CompNewsTicker />
      <CompHero />
      <WordOfTheDay />
    </>
  )
}
export default Landing
