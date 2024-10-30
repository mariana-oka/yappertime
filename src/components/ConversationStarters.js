import React, { useState, useEffect } from 'react';
import { Menu, Play, Pause, Twitter } from 'lucide-react';

const Logo = () => (
  <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center space-x-2">
    <span className="text-white/90 font-bold text-sm tracking-tight uppercase">yappertime</span>
  </div>
);

const Footer = () => (
  <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center text-white/70 text-sm">
    <a 
      href="https://x.com/Mariana0ka" 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center space-x-2 hover:text-white transition-colors"
    >
      <Twitter size={16} />
      <span>Created by Mariana</span>
    </a>
  </div>
);

const ConversationStarters = () => {
  const categories = {
    'Passions & Interests': [
      "What's your latest obsession?",
      "If you had a podcast, what would it be about?",
      "What's the most interesting thing you've learned recently?",
      "What's a topic you could talk about for hours?",
      "What's something you're excited to learn next?",
      "What hobby would you pursue if money wasn't a factor?",
      "What's the most interesting documentary you've watched lately?",
      "What's a skill you wish more people appreciated?",
      "What's the most fun way you express your creativity?",
      "What's a subject that always grabs your attention?",
      "What's the most unique combination of interests you have?",
      "What's something you collect and why?",
      "What's a hobby that surprised you by how much you enjoy it?",
      "What's the most interesting thing you've read lately?",
      "What's a passion project you'd love to start?",
      "What's something you're really good at but rarely get to do?",
      "What's the most interesting place you've discovered recently?",
      "What's a hobby that helps you relax?",
      "What's something you create that brings you joy?",
      "What's an interest you inherited from someone else?"
    ],
    'Career & Growth': [
      "What's a problem in your industry that you'd love to solve?",
      "How has serendipity played a role in your career path?",
      "What's the best career decision you've made so far?",
      "What's something in your field that excites you about the future?",
      "What's a skill you developed that surprised you in its usefulness?",
      "What's the most interesting challenge in your work right now?",
      "What's a project you're really proud of?",
      "What's something you wish you'd known earlier in your career?",
      "What's the most valuable feedback you've received?",
      "What's a work-related skill that helps you in other areas of life?",
      "What's something you've learned from a mistake at work?",
      "What's an unexpected way your career has shaped you?",
      "What's the most interesting trend in your industry?",
      "What's a goal you're working toward professionally?",
      "What's something you'd like to be known for in your field?",
      "What's the most interesting part of your work that people don't expect?",
      "What's a change you'd like to see in your industry?",
      "What's the best team you've ever been part of?",
      "What's a professional skill you're developing right now?",
      "What's something you've built that you're proud of?"
    ],
    'Life & Philosophy': [
      "What's a belief you've completely changed your mind about?",
      "What's something that becomes more fascinating the more you learn about it?",
      "What's a question you keep coming back to?",
      "What's something you believe that few others do?",
      "What's a life lesson you had to learn multiple times?",
      "What's something that always restores your faith in humanity?",
      "What's a small decision that had a huge impact on your life?",
      "What's something you're unlearning right now?",
      "What's a perspective shift that changed everything for you?",
      "What's something you value more as you get older?",
      "What's a contradiction in yourself that you've come to appreciate?",
      "What's something you think will be obvious to future generations?",
      "What's a question you wish you had the answer to?",
      "What's something that seems simple but is actually complex?",
      "What's a lesson life keeps teaching you?",
      "What's something you've gained by losing?",
      "What's a truth you live by?",
      "What's something you're still figuring out?",
      "What's a gift in your life that you didn't expect?",
      "What's something you know now that you wish you'd known earlier?"
    ]
  };

  const [currentQuestion, setCurrentQuestion] = useState('');
  const [currentCategory, setCurrentCategory] = useState('Passions & Interests');
  const [isExiting, setIsExiting] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [timeLeft, setTimeLeft] = useState(180);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [timerDuration] = useState(180);

  useEffect(() => {
    setCurrentQuestion(getRandomQuestion(currentCategory));
  }, []);

  useEffect(() => {
    let timer;
    if (isTimerActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(time => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      handleNext();
      setTimeLeft(timerDuration);
    }
    return () => clearInterval(timer);
  }, [isTimerActive, timeLeft, timerDuration]);

  const getRandomQuestion = (category) => {
    const questions = categories[category];
    return questions[Math.floor(Math.random() * questions.length)];
  };

  const handleNext = () => {
    setIsExiting(true);
    setTimeout(() => {
      setCurrentQuestion(getRandomQuestion(currentCategory));
      setIsExiting(false);
      setTimeLeft(timerDuration);
    }, 500);
  };

  const toggleTimer = () => {
    setIsTimerActive(!isTimerActive);
    if (!isTimerActive) {
      setTimeLeft(timerDuration);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
    setCurrentQuestion(getRandomQuestion(category));
    setShowMenu(false);
    setTimeLeft(timerDuration);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex flex-col items-center justify-center p-4 relative">
      <Logo />

      {/* Menu Button */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="absolute top-4 left-4 text-white/90 p-2 rounded-full hover:bg-white/10 transition-all"
      >
        <Menu size={24} />
      </button>

      {/* Timer Controls */}
      <div className="absolute top-4 right-4 flex items-center space-x-3">
        <div className="text-2xl font-bold text-white/90">
          {formatTime(timeLeft)}
        </div>
        <button
          onClick={toggleTimer}
          className={`p-2 rounded-full transition-all hover:scale-105 ${
            isTimerActive
              ? 'bg-white/20 text-white hover:bg-white/30'
              : 'bg-white/10 text-white hover:bg-white/20'
          }`}
        >
          {isTimerActive ? <Pause size={24} /> : <Play size={24} />}
        </button>
      </div>

      {/* Category Menu */}
      <div className={`absolute top-16 left-4 right-4 md:right-auto md:w-64 bg-black/20 backdrop-blur-lg rounded-lg p-2 transition-all duration-300 z-20 ${
        showMenu ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`block w-full text-left px-4 py-3 rounded-lg transition-all text-base ${
              currentCategory === category
                ? 'bg-white/20 text-white font-medium'
                : 'text-white/70 hover:bg-white/10'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Question Display */}
      <div className={`max-w-4xl px-4 transition-all duration-500 transform text-center mb-16 ${
        isExiting ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
      }`}>
        <div className="text-white/70 text-lg mb-4">
          {currentCategory}
        </div>
        
        <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-12">
          {currentQuestion}
        </h1>

        <div className="flex justify-center">
          <button
            onClick={handleNext}
            className="bg-white/20 hover:bg-white/30 text-white px-12 py-4 rounded-full text-xl font-bold transition-all hover:scale-105"
          >
            Skip
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ConversationStarters;
