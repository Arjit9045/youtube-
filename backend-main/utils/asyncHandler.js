const asynHandler =(requestHandler) =>{
    (req, res, next) =>{
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}

export {asyncHandler}


/*const asyncHandler =(fn) => async (err, req, rezs, next) =>  {
    try {
        await  fn(req, res, next  )
        
    } catch (error) {
        res.status(err.code || 500).json({
            success: false,
            message: err.message
        })
        
    }
}*/