import React from 'react'

function Headeritem({ Icon, name, isExpanded }) {
    return (
        <li className="flex items-baseline space-x-4 hover:underline underline-offset-4 cursor-pointer transform transition-transform duration-200 hover:scale-110">
            <Icon />
            {isExpanded && <span className="text-base">{name}</span>}
        </li>
    )
}

export default Headeritem