import Carousel from '../../Components/Carrosel/Carrosel'
import Produto from '../../Components/Produto/Produto'

function Home() {
        return (

                <div className=' grid grid-cols-12 '>
                        <div className=' min-h-[0vh] max-h-[50vh] py-2 flex items-center col-span-12 p-0 m-0'>
                        <Carousel />
                        </div>
                        <div className='text-hoodaLaranja text-3xl text-center col-span-2'>
                                Categorias

                                <ul className='text-black text-2xl p-2 m-2'>
                                        <li className='p-1 m-1 hover:text-hoodaLaranja hover:underline'> Lorem</li>
                                        <li className='p-1 m-1 hover:text-hoodaLaranja hover:underline'> Lorem</li>
                                        <li className='p-1 m-1 hover:text-hoodaLaranja hover:underline'> Lorem</li>
                                        <li className='p-1 m-1 hover:text-hoodaLaranja hover:underline'> Lorem</li>
                                        <li className='p-1 m-1 hover:text-hoodaLaranja hover:underline'> Lorem</li>
                                        <li className='p-1 m-1 hover:text-hoodaLaranja hover:underline'> Lorem</li>
                                        
                                </ul>
                        </div>
                        
                        <div className='col-span-10 '>
                                <div>
                                <div className='flex flex-row flex-wrap justify-evenly py-2 px-0'>

                                        <Produto
                                                src='https://img.freepik.com/fotos-gratis/saco-de-copia-espaco-com-pecas-de-talheres-dos-desenhos-animados_23-2148576701.jpg?w=826&t=st=1723054417~exp=1723055017~hmac=a764a5b3b94b5fd77d887a98fa03e486a1fa4da4a0dc27f5c86d180a70c2fb65'
                                                alt='alt'
                                                nome="Lorem"
                                                preco={10.99}
                                        />

                                        <Produto
                                                src='https://img.freepik.com/fotos-premium/saco-de-texteis-e-talheres-descartaveis-de-papel-artesanal-marrom-folhas-de-canhamo-verde-sobre-fundo-de-madeira_116441-12626.jpg?w=740'
                                                alt='alt'
                                                nome="Lorem"
                                                preco={50.99}
                                        />

                                        <Produto
                                                src='https://img.freepik.com/fotos-premium/garrafas-de-shampoo-ou-gel-de-banho-locao-creme-de-oleo-essencial-escovas-de-massagem-cuidados-para-o-corpo-e-rosto-conjunto-de-banho-de-beleza-ilustracao-gerada-por-ia_120339-16474.jpg?w=826'
                                                alt='alt'
                                                nome="Lorem"
                                                preco={1.99}
                                        />

                                        <Produto
                                                src='https://img.freepik.com/fotos-premium/saco-aberto-reutilizavel-de-algodao-ecologico-com-os-diferentes-recipientes-de-madeira-e-vidro_511816-391.jpg?w=740'
                                                alt='alt'
                                                nome="Lorem"
                                                preco={100.59}
                                        />

                                        <Produto
                                                src='https://img.freepik.com/fotos-premium/colocacao-plana-de-folhas-verdes-e-produtos-ecologicos-em-fundo-verde_14117-775767.jpg?w=826'
                                                alt='alt'
                                                nome="Lorem"
                                                preco={75.30}
                                        />

                                        <Produto
                                                src='https://img.freepik.com/fotos-gratis/utensilios-de-mesa-ecologicos-elegantes-descartaveis-convenientes-e-bonitos-reciclaveis_169016-1959.jpg?t=st=1723055100~exp=1723058700~hmac=405987f6596ac6b03b5e034281feb53115a05c1ce933252387abca0d33509bd1&w=740'
                                                alt='alt'
                                                nome="Lorem"
                                                preco={82.80}
                                        />

                                        <Produto
                                                src='https://img.freepik.com/fotos-premium/colocacao-plana-de-folhas-verdes-e-produtos-ecologicos-em-fundo-verde_14117-775767.jpg?w=826'
                                                alt='alt'
                                                nome="Lorem"
                                                preco={75.30}
                                        />


                                        <Produto
                                                src='https://img.freepik.com/fotos-premium/garrafas-de-shampoo-ou-gel-de-banho-locao-creme-de-oleo-essencial-escovas-de-massagem-cuidados-para-o-corpo-e-rosto-conjunto-de-banho-de-beleza-ilustracao-gerada-por-ia_120339-16474.jpg?w=826'
                                                alt='alt'
                                                nome="Lorem"
                                                preco={1.99}
                                        />

                                        <Produto
                                                src='https://img.freepik.com/fotos-premium/saco-de-texteis-e-talheres-descartaveis-de-papel-artesanal-marrom-folhas-de-canhamo-verde-sobre-fundo-de-madeira_116441-12626.jpg?w=740'
                                                alt='alt'
                                                nome="Lorem"
                                                preco={50.99}
                                        />


                                        <Produto
                                                src='https://img.freepik.com/fotos-gratis/saco-de-copia-espaco-com-pecas-de-talheres-dos-desenhos-animados_23-2148576701.jpg?w=826&t=st=1723054417~exp=1723055017~hmac=a764a5b3b94b5fd77d887a98fa03e486a1fa4da4a0dc27f5c86d180a70c2fb65'
                                                alt='alt'
                                                nome="Lorem"
                                                preco={10.99}
                                        />

                                        <Produto
                                                src='https://img.freepik.com/fotos-gratis/utensilios-de-mesa-ecologicos-elegantes-descartaveis-convenientes-e-bonitos-reciclaveis_169016-1959.jpg?t=st=1723055100~exp=1723058700~hmac=405987f6596ac6b03b5e034281feb53115a05c1ce933252387abca0d33509bd1&w=740'
                                                alt='alt'
                                                nome="Lorem"
                                                preco={82.80}
                                        />

                                        <Produto
                                                src='https://img.freepik.com/fotos-premium/saco-aberto-reutilizavel-de-algodao-ecologico-com-os-diferentes-recipientes-de-madeira-e-vidro_511816-391.jpg?w=740'
                                                alt='alt'
                                                nome="Lorem"
                                                preco={100.59}
                                        />

                                        <Produto
                                                src='https://img.freepik.com/fotos-gratis/saco-de-copia-espaco-com-pecas-de-talheres-dos-desenhos-animados_23-2148576701.jpg?w=826&t=st=1723054417~exp=1723055017~hmac=a764a5b3b94b5fd77d887a98fa03e486a1fa4da4a0dc27f5c86d180a70c2fb65'
                                                alt='alt'
                                                nome="Lorem"
                                                preco={10.99}
                                        />

                                        <Produto
                                                src='https://img.freepik.com/fotos-premium/saco-de-texteis-e-talheres-descartaveis-de-papel-artesanal-marrom-folhas-de-canhamo-verde-sobre-fundo-de-madeira_116441-12626.jpg?w=740'
                                                alt='alt'
                                                nome="Lorem"
                                                preco={50.99}
                                        />

                                        <Produto
                                                src='https://img.freepik.com/fotos-premium/garrafas-de-shampoo-ou-gel-de-banho-locao-creme-de-oleo-essencial-escovas-de-massagem-cuidados-para-o-corpo-e-rosto-conjunto-de-banho-de-beleza-ilustracao-gerada-por-ia_120339-16474.jpg?w=826'
                                                alt='alt'
                                                nome="Lorem"
                                                preco={1.99}
                                        />

                                        <Produto
                                                src='https://img.freepik.com/fotos-premium/saco-aberto-reutilizavel-de-algodao-ecologico-com-os-diferentes-recipientes-de-madeira-e-vidro_511816-391.jpg?w=740'
                                                alt='alt'
                                                nome="Lorem"
                                                preco={100.59}
                                        />

                                        <Produto
                                                src='https://img.freepik.com/fotos-premium/colocacao-plana-de-folhas-verdes-e-produtos-ecologicos-em-fundo-verde_14117-775767.jpg?w=826'
                                                alt='alt'
                                                nome="Lorem"
                                                preco={75.30}
                                        />

                                        <Produto
                                                src='https://img.freepik.com/fotos-gratis/utensilios-de-mesa-ecologicos-elegantes-descartaveis-convenientes-e-bonitos-reciclaveis_169016-1959.jpg?t=st=1723055100~exp=1723058700~hmac=405987f6596ac6b03b5e034281feb53115a05c1ce933252387abca0d33509bd1&w=740'
                                                alt='alt'
                                                nome="Lorem"
                                                preco={82.80}
                                        />

                                        <Produto
                                                src='https://img.freepik.com/fotos-premium/colocacao-plana-de-folhas-verdes-e-produtos-ecologicos-em-fundo-verde_14117-775767.jpg?w=826'
                                                alt='alt'
                                                nome="Lorem"
                                                preco={75.30}
                                        />


                                        <Produto
                                                src='https://img.freepik.com/fotos-premium/garrafas-de-shampoo-ou-gel-de-banho-locao-creme-de-oleo-essencial-escovas-de-massagem-cuidados-para-o-corpo-e-rosto-conjunto-de-banho-de-beleza-ilustracao-gerada-por-ia_120339-16474.jpg?w=826'
                                                alt='alt'
                                                nome="Lorem"
                                                preco={1.99}
                                        />

                                        <Produto
                                                src='https://img.freepik.com/fotos-premium/saco-de-texteis-e-talheres-descartaveis-de-papel-artesanal-marrom-folhas-de-canhamo-verde-sobre-fundo-de-madeira_116441-12626.jpg?w=740'
                                                alt='alt'
                                                nome="Lorem"
                                                preco={50.99}
                                        />


                                        <Produto
                                                src='https://img.freepik.com/fotos-gratis/saco-de-copia-espaco-com-pecas-de-talheres-dos-desenhos-animados_23-2148576701.jpg?w=826&t=st=1723054417~exp=1723055017~hmac=a764a5b3b94b5fd77d887a98fa03e486a1fa4da4a0dc27f5c86d180a70c2fb65'
                                                alt='alt'
                                                nome="Lorem"
                                                preco={10.99}
                                        />

                                        <Produto
                                                src='https://img.freepik.com/fotos-gratis/utensilios-de-mesa-ecologicos-elegantes-descartaveis-convenientes-e-bonitos-reciclaveis_169016-1959.jpg?t=st=1723055100~exp=1723058700~hmac=405987f6596ac6b03b5e034281feb53115a05c1ce933252387abca0d33509bd1&w=740'
                                                alt='alt'
                                                nome="Lorem"
                                                preco={82.80}
                                        />

                                        <Produto
                                                src='https://img.freepik.com/fotos-premium/saco-aberto-reutilizavel-de-algodao-ecologico-com-os-diferentes-recipientes-de-madeira-e-vidro_511816-391.jpg?w=740'
                                                alt='alt'
                                                nome="Lorem"
                                                preco={100.59}
                                        />


                                </div>
                                <p className='font-Docker-One text-hoodaLaranja flex justify-center'>Paginas</p>

                                        <ul className='flex justify-center'>
                                                <li className=' hover:text-hoodaLaranja hover:underline p-1'> 1 </li>
                                                <li className=' hover:text-hoodaLaranja hover:underline p-1'> 2 </li>
                                                <li className=' hover:text-hoodaLaranja hover:underline p-1'> 3 </li>
                                                <li className=' hover:text-hoodaLaranja hover:underline p-1'> 4 </li>
                                        </ul>
                                </div>
                        </div>

                </div>
        )
}

export default Home