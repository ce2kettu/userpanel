class MainApp extends Polymer.Element {
  static get is() {
    return 'main-app';
  }
  static get properties() {
    return {
      selectedPage: {
        type: String,
        value: 'stats'
      },
      opened: {
        type: Boolean,
        reflectToAttribute: true,
        value: false
      }
    };
  }

  ready() {
    super.ready();
    app.main = this;
    app.overlay = this.$.overlay;
    /* Remove line below in production */
    setTimeout(() => {
      this.open();
    }, 500)
  }

  hide() {
    this.shadowRoot.querySelector('.panel').style.opacity = 0;
  }

  show() {
    this.shadowRoot.querySelector('.panel').style.opacity = 1;
  }

  open() {
    const openAnimation = [{
        transform: 'scale(0)'
      },
      {
        transform: 'scale(1)'
      }
    ];

    const openTiming = {
      duration: 500,
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
    };

    this.shadowRoot.querySelector('.panel').style.opacity = 1;
    this.shadowRoot.querySelector('.panel').animate(openAnimation, openTiming);
  }

  close() {
    const closeAnimation = [{
        opacity: '1'
      },
      {
        opacity: '0'
      }
    ];

    const closeTiming = {
      duration: 500,
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
    };

    this.shadowRoot.querySelector('.panel').style.opacity = 0;
    this.shadowRoot.querySelector('.panel').animate(closeAnimation, closeTiming);
  }

}

window.customElements.define(MainApp.is, MainApp);