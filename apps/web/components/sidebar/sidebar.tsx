import { SideBarProps } from '../../types/sidebar'
import Link from 'next/link'

export const Sidebar = ({ links }: SideBarProps ) => (
    <nav>
        <div>
            {links.map((link) => (
                <Link href={link.href}>{link.icon}</Link>
                ))}
        </div>
    </nav>
)