import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Configurar o transporte de email
    const transporter = nodemailer.createTransport({
      service: "gmail", // ou outro serviço de email
      auth: {
        user: process.env.EMAIL_USER, // seu email
        pass: process.env.EMAIL_PASS, // sua senha ou senha de app
      },
    })

    // Configurar o email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "seu-email@exemplo.com", // email onde você quer receber as mensagens
      subject: `Formulário de Contato: ${subject}`,
      html: `
        <h1>Nova mensagem do formulário de contato</h1>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Assunto:</strong> ${subject}</p>
        <p><strong>Mensagem:</strong> ${message}</p>
      `,
    }

    // Enviar o email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Erro ao enviar email:", error)
    return NextResponse.json({ error: "Erro ao enviar mensagem" }, { status: 500 })
  }
}
