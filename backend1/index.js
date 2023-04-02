import express  from "express";
import mysql from "mysql"
import cors from "cors"

const app=express()

const db=mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "sainandan",
    database: "todos"
})

app.use(express.json())
app.use(cors())

app.get("/", (req, res)=> {
    res.json("Hello, this is Backend")
})

// Get all todos

app.get("/todos", (req, res)=> {
    const q="select * from todoinfo"
    db.query(q, (err, data)=> {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/todos", (req, res)=> {
    const q="INSERT INTO todoinfo (`task`, `priority`, `category`, `status`, `this_date`) VALUES (?)"
    const values=[
        req.body.task,
        req.body.priority,
        req.body.category,
        req.body.status,
        req.body.this_date
    ]

    db.query(q, [values], (err, data)=> {
        if(err) return res.json(err)
        return res.json("Todo Successfully Created")
    })
})

// Delete Todo with id

app.delete("/todos/:id", (req, res) => {
    const todoId=req.params.id;
    const q="DELETE FROM todoinfo WHERE id=?"
    
    db.query(q, [todoId], (err, data)=> {
        if(err) return res.json(err)
        return res.json("Todo Successfully Deleted")
        
    })
})

//  pending Todos

app.get("/pendingtodos", (req, res)=> {
    const q="select * from todoinfo where status=?"
    const value=""
    db.query(q, [value], (err, data)=> {
        if(err) return res.json(err)
        return res.json(data)
    })
})

//  completed Todos

app.get("/completedtodos", (req, res)=> {
    const q="select * from todoinfo where status=?"
    const value="Done"
    db.query(q, [value], (err, data)=> {
        if(err) return res.json(err)
        return res.json(data)
    })
})

//  today pending Todos

app.get("/todaypendingtodos", (req, res)=> {
    const q="select * from todoinfo where status=? and this_date=?"
    const value=""
    const current = new Date();
    const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;
    db.query(q, [value, date], (err, data)=> {
        if(err) return res.json(err)
        return res.json(data)
    })
})

//  today completed Todos

app.get("/todaycompletedtodos", (req, res)=> {
    const q="select * from todoinfo where status=? and this_date=?"
    const value="Done"
    const current = new Date();
    const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;
    db.query(q, [value, date], (err, data)=> {
        if(err) return res.json(err)
        return res.json(data)
    })
})

//  personal pending Todos

app.get("/personalpendingtodos", (req, res)=> {
    const q="select * from todoinfo where status=? and category=?"
    const value=""
    db.query(q, [value, "Personal"], (err, data)=> {
        if(err) return res.json(err)
        return res.json(data)
    })
})

//  personal completed Todos

app.get("/personalcompletedtodos", (req, res)=> {
    const q="select * from todoinfo where status=? and category=?"
    const value="Done"
    db.query(q, [value, "Personal"], (err, data)=> {
        if(err) return res.json(err)
        return res.json(data)
    })
})

//  proffessional pending Todos

app.get("/proffessionalpendingtodos", (req, res)=> {
    const q="select * from todoinfo where status=? and category=?"
    const value=""
    db.query(q, [value, "Proffessional"], (err, data)=> {
        if(err) return res.json(err)
        return res.json(data)
    })
})

//  proffessional completed Todos

app.get("/proffessionalcompletedtodos", (req, res)=> {
    const q="select * from todoinfo where status=? and category=?"
    const value="Done"
    db.query(q, [value, "Proffessional"], (err, data)=> {
        if(err) return res.json(err)
        return res.json(data)
    })
})

//  high pending Todos

app.get("/highpendingtodos", (req, res)=> {
    const q="select * from todoinfo where status=? and priority=?"
    const value=""
    db.query(q, [value, "High"], (err, data)=> {
        if(err) return res.json(err)
        return res.json(data)
    })
})

//  high completed Todos

app.get("/highcompletedtodos", (req, res)=> {
    const q="select * from todoinfo where status=? and priority=?"
    const value="Done"
    db.query(q, [value, "High"], (err, data)=> {
        if(err) return res.json(err)
        return res.json(data)
    })
})

//  medium pending Todos

app.get("/mediumpendingtodos", (req, res)=> {
    const q="select * from todoinfo where status=? and priority=?"
    const value=""
    db.query(q, [value, "Medium"], (err, data)=> {
        if(err) return res.json(err)
        return res.json(data)
    })
})

//  medium completed Todos

app.get("/mediumcompletedtodos", (req, res)=> {
    const q="select * from todoinfo where status=? and priority=?"
    const value="Done"
    db.query(q, [value, "Medium"], (err, data)=> {
        if(err) return res.json(err)
        return res.json(data)
    })
})

//  low pending Todos

app.get("/lowpendingtodos", (req, res)=> {
    const q="select * from todoinfo where status=? and priority=?"
    const value=""
    db.query(q, [value, "Low"], (err, data)=> {
        if(err) return res.json(err)
        return res.json(data)
    })
})

//  low completed Todos

app.get("/lowcompletedtodos", (req, res)=> {
    const q="select * from todoinfo where status=? and priority=?"
    const value="Done"
    db.query(q, [value, "Low"], (err, data)=> {
        if(err) return res.json(err)
        return res.json(data)
    })
})

// Update Pending Todos

app.put("/updatependingtodos/:id", (req, res)=> {
    const todoId=req.params.id;
    const q="UPDATE todoinfo set status=? where id=?";
    const value="Done";
    db.query(q, [value, todoId], (err, data)=> {
        if(err) return res.json(err)
        return res.json(data)
    })
})

// Update Completed Todos

app.put("/updatecompletedtodos/:id", (req, res)=> {
    const todoId=req.params.id;
    const q="UPDATE todoinfo set status=? where id=?";
    const value="";
    db.query(q, [value, todoId], (err, data)=> {
        if(err) return res.json(err)
        return res.json(data)
    })
})



app.listen(8800, ()=> {
    console.log("Connected to Backend")
})



