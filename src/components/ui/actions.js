import '../../styles/actions.css';
import { fv } from '../utils';
import { useState, useRef } from 'react';
import { Bars2Icon, PlusIcon, MinusIcon } from '@heroicons/react/16/solid';
import { CustomIcon } from '../utils';
import Settings from '../settings';
import { Tooltip } from 'react-tooltip';

export default function Actions({ settings }) {
    const [action, setAction] = useState('Addition');
    const [icon, setIcon] = useState(<PlusIcon className='icon-16' />);
    const inp1 = useRef();
    const inp2 = useRef();
    const result = useRef();

    

    const actions = [
        { action: "Addition", icon: <PlusIcon className='icon-16' />, func: (c1, c2) => Math.abs(c1 + c2)},
        { action: "Subtraction", icon: <MinusIcon className='icon-16' />, func: (c1, c2) => Math.abs(c1 - c2)},
        { action: "Multiplication", icon: <CustomIcon icon='multiplication' />, func: (c1, c2) => Math.abs(c1 * c2) },
        { action: "Division", icon: <CustomIcon icon='slash' />, func: (c1, c2) => Math.abs(c1 / c2) }
    ];

    const clickedControl = (ac, ic) => () => {
        setAction(ac);
        setIcon(ic);
    };

    const getResult = () => {
        const acs = actions.find(acr => acr.action === action);
        const pResult = acs.func(parseInt(inp1.current.value), parseInt(inp2.current.value));
        if (isNaN(pResult) || pResult === undefined || pResult === null) {
            fv.newAlert({
                type: "error",
                position: "top-right",
                text: "The entered values ​​are not suitable for this operation!"
            })
            return;
        }
        fv.newAlert({
            text: pResult,
            position: 'top-right',
            type: 'success'
        });
        result.current.innerHTML = `<span>${pResult}</span>`;
    }

    if (settings) {
        return (
            <Settings />
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
                    <button className='btn' data-tooltip-id='showResult' data-tooltip-content="show result" type="button" onClick={getResult}><Bars2Icon className='icon-16' /></button>
                    <span ref={result} className='result'></span>
                </div>
            </fieldset>
            <fieldset className="choose">
                <legend>Choose</legend>
                <div className="control-area">
                    {actions.map(act => (
                        <>
                            <button key={act.action} data-tooltip-id={act.action} data-tooltip-content={act.action} type="button" className={`btn ${act.action === action && 'true'}`} onClick={clickedControl(act.action, act.icon)}>{act.icon}</button>
                            <Tooltip id={act.action} />
                        </>
                    ))}
                </div>
            </fieldset>
            <Tooltip id='showResult' />
        </>
    );
}
