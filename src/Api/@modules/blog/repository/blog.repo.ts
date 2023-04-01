import { IBlog } from '../entity/IBlog'
export interface  BlogRepository  {
     create(image: string, title: string, text: string, description: string,html:[{ title: string; context: string; }], icon: [{ src: string; context: string; }],questions: [{ question: string; context: string; }]): Promise<{ message: string }>
     find(id: string): Promise<IBlog>
     findAll(): Promise<IBlog[]>
     update(id:string,image: string, title: string, text: string, description: string,html:[{ title: string; context: string; }], icon: [{ src: string; context: string; }],questions: [{ question: string; context: string; }]): Promise<{ message: string }>
     delete(id: string): Promise<{ message: string }>
}