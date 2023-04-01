import multer from 'multer'
import { extname } from 'path'

export const aboutStorage = multer.diskStorage({
    destination: (_, _file, cb) => {
        cb(null, process.cwd() + `/src/Api/public/about`)
    },
    filename: (_, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + extname(file.originalname))
    }
})

export const aboutMainStorage = multer.diskStorage({
    destination: (_, _file, cb) => {
        cb(null, process.cwd() + '/src/Api/public/aboutMain')
    },
    filename: (_, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + extname(file.originalname))
    }
})
export const productStorage = multer.diskStorage({
    destination: (_, _file, cb) => {
        cb(null, process.cwd() + '/src/Api/public/products')
    },
    filename: (_, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + extname(file.originalname))
    }
})
export const projectConsultantStorage = multer.diskStorage({
    destination: (_, _file, cb) => {
        cb(null, process.cwd() + '/src/Api/public/projectConsultant')
    },
    filename: (_, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + extname(file.originalname))
    }
})
export const announcementStorage = multer.diskStorage({
    destination: (_, _file, cb) => {
        cb(null, process.cwd() + '/src/Api/public/announcement')
    },
    filename: (_, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + extname(file.originalname))
    }
})
export const userStorage = multer.diskStorage({
    destination: (_, _file, cb) => {
        cb(null, process.cwd() + '/src/Api/public/user')
    },
    filename: (_, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + extname(file.originalname))
    }
})
export const institutionalStorage = multer.diskStorage({
    destination: (_, _file, cb) => {
        cb(null, process.cwd() + '/src/Api/public/institutional')
    },
    filename: (_, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + extname(file.originalname))
    }
})
export const solutionMainStorage = multer.diskStorage({
    destination: (_, _file, cb) => {
        cb(null, process.cwd() + '/src/Api/public/solutionMain')
    },
    filename: (_, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + extname(file.originalname))
    }
})
export const MainStorage = multer.diskStorage({
    destination: (_, _file, cb) => {
        cb(null, process.cwd() + '/src/Api/public/openEdu/main')
    },
    filename: (_, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + extname(file.originalname))
    }
})
export const AcademyStorage = multer.diskStorage({
    destination: (_, _file, cb) => {
        cb(null, process.cwd() + '/src/Api/public/openEdu/academy')
    },
    filename: (_, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + extname(file.originalname))
    }
})
export const OpenEduStorage = multer.diskStorage({
    destination: (_, _file, cb) => {
        cb(null, process.cwd() + '/src/Api/public/openEdu/openEdu')
    },
    filename: (_, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + extname(file.originalname))
    }
})
export const BlogMainStorage = multer.diskStorage({
    destination: (_, _file, cb) => {
        cb(null, process.cwd() + '/src/Api/public/blogMain')
    },
    filename: (_, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + extname(file.originalname))
    }
})
export const BlogStorage = multer.diskStorage({
    destination: (_, _file, cb) => {
        cb(null, process.cwd() + '/src/Api/public/blog')
    },
    filename: (_, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + extname(file.originalname))
    }
})
export const OurCollabrotionStorage = multer.diskStorage({
    destination: (_, _file, cb) => {
        cb(null, process.cwd() + '/src/Api/public/ourCollabrotion')
    },
    filename: (_, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + extname(file.originalname))
    }
})
export const SlideStorage = multer.diskStorage({
    destination: (_, _file, cb) => {
        cb(null, process.cwd() + '/src/Api/public/slide')
    },
    filename: (_, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + extname(file.originalname))
    }
})
