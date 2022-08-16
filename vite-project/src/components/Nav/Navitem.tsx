
export interface Item {
    label: string;
    icon: JSX.Element;
    active?: boolean
}

const NavItem = ({ item }: { item: Item }) => {
    const { label, icon, active } = item
    return (
        <li>
            <li className={`md:my-3 p-1 flex justify-start items-center cursor-pointer${active ? ' bg-cyan-900 text-white' : ''}`}>
                {icon}
                <h4 className="ml-2">{label}</h4>
            </li>
        </li>
    )
}

export default NavItem