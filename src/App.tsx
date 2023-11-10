import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Article from './components/Article';
import 'bootstrap/dist/css/bootstrap.min.css'
import ArticleDetail from './components/ArticleDetail';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Article/>} />
      <Route path="/:articleId" element={<ArticleDetail/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
