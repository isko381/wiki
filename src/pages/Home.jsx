import { useState } from 'react'; // Күйді (state) басқару үшін React-тен useState-ті аламыз
import { Link } from 'react-router-dom'; // Беттер арасында навигация жасау үшін
import { MOCK_DATA } from '../data'; // Барлық ақпарат сақталған файлды импорттаймыз

export default function Home() {
  // searchTerm: Іздеу жолағына жазылған мәтінді сақтайды
  const [searchTerm, setSearchTerm] = useState('');
  // activeCategory: Таңдалған категорияны сақтайды (әдепкі бойынша "Барлығы")
  const [activeCategory, setActiveCategory] = useState('Барлығы');

  // Пайдаланушы таңдай алатын бөлімдер тізімі
  const categories = ['Барлығы', 'Тағам', 'Тарих', 'Музыка', 'Табиғат', 'Ойындар'];

  // Деректерді сүзгіден өткізу (Поиск және Фильтрация логикасы)
  const filteredData = MOCK_DATA.filter(item => {
    // Атауы бойынша іздеу (кіші әріптерге айналдырып салыстырамыз)
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    // Категория бойынша іздеу ("Барлығы" болса бәрін көрсетеді, әйтпесе таңдалғанын ғана)
    const matchesCategory = activeCategory === 'Барлығы' || item.category === activeCategory;
    
    return matchesSearch && matchesCategory; // Екі шарт та орындалуы керек
  });

  return (
    <main style={{ minHeight: '100vh', paddingBottom: '100px' }}>

      {/* Беттің жоғарғы бөлігі (Header): Атауы мен сипаттамасы */}
      <header style={{ padding: '80px 20px', textAlign: 'center', background: 'var(--card-bg)', borderBottom: '2px solid var(--border)' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '20px', letterSpacing: '-2px' }}>
          QAZAQ <span style={{ color: 'var(--accent)' }}>WIKI</span>
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
          Қазақстанның бай тарихы мен мәдениеті туралы толық ақпарат жинағы
        </p>
      </header>

      <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>

          {/* Іздеу жолағы: input-қа жазған сайын setSearchTerm арқылы күй жаңарады */}
          <input
            type="text"
            placeholder="Іздеу..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              padding: '15px 25px',
              fontSize: '1.1rem',
              borderRadius: '0',
              border: '2px solid var(--border)',
              background: 'var(--card-bg)',
              color: 'var(--text-main)',
              outline: 'none',
              width: '100%'
            }}
          />

          {/* Категория батырмалары: .map арқылы тізімді шығарамыз */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)} // Басқан кезде категория ауысады
                style={{
                  padding: '10px 22px',
                  borderRadius: '50px', // Сен сұрағандай дөңгелек стиль
                  border: '1px solid',
                  borderColor: activeCategory === cat ? 'var(--accent)' : 'var(--border)',
                  background: activeCategory === cat ? 'var(--accent)' : 'var(--card-bg)',
                  color: activeCategory === cat ? 'white' : 'var(--text-main)',
                  cursor: 'pointer',
                  fontWeight: '600',
                  boxShadow: 'var(--shadow)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Сүзгіден өткен карточкалар тізімі */}
        <div className="cards-grid">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <Link to={`/item/${item.id}`} key={item.id} style={{ textDecoration: 'none' }}>
                <div className="wiki-card">
                  <div style={{ overflow: 'hidden', position: 'relative' }}>
                    <img src={item.image} className="card-img" alt={item.title} />
                  </div>
                  <div className="card-content">
                    <span className="card-category">{item.category}</span>
                    <h3 className="card-title" style={{ color: 'var(--text-main)' }}>{item.title}</h3>
                    <p style={{
                      color: 'var(--text-muted)',
                      fontSize: '0.95rem',
                      lineHeight: '1.5',
                      display: '-webkit-box',
                      WebkitLineClamp: '3', // Мәтінді 3 жолмен шектейміз
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            // Егер іздеу бойынша ештеңе табылмаса шығатын жазу
            <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '50px' }}>
              <h2>Ештеңе табылмады...</h2>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}