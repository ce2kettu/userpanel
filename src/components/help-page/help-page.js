require('../../../data/commands.js');

class HelpPage extends Polymer.GestureEventListeners(Polymer.Element) {
    static get is() {
        return 'help-page';
    }
    static get properties() {
        return {
            selectedLevel: {
                type: String,
                value: 'all'
            }
        };
    }

    ready() {
        super.ready();
        this.commands = commands;
        this.levels = ['all', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    }

    _levelFilter(level, commands) {
        if (level === 'all') {
            return commands;
        } else {
            const filteredArray = commands.filter(command => {
                return command.level <= level;
            });
            return filteredArray;
        }
    }

    _getLevel(level) {
        if (level === 'all') {
            return 'All levels';
        }
        return `Level ${ level }`;
    }

    _showMore(e) {
        const item = this.$.itemList.indexForElement(e.target);
        const parent = e.target.closest('.command');
        if (parent.getAttribute('expanded') === '') {
            parent.removeAttribute('expanded');
        } else {
            parent.setAttribute('expanded', '');
        }
    }

}
window.customElements.define(HelpPage.is, HelpPage);