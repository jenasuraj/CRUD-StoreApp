const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
const PORT = 5000; 
// Enable CORS for all routes
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"jenasuraj",
    password:"Surajaezakmi2002@",
    database:"nodeCourse"
})

app.get('/', (req, res) => {
  res.json({ message: 'Express server with CORS is running!' });
});

app.get('/books',(req,res)=>
{
const q = "SELECT * FROM products"
db.query(q,(err,data)=>
{
    if(err)
    {
res.json(err);
    }
    else{
        res.json(data);
    }
})
});

//we can't post this direct as localhost in browser so use postman...
app.post('/books',(req,res)=>
{
    const q = "INSERT INTO products (`title`,`price`,`description`,`imageUrl`) VALUES (?)";
    const values = [
        req.body.title,
        req.body.price,
        req.body.description,
        req.body.imageUrl,
    ];
    
    db.query(q, [values], (err, data) => {
        if (err) {
            res.json(err);
        } else {
            res.json("Book has been created");
        }
    });
    
});

app.delete('/books/:id',(req,res)=>
{
    const bookId = req.params.id;
    const q = "DELETE FROM products WHERE id = ?"

    db.query(q,[bookId],(err,data)=>
    {
        if(err)
        {
            return res.json(err);
        }
        return res.json("Book has been deleted");
    })
})

app.put('/books/:id', (req, res) => {
    const bookId = req.params.id;
    const q = "UPDATE products SET `title` = ?, `description` = ?, `price` = ?, `imageUrl` = ? WHERE id = ?";
    const values = [
        req.body.title,
        req.body.description,
        req.body.price,
        req.body.imageUrl,
    ];

    db.query(q, [...values, bookId], (err, data) => {
        if (err) {
            return res.status(500).json(err);  // Send a 500 error response
        }
        if (data.affectedRows === 0) {  // Check if the update affected any rows
            return res.status(404).json({ message: "Book not found" });
        }
        return res.json({ message: "Book has been updated" });
    });
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
