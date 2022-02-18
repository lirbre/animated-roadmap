const Content: contentProps[] = [
    {
        title: 'Q1',
        infoTitle: 'Jan 1st-5th, 2022 | 0.5',
        infoContent1: 'Last Pre Sale pack sale.',
        infoContent2: 'PACK PRICING 125%'
    },
    {
        title: 'Q1',
        infoTitle: 'Jan-Feb, 2022 | 0.75',
        infoContent1: 'BETA TESTING FOR BETA PASS HOLDERS'
    },
    {
        title: 'Q1',
        infoTitle: 'March 1st, 2022 | 1.0',
        infoContent1: 'LAST SUMMER ONE PACK SALE',
        infoContent2: 'PACK PRICING 150%',
        infoContent3: 'FULL GAME LAUNCH WITH BEE BLENDING, BEE BREEDING, ADVENTURES, AND MUCH MORE.'
    },
    {
        title: 'Q2',
        infoTitle: 'June, 2021 | 1.5',
        infoContent1: 'BEHIVE SALE + BEEKEEPER SALE'
    },
    {
        title: 'Q3',
        infoTitle: 'September, 2022 | 2.0',
        infoContent1: 'LAND AND NEW BEES FOR SUMMER 2'
    },
]

export interface contentProps {
    title: string
    infoTitle: string
    infoContent1?: string
    infoContent2?: string
    infoContent3?: string
}

export default Content