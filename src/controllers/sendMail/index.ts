import nodemailer, { Transport, SendMailOptions } from 'nodemailer';

const sendMail = async (transporter: Transport, sender: SendMailOptions) => {
    try {
        const dataTransporter = nodemailer.createTransport(transporter);
        const info = await dataTransporter.sendMail(sender);
        return { message: 'Email enviado com sucesso', data: info, appStatusCode: 200 }
    } catch (error) {
        console.log('print de error em senMail => ', error);
        return { message: 'Problema ao tentar enviar o email', error, appStatusCode: 500 }
    }
}

export default sendMail