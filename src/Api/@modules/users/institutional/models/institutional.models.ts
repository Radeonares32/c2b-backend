import { neo4j } from '../../../../../core/data-source/neo4j/connection'
import { Iinstitutional } from '../entity/Iinstitutional'


export const institutional = neo4j()?.model<Iinstitutional>("institutional", {
    id: {
        primary: true,
        type: "uuid"
    },
    name: {
        type: "string"
    },
    surname: {
        type: "string"
    },
    email: {
        type: "string"
    },
    image: {
        type: "string"
    },
    phone: {
        type: "string"
    },
    password: {
        type: "string"
    },
    dateOfBirth: {
        type: "string"
    },
    gender: {
        type: "string"
    },
    roles: {
        type: "string"
    },
    basket: {
        type: "string"
    },
    order: {
        type: "string"
    },
    creditCardName: {
        type: "string"
    },
    creditCardSurname: {
        type: "string"
    },
    creditCardNumber: {
        type: "string"
    },
    creditCardCvv: {
        type: "string"
    },
    expireMonth: {
        type: "string"
    },
    expireYear: {
        type: "string"
    },
    city: {
        type: "string"
    }
    ,
    country: {
        type: "string"
    },
    address: {
        type: "string"
    },
    zipCode: {
        type: "string"
    },
    companyName: {
        type: "string"
    },
    position: {
        type: "string"
    },
    activityField: {
        type: "string"
    },
    businessType: {
        type: "string"
    },
    taxOffice: {
        type: "string"
    },
    identity: {
        type: "string"
    },
    companyAddress: {
        type: "string"
    },
    district: {
        type: "string"
    },
    service: {
        type: "string"
    }

})