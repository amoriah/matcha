import { useNotificationStore } from '../store/notificationStore';
import { Notification } from './Notification';

export const NotificationContainer = () => {
  const notification = useNotificationStore(state => state.notification);
  return (
    <>
      {notification && (
        <Notification
          key={notification.id}
          text={notification.text}
          type={notification.type}
          isOpen
        />
      )}
    </>
  );
};
