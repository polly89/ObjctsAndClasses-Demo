const person = {
    'firstName': 'Chandler',
    "lastName": 'Bing',
    age: 30 //prefer
}

const personAge = 'age'

console.log(person.firstName)
console.log(person['lastName'])
console.log(person[personAge])

const dinner = {
    appetizer: 'dinosaur',
    entree: 'ice cream',
    dessert: 'fish tacos',
    drink: 'chocolate milk or potentially straight syrup',
    staff: {
        hostess: 'Jess',
        waiter: 'Brandon',
        cooks: ['Braden', 'Marissa'],
    }
}
// const firstCook = dinner.staff.cooks[0]
console.log(dinner.staff)

const food2 = {
    appetizer: 'chips and queso',
    entree: 'chicken burrito',
    dessert: 'churros',
    drink: 'margarita'
}


const {entree, appetizer} = dinner
const {entree: mexicanDinnerEntree, appetizer: mexicanDinnerAppetizer} = food2

// console.log()
// console.log(entree)
// console.log(appetizer)
// console.log(mexicanDinnerAppetizer, mexicanDinnerEntree)

// food.dessert2 = 'key lime pie'
// food['dessert3'] = 'tres leches'

// for(let course in food){
//     console.log(food[course])
// }

class Meal {
    constructor(entree, drink){
        this.entree = entree
        this.drink = drink
    }

    addApp(app){
        this.appetizer = app
    }
}

const myDinner = new Meal('chicken', 'protein shake')
const myOtherDinner = new Meal('spaghetti', 'diet soda')
myDinner.addApp('queso')
console.log(myDinner)
console.log(myOtherDinner)

class RestaurantMeal extends Meal{
    constructor(staff, entree, drink){
        super(entree, drink)
        this.staff = staff
    }

tip(){
    console.log('thank you for gratuity')
}
}

const fogoDeChao = new RestaurantMeal(['marissa', 'david'], 'tons of meat', 'mango lemonade')
fogoDeChao.addApp('salad bar')
fogoDeChao.tip()
console.log(fogoDeChao)