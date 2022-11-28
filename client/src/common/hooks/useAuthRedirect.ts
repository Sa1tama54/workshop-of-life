import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useAppSelector } from 'common/hooks/useAppSelector';
import { userSelector } from 'redux/user/selector';

export const useAuthRedirect = () => {
  const { user } = useAppSelector(userSelector);
  const { query, push } = useRouter();
  const redirect = query.redirect ? String(query.redirect) : '/admin';
  useEffect(() => {
    if (user) push(redirect);
  }, [push, redirect, user]);
};
