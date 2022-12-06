// NextUI Component
import { Loading, Progress } from "@nextui-org/react";

// Styles
import s from "./Loader.module.css";

export function Loader() {
  return (
    <div className={s.loader}>
      <Loading
        size="xl"
        loadingCss={{
          $$loadingSize: "80px",
          $$loadingBorder: "8px",
          $$loadingColor: "#2db97c",
        }}
        color="success"
      />
    </div>
  );
}

export function MiniLoader() {
  return (
    <div className={s.miniLoader}>
      <Progress indeterminated size="sm" value={50} />
    </div>
  );
}
