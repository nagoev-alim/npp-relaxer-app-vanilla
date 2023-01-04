// ⚡️ Import Styles
import './style.scss';
import feather from 'feather-icons';

// ⚡️ Render Skeleton
document.querySelector('#app').innerHTML = `
<div class='app-container'>
  <div class='relaxer-app'>
    <h2 class='title'>Relaxer App</h2>
    <div class='relaxer-app__container' data-container=''>
      <div class='relaxer-app__circle'></div>

      <p data-text=''></p>

      <div class='relaxer-app__pointer'>
        <span class='pointer'></span>
      </div>

      <div class='relaxer-app__gradient-circle'></div>
    </div>
  </div>

  <a class='app-author' href='https://github.com/nagoev-alim' target='_blank'>${feather.icons.github.toSvg()}</a>
</div>
`;

// ⚡️Create Class
class App {
  constructor() {
    this.DOM = {
      container: document.querySelector('[data-container]'),
      text: document.querySelector('[data-text]'),
    };

    this.totalTime = 7500;
    this.breatheTime = (this.totalTime / 5) * 2;
    this.holdTime = this.totalTime / 5;

    this.turnAnimation();
    setInterval(this.turnAnimation, this.totalTime);
  }

  /**
   * @function turnAnimation - Animation
   */
  turnAnimation = () => {
    this.DOM.text.innerText = 'Breathe In!';
    this.DOM.container.className = 'relaxer-app__container grow';

    setTimeout(() => {
      this.DOM.text.innerText = 'Hold';

      setTimeout(() => {
        this.DOM.text.innerText = 'Breathe Out!';
        this.DOM.container.className = 'relaxer-app__container shrink';
      }, this.holdTime);
    }, this.breatheTime);
  };
}

// ⚡️Class instance
new App();
