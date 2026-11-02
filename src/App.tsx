import { Global, css } from "@emotion/react";
import Tasks from "./components/Tasks";
import { Eyebrow, Header, MainTitle, Page, Subtitle } from "./styles";

export default function App() {
  return (
    <>
      <Global styles={css`
        * { box-sizing: border-box; }
        body {
          margin: 0;
          min-width: 320px;
          min-height: 100vh;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          color: #202435;
          background: #f6f7fb;
          font-synthesis: none;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        button, input, textarea { font: inherit; }
        button:focus-visible { outline: 3px solid #d0cbff; outline-offset: 2px; }
        #root { min-height: 100vh; }
      `} />
      <Page>
        <Header>
          <Eyebrow>ORGANIZACIÓN PERSONAL</Eyebrow>
          <MainTitle>Gestor de tareas</MainTitle>
          <Subtitle>Organiza el trabajo, asigna responsables y encuentra cada tarea rápidamente.</Subtitle>
        </Header>
        <Tasks />
      </Page>
    </>
  );
}
