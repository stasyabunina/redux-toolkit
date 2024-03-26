import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Alert, Toast } from 'react-daisyui';
import useDidMountEffect from '../app/hooks';

function FavoriteAlert() {
    const [alerts, setAlerts] = useState([]);
    const didRender = useDidMountEffect();
    const favorites = useSelector(state => state.favorites);

    useEffect(() => {
        didRender && handleToast()
    }, [didRender, favorites]);

    const handleToast = () => {
        setAlerts(alerts => [...alerts, {
            text: 'Успешно добавлено/удалено из избранного!',
        }]);
        setTimeout(() => {
            setAlerts(alerts => alerts.filter((_, i) => i !== 0));
        }, 2500)
    };

    return (
        <Toast className='z-10' vertical='bottom' horizontal='end'>
            {alerts.map((alert, index) => <Alert key={index} icon={<svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>}>
                <span>{alert.text}</span>
            </Alert>
            )}
        </Toast>
    );
}

export default FavoriteAlert;