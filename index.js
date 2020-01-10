let students = [
    {Name: 'Hoang', Age: 20},
    {Name: 'Minh', Age: 5},
    {Name: 'Sang', Age: 50},
    {Name: 'Long', Age: 27},
    {Name: 'Khoa', Age: 20},
];

// Một số function sẵn có trong prototype Array của javascript có tác dụng
// tương tự như LINQ trong C#

// 1. .filter() trong JS ~ .WHERE() trong C#
let ageLess20 = students.filter((student) => student.Age > 22);
console.log('Age less 20: ', ageLess20);

// 2. .every() và .some() trong JS ~ .All() và .Any() trong C#
// Các hàm này trả về true/false
let allStudentLarger5 = students.every((student) => student.Age > 5);
console.log('All student is larger 5: ', allStudentLarger5);
let anyStudentAge50 = students.some((student) => student.Age == 50);
console.log('Any student age is 50: ', anyStudentAge50);

// 3. .forEach() trong JS ~ .ForEach() trong C#
students.forEach(console.log);

// 4. .map() trong JS ~ .Select() trong C#
console.log('Names: ', students.map((student) => student.Name));

// 5. .find() và .findIndex() trong JS ~ .FirstOrDefault() và .FindIndex() trong C#
console.log('Find first student named Long: ', students.find((student) => student.Name == 'Long'));
console.log('Find index: ', students.findIndex((student) => student.Name == 'Long'));
