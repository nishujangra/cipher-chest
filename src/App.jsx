import './App.css'
import Footer from './components/Footer'
import Manager from './components/Manager'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <div className='md:min-h-[88vh] min-h-[75vh] py-4 bg-main-bg'>
        <Manager />
      </div>
      <Footer />
    </>
  )
}

export default App
