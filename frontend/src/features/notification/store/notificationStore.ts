import type { NotificationType } from '@app-types';
import { create } from 'zustand';

interface INotification {
  id: number;
  text: string;
  type: NotificationType;
}

interface INotificationStore {
  notification: INotification | null;
  addNotification: (text: string, type: NotificationType) => void;
  deleteNotification: (id: number) => void;
}

export const useNotificationStore = create<INotificationStore>()(set => ({
  notification: null,
  // {id: 1, text:"okokokokoko ol okokokokoko okokokokoko okokokokoko o okokokokoko okoko kokoko okokokokoko okok okokoko okokokok o o oko okokokokoko ol okokokokoko okokokokoko okokokokoko o okokokokoko okoko kokoko okokokokoko okok okokoko okokokok o o oko okokokokoko ol okokokokoko okokokokoko okokokokoko o okokokokoko okoko kokoko okokokokoko okok okokoko okokokok o o oko", type: 'info'}

  addNotification: (text, type) => {
    const id = Date.now();
    set({
      notification: { id, text, type },
    });
    setTimeout(() => {
      set(() => ({
        notification: null,
      }));
    }, 6000);
  },
  deleteNotification: () =>
    set(() => ({
      notification: null,
    })),
}));
