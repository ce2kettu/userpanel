const humanizeDuration = require('humanize-duration');

class StatsPage extends Polymer.Element {
    static get is() {
        return 'stats-page';
    }

    ready() {
        super.ready();
        app.stats = this;
    }

    _formatMoney(amount) {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
        });

        return formatter.format(amount);
    }

    _formatGametime(milliseconds) {
        return humanizeDuration(milliseconds, {
            round: true,
            units: ['d', 'h', 'm']
        });
    }
}
window.customElements.define(StatsPage.is, StatsPage);