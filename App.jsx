import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">Neuron</div>
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#sobre">Sobre Nós</a>
          <a href="#intercambio">Intercâmbio</a>
          <a href="#login" className="login">Login</a>
        </nav>
      </header>

      <main className="main-content">
        <h1>Descubra Oportunidades de Intercâmbio Global</h1>
        <p>
          Descubra a plataforma Neuron e realize seu sonho de intercâmbio! Com suporte no
          ensino e orientação de preparação, você se destacará no processo. Aí, se conecta
          você a bolsas de estudo personalizadas, preparando-o para uma experiência internacional enriquecedora.
        </p>
        <button className="btn-saiba-mais">Saiba mais</button>
        <div className="image-background">
          <img src="https://s3-alpha-sig.figma.com/img/bc71/95c1/07ef2e3fc2e5024d34197c7fa44a3385?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XTIoXdZCXYZN~kMqgyiy58VNWwPvSexBZiVxcnaCMq3IjKumdTa3RKEq23TD-mqcrgFcr8KJbhRm-iEXwdNAiE2ld2tBEFHVxMtrCIOrE7UrStpB11BdGp4SYs1w678KBs0GbRC~EK8DEBrETaXR6x44XO6kTmPOtkg2VOy2bQCtZj4T5b7PUIkH7JD2MAfhb9y9vFJGm9aUhXxHs3IjIKTJP7M9PfF3pYo7peI-0AYTdM4gk1lx3lmDzklVcBfjeOu9N0W3cx3uFElHSBcNrKWDZjpL3z3EWl0tIf~-BxQA6AP8M2s8Sc-k9mtnuGWsxf4pPBs5-FR-yb14LOwtnQ__" alt="" className="character-image"/>
        </div>
      </main>
      <div className="how-it-works-section">
      <h2 className="section-title">COMO FUNCIONA?</h2>
      <p className="section-description">
        Os intercâmbios acontecem como parte do processo de preparação dos alunos durante o ensino médio. 
        Através de uma abordagem que combina o plano de estudos personalizado e suporte, os estudantes têm 
        acesso a ferramentas que os capacitam a melhorar seu desempenho acadêmico. Enquanto se preparam, 
        podem participar de atividades que fortalecem seu histórico escolar e suas habilidades, aumentando as 
        chances de serem aceitos em programas de intercâmbio.
      </p>
    </div>
    </div>
  );
}

export default App;
