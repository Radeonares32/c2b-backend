export interface IBlogMain {
    image: string,
    title: string,
    text: string,
    description: string,
    pageImage: string,
    html: [{
        title: string,
        context: string
    }],
    icon: [
        {
            src: string,
            context: string
        }
    ],
    questions: [
        {
            question: string,
            context: string
        }
    ]
}