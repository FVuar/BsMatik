import '../../styles/actions.css';
import { fv } from '../utils';
import { useState, useRef } from 'react';
import { Bars2Icon, PlusIcon, MinusIcon } from '@heroicons/react/16/solid';

export default function Actions({ settings }) {
    const [action, setAction] = useState('Addition');
    const [icon, setIcon] = useState(<PlusIcon className='icon-16' />);
    const inp1 = useRef();
    const inp2 = useRef();
    const result = useRef();

    const actions = [
        { action: "Addition", icon: <PlusIcon className='icon-16' />, func: (c1, c2) => Math.abs(c1 + c2)},
        { action: "Subtraction", icon: <MinusIcon className='icon-16' />, func: (c1, c2) => Math.abs(c1 - c2)},
        { action: "Multiplication", icon: <PlusIcon className='icon-16' />, func: (c1, c2) => Math.abs(c1 * c2) },
        { action: "Division", icon: <PlusIcon className='icon-16' />, func: (c1, c2) => Math.abs(c1 / c2) }
    ];

    const clickedControl = (ac, ic) => () => {
        setAction(ac);
        setIcon(ic);
    };

    const getResult = () => {
        const acs = actions.find(acr => acr.action === action);
        const pResult = acs.func(parseInt(inp1.current.value), parseInt(inp2.current.value));
        fv.newAlert({
            text: pResult,
            position: 'top-right',
            type: 'default'
        });
        result.current.innerHTML = `<span>${pResult}</span>`;
    }

    if (settings) {
        return (
            <>
                <fieldset>
                    <legend>Settings</legend>
                </fieldset> 
            </>
        );
    }

    return (
        <>
            <fieldset className="selection">
                <legend>Actions</legend>
                <h2 className="selected-title">{action}</h2>
                <div className='selection-form'>
                    <input maxLength={20} ref={inp1} className="inp" type="text" placeholder="0" />
                    <span className="selected-action">{icon}</span>
                    <input maxLength={20} ref={inp2} className="inp" type="text" placeholder="0" />
                    <button className='btn' type="button" onClick={getResult}><Bars2Icon className='icon-16' /></button>
                    <span ref={result} className='result'></span>
                </div>
            </fieldset>
            <fieldset className="choose">
                <legend>Choose</legend>
                <div className="control-area">
                    {actions.map(act => (
                        <button key={act.action} type="button" className={`btn ${act.action === action && 'true'}`} onClick={clickedControl(act.action, act.icon)}>{act.action}</button>
                    ))}
                </div>
            </fieldset>
        </>
    );
}
