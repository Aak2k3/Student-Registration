'use strict'

const sName = document.getElementById('name');
const id = document.getElementById('id');
const sClass = document.getElementById('class');
const roll = document.getElementById('roll');
const button = document.getElementById('button');

const container = document.querySelector('.container')

const studentList = document.getElementById('studentList');

let editingStudent = null;    

// function to save students in local storage as objects

function saveStuDet(){
    const students = [];
    document.querySelectorAll('.studentList').forEach(student => {
        const details = student.querySelectorAll('p');
        students.push({
            name: details[0].innerHTML,
            id: details[1].innerHTML,
            class: details[2].innerHTML,
            roll: details[3].innerHTML
        })
    })
    localStorage.setItem('students',JSON.stringify(students));
}


// function to load students from local storage

function loadStuDet(){
    const students = JSON.parse(localStorage.getItem('students')) || [];
    students.forEach(student =>{
        const studentNewId = document.createElement('div');
        const studentName = document.createElement('p');
        studentName.innerHTML = student.name;
        studentNewId.appendChild(studentName)
    
        
        const studentId = document.createElement('p');
        studentId.innerHTML = student.id;
        studentNewId.appendChild(studentId)
    
        const studentClass = document.createElement('p');
        studentClass.innerHTML = student.class;
        studentNewId.appendChild(studentClass)
    
        const studentRoll = document.createElement('p');
        studentRoll.innerHTML = student.roll;
        studentNewId.appendChild(studentRoll)
    
        const delRes = document.createElement('div');
        const delButton = document.createElement('button');
        delButton.innerHTML = '<img class="delresBt" src ="cross_14875490.png"></img>'
        delButton.classList.add("delresBtn")
        delRes.appendChild(delButton)
        const resButton = document.createElement('button');
        resButton.innerHTML = '<img class= "editBtn" src ="pen_12080619.png"></img>'
        resButton.classList.add("delresBtn")
        delRes.appendChild(resButton)
        studentNewId.appendChild(delRes)
    
        studentList.appendChild(studentNewId);
    
        studentNewId.classList.add("studentList")
        studentName.classList.add("insideEl")
        studentId.classList.add("insideEl")
        studentRoll.classList.add("insideEl")
        studentClass.classList.add("insideEl")
        delRes.classList.add('insideEl')
        delRes.classList.add('image')
        
    })
}


const addStudentId = function(event){
    event.preventDefault();

    if (editingStudent) {

    if(sName.value == '') return;
    if(id.value == '') return;
    if(sClass.value == '') return;
    if(roll.value == '') return;
        
        const studentDetails = editingStudent.querySelectorAll('p');
        studentDetails[0].innerHTML = sName.value;
        studentDetails[1].innerHTML = id.value;
        studentDetails[2].innerHTML = sClass.value;
        studentDetails[3].innerHTML = roll.value;

        editingStudent = null;
        button.innerHTML = "Add";

        sName.value = '';
        id.value = '';
        sClass.value = '';
        roll.value = '';
    } else {
    
    if(sName.value == '') return;
    if(id.value == '') return;
    if(sClass.value == '') return;
    if(roll.value == '') return;
    
    

    const studentNewId = document.createElement('div');
    const studentName = document.createElement('p');
    studentName.innerHTML = sName.value;
    studentNewId.appendChild(studentName)

    
    const studentId = document.createElement('p');
    studentId.innerHTML = id.value;
    studentNewId.appendChild(studentId)

    const studentClass = document.createElement('p');
    studentClass.innerHTML = sClass.value;
    studentNewId.appendChild(studentClass)

    const studentRoll = document.createElement('p');
    studentRoll.innerHTML = roll.value;
    studentNewId.appendChild(studentRoll)

    const delRes = document.createElement('div');
    const delButton = document.createElement('button');
    delButton.innerHTML = '<img class="delresBt" src ="cross_14875490.png"></img>'
    delButton.classList.add("delresBtn")
    delRes.appendChild(delButton)
    const resButton = document.createElement('button');
    resButton.innerHTML = '<img class= "editBtn" src ="pen_12080619.png"></img>'
    resButton.classList.add("delresBtn")
    delRes.appendChild(resButton)
    studentNewId.appendChild(delRes)

    studentList.appendChild(studentNewId);

    studentNewId.classList.add("studentList")
    studentName.classList.add("insideEl")
    studentId.classList.add("insideEl")
    studentRoll.classList.add("insideEl")
    studentClass.classList.add("insideEl")
    delRes.classList.add('insideEl')
    delRes.classList.add('image')
    
    saveStuDet();

    sName.value = '';
    id.value = '';
    sClass.value = '';
    roll.value = '';

    }
}
button.addEventListener('click', addStudentId)

/* Delete Buttob */

const deleteStudent = function(event){
    const deleteButton = event.target;
    console.log(deleteButton)

    if(deleteButton.classList.contains('delresBt') ){
       

        const delFor = deleteButton.parentElement;
        const delForever = delFor.parentElement;
        const justDel = delForever.parentElement
        justDel.remove();

        saveStuDet();

    }
}
container.addEventListener('click',deleteStudent)

/*Edit button*/

const editStudent = function(event){
    const editBtn = event.target;

    if(editBtn.classList.contains('editBtn')){
        editingStudent = editBtn.closest('.studentList')
        const studentDetails = editingStudent.querySelectorAll('p');
        console.log(studentDetails)

        sName.value = studentDetails[0].innerHTML;
        id.value = studentDetails[1].innerHTML;
        sClass.value = studentDetails[2].innerHTML;
        roll.value = studentDetails[3].innerHTML;   

        button.innerHTML = "update"

        

    }
}

container.addEventListener('click',editStudent)

loadStuDet();
