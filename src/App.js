import './App.css';
import React from 'react';
import Header from './components/HeaderComponent/header';
import Footer from './components/FooterComponent/footer';
import CardList from './components/content/cardList';

const words = [
  { "word": "Star",
    "transcription": "/stɑːr/",
    "translation": "Звезда"
  },
  { "word": "Moon",
    "transcription": "/muːn/",
    "translation": "Луна"},
  { "word": "Galaxy",
    "transcription": "/ˈɡæləksi/",
    "translation": "Галактика"},
];

function App() {
  return (
    <div className="App">
      <Header />
      <div className='cards'>
        <CardList words={words} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
