let mylibrary = [];

function Book(title){
    this.title = title;
};

function remove(index){
    mylibrary.splice(index, 1);
    content();
}

function content(){ // add, display the book to the grid
    container.innerHTML="";
    for (i = 0; i < mylibrary.length; i++){
        const theIndex = i;
        let item = document.createElement('div');
        let delButton = document.createElement('button');
        delButton.setAttribute('class', 'delButton')
        delButton.setAttribute('id', i);
        delButton.innerText = 'delete';
        item.setAttribute('class', 'book');
        let specificBook = mylibrary[i];
        item.innerText = specificBook.title;
        container.appendChild(item);
        item.appendChild(delButton);

        delButton.addEventListener('click', () => {
            remove(theIndex);
        });
    }
}



function addBookToLibrary(){
    let title = document.querySelector("#title");
    let newBook = new Book(title.value);
    mylibrary.push(newBook);
    console.log(mylibrary); //check array content
         content();
    title.value = '';
    form.style.display = 'none';   
};

const nBook = document.querySelector(".nBook");
const form = document.querySelector("#form");
const container = document.querySelector(".container");
let inc = 0;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    addBookToLibrary()
});

nBook.addEventListener("click", () => {
form.style.display = "block";
});





    
    


    

