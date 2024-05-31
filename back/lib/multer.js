import multer from "multer";

const storege = multer.diskStorage({
  destination: (req, file, callback) => {
    if(){ 
        callback(null, "./front/productimg")
    }else if(){
        callback(null,"./front/storeimg")
    }else if(){
        callback(null,"./front/talkimg")
    }
   
  },
  filename: (req, file, callback) => {
    if(){
        callback(null, `${Date.now()}_store`)
    }else if(){
        callback(null, `${Date.now()}_store`)
    }
    
  },
});


const storegeRouter = (name) => multer({ storege }).array(name);

export default storegeRouter