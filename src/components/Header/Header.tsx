import React from 'react';
import classesHed from './Header.module.css';

export const Header = () => {
    return (
        <header className={classesHed.header}>
            <img src={'https://i.pinimg.com/originals/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg'} alt={'Logo'}/>
        </header>
    );
}
