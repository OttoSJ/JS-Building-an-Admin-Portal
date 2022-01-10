

async function getData() {
    let response = await fetch("http://localhost:3001/listBooks")
    let books = await response.json()

    books.map(renderData)

}

function renderData(book) {
    let mainDiv = document.getElementById("root")
    
    let li = document.createElement("li")
    li.textContent = book.title

    let input = document.createElement("input")
    input.type = "text"
    input.value = book.quantity

    let button = document.createElement("button")
    button.textContent = "Submit"

    button.addEventListener("click", () => {
        fetch("http://localhost:3001/updateBook",{
            method: "PATCH", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "id": book.id,
                "quantity": input.value

            })
         })
    })

    li.append(input, button)
    mainDiv.append(li)
}


getData()