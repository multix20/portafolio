import React, { useState, useEffect } from 'react';
import {
  SiHtml5, SiCss3, SiJavascript, SiReact,
  SiTailwindcss, SiNodedotjs, SiMongodb, SiPostgresql,
  SiPython, SiDocker, SiTypescript, SiVuedotjs,
  SiAngular, SiSass, SiBootstrap, SiPhp
} from 'react-icons/si';

// Tech icons collection with metadata
const techIcons = [
  { id: 'html', icon: <SiHtml5 size={40} />, name: "HTML5", color: 'text-orange-500', bgColor: 'bg-orange-100' },
  { id: 'css', icon: <SiCss3 size={40} />, name: "CSS3", color: 'text-blue-600', bgColor: 'bg-blue-100' },
  { id: 'js', icon: <SiJavascript size={40} />, name: "JavaScript", color: 'text-yellow-400', bgColor: 'bg-yellow-100' },
  { id: 'react', icon: <SiReact size={40} />, name: "React", color: 'text-cyan-500', bgColor: 'bg-cyan-100' },
  { id: 'tailwind', icon: <SiTailwindcss size={40} />, name: "Tailwind CSS", color: 'text-teal-400', bgColor: 'bg-teal-100' },
  { id: 'node', icon: <SiNodedotjs size={40} />, name: "Node.js", color: 'text-green-600', bgColor: 'bg-green-100' },
  { id: 'mongo', icon: <SiMongodb size={40} />, name: "MongoDB", color: 'text-green-500', bgColor: 'bg-green-100' },
  { id: 'postgres', icon: <SiPostgresql size={40} />, name: "PostgreSQL", color: 'text-blue-500', bgColor: 'bg-blue-100' },
  { id: 'python', icon: <SiPython size={40} />, name: "Python", color: 'text-blue-800', bgColor: 'bg-blue-100' },
  { id: 'typescript', icon: <SiTypescript size={40} />, name: "TypeScript", color: 'text-blue-700', bgColor: 'bg-blue-100' },
  { id: 'docker', icon: <SiDocker size={40} />, name: "Docker", color: 'text-blue-600', bgColor: 'bg-blue-100' },
  { id: 'vue', icon: <SiVuedotjs size={40} />, name: "Vue.js", color: 'text-green-500', bgColor: 'bg-green-100' },
  { id: 'angular', icon: <SiAngular size={40} />, name: "Angular", color: 'text-red-500', bgColor: 'bg-red-100' },
  { id: 'sass', icon: <SiSass size={40} />, name: "Sass", color: 'text-pink-500', bgColor: 'bg-pink-100' },
  { id: 'bootstrap', icon: <SiBootstrap size={40} />, name: "Bootstrap", color: 'text-purple-600', bgColor: 'bg-purple-100' },
  { id: 'php', icon: <SiPhp size={40} />, name: "PHP", color: 'text-indigo-600', bgColor: 'bg-indigo-100' },
];

const EnhancedTechGame = ({ darkMode = false }) => {
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
  
  // Visual theme - can be customized
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

  // Get a random tech icon that hasn't been found yet
  const getRandomTarget = () => {
    const availableIcons = techIcons.filter(icon => !foundItems.includes(icon.id));
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
      setMessage('¡Increíble! ¡Has encontrado todas las tecnologías!');
    } else {
      setMessage(`¡Tiempo agotado! Tu puntuación: ${score}`);
    }
  };

  // Handle icon click
  const handleIconClick = (id) => {
    if (!gameActive) return;
    
    if (id === target.id) {
      // Correct click
      setFoundItems(prev => [...prev, id]);
      setScore(prev => prev + Math.floor(timeLeft / 3) + 1);
      
      // Visual feedback for correct answer
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
      
      // Penalty: reduce time
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
  const shuffledIcons = [...techIcons].sort(() => Math.random() - 0.5);

  return (
    <div className="w-full max-w-4xl mx-auto relative px-4 py-8" style={{ 
      backgroundColor: theme.background, 
      borderRadius: '2rem', 
      overflow: 'hidden' 
    }}>
      {/* Floating background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {techIcons.slice(0, 8).map((tech, i) => (
          <div 
            key={`bg-${tech.id}`}
            className={`absolute opacity-10 ${tech.color}`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: 'scale(1.5)',
              animation: `float-${i} ${10 + i * 5}s infinite ease-in-out alternate`
            }}
          >
            {tech.icon}
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
            Tech Stack Finder
          </span>
        </h2>
        
        {!gameActive && !gameOver && (
          <div className="mb-6 p-4 rounded-lg" style={{ backgroundColor: theme.cardBg }}>
            <p className="mb-4" style={{ color: theme.text }}>
              Encuentra tecnologías tan rápido como puedas. ¡Demuestra tus habilidades!
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
                {foundItems.length} / {difficulty === 'easy' ? 8 : difficulty === 'medium' ? 12 : techIcons.length}
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

      {/* Game grid */}
      {(gameActive || gameOver) && (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 justify-items-center">
          {shuffledIcons.slice(0, difficulty === 'easy' ? 8 : difficulty === 'medium' ? 12 : techIcons.length).map((tech) => (
            <div 
              key={tech.id}
              onClick={() => handleIconClick(tech.id)}
              className={`
                relative flex flex-col items-center justify-center p-4 rounded-xl cursor-pointer 
                transition-all transform hover:scale-110 ${tech.bgColor} ${foundItems.includes(tech.id) ? 'opacity-50' : ''}
                ${shakeIcon === tech.id ? 'animate-shake' : ''}
                ${target && target.id === tech.id ? 'ring-4 animate-pulse' : ''}
              `}
              style={{
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                animation: shakeIcon === tech.id ? 'shake 0.5s cubic-bezier(.36,.07,.19,.97) both' : '',
              }}
            >
              <div className={tech.color}>
                {tech.icon}
              </div>
              <span className="mt-2 text-xs font-medium" style={{ color: theme.text }}>
                {tech.name}
              </span>
              
              {/* Found checkmark */}
              {foundItems.includes(tech.id) && (
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
            {foundItems.length === techIcons.length ? '¡Victoria Total!' : '¡Juego Terminado!'}
          </h3>
          
          <p className="text-lg mb-4" style={{ color: theme.text }}>
            {foundItems.length === techIcons.length ? 
              '¡Felicidades! Encontraste todas las tecnologías' : 
              `Encontraste ${foundItems.length} tecnologías y conseguiste ${score} puntos`}
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

export default EnhancedTechGame;