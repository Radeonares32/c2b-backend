import { announcementUpload,SlideUpload, BlogMainUpload,aboutUpload,OurCollabrotionUpload, OpenEduUpload,BlogUpload,aboutMainUpload, productUpload, projectConsultantUpload, userUpload, institutionalUpload, solutionMainUpload, MainUpload, AcademyUpload } from './config/multer.upload'



export const aboutMultiUploads = aboutUpload.fields([{ name: "image", maxCount: 4 }, { name: "icon", maxCount: 4 }])
export const aboutMainMultiUploads = aboutMainUpload.fields([{ name: "image", maxCount: 1 }])
export const productMultiUploads = productUpload.fields([{ name: "image", maxCount: 4 }, { name: "cargo", maxCount: 4 }])
export const projectConsultantUploads = projectConsultantUpload.fields([{ name: "image", maxCount: 1 }])
export const announcementUploads = announcementUpload.fields([{ name: "image", maxCount: 1 }])
export const userUploads = userUpload.fields([{ name: "image", maxCount: 1 }])
export const institutionalUploads = institutionalUpload.fields([{ name: "image", maxCount: 1 }])
export const solutionMainUploads = solutionMainUpload.fields([{ name: "image", maxCount: 1 }, { name: "pageImage", maxCount: 1 }, { name: "icon", maxCount: 4 }])
export const MainUploads = MainUpload.fields([{ name: "icon", maxCount: 4 }])
export const AcademyUploads = AcademyUpload.fields([{ name: "icon", maxCount: 4 }])
export const OpenEduUploads = OpenEduUpload.fields([{ name: "image", maxCount: 1 }])
export const BlogMainUploads = BlogMainUpload.fields([{ name: "image", maxCount: 1 }, { name: "pageImage", maxCount: 1 }, { name: "icon", maxCount: 4 }])
export const BlogUploads = BlogUpload.fields([{ name: "image", maxCount: 1 }, { name: "icon", maxCount: 4 }])
export const OurCollabrotionUploads = OurCollabrotionUpload.fields([{ name: "image", maxCount: 1 } ])
export const SlideUploads = SlideUpload.fields([{ name: "image", maxCount: 1 } ])