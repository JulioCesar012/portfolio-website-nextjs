import { useState } from "react";
import emailjs from "@emailjs/browser";

import S from "./styles";

const Form = () => {
    const [loading, setLoading] = useState(false);
    const [sendMessage, setSendMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);

    const [fields, setFields] = useState({
        user_name: "",
        user_email: "",
        message: "",
    });

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .sendForm(
                process.env.PUBLIC_SERVICE_ID,
                process.env.TEMPLATE_ID,
                e.target,
                process.env.PUBLIC_KEY
            )
            .then(
                () => {
                    setLoading(false);
                    setSendMessage(true);
                    setFields({
                        user_name: "",
                        user_email: "",
                        message: "",
                    });
                    setTimeout(() => {
                        setSendMessage(false);
                    }, 2500);
                },
                (error) => {
                    setLoading(false);
                    setErrorMessage(true);
                    setTimeout(() => {
                        setErrorMessage(false);
                    }, 6700);
                }
            );
    };

    return (
        <S.FormContainer id="contact" onSubmit={sendEmail}>
            <S.FormGroup>
                <S.Field
                    type="text"
                    name="user_name"
                    placeholder="Seu nome"
                    value={fields.user_name}
                    onChange={(e) => setFields({ user_name: e.target.value })}
                    required
                />
            </S.FormGroup>

            <S.FormGroup>
                <S.Field
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    value={fields.user_email}
                    onChange={(e) => setFields({ user_email: e.target.value })}
                    required
                />
            </S.FormGroup>

            <S.FormGroup>
                <S.MessageField
                    type="text"
                    name="message"
                    placeholder="Mensagem"
                    value={fields.message}
                    onChange={(e) => setFields({ message: e.target.value })}
                    required
                />
            </S.FormGroup>

            {!sendMessage && !errorMessage && (
                <S.SendButton className="primary-btn" type="submit" value="send">
                    {loading && (
                        <S.LoadingSpinner className="spinner-border"></S.LoadingSpinner>
                    )}
                    {!loading && "Enviar"}
                </S.SendButton>
            )}

            {sendMessage && <S.Message>Mensagem enviada com sucesso!</S.Message>}
            {errorMessage && (
                <S.Message>
                    Erro ao enviar mensagem! Por favor aguarde alguns instantes e tente
                    novamente.
                </S.Message>
            )}
        </S.FormContainer>
    );
};

export default Form;
