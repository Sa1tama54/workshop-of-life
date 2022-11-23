import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useAppSelector } from 'common/hooks/useAppSelector';
import { selectAdmin } from 'redux/admin/selector';

export const useAuthRedirect = () => {
  const { adminData } = useAppSelector(selectAdmin);
  const { query, push } = useRouter();
  const redirect = query.redirect ? String(query.redirect) : '/admin';
  useEffect(() => {
    if (adminData) push(redirect);
  }, [push, redirect, adminData]);
};
