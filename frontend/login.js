function fetchData(inputEmail1, inputPassword1) {
    fetch(`http://localhost:3000/login`, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: inputEmail1,
                password: inputPassword1

            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
}


const button = document.getElementById("submit")
button.addEventListener('click', (e) => {
    console.log("clicked")
    const inputEmail1 = document.getElementById('exampleInputEmail1').value
    const inputPassword1 = document.getElementById('exampleInputPassword1').value
    e.preventDefault()
    fetchData(inputEmail1, inputPassword1)
})