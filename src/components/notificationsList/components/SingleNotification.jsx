import { DateTime } from 'luxon';
import { NotificationsHeader, TextWrapper, StyledPaper } from './SingleNotification.styles';

const SingleNotification = ({ date, text }) => {
    const dt = DateTime.fromISO(date).toLocal().toFormat('HH:MM:ss');
    return (
        <StyledPaper elevation={3}>
            <NotificationsHeader>
                <div>Notification</div>
                <div>{dt}</div>
            </NotificationsHeader>
            <TextWrapper>{text}</TextWrapper>
        </StyledPaper>
    );
};

export default SingleNotification;
