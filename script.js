let students = [
    {id: 1, name:'Mae Villamor', program:'Bachelor of Science in Infromation Technology Major in Business Anlytics'},
    {id: 2, name:'Lensey Olazo', program:'Bachelor of Science in Nursing'},
    {id: 3, name:'Raysa Gallardo', program:'Bachelor of Science in Psychology'},
    {id: 4, name:'Reigelyn Salazar', program:'Bachelor of Science in Secondary Education major in Mathematics'},
    {id: 5, name:'Samantha Pogoy', program:'Bachelor of Science in Psychology'}
];

const createListItem = (student) =>{

// create element
    const article = document.createElement('article');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const button = document.createElement('button');

//add value
h2.innerText = student.name;
p.innerText = student.program;
button.innerText = 'Delete';
button.addEventListener('click',() =>{
    const newStudents = students.filter((s) => s.id !== student.id);
    students = newStudents;
    displayList();
});


//add class
article.classList.add('list-item');

//insert
article.append(h2);
article.append(p);
article.append(button);

return article;
}

const list = document.querySelector('#studentList');


const displayList = () =>{
    list.replaceChildren();
   const studentList = students.map((s) => createListItem(s));
   studentList.forEach((s) => list.append(s));  
}

displayList();

const form = document.querySelector('#studentForm');
const nameField = document.querySelector('#name');
const programField = document.querySelector('#program');
form.addEventListener('submit',(e) =>{
    e.preventDefault();
    const name = nameField.value;
    const program = programField.value;
    const newStudent = {
        id: students.length + 1,
        name,
        program
    }

    students.push(newStudent);
    nameField.value = '';
    programField.value = '';
    console.log(newStudent);
    displayList();
   
});



