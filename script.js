
let lang = 'ru'
const voc = {
    'ru': ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс', ],
    'en': ['Mo', 'Tu', 'We', 'Thu', 'Fr', 'Sa', 'Su', ]
}

// Через if
if (lang == 'ru') {
    console.log('Пн, Вт, Ср, Чт, Пт, Сб, Вс')
} else if (lang == 'en') {
    console.log('Mo, Tu, We, Thu, Fr, Sa, Su')
}

// Через switch
switch (lang) {
    case 'ru':
        console.log('Пн, Вт, Ср, Чт, Пт, Сб, Вс')
        break
    case 'en':
        console.log('Mo, Tu, We, Thu, Fr, Sa, Su')
        break
}

// Через многомерный ассоциативный массив
console.log(voc[lang])


const namePerson = 'Артем'

result = (namePerson == 'Артем') ? 'директор' : (namePerson == 'Александр') ? 'преподаватель' : 'студент'

console.log(result)
