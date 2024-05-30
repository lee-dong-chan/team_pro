import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    console.log("1?");
    callback(null, "./productimg");
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
    console.log("2?");
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

const storegeRouter = (name) => multer({ storage }).array(name);

export default storegeRouter;
