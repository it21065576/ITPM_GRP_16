import React, { useEffect } from 'react'
import AdSlideShow from './Blog_Management/AdSlideShow'
import { useNavigate } from 'react-router-dom'
function Home() {
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/Register")
    }

  }, [])

  return (
    <div>
      <AdSlideShow />

    </div>
  )
}

export default Home