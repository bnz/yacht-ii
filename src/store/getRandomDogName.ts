import { getRandomInt } from "@helpers/random"
import { players } from "@store/players/players"

const dogNamesFemale = [
    "Ася", "Боня", "Вита", "Голди", "Джес", "Ева", "Жужа", "Зара", "Ирма", "Кира", "Кики", "Лора", "Марта", "Нора", "Рада", "Соня", "Тося", "Феня", "Хася", "Чара",
]

const dogNamesMale = [
    "Макс", "Чарли", "Альф", "Лео", "Ник", "Оскар", "Рекс", "Сёма", "Том", "Чак", "Шрек", "Ярик", "Арчи", "Буч", "Веня", "Грей", "Джек", "Жорик", "Зак", "Каспер",
]

const dogNames = [
    ...dogNamesFemale,
    ...dogNamesMale,
]

export function getRandomDogName() {
    const taken = players.data.map(function ({ data: { name } }) {
        return name
    })
    let index

    do {
        index = getRandomInt(0, dogNames.length - 1)
    } while (taken.includes(dogNames[index]))

    return dogNames[index]
}
