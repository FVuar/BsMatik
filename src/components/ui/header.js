import '../../styles/header.css';
import { ArrowRightStartOnRectangleIcon } from '@heroicons/react/16/solid';

export default function Header({ children }) {
    return (
        <header>
            <div className="logo"><h1>BsMatik</h1></div>
            <div className="system-control">
                {children}
                <button type='button' className='btn'><ArrowRightStartOnRectangleIcon className='icon-16' /></button>
            </div>
        </header>
    );
}