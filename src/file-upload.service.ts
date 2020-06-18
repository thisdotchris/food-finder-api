import { extname } from 'path';
import * as multer from 'multer';

const multerStorage = multer.diskStorage({
  destination: 'public/uploads/',
  filename: (req, file, cb) => {
    cb(null, `img-${Date.now()}${extname(file.originalname)}`);
  },
});

export default multerStorage;
