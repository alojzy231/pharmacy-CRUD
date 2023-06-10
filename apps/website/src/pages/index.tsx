import { Fragment, ReactNode } from 'react';

import { LoginView } from '@features/Login/view/LoginView';

function Login(): JSX.Element {
  return <LoginView />;
}

// We need to wrap the page in a Fragment to prevent wrapping this page in <AppShell /> (which is set by default in _app.tsx)
Login.getLayout = function getLayout(page: ReactNode): ReactNode {
  return <Fragment>{page}</Fragment>;
};

export default Login;
