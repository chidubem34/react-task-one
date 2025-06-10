import ProfileCard from './components/ProfileCard'
import me from './assets/kz.jpg'

function App() {

  return (
    <>
        <ProfileCard
          src={me}
          name="Kizito"
          bio="Passionate web developer with a love for building responsive web applications"
        />
    </>
  )
}

export default App
