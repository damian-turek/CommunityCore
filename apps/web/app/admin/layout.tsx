import { Link } from '../../types/sidebar'
import { MdOutlineSpaceDashboard } from 'react-icons/md'
import { Sidebar } from '../../components'

import styles from './layout.module.css'
import '../../styles/global.css';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const links: Link[] =  [
        { href: 'test', label: 'test', icon: <MdOutlineSpaceDashboard />},
    ]
    return (
        <div className={styles.container}>
            <aside className={styles.sidebar}>
                <Sidebar links={links} />
            </aside>
            <main>{children}</main>
        </div>
    )
}