import * as React from 'react';

import { Container } from '@components/Container';
import { Title } from '@components/sections/Title';
import { Item } from '@components/sections/faq/Item';


export const Faq: React.FC = () => {
    return (
        <section className="w-full mx-auto py-6 lg:py-8 px-4 md:px-24 lg:px-8">
            <Container>
                <Title
                    title="Popularne Pytania"
                    description="Aby nie tracić czasu na odpowiadanie w kółko na te same pytania przygotowaliśmy dla Was listę najpopularniejszych pytań wraz z odpowiedziami. Jeśli nie znalazłeś rozwiązania na swój problem możesz napisać do nas osobną wiadomość poprzez wypełnienie formularza na samym dole"
                />

                <div className="lg:max-w-screen-lg flex flex-col items-center gap-10">
                    <div className="max-w-xl lg:max-w-2xl flex flex-col items-center">
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
                </div>
            </Container>
        </section>
    );
}