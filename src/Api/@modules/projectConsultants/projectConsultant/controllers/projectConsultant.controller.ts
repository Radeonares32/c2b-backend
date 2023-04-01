import { Handler } from 'express'
//! Service
import { ProjectConsultantService } from '../services/projectConsultant.service'

export class ProjectConsultantController {
    static getProject: Handler = async (req, res) => {
        const projectConsultant = await new ProjectConsultantService().projectConsultantFindAll()
        res.json({ projectConsultant })
    }
    static getProjectId: Handler = async (req, res) => {
        const { id } = req.body
        const projectConsultant = new ProjectConsultantService().projectConsultantFind(id)
        res.json({ projectConsultant: await projectConsultant.projectConsultant })
    }
    static createProject: Handler = async (req, res) => {
        const projectConsultant = new ProjectConsultantService()
        const { title, subTitle, text, category } = req.body
        const { image } = req.files as any
        const projectCons = await projectConsultant.projectConsultantCreate(title, subTitle, text, image[0].path, category)
        if (projectCons.message) {
            res.json({
                error: projectCons.message
            })
        }
        else {
            res.json({
                message: await projectCons.create
            })
        }
    }
    static updateProject: Handler = async (req, res) => {
        const projectConsultant = new ProjectConsultantService()

        const { id, title, subTitle, text, category } = req.body
        const { image } = req.files as any
        const projectCons = projectConsultant.projectConsultantUpdate(id, title, subTitle, text, image[0].path, category)
        if (projectCons.message) {
            res.json({
                error: projectCons.message
            })
        }
        else {
            res.json({
                message: await projectCons.update
            })
        }
    }
    static deleteProject: Handler = async (req, res) => {
        const projectConsultant = new ProjectConsultantService()
        const { id } = req.body
        const projectCons = projectConsultant.projectConsultantDelete(id)
        if (projectCons.message) {
            res.json({
                error: projectCons.message
            })
        }
        else {
            res.json({
                message: await projectCons.delete
            })
        }
    }
}
