import { announcementUploads, SlideUploads, BlogUploads, BlogMainUploads, OurCollabrotionUploads, OpenEduUploads, aboutMainMultiUploads, aboutMultiUploads, MainUploads, AcademyUploads, productMultiUploads, projectConsultantUploads, userUploads, institutionalUploads, solutionMainUploads } from './multer/multer.middleware'
import { adminAuth } from './auth/admin.middleware'
import { userAuth } from './auth/user.middleware'
import { institutionalAuth } from './auth/Institutional.middleware'

export const middleware = {
    multer: {
        aboutMainMultiUploads,
        aboutMultiUploads,
        productMultiUploads,
        projectConsultantUploads,
        announcementUploads,
        userUploads,
        institutionalUploads,
        solutionMainUploads,
        MainUploads,
        AcademyUploads,
        OpenEduUploads,
        BlogMainUploads,
        BlogUploads,
        OurCollabrotionUploads,
        SlideUploads
    },
    auth: {
        adminAuth,
        userAuth,
        institutionalAuth
    }
}