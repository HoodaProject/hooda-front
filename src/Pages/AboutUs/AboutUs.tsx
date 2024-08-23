<<<<<<< HEAD
=======

>>>>>>> 0b4a8dd7943fd68afb855fd97adc6628860e923f
import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import './AboutUs.css'

function aboutUs() {
    return (
        <section className="bg-gray-100">
            <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1  mb-[5rem] md:grid-cols-2 items-center gap-8">
                    <div className="max-w-lg">
                        <h2 className="text-3xl font-Montserrat text-gray-900 sm:text-4xl">SOBRE NÓS</h2>
                        <p className="mt-4 font-Montserrat xl:text-justify text-gray-600 text-lg">Olá, somos Hooda, um marketplace dedicado a oferecer produtos sustentáveis para consumidores conscientes. Nosso projeto nasceu em junho de 2024, com a missão de criar um ambiente onde sustentabilidade e consumo consciente caminham juntos. Desde o início, nosso foco tem sido conectar produtores e marcas que compartilham do compromisso de fabricar
                            produtos ecologicamente responsáveis e éticos.</p>
                        <p className="mt-4 font-Montserrat text-gray-600 text-lg"></p>
                        <p className="mt-4 font-Montserrat text-gray-600 text-lg"></p>
                        <div className="mt-8">
                            <Link to='https://github.com/HoodaProject/hooda-front' target="blank" className="text-hoodaLaranja hover:text-amber-400 text-l font-semibold">Conheça mais sobre a Hooda
                                <span className="ml-2">&#8594;</span></Link>
                        </div>
                    </div>
                    <div className="mt-12 md:mt-0 items-center  bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                        <img src="https://i.imgur.com/uqAwc5T.jpeg" alt="" />
                    </div>
                </div>
                <h1 className="text-2xl font-Montserrat pb-8">Conheça nossa equipe: </h1>
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 items-center gap-8">
                    <div>
                        <div className="card w-90 bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                            <div className="h-80">
                                <img
                                    src="https://i.imgur.com/NSLm9oV.jpeg"
                                    alt="profile-picture"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="text-center p-4">
                                <h4 className="text-xl font-Docker-One font-light text-hoodaLaranja ">Rodrigo</h4>
                                <h4 className="text-xl font-Docker-One text-hoodaLaranja mb-2">Silva</h4>
                                <p className="text-blue-gray-600  font-semibold">Fullstack Developer</p>
                            </div>
                            <div className="flex justify-center gap-7 pt-2 pb-4">
                                <div>
                                    <Link to={'https://github.com/rosdrigo'} target="blank">
                                        <GithubLogo size={32} color="#fcae04" /></Link>
                                </div>
                                <div>
                                    <Link to={'https://www.linkedin.com/in/rosdrigo/'} target="blank">
                                        <LinkedinLogo size={32} color="#fcae04" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card w-90 bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                            <div className="h-80">
                                <img
                                    src="https://i.imgur.com/PbfFcbH.jpeg"
                                    alt="profile-picture"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="text-center p-4">
                                <h4 className="text-xl font-Docker-One text-hoodaLaranja ">Alexander</h4>
                                <h4 className="text-xl font-Docker-One text-hoodaLaranja mb-2">Pereira</h4>
                                <p className="text-blue-gray-600 font-semibold">Fullstack Developer</p>
                            </div>
                            <div className="flex justify-center gap-7 pt-2 pb-4">
                                <div>
                                    <Link to={'https://github.com/Alexnderp'} target="blank">
                                        <GithubLogo size={32} color="#fcae04" /></Link>
                                </div>
                                <div>
                                    <Link to={'https://www.linkedin.com/in/alexnderp/'} target="blank">
                                        <LinkedinLogo size={32} color="#fcae04" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card w-90 bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                            <div className="h-80">
                                <img
                                    src="https://i.imgur.com/AyjBXfG.jpeg"
                                    alt="profile-picture"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="text-center p-4">
                                <h4 className="text-xl font-Docker-One text-hoodaLaranja ">Rebeca</h4>
                                <h4 className="text-xl font-Docker-One text-hoodaLaranja mb-2">Ouriques</h4>
                                <p className="text-blue-gray-600 font-semibold">Fullstack Developer</p>
                            </div>
                            <div className="flex justify-center gap-7 pt-2 pb-4">
                                <div>
                                    <Link to={'https://github.com/RebecaOuriques'} target="blank">
                                        <GithubLogo size={32} color="#fcae04" /></Link>
                                </div>
                                <div>
                                    <Link to={'https://www.linkedin.com/in/rebeca-ouriques/'} target="blank">
                                        <LinkedinLogo size={32} color="#fcae04" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card w-90 bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                            <div className="h-80">
                                <img
                                    src="https://i.imgur.com/vx3QYOv.jpeg"
                                    alt="profile-picture"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="text-center p-4">
                                <h4 className="text-xl font-Docker-One text-hoodaLaranja">Camila</h4>
                                <h4 className="text-xl font-Docker-One text-hoodaLaranja mb-2">Andrade</h4>
                                <p className="text-blue-gray-600 font-semibold">Fullstack Developer</p>
                            </div>
                            <div className="flex justify-center gap-7 pt-2 pb-4">
                                <div>
                                    <Link to={'https://www.github.com/camilarandrade'} target="blank">
                                        <GithubLogo size={32} color="#fcae04" /></Link>
                                </div>
                                <div>
                                    <Link to={'https://www.linkedin.com/in/camilardeandrade/'} target="blank">
                                        <LinkedinLogo size={32} color="#fcae04" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card w-90 bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                            <div className="h-80">
                                <img
                                    src="https://i.imgur.com/yGGAkcv.jpeg"
                                    alt="profile-picture"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="text-center p-4">
                                <h4 className="text-xl font-Docker-One text-hoodaLaranja">Gabriel</h4>
                                <h4 className="text-xl font-Docker-One mb-2 text-hoodaLaranja">Santana</h4>
                                <p className="font-semibold">Fullstack Developer</p>
                            </div>
                            <div className="flex justify-center gap-7 pt-2 pb-4">
                                <div>
                                    <Link to={'https://github.com/GabrielSantanadaSilva'} target="blank">
                                        <GithubLogo size={32} color="#fcae04" /></Link>
                                </div>
                                <div>
                                    <Link to={'https://www.linkedin.com/in/gabsantsilva/'} target="blank">
                                        <LinkedinLogo size={32} color="#fcae04" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-90 bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                        <div className="h-80">
                            <img
                                src="https://i.imgur.com/lFugnlI.jpeg"
                                alt="profile-picture"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="text-center p-4">
                            <h4 className="text-xl font-Docker-One text-hoodaLaranja">Wilker</h4>
                            <h4 className="text-xl font-Docker-One mb-2 text-hoodaLaranja">Silva</h4>
                            <p className="font-semibold">Fullstack Developer</p>
                        </div>
                        <div className="flex justify-center gap-7 pt-2 pb-4">
                            <div>
                                <Link to={'https://github.com/Wil220'} target="blank">
                                    <GithubLogo size={32} color="#fcae04" /></Link>
                            </div>
                            <div>
                                <Link to={'https://www.linkedin.com/in/wilker-silva-3a0ab2273/'} target="blank">
                                    <LinkedinLogo size={32} color="#fcae04" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 mb-[5rem] md:grid-cols-1 pt-32 items-center gap-8">
                    <h1 className="text-2xl font-Montserrat flex justify-center ">Nos deixe um feedback: </h1>
                    <form className="max-w-md mx-auto mt-16">
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-hoodaLaranja focus:outline-none focus:ring-0 focus:border-hoodaLaranja peer" placeholder=" " required />
                            <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-hoodaLaranja peer-focus:dark:text-hoodaLaranja peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-hoodaLaranja focus:outline-none focus:ring-0 focus:border-hoodaLaranja peer" placeholder=" " required />
                                <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-hoodaLaranja peer-focus:dark:text-hoodaLaranja peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Primeiro Nome</label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-hoodaLaranja focus:outline-none focus:ring-0 focus:border-hoodaLaranja peer" placeholder=" " required />
                                <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-hoodaLaranja peer-focus:dark:text-hoodaLaranja peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Sobrenome</label>
                            </div>
                        </div>
                        <div className="mb-5">
                            <label htmlFor="feedback" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Digite seu Feedback</label>

                            <div className="flex justify-center">
                                <textarea id="feedback" className="feedback-textarea w-full max-w-md text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 p-4" placeholder=" "></textarea>
                            </div>
                        </div>
                        <div className="flex justify-center mt-8">
                            <button type="submit" className="text-white bg-amber-400 hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full max-w-xs px-6 py-3 text-center dark:bg-hoodaLaranja dark:hover:bg-amber-500 dark:focus:ring-hoodaLaranja">
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section >
    )
}

export default aboutUs

