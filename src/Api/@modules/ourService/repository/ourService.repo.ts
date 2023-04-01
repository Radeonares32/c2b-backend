import { IOurService } from '../entity/IOurService'
export interface  OurServiceRepository  {
     create(link:string,text:string,title:string): Promise<{ message: string }>
     find(id: string): Promise<IOurService>
     findAll(): Promise<IOurService[]>
     update(id:string,link:string,text:string,title:string): Promise<{ message: string }>
     delete(id: string): Promise<{ message: string }>
}