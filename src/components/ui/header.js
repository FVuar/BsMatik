import '../../styles/header.css';
import { ArrowRightStartOnRectangleIcon } from '@heroicons/react/16/solid';
import { Tooltip } from 'react-tooltip';

export default function Header({ children }) {
    const goUrl = (url) => {
        window.location.href = url;
    }
    return (
        <header>
            <div className="logo"><h1>BsMatik</h1></div>
            <div className="system-control">
                {children}
                <button type='button' data-tooltip-id='docs' data-tooltip-content="docs" className='btn' onClick={() => goUrl('https://fvuar.github.io/bsmatik')}><ArrowRightStartOnRectangleIcon className='icon-16' /></button>
            </div>
            <Tooltip id='docs' />
        </header>
    );
}