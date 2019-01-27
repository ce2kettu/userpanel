const rename = require('deep-rename-keys');

const playerObject = {
    stats: {
        username: 'test',
        nickname: 'test',
        avatarUrl: '../html/images/placeholder.png',
        cash: 81561,
        deathmatches: 58,
        wins: 13,
        ratio: 22.41,
        points: 65,
        price: 33000,
        owner: 'Haritik',
        gametime: 2452322324237,
        rolls: 30,
        spins: 1732,
        cashin: 483848,
        cashout: 2439383,
        gamblingRatio: 110
    },
    settings: {
        language: 'English',
        enablePVP: true,
        panelTransparency: true,
        mapTextures: true,
        downloadMusic: true,
        mapMusic: true,
        nitroColor: '',
        customTextures: false,
        disablePrivateMessages: false,
        hideGlobal: false,
        hideInterface: false,
        primaryColor: '#d34b90',
        secondaryColor: '#212121',
        chatColor: '#ffffff',
        customLights: true,
        customSkin: true,
        customWheels: true,
        isFirstTime: false
    },
    ownedPlayers: [{
        name: "test",
        price: 2534242458
    }, {
        name: "test",
        price: 2534242458,
        account: 'test'
    }, {
        name: "test",
        price: 2534242458,
        account: 'test'
    }, {
        name: "test",
        price: 2534242458,
        account: 'test'
    }, {
        name: "test",
        price: 2534242458,
        account: 'test'
    }, {
        name: "test",
        price: 2534242458,
        account: 'test'
    }, {
        name: "test",
        price: 2534242458,
        account: 'test'
    }],
    ownedMaps: [{
        name: '[DM] Cats Rock - Aint That Right?',
        price: 500000
    }],
    ownedItems: {
        lights: ['594cfc792e8f3df4d47d06ff'],
        skins: [],
        wheels: []
    },
    equippedItems: {
        lights: '594cfc792e8f3df4d47d06ff',
        skins: '',
        wheels: ''
    }
};

const mapsArray = [{
        name: 'KoN Shooter Map',
        resource: ''
    },
    {
        name: '2012 Portal',
        resource: ''
    }
]

const languagesArray = ['English', 'Spanish', 'German', 'Turkish', 'Russian', 'Chinese', 'Japanese', 'Hindi', 'Arabic', 'Portuguese'];

class GlobalDatastore extends Polymer.Element {
    static get is() {
        return 'global-datastore';
    }

    static get properties() {
        return {
            player: {
                type: Object,
                notify: true,
                value: playerObject
            },
            languages: {
                type: Array,
                notify: true,
                value: languagesArray
            },
            maps: {
                type: Array,
                notify: true,
                value: mapsArray
            },
            shopData: {
                type: Object,
                notify: true,
                value: {}
            }
        };
    }

    static get observers() {
        return [
            '_settingsChanged(player.settings.*, player.settings)'
        ];
    }

    ready() {
        super.ready();
        app.datastore = this;

        const dataTypes = ['lights', 'skins', 'wheels'];
        let dataStore = {};

        dataTypes.forEach((type, index, array) => {
            const endpoint = `${ this.importPath }data/${ type }.json`;
            fetch(endpoint)
                .then(response => response.json())
                .then(data => {
                    this.set(`shopData.${ type }`, data[0]);
                });
        });
    }

    updateStats(stats) {
        const tempData = this._convertData(stats);
        const data = rename(tempData, (key) => {
            if (key === 'player_wins') {
                return 'wins'
            };
            if (key === 'player_dms') {
                return 'deathmatches'
            };
            if (key === 'player_cash') {
                return 'cash'
            };
            if (key === 'player_points') {
                return 'points'
            };
            if (key === 'player_price') {
                return 'price'
            };
            if (key === 'player_owner_name') {
                return 'owner'
            };
            if (key === 'player_gametime') {
                return 'gametime'
            };
            if (key === 'player_ratio') {
                return 'ratio'
            };
            if (key === 'player_name') {
                return 'nickname'
            };
            if (key === 'player_account') {
                return 'username'
            };
            if (key === 'player_rolls') {
                return 'rolls'
            };
            if (key === 'player_spins') {
                return 'spins'
            };
            if (key === 'player_cashin') {
                return 'cashin'
            };
            if (key === 'player_cashout') {
                return 'cashout'
            };
            if (key === 'player_gambling_ratio') {
                return 'gamblingRatio'
            };
            return key;
        });
        this.set('player.stats', data);
    }

