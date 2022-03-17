const express = require("express");
const router = express.Router();
const fs = require('fs');
const pdfjs = require('pdfjs-dist/legacy/build/pdf')

const PDF_PATH = "C:/Users/Agencia_Criativa/adverts/assets/test.pdf"

router.get('/', async (req, res)=> {
    var resultContent = []
    
    const doc = await pdfjs.getDocument(PDF_PATH).promise    
    const totalPages = doc.numPages
    

    for(let i = 1; i < totalPages; i++){
        const page =  await doc.getPage(i)
        const { items } = await page.getTextContent()
        var tempText = ""
        items.map(txt => {
            tempText += txt.str
        })
        resultContent.push({page: i, text:tempText })
    }
    

    return res.json({text: resultContent, totalPages})
})

module.exports = app =>app.use('/init', router)