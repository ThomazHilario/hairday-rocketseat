// Components
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MainLayout } from "@/Components/UI"

// Pages
import { Home } from "@/Pages"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout className="flex-col lg:flex-row" />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
