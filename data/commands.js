window.commands = {
    player: [{
        name: 'Challenge',
        description: "See what and where will be next challenge held",
        usage: '/challenge'
    }, {
        name: 'CP/TP',
        description: "Use /cp to create a checkpoint, /tp to teleport to it",
        usage: '/cp /tp'
    }, {
        name: 'Ghost',
        description: "Displays ghost when you finished map last time",
        usage: '/ghost'
    }, {
        name: 'Respawn',
        description: "Respawn your vehicle few seconds before you died last time",
        usage: '/res (also exists as F/enter)'
    }, {
        name: 'Skip',
        description: "Skip the map At least 51% of alive players must skip to pass",
        usage: '/skip'
    }, {
        name: 'Spectator list',
        description: "Displays spectators that view you when you're alive on right side",
        usage: '/speclist'
    }, {
        name: 'Stats',
        description: "Displays stats in chat",
        usage: '/st'
    }, {
        name: 'Tops',
        description: "Displays top 10 in various types, DMs, wins, ratio, cash,",
        usage: '/top [type]'
    }, {
        name: 'Map information',
        description: "Shows map information, creators, number played, price of it",
        usage: '/map'
    }, {
        name: 'Your cash',
        description: "Displays your cash",
        usage: '/cash'
    }, {
        name: 'Gambling stats',
        description: "Displays your gambling stats, such as amount of spins, rolls, how much you've lost and how much you won, and ratio",
        usage: '/rs'
    }, {
        name: 'Giving money',
        description: "Gives amount of money to another player you want to give",
        usage: '/give [player] [cash]'
    }, {
        name: 'Spin',
        description: "Spins jackpot and gives you reward if number is matched",
        usage: '/spin [number] [cash]'
    }, {
        name: 'Jackpot',
        description: "Displays amount of current jackpot",
        usage: '/jackpot'
    }, {
        name: 'Roll',
        description: "Rolls numbers between 1-6, which give various things, from cash to points",
        usage: '/roll'
    }, {
        name: 'Buying maps',
        description: "Buys current map, which you then own",
        usage: '/buymap'
    }, {
        name: 'Selling maps',
        description: "Sells maps you own",
        usage: '/sellmap [mapname]'
    }, {
        name: 'Buying players',
        description: "Buys player you want and keep him until someone else buys him/sell yourself",
        usage: '/buyp [player]'
    }, {
        name: 'Selling players',
        description: "Sells players you own",
        usage: '/sellp [player]'
    }, {
        name: '/go command',
        description: "When you win map, you have chance to set map you own",
        usage: '/go [mapname]'
    }, {
        name: 'Buy next map',
        description: "Buy next map, costs $100k",
        usage: '/buynm [mapname]'
    }, {
        name: 'Vote redo',
        description: "If vote reaches 51% of arena, map will be played again",
        usage: '/vr'
    }, {
        name: 'Location',
        description: "Displays country and approx city of player",
        usage: '/where [player]'
    }, {
        name: 'Join language',
        description: "Join another language, if you're not fancy of English",
        usage: '/join [language]'
    }, {
        name: 'Leave language',
        description: "Leave language",
        usage: '/leave'
    }, {
        name: 'Create group',
        description: "Create your own group to talk with people you want, press X to talk",
        usage: '/create'
    }, {
        name: 'Group invite',
        description: "Invite your friends in group",
        usage: '/invite [player]'
    }, {
        name: 'Group leave',
        description: "Leave group you're in",
        usage: '/leavegroup'
    }, {
        name: 'Disable private messages',
        description: "Disable private messages if you don't want to be bothered",
        usage: '/pms'
    }, {
        name: 'Hide GUI',
        description: "Hides everything on your screen",
        usage: '/hidegui'
    }, {
        name: 'Freecam',
        description: "When you're dead, you're able to freecam",
        usage: '/freecam'
    }, {
        name: 'Hide Global chat',
        description: "Hides global chat from chat",
        usage: '/hideglobal'
    }, {
        name: 'Checkmap',
        description: "Checks available maps",
        usage: '/checkmap'
    }, {
        name: 'Nab',
        description: "Fun command",
        usage: '/nab [player]'
    }, {
        name: 'Nab #2',
        description: "Fun command, working for everyone",
        usage: '/naball'
    }, {
        name: 'Gomosek',
        description: "Someone is gomosek? /gay him!",
        usage: '/gay [player]'
    }, {
        name: 'Cry',
        description: "Fun command",
        usage: '/cry'
    }, {
        name: 'Ragequit',
        description: "Fun command It isn't actual quitting game",
        usage: '/ragequit'
    }, {
        name: 'PC',
        description: "Someone has weak PC? Buy him new one",
        usage: '/pc [player]'
    }, {
        name: 'Ping',
        description: "Someone has high ping? Warn him with this command",
        usage: '/ping [player]'
    }, {
        name: 'WTF',
        description: "Fun command",
        usage: '/wtf [player]'
    }, {
        name: 'Yeby',
        description: "Fun command",
        usage: '/yeby [player]'
    }, {
        name: 'Shut the f**k up',
        description: "Fun command",
        usage: '/stfu [player]'
    }, {
        name: 'Penis',
        description: "View other people's penis",
        usage: '/penis [player]'
    }, {
        name: 'Setting your penis',
        description: "Set your own penis, be realistic",
        usage: '/penisset [amount]'
    }, {
        name: 'Cookie',
        description: "Give someone cookie and something else!",
        usage: '/cookie [player]'
    }, {
        name: 'Nice cheats',
        description: "Fun command",
        usage: '/nc [player]'
    }, {
        name: 'Bye bye',
        description: "Fun command",
        usage: '/bb [player]'
    }, {
        name: 'Bye Bye everyone',
        description: "Fun command",
        usage: '/bball'
    }, {
        name: 'Hello',
        description: "Fun command",
        usage: '/hi [player]'
    }, {
        name: 'Hello everyone',
        description: "Fun command",
        usage: '/hiall'
    }, {
        name: 'Good luck',
        description: "Fun command",
        usage: '/gl [player]'
    }, {
        name: 'Nice one',
        description: "Fun command",
        usage: '/n1 [player]'
    }, {
        name: 'Bad one',
        description: "Fun command",
        usage: '/b1 [player]'
    }, {
        name: 'Yes, I agree with you',
        description: "Fun command",
        usage: '/yes [player]'
    }, {
        name: 'No, you are fucking wrong',
        description: "Fun command",
        usage: '/no [player]'
    }, {
        name: 'Hunter',
        description: "Hunter is coming command",
        usage: '/hunter'
    }, {
        name: 'Be right back',
        description: "Fun command",
        usage: '/brb'
    }, {
        name: 'Banan',
        description: "Fun command",
        usage: '/banan [player]'
    }, {
        name: 'F**k you',
        description: "Fun command",
        usage: '/fu [player]'
    }, {
        name: 'Thank you',
        description: "Fun command",
        usage: '/ty [player]'
    }, {
        name: 'No problem',
        description: "Fun command",
        usage: '/np [player]'
    }, {
        name: 'Gogo, you can win',
        description: "Fun command",
        usage: '/gogo [player]'
    }, {
        name: 'Gogo, you can LOSE',
        description: "Fun command",
        usage: '/gogo2 [player]'
    }, {
        name: 'Bot',
        description: "Fun command",
        usage: '/bot [player]'
    }, {
        name: 'But why',
        description: "Fun command",
        usage: '/butwhy [player]'
    }, {
        name: 'Rest in peace',
        description: "Fun command",
        usage: '/rip [player]'
    }, {
        name: 'Khe fast',
        description: "Fun command",
        usage: '/khe [player]'
    }, {
        name: 'Lick',
        description: "Fun command",
        usage: '/lick [player]'
    }, {
        name: 'Spank',
        description: "Fun command",
        usage: '/spank [player]'
    }, {
        name: 'Why not',
        description: "Fun command",
        usage: '/whynot [player]'
    }, {
        name: 'PFF',
        description: "Fun command",
        usage: '/pff [player]'
    }, {
        name: 'Pro',
        description: "Fun command",
        usage: '/pro [player]'
    }, {
        name: 'Everyone is pro',
        description: "Fun command",
        usage: '/proall'
    }, {
        name: 'Eat',
        description: "Fun command",
        usage: '/eat [player]'
    }, {
        name: 'Wiu Wiu Wiu',
        description: "Shortcutter on the chase!",
        usage: '/wiu [player]'
    }, {
        name: 'Nice try',
        description: "Fun command",
        usage: '/nt [player]'
    }],
    admin: [{
        name: 'Ghostmode',
        description: 'Toggles ghostmode',
        usage: '/gm',
        level: 1
    }, {
        name: 'Quick mute',
        description: 'Mutes the targeted player in the current arena for x amount of seconds if specified, default 30 seconds',
        usage: '/qm [player] [x]',
        level: 1
    }, {
        name: 'Mute',
        description: 'Mutes the targeted player in the current arena for x amount of minutes if specified, default infinite',
        usage: '/mute [player] [x]',
        level: 1
    }, {
        name: 'Unmute',
        description: 'Unmutes the targeted player in the current arena',
        usage: '/mute [player]',
        level: 1
    }, {
        name: 'Global mute',
        description: 'Mutes the targeted player in the global chat',
        usage: '/gmute [player]',
        level: 1
    }, {
        name: 'Global unmute',
        description: 'Unmutes the targeted player in the global chat',
        usage: '/gmute [player]',
        level: 1
    }, {
        name: 'Language mute',
        description: 'Mutes the targeted player in a language chat',
        usage: '/lmute [player]',
        level: 1
    }, {
        name: 'Language umute',
        description: 'Unmutes the targeted player in a language chat',
        usage: '/lmute [player]',
        level: 1
    }, {
        name: 'Serial check',
        description: 'Displays a list of usernames and nicknames respectively that are associated with the targeted player\'s serial',
        usage: '/srl [player]',
        level: 2
    }, {
        name: 'Boom',
        description: 'Booms the targeted player\'s vehicle',
        usage: '/boom [player]',
        level: 2
    }, {
        name: 'Countdown',
        description: 'Starts a countdown in the range of 3 and 5 seconds',
        usage: '/c [integer] or /count [integer] ',
        level: 3
    }, {
        name: 'Kick to lobby',
        description: 'Kicks the targeted player to lobby',
        usage: '/lobby [player]',
        level: 3
    }, {
        name: 'Arena kick',
        description: 'Kicks the targeted player from the server, only available in the current arena',
        usage: '/kick [player]',
        level: 4
    }, {
        name: 'Arena ban',
        description: 'Bans player from arena',
        usage: '/ban [player]',
        level: 5
    }, {
        name: 'Arena unban',
        description: 'Unbans a player by the serial provided',
        usage: '/unban [serial]',
        level: 5
    }, {
        name: 'Random',
        description: 'Changes the current map to a random one',
        usage: '/random',
        level: 6
    }, {
        name: 'Redo',
        description: 'Restarts the current map',
        usage: '/redo',
        level: 7
    }, {
        name: 'Again',
        description: 'Sets the current map as the next map',
        usage: '/again',
        level: 7
    }, {
        name: 'Next map',
        description: 'Sets the next map of ones\'s choice',
        usage: '/nextmap [map] or /nm [map]',
        level: 7
    }, {
        name: 'Cancel next map',
        description: 'Cancels the next map in the line',
        usage: '/cancel',
        level: 7
    }, {
        name: 'Cancel all next maps',
        description: 'Cancels all maps in the line',
        usage: '/cancelall',
        level: 7
    }, {
        name: 'Force',
        description: 'Forces the next map to start',
        usage: '/force',
        level: 7
    }, {
        name: 'Run',
        description: 'Only in manual mode; runs the next map that is currently on hold',
        usage: '/run',
        level: 7
    }, {
        name: 'Goto',
        description: 'Instantly starts a map of one\'s choice',
        usage: '/goto [map]',
        level: 7
    }, {
        name: 'Smash',
        description: 'Smashes the targeted player to the ground',
        usage: '/smash [player]',
        level: 7
    }, {
        name: 'Push',
        description: 'Pushes the targeted player in the air',
        usage: '/push [player]',
        level: 7
    }, {
        name: 'Speed',
        description: 'Speeds up the targeted player',
        usage: '/speed [player]',
        level: 7
    }, {
        name: 'Slow down',
        description: 'Slows down the targeted player',
        usage: '/slow [player]',
        level: 7
    }, {
        name: 'Silence',
        description: 'Disables the chat for everyone else but admins with level 8 or higher',
        usage: '/silence',
        level: 7
    }, {
        name: 'Hide nicknames',
        description: 'Hides nicknames from being visible above vehicle',
        usage: '/hidenicks',
        level: 7
    }, {
        name: 'Nitro',
        description: 'Adds nitro to the targeted player',
        usage: '/nos [player]',
        level: 8
    }, {
        name: 'Nitro to everyone',
        description: 'Adds nitro to all remaining players in the current arena',
        usage: '/nosall',
        level: 8
    }, {
        name: 'Boom everyone',
        description: 'Booms all remaining players',
        usage: '/boomall',
        level: 8
    }, {
        name: 'Fix',
        description: 'Fixes the targeted player\'s vehicle',
        usage: '/fix [player]',
        level: 8
    }, {
        name: 'Fix everyone',
        description: 'Fixes all remaining players',
        usage: '/fixall',
        level: 8
    }, {
        name: 'Warp',
        description: 'Teleports oneself to the targeted player\'s location',
        usage: '/warp [player]',
        level: 8
    }, {
        name: 'Here',
        description: 'Teleports the targeted player to one\'s location',
        usage: '/here [player]',
        level: 8
    }, {
        name: 'Admin level',
        description: 'Sets the specified admin level to the targeted player',
        usage: '/setlevel [player]',
        level: 8
    }, {
        name: 'Arena password',
        description: 'Changes the current arena password',
        usage: '/setarenapassword [password]',
        level: 8
    }, {
        name: 'Arena mode',
        description: 'Changes the current arena mode to random, manual or vote',
        usage: '/setarenamode [type]',
        level: 8
    }, {
        name: 'AFK detector',
        description: 'Toggles the AFK detector in the current arena',
        usage: '/setarenadetector',
        level: 8
    }, {
        name: 'FPS detector',
        description: 'Toggles the FPS detector in the current arena',
        usage: '/setarenafps',
        level: 8
    }, {
        name: 'Ping detector',
        description: 'Toggles the ping detector in the current arena',
        usage: '/setarenaping',
        level: 8
    }, {
        name: 'CP/TP',
        description: 'Toggles the CP/TP system in the current arena',
        usage: '/setarenacptp',
        level: 8
    }, {
        name: 'WFF script',
        description: 'Toggles the WFF script in the current arena',
        usage: '/setarenawff',
        level: 8
    }, {
        name: 'Spectator chat',
        description: 'Toggles the spectator chat in the current arena',
        usage: '/showspectatorchat',
        level: 8
    }, {
        name: 'Rewind',
        description: 'Toggles the rewind system in the current arena',
        usage: '/setarenarewind',
        level: 8
    }, {
        name: 'Spectators',
        description: 'Toggles the spectator mode in the current arena',
        usage: '/setarenaspectators',
        level: 8
    }, {
        name: 'Vehicle color',
        description: 'Assigns the same color to all vehicles',
        usage: '/setarenavehiclecolor [color]',
        level: 8
    }, {
        name: 'Reset vehicle color',
        description: 'Resets the arena vehicle color',
        usage: '/resetarenavehiclecolor',
        level: 8
    }, {
        name: 'Remove repairs',
        description: 'Removes all repair pickups in the current arena',
        usage: '/removerepairs',
        level: 8
    }, {
        name: 'Remove objects',
        description: 'Removes all objects in the current arena',
        usage: '/removeobjects',
        level: 8
    }, {
        name: 'Spawn vehicle',
        description: 'Spawns a vehicle with the specified id, default vehicle is rhino',
        usage: '/tank [vehicle_id]',
        level: 8
    }, {
        name: 'Ban top times',
        description: 'Bans the target player from getting top times in the current arena',
        usage: '/bantt [player]',
        level: 9
    }, {
        name: 'Server kick',
        description: 'Kicks the target player from server even though the targeted player might not be in the current arena',
        usage: '/skick [player]',
        level: 10
    }, {
        name: 'Kick everyone to lobby',
        description: 'Kicks all players in the current arena to lobby',
        usage: '/lobbyall',
        level: 10
    }]
};