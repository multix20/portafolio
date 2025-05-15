import React, { useState, useEffect } from 'react';
import {
  FaInstagram, FaFacebook, FaTwitter, FaYoutube,
  FaTiktok, FaLinkedin, FaWhatsapp, FaSnapchat,
  FaPinterest, FaReddit
} from 'react-icons/fa';

// Solo las 10 redes sociales más populares
const socialIcons = [
  { id: 'instagram', icon: <FaInstagram size={40} />, name: "Instagram", color: 'text-pink-600', bgColor: 'bg-pink-100' },
  { id: 'facebook', icon: <FaFacebook size={40} />, name: "Facebook", color: 'text-blue-600', bgColor: 'bg-blue-100' },
  { id: 'youtube', icon: <FaYoutube size={40} />, name: "YouTube", color: 'text-red-600', bgColor: 'bg-red-100' },
  { id: 'tiktok', icon: <FaTiktok size={40} />, name: "TikTok", color: 'text-black', bgColor: 'bg-gray-100' },
  { id: 'whatsapp', icon: <FaWhatsapp size={40} />, name: "WhatsApp", color: 'text-green-500', bgColor: 'bg-green-100' },
  { id: 'twitter', icon: <FaTwitter size={40} />, name: "Twitter", color: 'text-blue-400', bgColor: 'bg-blue-100' },
  { id: 'linkedin', icon: <FaLinkedin size={40} />, name: "LinkedIn", color: 'text-blue-700', bgColor: 'bg-blue-100' },
  { id: 'snapchat', icon: <FaSnapchat size={40} />, name: "Snapchat", color: 'text-yellow-400', bgColor: 'bg-yellow-100' },
  { id: 'pinterest', icon: <FaPinterest size={40} />, name: "Pinterest", color: 'text-red-500', bgColor: 'bg-red-100' },
  { id: 'reddit', icon: <FaReddit size={40} />, name: "Reddit", color: 'text-orange-500', bgColor: 'bg-orange-100' },
];

