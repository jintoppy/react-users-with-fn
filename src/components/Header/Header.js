import React, { memo } from 'react';
import './Header.css';

const Header = memo(() => {
    console.log('inside header render');
    return (
        <header>This is my app</header>
    )
});

export default Header;