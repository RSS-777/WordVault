import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';
import { ContainerFormStyle, SubmitMessageStyle, BlockTextStyle, BlockMessageStyle, BlockErrorStyle } from "./FormMessage.style";
import emailjs from '@emailjs/browser';

const serviceId = import.meta.env.VITE_APP_SERVICE_ID
const templateId = import.meta.env.VITE_APP_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_APP_PUBLIC_KEY;

const schema = Yup.object().shape({
    name: Yup.string().required("Необхідно вказати ім'я.").min(3, "Це не схоже на ім'я.").matches(/^[^\d]+$/, 'Рядок не повинен містити числа'),
    email: Yup.string().required('Необхідно вказати електронну пошту.').email('Ви вказали недійсну електронну пошту.'),
    message: Yup.string().required('Поле не може бути пустим.').min(15, 'Текст повинен містити мінімум 15 символів.'),
});

export const FormMessage = () => {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data) => {
        reset();
        setIsFormSubmitted(true);

        if (serviceId && templateId && publicKey) {
            emailjs
                .send(serviceId, templateId, data, {
                    publicKey: publicKey,
                })
                .then(
                    (response) => {
                        console.log('Email sent successfully!', response.status);
                    },
                    (error) => {
                        console.error('Failed to send email:', error);
                    }
                );
        } else {
            console.error('Missing serviceId, templateId, or publicKey');
        }
    };

    useEffect(() => {
        if (isFormSubmitted) {
            setTimeout(() => { setIsFormSubmitted(false) }, 3000)
        }
    }, [isFormSubmitted]);

    return (
        <ContainerFormStyle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <BlockTextStyle>
                    <label htmlFor="name">Ім'я:</label>
                    <input
                        type="text"
                        id="name"
                        {...register('name')}
                        autoComplete="name"
                    />
                </BlockTextStyle>
                <BlockErrorStyle>
                    {errors.name && <p>{errors.name.message}</p>}
                </BlockErrorStyle>
                <BlockTextStyle>
                    <label htmlFor="email">Емейл:</label>
                    <input
                        type="email"
                        id="email"
                        {...register('email')}
                        autoComplete="email"
                    />
                </BlockTextStyle>
                <BlockErrorStyle>
                    {errors.email && <p>{errors.email.message}</p>}
                </BlockErrorStyle>
                <BlockMessageStyle>
                    <label htmlFor="message">Повідомлення:</label>
                    <textarea
                        id="message"
                        {...register('message')}
                    ></textarea>
                </BlockMessageStyle>
                <BlockErrorStyle>
                    {errors.message && <p>{errors.message.message}</p>}
                </BlockErrorStyle>
                <SubmitMessageStyle $submitted={isFormSubmitted} >
                    <span>Форма успішно надіслана</span>
                </SubmitMessageStyle >
                <button className={!isValid ? 'disabled' : 'enabled'} type="submit">Відправити</button>
            </form>
        </ContainerFormStyle>
    )
};