    updateSettings(settings) {
        const tempData = this._convertData(settings);
        const data = rename(tempData, (key) => {
            if (key === 'pvp_allowed') {
                return 'enablePVP'
            };
            if (key === 'maps_textures') {
                return 'mapTextures'
            };
            if (key === 'panel_transparency') {
                return 'panelTransparency'
            };
            if (key === 'no_music') {
                return 'mapMusic'
            };
            if (key === 'maps_music') {
                return 'downloadMusic'
            };
            if (key === 'chat_color') {
                return 'chatColor'
            };
            if (key === 'car_color') {
                return 'primaryColor'
            };
            if (key === 'car_color2') {
                return 'secondaryColor'
            };
            if (key === 'car_skin') {
                return 'customSkin'
            };
            if (key === 'car_lights') {
                return 'customLights'
            };
            if (key === 'car_wheels') {
                return 'customWheels'
            };
            if (key === 'nitro_color') {
                return 'nitroColor'
            };
            if (key === 'no_personalmessages') {
                return 'disablePrivateMessages'
            };
            if (key === 'road_texture') {
                return 'customTextures'
            };
            if (key === 'hide_global') {
                return 'hideGlobal'
            };
            if (key === 'hide_hud') {
                return 'hideInterface'
            };
            if (key === 'is_first_time') {
                return 'isFirstTime'
            };
            if (key === 'player_language') {
                return 'language'
            };
            return key;
        });

        this.set('player.settings', data);
    }

    updatePlayersOwned(players) {
        const tempData = this._convertData(players);
        const data = rename(tempData, (key) => {
            if (key === 'player_name') {
                return 'name'
            };
            if (key === 'player_price') {
                return 'price'
            };
            if (key === 'player_account') {
                return 'account'
            };
            return key;
        });
        this.set('player.ownedPlayers', data);
    }

    updateMapsOwned(maps) {
        const tempData = this._convertData(maps);
        const data = rename(tempData, (key) => {
            if (key === 'map_name') {
                return 'name'
            };
            if (key === 'map_price') {
                return 'price'
            };
            return key;
        });
        this.set('player.ownedMaps', data);
    }

    _settingsChanged() {
        const settings = rename(this.player.settings, (key) => {
            if (key === 'enablePVP') {
                return 'pvp_allowed'
            };
            if (key === 'mapTextures') {
                return 'maps_textures'
            };
            if (key === 'panelTransparency') {
                return 'panel_transparency'
            };
            if (key === 'mapMusic') {
                return 'no_music'
            };
            if (key === 'downloadMusic') {
                return 'maps_music'
            };
            if (key === 'chatColor') {
                return 'chat_color'
            };
            if (key === 'primaryColor') {
                return 'car_color'
            };
            if (key === 'secondaryColor') {
                return 'car_color2'
            };
            if (key === 'customSkin') {
                return 'car_skin'
            };
            if (key === 'customLights') {
                return 'car_lights'
            };
            if (key === 'customWheels') {
                return 'car_wheels'
            };
            if (key === 'nitroColor') {
                return 'nitro_color'
            };
            if (key === 'disablePrivateMessages') {
                return 'no_personalmessages'
            };
            if (key === 'customTextures') {
                return 'road_texture'
            };
            if (key === 'hideGlobal') {
                return 'hide_global'
            };
            if (key === 'hideInterface') {
                return 'hide_hud'
            };
            if (key === 'isFirstTime') {
                return 'is_first_time'
            };
            if (key === 'language') {
                return 'player_language'
            };
            return key;
        });

        mta.triggerEvent('onSettingsChanged', JSON.stringify(settings));
    }

    setData(path, tempData) {
        const data = this._convertData(tempData);
        if (typeof data === 'object' || Array.isArray(data)) {
            this.set(path, data);
        } else {
            this.set(path, tempData);
        }
    }

    /* Return LUA table's first child only */
    _convertData(data) {
        return data[0];
    }

}
window.customElements.define(GlobalDatastore.is, GlobalDatastore);
