import { useContext } from 'react';
import Context from '../../store/context';
import SingleNotification from './components/SingleNotification';
import { ListWrapper } from './NotificationsList.styles';

const NotificationsList = () => {
    const { state } = useContext(Context);
    const { notifications } = state;

    const notificationsArray = notifications.map((element) => <SingleNotification key={`${element.date}${Math.random()}`} text={element.text} date={element.date} />);

    return <ListWrapper>{notificationsArray}</ListWrapper>;
};

export default NotificationsList;
