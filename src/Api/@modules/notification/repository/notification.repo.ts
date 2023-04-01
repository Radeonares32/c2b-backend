import { INotification } from '../entity/INotification'
export interface NotificationRepository {
    create(title: string, context: string): Promise<{ message: string }>
    find(id: string): Promise<INotification>
    findAll(): Promise<INotification[]>
    update(id: string, title: string, context: string): Promise<{ message: string }>
    delete(id: string): Promise<{ message: string }>
}