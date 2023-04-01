import { IAcademy } from '../entity/IAcademy.entity'
export interface AcademyRepository {
    create(icon: [{ src: string; context: string; }]): Promise<{ message: string }>
    find(id: string): Promise<IAcademy>
    findAll(): Promise<IAcademy[]>
    update(id: string, icon: [{ src: string; context: string; }]): Promise<{ message: string }>
    delete(id: string): Promise<{ message: string }>
}