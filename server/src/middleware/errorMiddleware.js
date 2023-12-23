const errorHandler = (err, req, res, next)=>
{
  const statusCode = req.statusCode === 200 ? 500 : req.statusCode;
  res.status(statusCode);
  res.json
  ({
    
        msg: err?.message,
        stack: process.env.Node_ENV !== 'production' ? null :err?.stack,
    
  });
};


//Not found
const notFound = (err, req, res, next) => {
  const error = new Error('Not Found-${req?.originalUrl}');
  req.status(404);
  next(error);
  };
  
module.exports = {errorHandler, notFound};