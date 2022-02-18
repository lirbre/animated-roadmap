import { contentProps } from "./content"

const Piece = ({ title, infoTitle, infoContent1, infoContent2, infoContent3 }: contentProps) => {
    return (
        <div className='flex my-24 hover:-translate-y-4 active:-translate-y-4 transition-transform'>
            <div className='bg-orange-400 w-24 h-16 rounded-[80px] flex items-center justify-center font-black dark:text-black'>
                {title}
            </div>
            <div className='w-4/5 dark:bg-slate-200 bg-white shadow-roadmap -ml-4 mt-[40px] rounded-xl flex text-left flex-col p-8 dark:shadow-slate-200 dark:shadow-sm'>
                <p className="font-black text-black mb-2">{infoTitle}</p>
                <small className="mt-1 dark:text-black">{infoContent1}</small>
                <small className="mt-1 dark:text-black">{infoContent2}</small>
                <small className="mt-1 dark:text-black">{infoContent3}</small>
            </div>
        </div>
    )
}

export default Piece