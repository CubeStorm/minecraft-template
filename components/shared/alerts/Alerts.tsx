import * as React from 'react';
import { useAppSelector } from '@redux/hooks';

import { Alert } from '@components/shared/alerts/Alert';


export const Alerts: React.FC = () => {
    const { alerts } = useAppSelector(store => store.alerts);

    const AlertsComponent = alerts.map(alert => <Alert key={alert.id} {...alert} />);

    return (
        <div className="flex flex-col gap-4 fixed bottom-0 left-0 z-40 p-5">
            {AlertsComponent}
        </div>
    );
}