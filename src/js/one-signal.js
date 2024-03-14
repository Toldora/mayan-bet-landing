import { ONE_SIGNAL_TAG } from '@/const/one-signal';

export const initOneSignal = () => {
  window.OneSignalDeferred = window.OneSignalDeferred || [];

  if (!window.OneSignalDeferred) return;

  window.OneSignalDeferred.push(OneSignal => {
    OneSignal.init({
      appId: '707e911a-7985-4fcb-8bb1-666951edf9ef',
      // serviceWorkerPath: '/scripts/OneSignalSDKWorker.js',
    });

    //   console.log(OneSignal.User.PushSubscription.id);
    //   console.log(OneSignal.User.PushSubscription.optedIn);
    //     console.log(OneSignal.User.PushSubscription.token);

    // Логин юзера, если его удалили из таблицы подписок
    //   OneSignal.User.PushSubscription.addEventListener(
    //     'change',
    //     function pushSubscriptionChangeListener(event) {
    //       if (event.current.token) {
    //         OneSignal.login(OneSignal.User.onesignalId);
    //       }
    //     },
    //   );

    OneSignal.Notifications.addEventListener('permissionChange', permission => {
      if (permission) {
        OneSignal.User.addTag(ONE_SIGNAL_TAG.registered, '1');
      }
    });
  });
};

export const changeUserTag = (key, value) => {
  if (!window.OneSignal || !key || !value) return;

  window.OneSignal.User.addTag(key, value);
};

export const getIsUserOptedIn = () => {
  if (!window.OneSignal) return;

  return (
    window.OneSignal.User.PushSubscription.optedIn &&
    window.OneSignal.User.PushSubscription.token
  );
};
