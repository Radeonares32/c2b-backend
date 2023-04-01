import express from 'express'
import http from 'http'
import swaggerUI from 'swagger-ui-express'
import bodyParser from 'body-parser'
import passport from 'passport'
import session from 'express-session'
import cors from 'cors'


const app = express()
export const server = http.createServer(app)


//! Database
import { mongoConnection } from './core/data-source/mongo/connection'


//! Config
import { passportConfig } from './core/config/passport/passport'

//! Routes
import { aboutRoutes } from './Api/@modules/about/routes'
import { aboutMainRoutes } from './Api/@modules/aboutMain/routes'
import { userRoute } from './Api/@modules/users/routes'
import { productsRoute } from './Api/@modules/products/routes'
import { projectConsultantRoute } from './Api/@modules/projectConsultants/routes'
import { announcementRoutes } from './Api/@modules/announcement/routes'
import { menuRoutes } from './Api/@modules/menu/routes'
import { seoRoutes } from './Api/@modules/seo/routes'
import { concatUsRoutes } from './Api/@modules/contactUs/routes'
import { solutionMainRoutes } from './Api/@modules/solutionMain/routes'
import { MainRoutes } from './Api/@modules/openEdu/main/routes'
import { AcademyRoutes } from './Api/@modules/openEdu/academy/routes'
import { OpenEduRoute } from './Api/@modules/openEdu/routes'
import { blogMainRoutes } from './Api/@modules/blogMain/routes'
import { blogRoutes } from './Api/@modules/blog/routes'
import { ContactFormRoutes } from './Api/@modules/contactForm/routes'
import { DiscoveredUsRoutes } from './Api/@modules/discoveredUs/routes'
import { notificationRoutes } from './Api/@modules/notification/routes'
import { ourCollabrotionRoutes } from './Api/@modules/ourCollabrotion/routes'
import { ourServiceRoutes } from './Api/@modules/ourService/routes'
import { privacyRoutes } from './Api/@modules/privacy/routes'
import { slideRoutes } from './Api/@modules/slide/routes'


app.use(session({
    secret: 'radeonares',
    resave: false,
    saveUninitialized: true
}))

app.use(cors({
    origin:"*",
    allowedHeaders:"*"
}))

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(passport.initialize())
app.use(passport.session())

passportConfig(passport)

//! Swagger
import swaggerJson from './swagger.json'

app.use('/', aboutRoutes, 
aboutMainRoutes, 
userRoute, 
productsRoute, 
projectConsultantRoute, 
announcementRoutes, 
menuRoutes, 
seoRoutes, 
concatUsRoutes,
solutionMainRoutes,
MainRoutes,
AcademyRoutes,
OpenEduRoute,
blogMainRoutes,
blogRoutes,
ContactFormRoutes,
DiscoveredUsRoutes,
notificationRoutes,
ourCollabrotionRoutes,
ourServiceRoutes,
privacyRoutes,
slideRoutes
)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerJson))

mongoConnection()
if (process.env.NODE_ENV !== 'test') {
    server.listen(3000)
}
