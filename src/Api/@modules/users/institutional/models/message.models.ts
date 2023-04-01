import { neo4j } from '../../../../../core/data-source/neo4j/connection'
import { IMessage } from '../entity/IMessage';


export const Message = neo4j()?.model<IMessage>('MessageInstitutional', {
    id: {
        primary: true,
        type: 'uuid',
    },
    name: {
        type: "string"
    },
    message: {
        type: "string"
    }
});