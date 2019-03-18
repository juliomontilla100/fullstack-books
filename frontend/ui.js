import path from 'path'
import { format } from 'timeago.js'
import BookService from './services/bookService'
let bookService = new BookService()

class Ui {
    
    async renderBooks(){
        let books = await bookService.getBooks()
        let booksList = document.getElementById('books-cards')
        booksList.innerHTML = ''
        
        for( let book of books ){
            let element = document.createElement('div')
            element.innerHTML = `
                <div class="card mb-4 p-4">
                    <div class="card-boy">
                        <p><strong>Titulo:</strong> ${book.title} </p>
                        <p><strong>Autor:</strong> ${book.author} </p>
                        <p><strong>isbn:</strong> ${book.isbn} </p>
                        <p><strong>creado:</strong> ${format(book.created_at)} </p>
                        ${book.imgPath ? `<img class="img-fluid" src="/${book.imgPath}">` : ''}
                        <br>
                        <a class="btn btn-danger text-white mt-3" id="delete" _id="${book._id}">Borrar</a>
                    </div>
                </div>
            `
            booksList.appendChild(element)
        }
    }
    
    async addNewBook(book){
        await bookService.newBook(book)
        this.renderBooks()
        this.renderMessage('Libro creado', 'success')
    }
    
    async deleteBook(id){
        await bookService.deleteBook(id)
        this.renderBooks()
        this.renderMessage('Libro eliminado', 'danger')
    }
    
    renderMessage(message, cssClass){
        let element = document.createElement('div')
        element.className = `mt-4 alert alert-${cssClass}`
        element.appendChild(document.createTextNode(message))
        
        let container = document.getElementById('container')
        container.insertAdjacentElement('afterbegin', element)

        setTimeout(() =>{
            document.querySelector('.alert').remove()
        },3000)
    }
    
}

export default Ui