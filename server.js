const { response } = require('express')
const express = require('express')
const app = express()
const PORT = 8000

// app.use(cors())

const classes = {
'barbarian': {
    'hitDice': "1d12",
    'armor': 'Light armor, medium armor, shields',
    'weapons': 'Simple weapons, martial weapons',
    'tools': 'None',
    'savingThrows': 'Strength, Constitution',
    'skills': 'Choose two from Animal Handling, Athletics, Intimidation, Nature, Perception, and Survival'
},
'bard': {
    'hitDice': "1d8",
    'armor': 'Light armor',
    'weapons': 'Simple weapons, hand crossbows, longswords, rapiers, shortswords',
    'tools': 'Three musical instruments of your choice',
    'savingThrows': 'Dexterity, Charisma',
    'skills': 'Choose any three'
},
'cleric': {
    'hitDice': "1d8",
    'armor': 'Light armor, medium armor, shields',
    'weapons': 'Simple weapons',
    'tools': 'None',
    'savingThrows': 'Wisdom, Charisma',
    'skills': 'Choose two from History, Insight, Medicine, Persuasion, and Religion'
},
'druid': {
    'hitDice': "1d8",
    'armor': 'Light armor, medium armor, shields (druids will not wear armor or use shields made of metal)',
    'weapons': 'Clubs, daggers, darts, javelins, maces, quarterstaffs, scimitars, sickles, slings, spears',
    'tools': 'Herbalism kit',
    'savingThrows': 'Intelligence, Wisdom',
    'skills': 'Choose two from Arcana, Animal Handling, Insight, Medicine, Nature, Perception, Religion, and Survival'
},
'fighter': {
    'hitDice': "1d10",
    'armor': 'All armor, shields',
    'weapons': 'Simple weapons, martial weapons',
    'tools': 'None',
    'savingThrows': 'Strength, Constitution',
    'skills': 'Choose two skills from Acrobatics, Animal Handling, Athletics, History, Insight, Intimidation, Perception, and Survival'
},
'monk': {
    'hitDice': "1d8",
    'armor': 'None',
    'weapons': 'Simple weapons, shortswords',
    'tools': 'Choose one type of artisan’s tools or one musical instrument',
    'savingThrows': 'Strength, Dexterity',
    'skills': 'Choose two from Acrobatics, Athletics, History, Insight, Religion, and Stealth'
},
'paladin': {
    'hitDice': "1d10",
    'armor': 'All armor, shields',
    'weapons': 'Simple weapons, martial weapons',
    'tools': 'None',
    'savingThrows': 'Wisdom, Charisma',
    'skills': 'Choose two from Athletics, Insight, Intimidation, Medicine, Persuasion, and Religion'
},
'ranger': {
    'hitDice': "1d10",
    'armor': 'Light armor, medium armor, shields',
    'weapons': 'Simple weapons, martial weapons',
    'tools': 'None',
    'savingThrows': 'Strength, Dexterity',
    'skills': 'Choose three from Animal Handling, Athletics, Insight, Investigation, Nature, Perception, Stealth, and Survival'
},
'rouge': {
    'hitDice': "1d8",
    'armor': 'Light armor',
    'weapons': 'Simple weapons, hand crossbows, longswords, rapiers, shortswords',
    'tools': 'Thieves’ tools',
    'savingThrows': 'Dexterity, Intelligence',
    'skills': 'Choose four from Acrobatics, Athletics, Deception, Insight, Intimidation, Investigation, Perception, Performance, Persuasion, Sleight of Hand, and Stealth'
},
'sorcerer': {
    'hitDice': "1d6",
    'armor': 'None',
    'weapons': 'Daggers, darts, slings, quarterstaffs, light crossbows',
    'tools': 'None',
    'savingThrows': 'Constitution, Charisma',
    'skills': 'Choose two from Arcana, Deception, Insight, Intimidation, Persuasion, and Religion'
},
'warlock': {
    'hitDice': "1d8",
    'armor': 'Light armor',
    'weapons': 'Simple weapons',
    'tools': 'None',
    'savingThrows': 'Wisdom, Charisma',
    'skills': 'Choose two skills from Arcana, Deception, History, Intimidation, Investigation, Nature, and Religion'
},
'wizard': {
    'hitDice': "1d6",
    'armor': 'None',
    'weapons': 'Daggers, darts, slings, quarterstaffs, light crossbows',
    'tools': 'None',
    'savingThrows': 'Intelligence, Wisdom',
    'skills': 'Choose two from Arcana, History, Insight, Investigation, Medicine, and Religion'
},
'unknown' : {
    'hitDice': "unknown",
    'armor': 'unknown',
    'weapons': 'unknown',
    'tools': 'unknown',
    'savingThrows': 'unknown',
    'skills': 'unknown'
}

}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const className = request.params.name.toLowerCase()
    if (classes[className]){
        response.json(classes[className])
    } else {
        response.json(classes['unknown'])
    }
    
}) 

app.listen(process.env.PORT || PORT, ()=> {
    console.log(`The server is now running on port ${PORT}!`)
})