import Homepage from "./components/Homepage"
import Portfolio from "./components/Portfolio"
import TrustedPartner from "./components/TrustedPartner"

const App = () => {
  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <Homepage />
      <TrustedPartner />
      <Portfolio />
    </div>
  )
}

export default App