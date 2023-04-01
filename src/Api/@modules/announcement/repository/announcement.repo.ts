import { IAnnouncement } from '../entity/announcement.entity'
export interface AnnouncementRepository {
    create(title: string, image: string): Promise<{ message: string }>
    find(id: string): Promise<IAnnouncement>
    findAll(): Promise<IAnnouncement[]>
    update(id: string, title: string, image: string): Promise<{ message: string }>
    delete(id: string): Promise<{ message: string }>
}