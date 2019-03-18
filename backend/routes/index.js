const express = require('express')
const path = require('path')
const fsExtra = require('fs-extra')
const multer = require('multer')
const storageMulter = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '../public/uploads'))
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage: storageMulter })
const logger = require('../logger')
const bookController = require('../controllers/book.controller')


const router = express.Router()

/* consultar libros */
router.get('/', async (req,res) => {
    
    try {
        
        let books = await bookController.findBooks()
        res.status(200).json(books)
        logger.info(`libros consultados`)
        
    } catch (err) {
        logger.error(`error al consultar libros: ${err}`)
    }
    
})

/* crear libro */
router.post('/', upload.single('image'), async (req,res) => {

    try {

        let imagePath
        if (req.file){
            imagePath = `uploads/${req.file.filename}`
        }
        
        let newBook = await bookController.newBook(req.body, imagePath)
        res.status(200).json(newBook)
        logger.info(`Nuevo libro creado`,)
        
        
    } catch (err) {
        logger.error(`error al crear un libro: ${err}`)
    }
    
})

/* borrar libro */
router.delete('/:id', async (req,res) => {
    
    try {
        
        let idBook = req.params.id 
        let deleteBook = await bookController.deleteBook(idBook)
        fsExtra.unlink(path.resolve(`./backend/public/${deleteBook.imgPath}`))
        
        res.status(200).json(deleteBook)
        logger.info(`Libro eliminado`,)
        
        
    } catch (err) {
        logger.error(`error al eliminar un libro: ${err}`)
    }
    
})

module.exports = router