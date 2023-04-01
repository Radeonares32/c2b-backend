import { IPrivacy } from '../entity/IPrivacy'
export interface  PrivacyRepository  {
     create(title:string,context:string): Promise<{ message: string }>
     find(id: string): Promise<IPrivacy>
     findAll(): Promise<IPrivacy[]>
     update(id:string,title:string,context:string): Promise<{ message: string }>
     delete(id: string): Promise<{ message: string }>
}