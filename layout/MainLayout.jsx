import { Aside, Nav } from "../commons";

export const MainLayout = ({ children }) => {
  return (
    <>
      <Nav />
      <Aside />
      <div className="layout">
        <main>
          <div>{children}</div>
        </main>
      </div>
    </>
  );
};
