module.exports=(req,res,next)=>{
   req.url.replace(/&/g, "&amp;")
   		 .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
      next();
 }