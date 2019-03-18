class BookService{
    constructor(){
        this.URI = '/api'
    }

    async getBooks(){
        let res = await fetch(this.URI)
        let books = await res.json()
        return books
    }

    async newBook(book){
        let res = await fetch(this.URI, {
            method: 'POST', 
            body: book
        })
        let newBook = await res.json()
        return newBook
    }

    async deleteBook(id){
        let res = await fetch(`${this.URI}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        let deleteBook = await res.json()
        return deleteBook
    }
}

export default BookService