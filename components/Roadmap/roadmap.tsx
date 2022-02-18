import { memo } from "react"
import Content from "./content"
import Piece from "./piece"
import contentProps from './content'

const Roadmap = () => {

    return (
        <>
            {Content.map((roadmapContent: any, i: number) => (
                <Piece 
                    title={roadmapContent.title} 
                    infoTitle={roadmapContent.infoTitle}
                    infoContent1={roadmapContent?.infoContent1}
                    infoContent2={roadmapContent?.infoContent2}
                    infoContent3={roadmapContent?.infoContent3}
                    key={i}
                />
            ))}
        </>
    )
}

export default memo(Roadmap)