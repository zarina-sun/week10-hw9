// Задание 1 
let name = prompt("Введите ваше имя:");
let age = Number(prompt("Введите ваш возраст:"));
let subject = prompt("Введите ваш любимый предмет:");
let grade = prompt("Введите вашу оценку по предмету:");

let student = {
  name: name,
  age: age,
  subject: subject,
  grade: grade
};
console.log("Имя:", student.name);
console.log("Возраст:", student.age);
console.log("Предмет:", student.subject);
console.log("Оценка:", student.grade);
student.age += 5;
console.log("Имя:", student.name);
console.log("Возраст:", student.age);
console.log("Предмет:", student.subject);
console.log("Оценка:", student.grade);

// Задание 2
const movies = [
    { title: "Начало", director: "Кристофер Нолан", year: 2010, genre: "фантастика" },
    { title: "Форрест Гамп", director: "Роберт Земекис", year: 1994, genre: "драма" },
    { title: "Криминальное чтиво", director: "Квентин Тарантино", year: 1994, genre: "боевик" },
    { title: "Зеленая миля", director: "Фрэнк Дарабонт", year: 1999, genre: "триллер" },
    { title: "Жизнь прекрасна", director: "Роберто Бениньи", year: 1997, genre: "комедия/драма" },
];
console.log("Режиссёр второго фильма:", movies[1].director);
console.log("Жанр четвёртого фильма:", movies[3].genre);

// Задание 3
const list = ["яблоки", "бананы", "молоко", "сыр", "хлеб", "шоколад"];
list.unshift("ананас");
list.pop();
list.splice(3, 1, "мороженое", "сок");
console.log(list);

// Задание 4
const numbers = [52, 31, 9, 85, 31, 45];
let sum = 0;
let i = 0;
while (i < numbers.length) {
  sum += numbers[i];
  i++;
}
console.log(`Сумма чисел: ${sum}`); // 253

// Задание 5
const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", numberOfPages: 281, genre: "Fiction", awards: ["Pulitzer Prize", "Brotherhood Award", "Paperback of the Year"] },
  { title: "1984", author: "George Orwell", numberOfPages: 328, genre: "Dystopian", awards: ["Prometheus Hall of Fame Award", "Time's Top 100 Novels"] },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", numberOfPages: 180, genre: "Classic", awards: ["Modern Library's Top 100", "National Book Award Nominee"] },
  { title: "Moby Dick", author: "Herman Melville", numberOfPages: 635, genre: "Adventure", awards: ["Regarded as a Great American Novel", "Part of the Western Canon"] },
  { title: "Pride and Prejudice", author: "Jane Austen", numberOfPages: 432, genre: "Romance", awards: ["BBC's Big Read", "Guardian's 100 Best Novels"] }
];

for (let i = 0; i < books.length; i++) {
  console.log(`Книга: ${books[i].title}`);
  console.log(`Автор: ${books[i].author}`);
  console.log(`Страниц: ${books[i].numberOfPages}`);
  console.log(`Жанр: ${books[i].genre}`);
  console.log(`Награды:`);
  for (let j = 0; j < books[i].awards.length; j++) {
    console.log(`  - ${books[i].awards[j]}`);
  }
  console.log('');
}
