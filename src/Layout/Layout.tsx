import * as React from 'react';

export interface IAppProps {
    children: React.ReactNode
}
const Layout = (props: IAppProps) => {
  return (
      <>
        <header>
        </header>
        <main>
            {props.children}
        </main>
        <footer>
            2022 &copy; Navara
        </footer>
      </>
  );
}

export default Layout;