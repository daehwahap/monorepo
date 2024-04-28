import { linkBridge } from "@webview-bridge/web";
import type { AppBridge } from "@repo/app/src/postMessageBridge";

export const webBridge = linkBridge<AppBridge>({
  onReady: async (method) => {
    console.log("bridge is ready");
  },
});
