import { IOurCollabrotion } from '../entity/ourCollabrotion'
export interface  OurCollabrotionRepository  {
     create(link:string,image:string,text:string,title:string): Promise<{ message: string }>
     find(id: string): Promise<IOurCollabrotion>
     findAll(): Promise<IOurCollabrotion[]>
     update(id:string,link:string,image:string,text:string,title:string): Promise<{ message: string }>
     delete(id: string): Promise<{ message: string }>
}