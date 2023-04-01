import { IAbout } from '../entity/IAbout'
export interface  AboutRepository  {
     create(image: string, title: string, text: string, description: string,html:[{ title: string; context: string; }], icon: [{ src: string; context: string; }]): Promise<{ message: string }>
     find(id: string): Promise<IAbout>
     findAll(): Promise<IAbout[]>
     update(id:string,image: string, title: string, text: string, description: string,html:[{ title: string; context: string; }], icon: [{ src: string; context: string; }]): Promise<{ message: string }>
     delete(id: string): Promise<{ message: string }>
}