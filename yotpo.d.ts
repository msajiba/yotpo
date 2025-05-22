// types/yotpo.d.ts
interface Window {
  yotpo: {
    initWidgets: () => void;
    refreshWidgets: () => void;
  };
}
