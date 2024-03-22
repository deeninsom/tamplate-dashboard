import { LuLayoutDashboard } from "react-icons/lu";
import { TbTransfer } from "react-icons/tb";
import { FaSquarePollVertical } from "react-icons/fa6";
import { BsFillClipboard2DataFill } from "react-icons/bs";
import { TbInfoSquareRounded } from "react-icons/tb";
import { RiSettingsLine } from "react-icons/ri";
import { IoIosNotificationsOutline } from "react-icons/io";

export const listMenuSidebar = [
    {
        section: {
            name: 'Master',
            listMenu: [
                {
                    tittle: 'Dashboard',
                    icon: LuLayoutDashboard
                },
                {
                    tittle: 'Transaksi',
                    icon: TbTransfer,
                    subMenu: [
                        {
                            tittle: 'Penjualan'
                        }
                    ]
                },
                {
                    tittle: 'Report',
                    icon: FaSquarePollVertical,
                    subMenu: [
                        {
                            tittle: 'Penjualan'
                        }
                    ]
                },
                {
                    tittle: 'Master',
                    icon: BsFillClipboard2DataFill,
                    subMenu: [
                        {
                            tittle: 'User'
                        }
                    ]
                }
            ]
        }
    },
    {
        section: {
            name: 'News',
            listMenu: [
                {
                    tittle: 'Informasi',
                    icon: TbInfoSquareRounded,
                },
                {
                    tittle: 'Setting',
                    icon: RiSettingsLine,
                },
                {
                    tittle: 'Notification',
                    icon: IoIosNotificationsOutline,
                }
            ]
        }
    }
]