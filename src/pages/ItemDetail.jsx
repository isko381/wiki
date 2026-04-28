import { useParams, useNavigate } from 'react-router-dom';
import { MOCK_DATA } from '../data'; // Мәліметтер базасы ретінде қолданылатын ортақ файл

export default function ItemDetail() {
  // 1. URL-ден ID-ді аламыз (мысалы: /item/5 болса, id айнымалысы "5" болады)
  const { id } = useParams();
  // Беттер арасында бағдарлау (навигация) үшін керек функция
  const navigate = useNavigate();

  // 2. Жалпы массивтің ішінен ID-і URL-дегі мәнге тең келетін нысанды (объектіні) іздейміз
  // parseInt(id) — мәтінді сандық форматқа айналдыру үшін қажет
  const item = MOCK_DATA.find(element => element.id === parseInt(id));

  // 3. Табылған нысанның мәліметтерін экранға шығару (рендер)
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
      
      {/* "Артқа" батырмасы: navigate(-1) функциясы пайдаланушыны алдыңғы бетке қайтарады */}
      <button 
        onClick={() => navigate(-1)}
        style={{ 
          marginBottom: '20px', 
          cursor: 'pointer', 
          padding: '10px 20px', 
          borderRadius: '10px', 
          border: 'none', 
          background: 'var(--accent)', // CSS айнымалысын қолдану
          color: 'white' 
        }}
      >
        ← Артқа қайту
      </button>

      {/* Мақаланың негізгі суреті */}
      <img 
        src={item.image} 
        alt={item.title} 
        style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '20px' }} 
      />
      
      {/* Мақаланың тақырыбы мен категориясы */}
      <h1 style={{ fontSize: '2.5rem', marginTop: '20px', color: 'var(--text-main)' }}>{item.title}</h1>
      <p style={{ color: 'var(--accent)', fontWeight: 'bold' }}>{item.category}</p>
      
      {/* Негізгі мәтін бөлімі */}
      <div style={{ 
        marginTop: '20px', 
        fontSize: '1.2rem', 
        lineHeight: '1.6', 
        color: 'var(--text-muted)' 
      }}>
        {/* data.js файлында жазылған сипаттама осы жерде шығады */}
        {item.description}
        
        <p style={{ marginTop: '20px' }}>
          Бұл бөлімде {item.title} туралы толығырақ ақпарат болады. 
          Қазақ мәдениеті мен тарихында бұл тақырып ерекше орын алады.
        </p>
      </div>
    </div>
  );
}
