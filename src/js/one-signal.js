import { ONE_SIGNAL_TAG } from '@/const/one-signal';

export const initOneSignal = () => {
  window.OneSignalDeferred = window.OneSignalDeferred || [];

  window.OneSignalDeferred.push(OneSignal => {
    OneSignal.init({
      appId: '707e911a-7985-4fcb-8bb1-666951edf9ef',
      // appId: 'ea11d64e-aa3d-45aa-80e8-81e8a5226ded',
    });

    OneSignal.User.PushSubscription.addEventListener('change', event => {
      OneSignal.User.addTag(
        ONE_SIGNAL_TAG.registered,
        event.current.optedIn ? '1' : '0',
      );
    });

    // Логин юзера, если его удалили из таблицы подписок
    //   OneSignal.User.PushSubscription.addEventListener(
    //     'change',
    //     function pushSubscriptionChangeListener(event) {
    //       if (event.current.token) {
    //         OneSignal.login(OneSignal.User.onesignalId);
    //       }
    //     },
    //   );
  });
};

export const changeUserTag = (key, value) => {
  if (!window.OneSignal || !key || !value) return;

  window.OneSignal.User.addTag(key, value);
};

export const waitForTagsUpdate = () => {
  return new Promise(resolve => {
    const interval = setInterval(() => {
      const tags = window.OneSignal.User.getTags();

      if (tags[ONE_SIGNAL_TAG.registered] === '2') {
        clearInterval(interval);
        resolve();
      }
    }, 200);
  });
};

export const getIsUserOptedIn = () => {
  if (!window.OneSignal) return;

  return (
    window.OneSignal.User.PushSubscription.optedIn &&
    window.OneSignal.User.PushSubscription.token
  );
};
