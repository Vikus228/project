import './App.css';
import React from 'react';
import Header from './components/HeaderComponent/header';
import Footer from './components/FooterComponent/footer';
import CardList from './components/content/cardList';

const words = [
  { "word": "Star",
    "transcription": "/stɑːr/",
    "translation": "Звезда",
    "topic": "Космос"
  },
  { "word": "Moon",
    "transcription": "/muːn/",
    "translation": "Луна",
    "topic": "Космос"
},
  { "word": "Galaxy",
    "transcription": "/ˈɡæləksi/",
    "translation": "Галактика",
    "topic": "Космос"
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <CardList words={words} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
