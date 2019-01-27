class SidebarMenu extends Polymer.Element {
  static get is() {
    return 'sidebar-menu';
  }
  static get properties() {
    return {
      selectedPage: {
        type: String,
        notify: true
      },
      isFirstTime: {
        type: Boolean,
        reflectToAttribute: true
      }
    };
  }

/*  constructor() {
    super();
    this._boundListener = this._scrollListener.bind(this);
  }*/

  ready() {
    super.ready();
    app.sidebar = this;
  }

/*  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('mousewheel', this._boundListener);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('mousewheel', this._boundListener);
  }

  _scrollListener(e) {
    this.isFirstTime = false;
  }*/
}
window.customElements.define(SidebarMenu.is, SidebarMenu);