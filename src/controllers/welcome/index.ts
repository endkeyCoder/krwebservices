import { ISender, ITransporter } from '../../interfaces';
const welcome = () => {
    const objTransporter: ITransporter = {
        host: '<your smtp email config>',
        port: 123,
        secure: false,
        auth: {
            user: '<your email>',
            pass: '<your pass>'
        }
    }
    const objSender: ISender = {
        from: '<origin email>',
        to: '<destiny email>',
        subject: '<your subject>',
        text: '<your text message>',
        html: '<h4>your html</h4>(optional)'
    }
    return {
        message: "Welcome to my API!",
        author: 'Kenedy Ribeiro',
        instructions: "To use the API, you need just know what are the routes possibles, the list of routes and your parameters are in property 'routes'",
        routes: [
            {
                url: '/sendMail',
                type: 'post',
                params: [
                    {
                        type: 'Object',
                        properties: ['transporter*', 'sender*'],
                        example: { transporter: objTransporter, sender: objSender }
                    },
                ]
            },

        ]
    }
}


export default welcome