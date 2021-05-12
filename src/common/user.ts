import { asyncGet } from 'utils/asyncGet';

export interface User {
  uid: string;
  username: string;
  friends: string[];
  status: string;
}

export interface Friend {
  uid: string;
  username: string;
}

export const users: User[] = [
  {
    uid: '0x01',
    username: 'user-a',
    friends: ['0x02', '0x03', '0x04'],
    status:
      'If we can only encounter each other rather than stay with each other,then I wish we had never encountered.',
  },
  {
    uid: '0x02',
    username: 'user-b',
    friends: ['0x05', '0x01', '0x03'],
    status:
      'I would like weeping with the smile rather than repenting with the cry,when my heart is broken ,is it needed to fix?',
  },
  {
    uid: '0x03',
    username: 'user-c',
    friends: ['0x02', '0x01', '0x04', '0x05'],
    status:
      "No one indebted for others,while many people don't know how to cherish others.",
  },
  {
    uid: '0x04',
    username: 'user-d',
    friends: ['0x01', '0x03'],
    status:
      "You will have it if it belongs to you,whereas you don't kvetch for it if it doesn't appear in your life.",
  },
  {
    uid: '0x05',
    username: 'user-e',
    friends: ['0x02', '0x03'],
    status:
      'When a cigarette falls in love with a match,it is destined to be hurt.',
  },
];

interface Resp<T = null> {
  ec: number;
  em: string;
  data: T | null;
}

export const getUser = (uid: string) => {
  const userProfile = users.find((user) => user.uid === uid);
  const res: Resp<User> = { ec: 0, em: '', data: null };
  if (userProfile) {
    res.data = userProfile;
  } else {
    res.ec = 1;
    res.em = 'User not found.';
  }
  return asyncGet(res, 1000);
};

export const getFriends = (uid: string) => {
  const res: Resp<Friend[]> = { ec: 0, em: '', data: null };
  const userProfile = users.find((user) => user.uid === uid);
  if (!userProfile) {
    res.ec = 1;
    res.em = 'User not found';
  } else {
    const resData: Friend[] = [];
    userProfile.friends.forEach((fuid) => {
      const friend = users.find((user) => user.uid === fuid);
      if (friend) {
        resData.push({
          uid: friend.uid,
          username: friend.username,
        });
      }
    });
    res.data = resData;
  }
  return asyncGet(res, 1000);
};
