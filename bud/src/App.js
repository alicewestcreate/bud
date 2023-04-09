import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './pages/Theme';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Results from './pages/Results';
import News from './pages/News';

function App() {
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
    <Layout>
    <Routes>
      <Route path="/" element={<Layout />}/>
        <Route index element={<Home />}/>
        <Route path="quiz" element={<Quiz/>}/>
        <Route path="results" element={<Results/>}/>
        <Route path="news" element={<News/>}/>
    </Routes>
    </Layout>
    </ThemeProvider>
    </BrowserRouter>
   
  );
}

export default App;


