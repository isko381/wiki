import { Link } from 'react-router-dom'; // Беттер арасында ауысу үшін Link компонентін импорттаймыз

export default function Card({ item }) { // 'item' деректерін пропс ретінде алатын Card функциясы
  return (
    /* Сыртқы контейнер: 
       - bg-white / dark:bg-gray-800: ақ және қараңғы тақырып түстері
       - rounded-xl: шеттерін қаттырақ дөңгелету (сен сұрағандай)
       - shadow-md: жеңіл көлеңке эффектісі
       - hover:shadow-xl: тышқанды үстіне әкелгенде көлеңкенің үлкеюі
       - transition-shadow: көлеңкенің бірқалыпты өзгеруі */
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow border dark:border-gray-700">
      
      {/* Карточканың суреті: object-cover суреттің пішінін бұзбай контейнерге сыйғызады */}
      <img src={item.image} alt={item.title} className="h-48 w-full object-cover" />
      
      {/* Мәтін орналасқан бөлім */}
      <div className="p-4">
        {/* Карточканың тақырыбы: қараңғы режимде мәтін ақ түске өзгереді */}
        <h3 className="text-xl font-bold dark:text-white">{item.title}</h3>
        
        {/* Сипаттамасы: line-clamp-2 мәтін 2 жолдан асса, соңын нүктемен қайырып тастайды */}
        <p className="text-gray-500 text-sm mt-2 line-clamp-2">{item.description}</p>
        
        
       
      </div>
    </div>
  );
}