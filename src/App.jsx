import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Books from "./pages/Books"
import Favourites from "./pages/Favourites"
import { useEffect, useState } from "react"
import Loading from "./pages/Loading"
import Cart from "./pages/Cart"


function App() {

  const [loading, setLoading] = useState(false)


  useEffect(() => {
    setTimeout(() => {
      setLoading(true)
    },6500);
  },[])

  return (
    <>
      <Routes>
        <Route path="/" element={loading?<Home />:<Loading/>} />
        <Route path="/books" element={<Books />} />
        <Route path="/fav" element={<Favourites />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

    </>
  )
}

export default App
