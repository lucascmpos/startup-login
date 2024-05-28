import { useQuery, gql } from '@apollo/client'
import {
  Bookmark,
  BriefcaseBusiness,
  ChevronRight,
  LineChart,
  MoveLeft,
  MoveUpRight,
} from 'lucide-react'

import Button from 'src/components/Button/button'
import InfoCard from 'src/components/InfoCard/info-card'

const QUERY = gql`
  query FindCompanies {
    companies {
      id
      name
      description
      website
      businessModel
      metricArrRaw
      metricArrNet
      foundation
      team_size
      opportunities
      valuation
      openings
      reasoningOpening
      user {
        id
        first_name
        last_name
      }
    }
  }
`

const HomePage = () => {
  const { loading, error, data } = useQuery(QUERY)

  if (loading)
    return (
      <div className="flex min-h-screen items-center justify-center">
        Carregando informações...
      </div>
    )
  if (error)
    return (
      <div className="flex min-h-screen items-center justify-center">
        Error: {error.message}
      </div>
    )

  const { companies } = data

  const calculateCompanyTime = (foundation: string) => {
    const foundedDate: Date = new Date(foundation)
    const currentDate: Date = new Date()
    const diffInMilliseconds: number =
      currentDate.getTime() - foundedDate.getTime()
    const diffInYears: number =
      diffInMilliseconds / (1000 * 60 * 60 * 24 * 365.25)
    return Math.floor(diffInYears)
  }

  return (
    <main className="flex min-h-screen w-full flex-col px-28 pb-16">
      <div className="mt-12 flex justify-start">
        <Button
          className="flex flex-row items-center gap-2 rounded-2xl border border-[#1C202C] px-4 py-2 font-medium"
          icon={<MoveLeft size={20} />}
          text="Voltar para a lista"
        />
      </div>

      {companies.map((company) => (
        <div key={company.id} className="flex flex-col">
          <div className="mt-11 flex flex-row items-center justify-between border-b pb-6">
            <h1 className="text-4xl font-bold">{company.name}</h1>
            <Button
              className="flex flex-row items-center gap-2 rounded-2xl bg-[#1C202C] px-4 py-2 font-medium text-white"
              icon={<MoveUpRight size={20} />}
              iconPosition="right"
              text="Fazer uma oferta"
            />
          </div>
          <div className="mt-6 flex flex-row items-center justify-between">
            <div className="flex gap-8">
              <div>
                <p className="text-sm font-medium">Localidade</p>
                <span className="text-sm font-bold">São Paulo</span>
              </div>
              <div>
                <p className="text-sm font-medium">Tipo</p>
                <span className="text-sm font-bold">
                  {company.businessModel}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium">Estágio</p>
                <span className="text-sm font-bold">Break Even</span>
              </div>
              <div>
                <p className="text-sm font-medium">Status</p>
                <span className="text-sm font-bold">Buscando Aporte</span>
              </div>
            </div>
            <Button
              className="flex flex-row items-center gap-2 rounded-2xl border border-[#E8E5DF] bg-[#FBF9F7]  px-4 py-2 font-medium"
              text="Salvar"
              icon={<Bookmark size={20} />}
            />
          </div>
          <div className="mt-8">
            <InfoCard
              title="Histórico dos Founders"
              icon={<BriefcaseBusiness />}
              button={
                <Button
                  icon={<MoveUpRight size={20} />}
                  iconPosition="right"
                  text="Ver mais"
                  className="flex flex-row items-center gap-2 rounded-2xl border border-[#E8E5DF] bg-[#FBF9F7]  px-2 py-1 font-medium"
                />
              }
            >
              <div className="flex flex-row  justify-between gap-3">
                <div className="flex w-full flex-col ">
                  <span className="font-medium">Nome</span>
                  <h3 className="text-2xl font-bold text-[#4A4A4A]">{`${company.user.first_name} ${company.user.last_name}`}</h3>
                </div>
                <div className="flex w-full flex-col ">
                  <span className="font-medium">Dedicação</span>
                  <h3 className="text-2xl font-bold text-[#4A4A4A]">
                    Completa
                  </h3>
                </div>
              </div>
            </InfoCard>
          </div>
          <div className="mt-8">
            <InfoCard title="Negócio" icon={<BriefcaseBusiness />}>
              <div className="flex flex-col gap-6">
                <div className="flex w-full flex-col">
                  <span className="font-medium">Descrição</span>
                  <p className="text-sm  text-[#5F6475]">
                    {company.description}
                  </p>
                </div>

                <div className="flex w-full flex-col">
                  <span className="font-medium">Modelo de negócios</span>
                  <h3 className="text-2xl font-bold text-[#4A4A4A]">
                    Freemium + Assinatura Mensal
                  </h3>
                </div>

                <div className="flex w-full flex-row justify-between gap-3">
                  <div className="flex w-full flex-col">
                    <span className="font-medium">Tempo de mercado</span>
                    <h3 className="text-2xl font-bold text-[#4A4A4A]">
                      {calculateCompanyTime(company.foundation)} anos
                    </h3>
                  </div>
                  <div className="flex w-full flex-col">
                    <span className="font-medium">Atuação</span>
                    <h3 className="text-2xl font-bold text-[#4A4A4A] underline ">
                      Educação, Edutech
                    </h3>
                  </div>
                </div>

                <div className="flex w-full flex-row justify-between gap-3">
                  <div className="flex w-full flex-col">
                    <span className="font-medium">Tamanho do time</span>
                    <h3 className="text-2xl font-bold text-[#4A4A4A]">
                      {company.team_size}
                    </h3>
                  </div>
                  <div className="flex w-full flex-col">
                    <span className="font-medium">Serviços</span>
                    <h3 className="text-2xl font-bold text-[#4A4A4A]">
                      {company.businessModel}
                    </h3>
                  </div>
                </div>

                <div className="flex w-full flex-row justify-between gap-3">
                  <div className="flex w-full flex-col">
                    <span className="font-medium">Oportunidades</span>
                    <h3 className="font-medium text-[#4A4A4A]">
                      {company.opportunities.map((opportunity, index) => (
                        <span key={index}>💎 {opportunity}</span>
                      ))}
                    </h3>
                  </div>
                </div>
              </div>
            </InfoCard>
          </div>
          <div className="mt-8">
            <InfoCard
              title="Buscando Capital / Aquisição"
              icon={<LineChart size={20} />}
            >
              <div className="flex flex-row  justify-between gap-3">
                <div className="flex w-full flex-col ">
                  <span className="font-medium">Avaliação</span>
                  <h3 className="text-5xl font-bold text-[#4A4A4A]">
                    R$ 7.43M
                  </h3>
                </div>
                <div className="flex w-full flex-col ">
                  <span className="font-medium">Abertura</span>
                  <div className=" font-bold text-[#4A4A4A]">
                    {company.openings.map((openings, index) => (
                      <p className="flex flex-row items-center" key={index}>
                        <ChevronRight size={20} /> {openings}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </InfoCard>
          </div>

          <div className="mt-8">
            <div className="rounded-2xl border p-6">
              <h2 className="text-2xl font-medium">Receita Anual (ARR)</h2>
              <div className="flex flex-row justify-between">
                <span className="text-base font-medium">Bruto</span>
                <h3 className="font-bold">R$520k</h3>
              </div>
              <div className="flex flex-row justify-between">
                <span className="text-base font-medium">Liquido</span>
                <h3 className="font-bold">R$319k</h3>
              </div>
            </div>
          </div>
        </div>
      ))}
    </main>
  )
}

export default HomePage
