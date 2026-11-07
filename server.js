const express=require('express');
    const app=express();
    const PORT=3000;
    app.get("/health",(req,res)=>{
        res.status(200).json({
         status:"ok",
         message:"server is running"   
        });
    });
    app.get('/user', (req, res) => {
    res.json({ message: 'User API is running' });
});
    app.listen(PORT,"0.0.0.0",() =>{
        console.log(`server is running on port ${PORT}`);
        });

        
