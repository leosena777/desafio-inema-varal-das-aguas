let NeDB = require('nedb');
let db = new NeDB({
    filename:'inscricao.db',
    autoload:true
})

module.exports = app => {

  let route = app.route('/inscricao');

  route.get( (req , res) =>{
    
   
    db.find({}).sort({name:1}).exec((err,inscricao)=>{

        if(err){ 
            app.utils.error.send(err,req,res);
        }else{
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json({inscricao});    
        }

    });

    

});


route.post((req , res) =>{
    
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      
    if( ! app.utils.validator.inscricao(app,req,res)) return false;

    db.insert( req.body , (err, inscricao)=>{
        if(err){
            app.utils.error.send(err,req,res);  
        }else{
            res.status(200).json(inscricao);   
        }
    });  

});


};