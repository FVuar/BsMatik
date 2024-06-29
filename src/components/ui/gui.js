import '../../styles/gui.css';
import Header from './header';
import Actions from './actions';
import Footer from './footer';
import { useState } from 'react';
import { Cog6ToothIcon, XMarkIcon } from '@heroicons/react/16/solid';

export default function Gui() {
    const [settings, setSettings] = useState(false);
    const openSettings = () => {
        setSettings(!settings);
    }
    console.log(settings);
    return (
        <div className="gui">
            <Header>
                <button type='button' className='btn' onClick={openSettings}>{settings ? <XMarkIcon className='icon-16' /> : <Cog6ToothIcon className='icon-16' />}</button>
            </Header>
            <Actions settings={settings} />
            <Footer />
        </div>
    );
}