import { ISlide } from '../entity/slide'
export interface  SlideRepository  {
     create(header:string,text:string,image:string): Promise<{ message: string }>
     find(id: string): Promise<ISlide>
     findAll(): Promise<ISlide[]>
     update(id:string,header:string,text:string,image:string): Promise<{ message: string }>
     delete(id: string): Promise<{ message: string }>
}