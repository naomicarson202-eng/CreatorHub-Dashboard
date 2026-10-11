import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <h1>OrbitOrca Demo Application</h1>
        <p>A simple React project created for deployment testing.</p>
        <Dashboard />
      </main>
    </div>
  )
}