import * as React from 'react';

import { Container } from '@components/Container';
import { Title } from '@components/sections/Title';
import { Item } from '@components/sections/faq/Item';
import { QuestionForm } from './QuestionForm';


export const Faq: React.FC = () => {
    return (
        <section className="w-full">
            <Container>
                <div className="lg:max-w-screen-lg flex flex-col items-center gap-10 mx-auto">
                    <Title
                        title="Popularne Pytania"
                        description="Aby nie tracić czasu na odpowiadanie w kółko na te same pytania przygotowaliśmy dla Was listę najpopularniejszych pytań wraz z odpowiedziami."
                    />

                    <div className="max-w-xl lg:max-w-2xl flex flex-col items-center mb-16">
                        <div className="w-full lg:w-[768px] space-y-4">
                            <Item title="The quick, brown fox jumps over a lazy dog?">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque rem aperiam, eaque ipsa quae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur harum molestias molestiae voluptatum iste eos, recusandae sed a hic voluptates sequi, laborum consectetur reiciendis soluta asperiores eaque quos consequatur nam!
                            </Item>

                            <Item title="The first mate and his Skipper too will do?">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque rem aperiam, eaque ipsa quae.
                            </Item>

                            <Item title="Is the Space Pope reptilian!?">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque rem aperiam, eaque ipsa quae.
                            </Item>

                            <Item title="How much money you got on you?">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque rem aperiam, eaque ipsa quae.
                            </Item>
                        </div>
                    </div>

                    <Title
                        title="Zadaj Własne Pytanie"
                        description="Jeśli nie znalazłeś rozwiązania na swój problem możesz napisać do nas prywatną wiadomość poprzez wypełnienie poniższego formularza, postaramy się odpisać na wskazany email najszybciej jak to możliwe."
                    />

                    <QuestionForm />
                </div>
            </Container>
        </section>
    );
}