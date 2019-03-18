import style from './styles/style.scss'
import Ui from './ui';
let ui = new Ui

let byId = function( id ) { return document.getElementById( id ); };

byId('book-form').addEventListener('submit', function(e){
    e.preventDefault()

    let bookFormData = new FormData()
    bookFormData.append('title',  byId('title').value)
    bookFormData.append('author', byId('author').value)
    bookFormData.append('isbn',   byId('isbn').value)
    bookFormData.append('image',  byId('image').files[0])

    ui.addNewBook(bookFormData)

    this.reset()
})

byId('books-cards').addEventListener('click', (e)=>{
    if(e.target.id === 'delete'){
       
        let bookId = e.target.getAttribute('_id') 
        ui.deleteBook(bookId)
        
    }
})

ui.renderBooks()