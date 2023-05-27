let tbody = document.querySelector('tbody')
let form = document.querySelector('form')
let inputname = document.querySelector('.nameinp')
let inputage = document.querySelector('.ageinp')
let modal = document.querySelector('.modal_window')
let forms_edit = document.forms.get
let edit_name = forms_edit.querySelector('.edit_name')
let edit_age = forms_edit.querySelector('.edit_age')
let edit_close = document.querySelector('#edit_img')
base_url = ' http://localhost:9999/users'
fetch(base_url)
    .then(res => res.json())
    .then(data => reload(data))


let mass = []
let id 
function reload(arr) {
   
   
    let tr = document.createElement('tr')
    let thnum = document.createElement('td')
    let thname = document.createElement('td')
    let thage = document.createElement('td')
    let thaction = document.createElement('td')
    let thimgone = document.createElement('img')
    let thimgtwo = document.createElement('img')



    thimgone.src = "img/edit-svgrepo-com.svg"
    thimgtwo.src = "img/delete-svgrepo-com.svg"
    thname.innerHTML = inputname.value
    thage.innerHTML = inputage.value
    thnum.innerHTML = mass.length

    tbody.append(tr)
    tr.append(thnum, thname, thage, thaction)
    thaction.append(thimgone, thimgtwo)


    thimgtwo.onclick = () => {
        dataBase = dataBase.filter(el => el.id !== item.id)
        tr.remove()
    }
    thimgone.onclick = () => {
        modal.style.display = 'flex'
    }
    edit_close.onclick = () => {

        modal.style.display = 'none'

    }

    forms_edit.onsubmit = (event) => {
        event.preventDefault();
        if (edit_name.value.length === 0) {
            err = true
        }
        if (err === false) {

            let newTitle = edit_name.value
            mass = newTitle
            thname.innerHTML = newTitle


        }
        if (edit_age.value.length === 0) {
            err = true
        }
        if (err === false) {

            let newage = edit_age.value
            mass = newage
            thage.innerHTML = newage


        }

    }
thimgtwo.onclick = () => {
    
 
    tr.remove
}
   }


let err = false

form.onsubmit = (event) => {

    event.preventDefault();

    let list = {
        name: inputname.value,
        age: inputage.value,
    }

    fetch(base_url, {
        method: "post",
        body: JSON.stringify(list),
          
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(data => {
        fetch(base_url)
            .then(l => l.json())
            .then(d => reload(d))
    })


   
}





