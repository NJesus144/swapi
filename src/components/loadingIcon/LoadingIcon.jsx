import { ImageLoading, Img } from "./styles.js";

export default function LoadingIcon({ setStatus, children }) {
  return (
    <ImageLoading>
      {JSON.stringify(setStatus) === "[]" ? (
        <>
          <Img src="/doubleRing.svg" />
        </>
      ) : (
        <>{children}</>
      )}
    </ImageLoading>
  );
}
