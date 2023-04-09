import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Results from './pages/Results';
import News from './pages/News';

function App() {
  return (
    <BrowserRouter>
    <Layout>
    <Routes>
      <Route path="/" element={<Layout />}/>
        <Route index element={<Home />}/>
        <Route path="quiz" element={<Quiz/>}/>
        <Route path="results" element={<Results/>}/>
        <Route path="news" element={<News/>}/>
    </Routes>
    </Layout>
    </BrowserRouter>
   
  );
}

export default App;
