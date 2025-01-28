const asyncHandler = (requestHandler) => {
    return  (req, res, next) => {
        Promise.resolve (requestHandler(req, res, next))
        .catch((err) => next(err))  // Pass errors to the next middleware
    }
}


export {asyncHandler}

// Higher Order function ->  function that either takes one or more functions as arguments, returns a function as its result, or both.
// const asyncHandler = (fn) => async(req, res, next) => {
//     try{
//         await fn(req, res, next)

//     } catch(error){
//         res.status(err.code || 500).json({
//             success:false,
//             message: err.message
//         })
//     }
// }    

