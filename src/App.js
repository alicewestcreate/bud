import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, {useState} from "react";
import { ThemeProvider } from '@mui/material/styles';
import theme from './themes/Theme';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Results from './pages/Results';
import News from './pages/News'; 
import QuizContext from './pages/QuizContext';


function App() {
  const [collectedVariables, setCollectedVariables] = useState({});


  return (
    <QuizContext.Provider value={{ collectedVariables, setCollectedVariables }}>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
    <Routes>
      <Route path="/" element={<Layout />}/>
        <Route index element={<Home />}/>
        <Route path="quiz" element={<Quiz/>}/>
        <Route path="/results" element={<Results />} />
        <Route path="news" element={<News/>}/>
    </Routes>
    <Layout/>
    </ThemeProvider>
    </BrowserRouter>
    </QuizContext.Provider>

   
  );
}

export default App;


