import React from "react";

function aboutUs(){
    return(
        <section className="bg-gray-100">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-2 items-center gap-8">
                <div className="max-w-lg">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Sobre Nós</h2>
                    <p className="mt-4 text-gray-600 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
                        eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna quis elit efficitur consequat.
                        Mauris eleifend velit a pretium iaculis. Donec sagittis velit et magna euismod, vel aliquet nulla
                      
                        malesuada. Nunc pharetra massa lectus, a fermentum arcu volutpat vel.</p>


                    
                    <div className="mt-8">
                        <a href="#" className="text-blue-500 hover:text-blue-600 font-medium">Conheça mais sobre a Hooda
                            <span className="ml-2">&#8594;</span></a>
                    </div>
                    

                </div>
                
                <div className="mt-12 md:mt-0 items-center">
                                            <img src="https://adimax.com.br/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/05/cuidados-filhote-de-cachorro.jpg.webp" alt="" />
                </div>
            </div>
                
                
                <h1 className="text-3xl">Conheça nossa equipe: </h1>

            <div className="grid grid-cols-5 md:grid-cols-5 items-center gap-8">
                <div>
                    <img src="https://adimax.com.br/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/05/cuidados-filhote-de-cachorro.jpg.webp" alt="" />
                </div>

                <div>
                    <img src="https://adimax.com.br/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/05/cuidados-filhote-de-cachorro.jpg.webp" alt="" />
                </div>

                <div>
                    <img src="https://adimax.com.br/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/05/cuidados-filhote-de-cachorro.jpg.webp" alt="" />
                </div>

                <div>
                    <img src="https://adimax.com.br/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/05/cuidados-filhote-de-cachorro.jpg.webp" alt="" />
                </div>

                <div>
                    <img src="https://adimax.com.br/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/05/cuidados-filhote-de-cachorro.jpg.webp" alt="" />
                </div>
            </div>

            

<form className="max-w-md mx-auto mt-16">
  <div className="relative z-0 w-full mb-5 group">
      <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Primeiro Nome</label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Sobrenome</label>
    </div>
  </div>
  
  <div className="mb-5">
      <label htmlFor="feedback" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Digite seu Feedback</label>
      <input type="text" id="feedback" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">enviar</button>
</form>

                

            
        </div>
    </section>


    )
}

export default aboutUs

