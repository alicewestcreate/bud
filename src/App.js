import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, {useState} from "react";
import { ThemeProvider } from '@mui/material/styles';
import theme from './themes/Theme';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Results from './pages/Results';
import News from './pages/News'; 
import QuizPreferences from './components/contexts/QuizPreferences';


function App() {
  const [userPreferences, setUserPreferences] = useState({});


  return (
    <QuizPreferences.Provider value={{ userPreferences, setUserPreferences }}>
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
    </QuizPreferences.Provider>

   
  );
}

export default App;


