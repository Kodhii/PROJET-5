import './App.scss'
import { Routes, Route, Link } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/home"
import About from "./pages/about"
import Error from "./pages/error"
import Details from "./pages/details";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/about" element={<About />} />
          <Route path="/details/:id" element={<Details />} />
        </Route>
      </Routes>
    </div>
  )
}
