import React, { ReactNode } from 'react'

interface InfoCardProps {
  icon: ReactNode
  title: string
  button?: ReactNode
  children: ReactNode
}

const InfoCard: React.FC<InfoCardProps> = ({
  icon,
  title,
  button,
  children,
}) => {
  return (
    <div className="flex w-full flex-col rounded-2xl border">
      <div className="flex flex-row items-center justify-between border-b px-4 py-4">
        <div className="flex flex-row items-center gap-4">
          <div className="rounded-xl bg-[#FBF9F7] p-3 text-[#484D55]">
            {icon}
          </div>
          <h2 className="text-2xl font-semibold text-[#484D55]">{title}</h2>
        </div>
        {button && <div>{button}</div>}
      </div>
      <div className="bg-[#FBF9F7] p-6">{children}</div>
    </div>
  )
}

export default InfoCard
