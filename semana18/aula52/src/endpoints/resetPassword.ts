import { Request, Response } from "express";
import connection from "../connection";
import { hash } from "../services/hashManager";
import transporter from "../services/mailer";

export default async function resetPassword(req: Request, res: Response): Promise<void> {
    try {
        const email = req.body.email
        const characters: string = "QWERTYUasdfgh!@#$%"
        let newPassword: string = ""
        for (let i = 0; i < 12; i++) {
            const randomIndex: number = Math.floor(Math.random() * characters.length)
            newPassword += characters[randomIndex]
        }
        const info = await transporter.sendMail({
            from: `Astrodev <${process.env.NODEMAILER_USER}>`,
            to: email,
            subject: "Alteração de senha",
            text: "Alteramos sua senha",
            html: `
            <h2>Sua nova senha é:</h2>
            <h3>${newPassword}</h3>
         `
        })

        const cypherPassword: string = await hash(newPassword)

        await connection("to_do_list_users")
            .update({ password: cypherPassword })
            .where({ email })

        res.send(`Um email foi enviado para ${email}`)

    } catch (error) {
        res.status(500).send("Internal server error")
    }
}