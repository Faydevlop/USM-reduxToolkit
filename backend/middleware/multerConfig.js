import multer from "multer";

const storage = multer.diskStorage({
    destination:function(req,file,cd){
        cb(null, './uploads/');
    },
    filename:function(req,file,cd){
        cd(null,`${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({ storage });

export default upload;