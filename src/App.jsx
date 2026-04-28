import { useState, useEffect } from 'react'; // Күйді және эффектілерді басқару үшін
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Навигация құралдары
import Home from './pages/Home'; // Басты бет компоненті
import ItemDetail from './pages/ItemDetail'; // Жеке мақала беті компоненті
import './App.css'; // Барлық стильдер сақталған файл

function App() {
  // isDark: Қараңғы режимнің қосулы немесе өшірулі екенін бақылайтын күй (Boolean)
  const [isDark, setIsDark] = useState(false);

  // useEffect: isDark өзгерген сайын жұмыс істейді
  useEffect(() => {
    // HTML тегіне 'data-theme' атрибутын қосады ("dark" немесе "light")
    // Бұл CSS-тегі айнымалылардың (variables) ауысуына мүмкіндік береді
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <Router>
      {/* Навигация панелі (Navbar) */}
      <nav className="glass-nav">
        <div className="nav-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          
          {/* Логотип: бассаң басты бетке қайтарады */}
          <Link to="/" style={{ textDecoration: 'none', color: 'var(--text-main)', fontSize: '1.5rem', fontWeight: '800' }}>
            QAZAQ<span style={{ color: 'var(--accent)' }}>WIKI</span>
          </Link>
          
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            {/* Тема ауыстырғыш батырма: басу арқылы isDark мәнін қарама-қарсыға ауыстырады */}
            <button className="theme-toggle" onClick={() => setIsDark(!isDark)}>
              {isDark ? '☀️' : '🌙'} {/* Күн немесе ай белгішесі */}
            </button>
            
            <Link to="/" style={{ textDecoration: 'none', color: 'var(--text-muted)', fontWeight: '600' }}>
              Басты бет
            </Link>
          </div>
        </div>
      </nav>

      {/* Беттердің маршруттары (Routes) */}
      <Routes>
        {/* Басты бет маршруты */}
        <Route path="/" element={<Home />} />
        
        {/* Жеке мақала беті: ":id" бөлігі динамикалық болып табылады */}
        <Route path="/item/:id" element={<ItemDetail />} />
      </Routes>
    </Router>
  );
}

export default App;