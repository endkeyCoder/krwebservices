/* When need make a function, set the types interfaces here */

/*Exemplo: 
    type Professional = {
        name: String,
        age: Number,
        skiils: Array<String>,
        works:{
            title: String,
            description: String
        }
    }

*/

export type ISender = {
    from: String,
    to: String,
    subject: String,
    text: String,
    html?: String
}

export type ITransporter = {
    host: String,
    port: Number,
    secure: Boolean,
    auth: {
        user: String,
        pass: String
    }
}