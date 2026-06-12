import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Socials from './components/Socials/Socials';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import { AboutView, SkillsView, WorkView, ArticlesView, ResumeView } from './components/Pages/Views';
import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');
  const [activeItem, setActiveItem] = useState('');
  const [navItems, setNavItems] = useState(['ABOUT', 'SKILLS', 'PROJECTS', 'ARTICLES', 'RESUME']);
  const [history, setHistory] = useState([]);
  const [activePreset, setActivePreset] = useState('default');

  // Toggles between light and dark themes
  const handleTitleClick = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Handles clicking a navbar item
  const handleItemClick = (item) => {
    if (activeItem === item) return;

    // Save previous active item to history
    setHistory((prev) => [...prev, activeItem]);

    // Reorder nav list: clicked goes to top, previous goes to bottom
    setNavItems((prevItems) => {
      let list = prevItems.filter((i) => i !== item);
      list.unshift(item); // Clicked item goes to top

      if (activeItem) {
        list = list.filter((i) => i !== activeItem);
        list.push(activeItem); // Previous active goes to bottom
      }
      return list;
    });

    setActiveItem(item);
  };

  // Handles back arrow click
  const handleBack = () => {
    setActiveItem('');
    setHistory([]);
    setNavItems(['ABOUT', 'SKILLS', 'PROJECTS', 'ARTICLES', 'RESUME']);
  };

  // Renders the main content panel dynamically
  const renderContent = () => {
    switch (activeItem) {
      case 'ABOUT':
        return <AboutView />;
      case 'SKILLS':
        return <SkillsView />;
      case 'PROJECTS':
        return <WorkView />;
      case 'ARTICLES':
        return <ArticlesView />;
      case 'RESUME':
        return <ResumeView />;
      default:
        return <Hero onTitleClick={handleTitleClick} />;
    }
  };

  return (
    <div className={`appContainer ${theme === 'dark' ? 'dark' : ''} ${activeItem ? 'pageActive' : ''} preset-${activePreset}`}>
      {/* Black curtain water preloader */}
      <LoadingScreen />

      {/* Vertical Navigation (Left) */}
      <header className="sidebar">
        <Navbar 
          activeItem={activeItem} 
          navItems={navItems} 
          onItemClick={handleItemClick} 
          onBack={handleBack} 
        />
      </header>

      {/* Ambient Music Player (Right) */}
      <MusicPlayer theme={theme} onPresetChange={setActivePreset} />

      {/* Main Content Area (Center/Right) */}
      <main className="content">
        {renderContent()}
      </main>

      {/* Footer / Socials (Bottom Right) */}
      <footer className="footer">
        <Socials />
      </footer>
    </div>
  );
}

export default App;
