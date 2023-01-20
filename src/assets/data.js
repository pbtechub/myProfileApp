import {CiGrid42} from 'react-icons/ci'
import {AiOutlineUnlock} from 'react-icons/ai'
import {BiMessageRoundedDots} from 'react-icons/bi'
import {RiBillLine} from 'react-icons/ri'
import {GrAppsRounded} from 'react-icons/gr'
import {BiLogOut} from 'react-icons/bi'
import {GrTransaction} from 'react-icons/gr'


export const menu = [
    {
        id: 1,
        icon: <CiGrid42 />,
        title: "General",
        active: false
    },
    {
        id: 2,
        icon: <AiOutlineUnlock />,
        title: "Password",
        active: true
    },
    {
        id: 3,
        icon: <BiMessageRoundedDots />,
        title: "Message",
        active: false
    },
    {
        id: 4,
        icon: <RiBillLine />,
        title: "Billings",
        active: false
    },
    {
        id: 5,
        icon: <GrAppsRounded />,
        title: "Apps",
        active: true
    },
    {
        id: 6,
        icon: <GrTransaction />,
        title: "Transactions",
        active: false
    },
    {
        id: 7,
        icon: <BiLogOut />,
        title: "Log Out",
        active: false
    }

]

export const table = [
    {
        id: 1,
        thead: [
            {
                id: 1,
                title: 'Date'
            },
            {
                id: 2,
                title: 'Type'
            },
            {
                id: 3,
                title: 'Receipt'
            },
        ],

        id: 2,
        tbody: 
            
                [
                    {
                        id: 1,
                        date: 'Oct 21 2022',
                        type:  'Pro Annual',
                        receipt: ''
                    },
                    {
                        id: 2,
                        date: 'Oct 21 2022',
                        type:  'Pro Portfolio',
                        receipt: ''
                    },
                    {
                        id: 3,
                        date: 'Oct 21 2022',
                        type:  'Pro Annual',
                        receipt: ''
                    },
                    {
                        id: 4,
                        date: 'Oct 21 2022',
                        type:  'Pro Annual',
                        receipt: ''
                    }
                   
                ]
            
    }
]