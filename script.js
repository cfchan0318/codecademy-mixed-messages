class palStatusGenerator {
    _pals;
    _pronouns;
    _moods;
    _actions;

    constructor() {
        this._message = ''
        this._pals = ['Lamball', 'Cattiva', 'Chikipi', 'Lifmunk', 'Foxparks',
            'Fuack', 'Sparkit', 'Tanzee', 'Rooby', 'Pengullet', 'Penking', 'Jolthog',
            'Jolthog Cryst', 'Gumoss', 'Vixy', 'Hoocrates', 'Teafant', 'Depresso',
            'Cremis', 'Daedream', 'Rushoar', 'Nox', 'Fuddler', 'Killamari', 'Mau',
            'Mau Cryst', 'Celaray', 'Direhowl', 'Tocotoco', 'Flopie', 'Mozzarina',
            'Bristla', 'Gobfin', 'Gobfin Ignis', 'Hangyu', 'Hangyu Cryst', 'Mossanda',
            'Mossanda Lux', 'Woolipop', 'Caprity', 'Melpaca', 'Eikthyrdeer', 'Eikthyrdeer Terra',
            'Nitewing', 'Ribbuny', 'Incineram', 'Inceneram Noct', 'Cinnamoth', 'Arsox', 'Dumud',
            'Cawgnito', 'Leezpunk', 'Leezpunk Ignis', 'Loupmoon', 'Galeclaw', 'Robinquill',
            'Robinquill Terra', 'Gorirat', 'Beegarde', 'Elizabee', 'Grintale', 'Swee', 'Sweepa',
            'Chillet', 'Univolt', 'Foxcicle', 'Pyrin', 'Pyrin Noct', 'Reindrix', 'Rayhound',
            'Kitsun', 'Dazzi', 'Lunaris', 'Dinossom', 'Dinossom Lux', 'Surfent', 'Surfent Terra',
            'Maraith', 'Digtoise', 'Tombat', 'Lovander', 'Flambelle', 'Vanwyrm', 'Vanwyrm Cryst',
            'Bushi', 'Beakon', 'Ragnahawk', 'Katress', 'Wixen', 'Verdash', 'Vaelet', 'Sibelyx',
            'Elphidran', 'Elphidran Aqua', 'Kelpsea', 'Kelpsea Ignis', 'Azurobe', 'Cryolinx',
            'Blazehowl', 'Blazehowl Noct', 'Relaxaurus', 'Relaxaurus Lux', 'Broncherry', 'Broncherry Aqua',
            'Petallia', 'Reptyro', 'Ice Reptyro', 'Kingpaca', 'Ice Kingpaca', 'Mammorest', 'Mammorest Cryst',
            'Wumpo', 'Wumpo Botan', 'Warsect', 'Fenglope', 'Felbat', 'Quivern', 'Blazamut', 'Helzephyr',
            'Astegon', 'Menasting', 'Anubis', 'Jormuntide', 'Jormuntide Ignis', 'Suzaku', 'Suzaku Aqua',
            'Grizzbolt', 'Lyleen', 'Lyleen Noct', 'Faleris', 'Orserk', 'Shadowbeak', 'Paladius', 'Necromus',
            'Frostallion', 'Frostallion Noct', 'Jetragon'];

        this._pronouns = ['He', 'She'];
        this._moods = ['happy',
        'sad', 
        'excited',
        'bored',
        'tired',
        'stressed',
        'calm',
        'angry',
        'anxious',
        'relaxed'];
        this._actions = [
            'walking',
            'running',
            'jumping',
            'skipping',
            'dancing',
            'singing',
            'sleeping',
            'dreaming',
            'coding',
            'programming',
            'building',
            'creating',
            'designing',
            'developing',
            'testing',
            'fixing',
            'improving',
            'maintaining',
            'deploying',
            'supporting'
        ];
    }

    get randomPal() {
        let index = Math.floor(Math.random() * this._pals.length);
        return this._pals[index]
    }

    get randomPronoun() {
        let index = Math.floor(Math.random() * this._pronouns.length);
        return this._pronouns[index]
    }

    get randomMood() {
        let index = Math.floor(Math.random() * this._moods.length);
        return this._moods[index]
    }

    get randomAction() {
        let index = Math.floor(Math.random() * this._actions.length);
        return this._actions[index]
    }

    get message() {
        return `${this.randomPal} is ${this.randomAction}. ${this.randomPronoun} is ${this.randomMood}.`
    }

}

const numberOfPals = 10;

for (let i = 0; i < numberOfPals; i++) {
    const a = new palStatusGenerator();
    console.log(a.message)
}


