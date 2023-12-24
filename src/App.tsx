import { User, Key } from '@phosphor-icons/react'

function App() {

  return (
    <div className="text-white p-12 flex flex-col gap-12">
      <h1 className="font-bold text-2xl">Olá, amigo(a)!</h1>
      <h2>Você foi contemplado com dois ingressos para o Cinemark<sup>*</sup> válidos até 24/03/24. Para sessões 2D, 3D e XD.</h2>
      <p>
        Baixe o aplicativo do Cinemark clicando no botão abaixo e entre com as credenciais para resgatar seus ingressos.
      </p>
      <div className='bg-red-200 text-red-500 rounded-md p-4 flex flex-col gap-4'>
        <a className="bg-red-500 py-4 text-white font-bold rounded-md text-center flex flex-col items-center gap-2" type="button" href="https://cinemark.com.br/a-cinemark/aplicativos">
          Baixe o Aplicativo <img src="/cinemark-logo.png" alt="Cinemark Logo" className="w-32" />
        </a>
        <p><User size={24} /> contempladonatal23@gmail.com</p>
        <p><Key size={24} /> feliznatal!</p>
      </div>
      <p className="text-sm">
        <sup>*</sup>A única unidade do Cinemark em Salvador encontra-se no Salvador Shopping.
      </p>
    </div>
  )
}

export default App
