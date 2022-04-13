const url = 'http://localhost:5500/api'
const newUser =  {
    name: 'Bruno',
    avatar: 'https://lorempixel.com/400/200',
    city: 'Vitória - Es'
}
const UpdateUser =  {
    name: 'Salxixa',
    avatar: 'https://lorempixel.com/400/200',
    city: 'Domingos Martins - Es'
}


function getUser() {
    axios.get(url)
    .then(response => {
        const data = response.data
        renderResults.textContent =JSON.stringify(data)


    })
    .catch(error => alert(error))



}
//getUser()

function addNewUser(){
    axios.post(url, newUser)
    .then(response => {
        alert(JSON.stringify(response.data))

    })
    .catch(error => alert(error))

}

//addNewUser()



function updateUser(){
    axios.put(`${url}/3`, UpdateUser)
    .then(response => {
        alert(JSON.stringify(response.data))
    })
    .catch(error => alert(error))

}

//updateUser()

function deleteUser(){
    axios.delete(`${url}/12`)
    .then(response => {
        alert(JSON.stringify(response.data))
    })
    .catch(error => alert(error))
}

//deleteUser()

function getOneUser(){
    axios.get(`${url}/4`)
    .then(response => {
        const data = response.data
        renderResults.textContent = JSON.stringify(data)
    })
    .catch(error => alert(error))
}
getOneUser()