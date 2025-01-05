import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Image from './component/Page/Image'
import Logo from './component/Logo'
import FluidSimulation from './FluidSimulation.jsx';

function App() {
  return (
    <div className="bg-black h-full graph-background light-effect">
      <FluidSimulation />
      <BrowserRouter>
         <div className="fixed top-0 left-0 right-0 bg-white/5 rounded-lg h-16 w-full border-b-2 border-white/50 z-10">
          <Logo></Logo>
        </div>
        <Routes>
          <Route path="/" element={<Image />} />
        </Routes>
      </BrowserRouter>
</div>

  )
}

export default App
