import nodemailer, { Transport, SendMailOptions } from 'nodemailer';

const sendMail = async (transporter: Transport, sender: SendMailOptions) => {
    try {
        console.log('print de sender => ', sender)
        const dataTransporter = nodemailer.createTransport(transporter);
        const info = await dataTransporter.sendMail(sender);
        console.log('print de info em sendMail => ', info)
        return { message: 'Email enviado com sucesso', data: info, appStatusCode: 200 }
    } catch (error) {
        console.log('print de error em senMail => ', error);
        return { message: 'Problema ao tentar enviar o email', error, appStatusCode: 500 }
    }
}

export default sendMail