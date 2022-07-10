import './App.css';
import { useEffect, useState } from 'react';

import React from "react"

// components
import MainPage from './components/MainPage';
import RegChessExp from './components/RegChessExp';
import RegPerInfo from './components/RegPerInfo';
import OnBoardingPage from './components/OnBoardingPage';

function App() {

  const [page, setPage] = useState(0)

  useEffect(() => {
    setPage(localStorage.getItem("page"))
    console.log(page)
  })

  if (page == null || page == 1) {
    return (
      <MainPage />
    )
  } else if (page == 2) {
    return (
      <RegPerInfo />
    )
  } else if (page == 3) {
    return (
      <RegChessExp />
    )
  } else if (page == 4) {
    return (
      <OnBoardingPage />
    )
  }

}

export default App;
