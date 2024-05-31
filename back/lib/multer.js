import multer from "multer";

const storege = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./front/productimg");
    // if(req.body.URL == seller){
    //     callback(null, "./front/productimg")
    //  }
    // else if(){
    //     callback(null,"./front/storeimg")
    // }else if(){
    //     callback(null,"./front/talkimg")
    // }
  },
  filename: (req, file, callback) => {
    callback(null, `${Date.now()}_product`);
    // if(){
    //     callback(null, `${Date.now()}_product`)
    // }else if(){
    //     callback(null, `${Date.now()}_store`)
    // }else if (){
    //   callback(null, `${Date.now()}_talk`)
    // }
  },
});

const storegeRouter = (name) => multer({ storege }).array(name);

export default storegeRouter;
