import Head from 'next/head'
import { useState } from 'react'
import type { NextPage } from 'next'
import { api } from '@/services/axios'
import { InfoIcons } from '@/components/Chat/InfoIcons'
import { Titulo } from '@/components/Tipografia/Titulo'
import { MensagemPergunta } from '@/components/Chat/MensagemPergunta'
import { MensagemResposta } from '@/components/Chat/MensagemResposta'
import { PerguntaSugestao } from '@/components/Chat/PerguntaSugestao'

interface IMensagem {
  titulo: string
  tipo: string
}

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false)
  const [mensagens, setMensagens] = useState<IMensagem[]>([])
  const [mensagemAtual, setMensagemAtual] = useState<IMensagem>()

  async function postPergunta() {
    setLoading(true)

    try {
      const response = await api.post('/chats/message', {
        sourceId: "src_gLnYolCdp1Ynd06B3oyoD",
        messages: [
          {
            role: "user",
            content: mensagemAtual?.titulo
          }
        ]
      })

      setMensagens((prevMensagens) => [...prevMensagens, { titulo: mensagemAtual?.titulo, tipo: "pergunta" } as any])
      setMensagens((prevMensagens) => [...prevMensagens, { titulo: response.data.content, tipo: "resposta" }])

    } catch (error: any) {
      console.log("Error ao enviar mensagem: ", error);
    }
    setLoading(false)
    setMensagemAtual("" as any)
  }

  function postMensagemPronta(mensagem: string) {
    setMensagemAtual({ titulo: "", tipo: "" } as any)
    setMensagemAtual({ titulo: mensagem, tipo: "pergunta" } as any)
  }

  return (
    <>
      {/* <div className="bg-black/50 absolute flex-1 w-full h-full z-50 flex items-center justify-center">
        <div className="bg-white rounded-md px-8 py-4">
          <h2 className='text-3xl font-bold'>Em atualização, em breve novidades</h2>
          <div className=' mt-4'>
            <a href="https://www.instagram.com/demolaypa" rel="noreferrer" target='_blank' className=' hover:scale-105 scale-100 text-[#22A966] flex items-center justify-center text-xl font-medium border-2 border-solid rounded-md px-2 py-2 mt-4 border-[#22A966] transition-all gap-2'>
              <img src="/img/instagram.png" alt="Logo do Gabinete do ICCE Ascenção" className="w-10 h-10" />
              @demolaypa
            </a>
            <a href="https://www.instagram.com/cavalariapa" target='_blank' rel="noreferrer" className=' hover:scale-105 scale-100 text-[#22A966] flex items-center justify-center text-xl font-medium border-2 border-solid rounded-md px-2 py-2 mt-4 border-[#22A966] transition-all gap-2'>
              <img src="/img/instagram.png" alt="Logo do Gabinete do ICCE Ascenção" className="w-10 h-10" />
              @cavalariapa
            </a>
            <a href="https://demolaypa.org" target='_blank' rel="noreferrer" className=' hover:scale-105 scale-100 text-[#22A966] flex items-center justify-center text-xl font-medium border-2 border-solid rounded-md px-2 py-2 mt-4 border-[#22A966] transition-all gap-2'>
              <img src="/img/internet.png" alt="Logo do Gabinete do ICCE Ascenção" className="w-10 h-10" />
              demolaypa.org
            </a>
          </div>
        </div>
      </div> */}
      <div className='dark:bg-[#22A966]'>
        <Head>
          <title>Chat Jaques IA - Gabinete do ICCE</title>
          <meta name="description" content="Chat Jaques IA - Gabinete do ICCE" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="flex items-center justify-center flex-col gap-5 pt-4 h-screen">

          <div className="w-full h-full">
            <div className="pl-4 pt-2">
              <Titulo weight='bold'>
                Chat Jaques IA
              </Titulo>
            </div>
            <div className='bg-gray-300 dark:bg-gray-700 rounded-xl shadow-xl shadow-slate-700/50 m-4 p-6 h-[90%] justify-center flex'>
              <a href="https://www.demolaypa.org" target="_blank" className='absolute text-sm font-light text-white bottom-1 hover:underline' rel="noopener noreferrer">
                Desenvolvido por Equipe DM Pará
              </a>
              {mensagens &&
                <div className='overflow-auto w-full h-[75%] max-w-3xl pb-12'>
                  {mensagens?.map((mensagem: IMensagem, index: number) => (
                    mensagem.tipo === "pergunta" ?
                      <MensagemPergunta key={index}>
                        {mensagem.titulo}
                      </MensagemPergunta>
                      :
                      <MensagemResposta key={index}>
                        {mensagem.titulo}
                      </MensagemResposta>
                  ))}
                </div>
              }

              {mensagens.length <= 0 &&
                <div className='bottom-52 absolute'>
                  <img
                    src="../../img/brasao-do-icce.png"
                    alt="Logo do Gabinete do ICCE Ascenção"
                    className='hidden md:block md:w-40 md:h-40 w-24 h-24 mx-auto mb-6'
                  />
                  <div className="w-[80%] mx-auto">
                    <Titulo size={20} weight='bold' align={"center"}>
                      1º Gabinete do Ilustre Comendador Cavaleiro Estadual do Pará
                    </Titulo>
                    <Titulo color="#22A966" size={16} weight='bold' align={"center"}>
                      Ascenção - 2023/2024
                    </Titulo>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-4 row-span-1 justify-end items-end mt-40">
                    <PerguntaSugestao
                      titulo="Quais editais estão disponíveis para inscrição ?"
                      subtitulo="Saiba mais sobre Editais e projetos abertos"
                      link={() => postMensagemPronta("Quais editais estão disponíveis para inscrição ?")}
                    />
                    <PerguntaSugestao
                      titulo="O que é o Gabinete do ICCE ?"
                      subtitulo="Saiba mais sobre o 1º Gabinete do ICCE"
                      link={() => postMensagemPronta("O que é o Gabinete do ICCE ?")}
                    />
                  </div>
                </div>
              }

              <div className="fixed w-[80%] md:w-full max-w-3xl bottom-12">
                <div className="flex items-center justify-center">
                  <div className=" relative w-full">
                    <div className='bg-[#D5DAE7] rounded-t-xl w-full h-16'>
                      <div className="flex gap-x-4 pl-2 py-3">
                        <InfoIcons
                          type="clean"
                          titulo="Limpar chat"
                          link={() => setMensagens([])}
                        />
                        <InfoIcons
                          type="toPaste"
                          titulo="Colar"
                          link={() => navigator.clipboard.readText().then((text) => setMensagemAtual({ titulo: text, tipo: "pergunta" }))}
                        />
                        {/* <InfoIcons
                        type="book"
                        titulo="Guia do usuário"
                        link={() => { }}
                      />
                      <InfoIcons
                        type="info"
                        titulo="Informações"
                        link="https://www.icce.com.br/"
                      /> */}
                      </div>
                    </div>
                    <input
                      value={mensagemAtual?.titulo ?? ""}
                      placeholder="Digite sua perguntar aqui..."
                      onChange={(e) => setMensagemAtual({ titulo: e.target.value, tipo: "pergunta" })}
                      className="w-full h-16 pl-3 pr-28 rounded-b-xl border-2 border-white focus:outline-none focus:border-white"
                    />
                    {loading ?
                      <button
                        disabled={true}
                        onClick={() => { }}
                        className="absolute right-2 px-3 py-2 top-[72px] text-white rounded-lg bg-gray-500 focus:outline-none hover:bg-gray-500 transition duration-300 ease-in-out"
                      >
                        Enviando...
                      </button>

                      :
                      <button
                        onClick={postPergunta}
                        className="absolute right-2 px-3 py-2 top-[72px] text-white rounded-lg bg-[#22A966] focus:outline-none hover:bg-[#0F6D3E] transition duration-300 ease-in-out"
                      >
                        Enviar
                      </button>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>

        </main>
      </div>
    </>
  )
}

export default Home
