class NotificationBox extends Polymer.Element {
  static get is() {
    return 'notification-box';
  }
  static get properties() {
    return {
      opened: {
        type: Boolean,
        reflectToAttribute: true,
        value: false
      },
      title: {
        type: String,
        value: 'title'
      },
      subtitle: {
        type: String,
        value: 'subtitle'
      },
      duration: {
        type: Number,
        value: 5000
      }
    };
  }

  ready() {
    super.ready();
    app.notification = this;
  }

  open(title, subtitle, duration) {
    if (title && subtitle) {
      this.title = title;
      this.subtitle = subtitle;
    }
    if (duration) {
      this.duration = duration;
    }
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.opened = true;
    this.timer = setTimeout(() => {
      this.close();
    }, this.duration);
  }

  close() {
    this.opened = false;
  }

}
window.customElements.define(NotificationBox.is, NotificationBox);