const SocialMediaGame = ({ darkMode = false }) => {
  // Game state
  const [target, setTarget] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameActive, setGameActive] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState('');
  const [foundItems, setFoundItems] = useState([]);
  const [shakeIcon, setShakeIcon] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [difficulty, setDifficulty] = useState('medium');
  
  // Visual theme
  const theme = {
    primary: darkMode ? '#8B5CF6' : '#6D28D9',
    secondary: darkMode ? '#EC4899' : '#DB2777',
    accent1: darkMode ? '#F59E0B' : '#D97706',
    accent2: darkMode ? '#10B981' : '#059669',
    background: darkMode ? '#1F2937' : '#F9FAFB',
    cardBg: darkMode ? '#374151' : '#FFFFFF',
    text: darkMode ? '#F3F4F6' : '#1F2937',
    muted: darkMode ? '#9CA3AF' : '#6B7280',
  };

  // Get a random social icon that hasn't been found yet
  const getRandomTarget = () => {
    const availableIcons = socialIcons.filter(icon => !foundItems.includes(icon.id));
    if (availableIcons.length === 0) {
      endGame(true);
      return null;
    }
    return availableIcons[Math.floor(Math.random() * availableIcons.length)];
  };

  // Start the game
  const startGame = () => {
    setScore(0);
    setFoundItems([]);
    setGameOver(false);
    setGameActive(true);
    
    // Set time based on difficulty
    const difficultyTimes = { easy: 45, medium: 30, hard: 20 };
    setTimeLeft(difficultyTimes[difficulty]);
    
    const newTarget = getRandomTarget();
    setTarget(newTarget);
    setMessage(`¡Encuentra ${newTarget.name}!`);
  };

  // End the game
  const endGame = (completed = false) => {
    setGameActive(false);
    setGameOver(true);
    setTarget(null);
    
    if (completed) {
      setMessage('¡Perfecto! ¡Has encontrado todas las redes!');
    } else {
      setMessage(`¡Tiempo agotado! Puntuación: ${score}`);
    }
  };

  // Handle icon click
  const handleIconClick = (id) => {
    if (!gameActive) return;
    
    if (id === target.id) {
      // Correct click
      setFoundItems(prev => [...prev, id]);
      setScore(prev => prev + Math.floor(timeLeft / 3) + 1);
      setMessage(`¡Correcto! +${Math.floor(timeLeft / 3) + 1} puntos`);
      
      // Set new target
      const newTarget = getRandomTarget();
      if (newTarget) {
        setTimeout(() => {
          setTarget(newTarget);
          setMessage(`¡Encuentra ${newTarget.name}!`);
          setShowHint(false);
        }, 1000);
      }
    } else {
      // Wrong click
      setMessage('¡Incorrecto! Intenta de nuevo');
      setShakeIcon(id);
      setTimeout(() => setShakeIcon(''), 500);
      setTimeLeft(prev => Math.max(1, prev - 2));
    }
  };

  // Show hint after some time
  useEffect(() => {
    if (gameActive && target && !showHint) {
      const hintTimer = setTimeout(() => {
        setShowHint(true);
      }, 8000);
      return () => clearTimeout(hintTimer);
    }
  }, [target, gameActive, showHint]);

  // Game timer
  useEffect(() => {
    if (!gameActive) return;
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          endGame();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [gameActive]);

  // Shuffle icons for display
  const shuffledIcons = [...socialIcons].sort(() => Math.random() - 0.5);

  return (
    <div className="w-full max-w-3xl mx-auto relative px-4 py-8" style={{ 
      backgroundColor: theme.background, 
      borderRadius: '2rem', 
      overflow: 'hidden' 
    }}>
      {/* Floating background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {socialIcons.slice(0, 5).map((social, i) => (
          <div 
            key={`bg-${social.id}`}
            className={`absolute opacity-10 ${social.color}`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: 'scale(1.5)',
              animation: `float-${i} ${10 + i * 5}s infinite ease-in-out alternate`
            }}
          >
            {social.icon}
            <style jsx>{`
              @keyframes float-${i} {
                0% { transform: translate(0, 0) rotate(0deg) scale(1.5); }
                100% { transform: translate(${-50 + Math.random() * 100}px, ${-50 + Math.random() * 100}px) rotate(${Math.random() * 360}deg) scale(2); }
              }
            `}</style>
          </div>
        ))}
      </div>

      {/* Game header */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-extrabold mb-2" style={{ color: theme.text }}>
          <span className="inline-block" style={{ 
            backgroundImage: `linear-gradient(45deg, ${theme.primary}, ${theme.secondary})`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent'
          }}>
            Redes Sociales Finder
          </span>
        </h2>
        
        {!gameActive && !gameOver && (
          <div className="mb-6 p-4 rounded-lg" style={{ backgroundColor: theme.cardBg }}>
            <p className="mb-4" style={{ color: theme.text }}>
              Encuentra las redes sociales tan rápido como puedas. ¡Las 10 más populares!
            </p>
            
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium" style={{ color: theme.text }}>
                Dificultad:
              </label>
              <div className="flex justify-center gap-2">
                {['easy', 'medium', 'hard'].map(level => (
                  <button
                    key={level}
                    onClick={() => setDifficulty(level)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                      difficulty === level ? 'shadow-lg scale-105' : 'opacity-70'
                    }`}
                    style={{
                      backgroundColor: difficulty === level ? theme.primary : theme.cardBg,
                      color: difficulty === level ? 'white' : theme.text,
                      border: `1px solid ${theme.primary}`
                    }}
                  >
                    {level === 'easy' ? 'Fácil' : level === 'medium' ? 'Medio' : 'Difícil'}
                  </button>
                ))}
              </div>
            </div>
            
            <button
              onClick={startGame}
              className="px-8 py-3 rounded-full font-medium transform transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{
                background: `linear-gradient(45deg, ${theme.primary}, ${theme.secondary})`,
                color: 'white',
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
              }}
            >
              ¡Comenzar!
            </button>
          </div>
        )}
        
        {gameActive && (
          <div className="flex justify-center items-center mb-4 gap-6">
            <div className="flex items-center">
              <div className="mr-2" style={{ color: theme.accent1 }}>⏱️</div>
              <div className="text-xl font-bold" style={{ color: timeLeft < 10 ? theme.secondary : theme.text }}>
                {timeLeft}s
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="mr-2" style={{ color: theme.accent2 }}>🏆</div>
              <div className="text-xl font-bold" style={{ color: theme.text }}>
                {score}
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="mr-2" style={{ color: theme.primary }}>✅</div>
              <div className="text-xl font-bold" style={{ color: theme.text }}>
                {foundItems.length} / {difficulty === 'easy' ? 6 : difficulty === 'medium' ? 8 : socialIcons.length}
              </div>
            </div>
          </div>
        )}
        
        {message && (
          <div 
            className="text-lg font-medium py-2 px-6 rounded-full inline-block animate-bounce"
            style={{ 
              color: message.includes('Correcto') ? theme.accent2 : 
                    message.includes('Incorrecto') ? theme.secondary : theme.text,
              backgroundColor: theme.cardBg,
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
          >
            {message}
          </div>
        )}
        
        {target && showHint && (
          <div className="mt-2 text-sm" style={{ color: theme.muted }}>
            Pista: Busca un icono {target.color.includes('text-blue') ? 'azul' : 
                                 target.color.includes('text-green') ? 'verde' : 
                                 target.color.includes('text-red') ? 'rojo' : 
                                 target.color.includes('text-yellow') ? 'amarillo' : 
                                 target.color.includes('text-orange') ? 'naranja' : 
                                 target.color.includes('text-purple') ? 'morado' : 
                                 target.color.includes('text-pink') ? 'rosa' : 
                                 target.color.includes('text-gray') ? 'gris' : 'colorido'}
          </div>
        )}
      </div>

      {/* Game grid - now simpler with 10 icons */}
      {(gameActive || gameOver) && (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 justify-items-center">
          {shuffledIcons.slice(0, difficulty === 'easy' ? 6 : difficulty === 'medium' ? 8 : socialIcons.length).map((social) => (
            <div 
              key={social.id}
              onClick={() => handleIconClick(social.id)}
              className={`
                relative flex flex-col items-center justify-center p-4 rounded-xl cursor-pointer 
                transition-all transform hover:scale-110 ${social.bgColor} ${foundItems.includes(social.id) ? 'opacity-50' : ''}
                ${shakeIcon === social.id ? 'animate-shake' : ''}
                ${target && target.id === social.id ? 'ring-4 animate-pulse' : ''}
              `}
              style={{
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                animation: shakeIcon === social.id ? 'shake 0.5s cubic-bezier(.36,.07,.19,.97) both' : '',
              }}
            >
              <div className={social.color}>
                {social.icon}
              </div>
              <span className="mt-2 text-xs font-medium" style={{ color: theme.text }}>
                {social.name}
              </span>
              
              {foundItems.includes(social.id) && (
                <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                  ✓
                </div>
              )}
              
              <style jsx>{`
                @keyframes shake {
                  10%, 90% { transform: translate3d(-1px, 0, 0); }
                  20%, 80% { transform: translate3d(2px, 0, 0); }
                  30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
                  40%, 60% { transform: translate3d(4px, 0, 0); }
                }
              `}</style>
            </div>
          ))}
        </div>
      )}

      {/* Game over summary */}
      {gameOver && (
        <div className="mt-8 p-6 rounded-xl text-center animate-fadeIn" style={{ backgroundColor: theme.cardBg }}>
          <h3 className="text-2xl font-bold mb-2" style={{ color: theme.text }}>
            {foundItems.length === socialIcons.length ? '¡Perfecto!' : '¡Juego Terminado!'}
          </h3>
          
          <p className="text-lg mb-4" style={{ color: theme.text }}>
            {foundItems.length === socialIcons.length ? 
              '¡Felicidades! Conoces todas las redes populares' : 
              `Encontraste ${foundItems.length} de ${socialIcons.length} redes`}
          </p>
          
          <button
            onClick={startGame}
            className="px-6 py-2 rounded-full font-medium transition-transform hover:scale-105"
            style={{
              background: `linear-gradient(45deg, ${theme.primary}, ${theme.secondary})`,
              color: 'white',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
          >
            Jugar de nuevo
          </button>
        </div>
      )}
    </div>
  );
};

export default SocialMediaGame;