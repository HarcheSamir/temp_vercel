import React from 'react';

export default function Button({ theme = 'black', Icon, label, className, iconClassName, animate=false }) {
    // Define background styles for each theme
    const themes = {
        black: 'bg-[#292a2d] text-white ',
        white: 'bg-[#ffffff] text-black',
        blue: 'bg-[#5c8b9e] text-white',
    };

    const selectedTheme = themes[theme] || themes.black;

    return (
        <button
            className={`${className} ${(label || !Icon ) && !animate && 'px-8'} duration-500 ${animate && 'group-hover:px-8 hover:px-8' }   group rounded-full flex  items-center w-fit justify-center min-w-[50px] h-[50px]  ${selectedTheme} group-hover:bg-[#5c8b9e] hover:bg-[#5c8b9e]`}
        >
            {label && <div className={`whitespace-nowrap ${ animate && 'max-w-0 overflow-hidden group-hover:max-w-[100px]  duration-400 '} ` }>{label}</div>}
            {Icon && <Icon className={iconClassName}/>}

        </button>
    );
}
