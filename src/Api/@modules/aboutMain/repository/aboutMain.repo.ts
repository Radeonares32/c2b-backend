import { IAboutMain } from '../entity/IaboutMain'
export interface  AboutMainRepository  {
     create(title: string,html:[{ title: string; context: string; }],image:string,): Promise<{ message: string }>
     find(id: string): Promise<IAboutMain>
     findAll(): Promise<IAboutMain[]>
     update(id:string,title: string,html:[{ title: string; context: string; }],image:string,): Promise<{ message: string }>
     delete(id: string): Promise<{ message: string }>
}