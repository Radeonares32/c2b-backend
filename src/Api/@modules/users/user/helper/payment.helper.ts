const Iyzipay = require('iyzipay');
export const paymentRequest = (payReq: any) => {
    const request = {
        locale: Iyzipay.LOCALE.TR,
        conversationId: '123456789',
        price: payReq.price.toString(),
        paidPrice: payReq.price.toString(),
        currency: Iyzipay.CURRENCY.TRY,
        installment: '1',
        basketId: 'B67832',
        paymentChannel: Iyzipay.PAYMENT_CHANNEL.WEB,
        paymentGroup: Iyzipay.PAYMENT_GROUP.PRODUCT,
        paymentCard: {
            cardHolderName: payReq.cardHolderName.toString(),
            cardNumber: payReq.cardNumber.toString(),
            expireMonth: payReq.expireMonth.toString(),
            expireYear: payReq.expireYear.toString(),
            cvc: payReq.cvc.toString(),
            registerCard: '0'
        },
        buyer: {
            id: 'BY789',
            name: payReq.name.toString(),
            surname: payReq.surname.toString(),
            gsmNumber: payReq.gsmNumber.toString(),
            email: payReq.email.toString(),
            identityNumber: payReq.identityNumber.toString(),
            lastLoginDate: payReq.date,
            registrationDate: payReq.date,
            registrationAddress: payReq.address.toString(),
            ip: payReq.ip.toString(),
            city: payReq.city.toString(),
            country: payReq.country.toString(),
            zipCode: payReq.zipCode.toString()
        },
        shippingAddress: {
            contactName:  payReq.adminContactName.toString(),
            city: payReq.adminCity.toString(),
            country: payReq.adminCountry.toString(),
            address: payReq.adminAddress.toString(),
            zipCode: payReq.adminZipCode.toString()
        },
        billingAddress: {
            contactName: payReq.contactName.toString(),
            city: payReq.city.toString(),
            country: payReq.country.toString(),
            address: payReq.address.toString(),
            zipCode:  payReq.zipCode.toString()
        },
        basketItems: payReq.basket
    }
    return request
};