import { ContainerFooterPagesStyle } from "../../styles/components";
import {FormMessage} from "../../components/FormMessage/FormMessage";
import { DivStyle } from "./Contact.style";

const Contact = () => {
    return (
        <ContainerFooterPagesStyle>
            <h2>Контакти</h2>
            <DivStyle>
                <p>
                    Якщо у вас є питання або пропозиції, зв'яжіться з нами за допомогою наступних контактних даних:
                    <br />
                    <span>Email: <span>RSS_Private@hotmail.com</span></span>
                    <br />
                    <span>Або за допомогою форми зв'язку:</span>
                </p>
                <FormMessage />
                <p>Ми очікуємо вашого повідомлення!!!</p>
            </DivStyle>
        </ContainerFooterPagesStyle>
    )
};

export default Contact;
