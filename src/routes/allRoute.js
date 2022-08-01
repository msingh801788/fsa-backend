export const singleUserRoutes = {
    path:'/singleuser',
    method:'get',
    handler:(req,res)=>{
        res.status(200).json({name:'Manoj Singh',age:'31'})
    }
}

var sample = [{name:'MJ', age:'23'},{name:'TJ',age:'21'}]
export const allUserRoutes = {
    path:'/allusers',
    method:'get',
    handler:(req,res)=>{
        res.status(200).json(sample)
    }
}