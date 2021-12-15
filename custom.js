let input1 = document.getElementById('input1');
let addTodo = document.getElementById('Addtodo');
let result = document.getElementById('result');

addTodo.addEventListener('click',function (event) {
    event.preventDefault()
    let input1 = document.getElementById('input1').value;
    // result.innerText = input1.value;
      document.getElementById('input1').value = "";
      if (input1 === '') {
          alert('Enter value')
      }else{
    let newItemList = document.createElement('li');
    newItemList.setAttribute('class','list2');
    let delButton =  document.createElement('button');
    delButton.setAttribute('class','list1')
    delButton.innerText = 'delete' 
    let editBtn = document.createElement('button');
    editBtn.innerText = 'Edit';
    editBtn.setAttribute('class','list3')
    let taskComplete = document.createElement('button');
    taskComplete.innerText = 'Complete'
    taskComplete.setAttribute('class','list4')
    newItemList.innerText = input1
    console.log(newItemList);
    // let input1 = document.getElementById('input1');
    // result.innerText = input1.value;
    // document.getElementById('input1') = "";

    delButton.addEventListener('click',function () {
        this.parentNode.remove()
    })
    
    editBtn.addEventListener('click',function () {
     
    })
    



    result.appendChild(newItemList)
    newItemList.appendChild(delButton)
    newItemList.appendChild(editBtn)
    newItemList.appendChild(taskComplete)
      }
})
// taskComplete.addEventListener('click', function () {
//          .classList.add('abc')
// })