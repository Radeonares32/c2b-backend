export interface IAbout {
    image:string,
    title:string,
    text:string,
    description:string,
    html:[{
        title:string,
        context:string
    }],
    icon:[
        {
            src:string,
            context:string
        }
    ]
    
}