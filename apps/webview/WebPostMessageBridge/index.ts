import { linkBridge } from "@webview-bridge/web";
import { createLinkBridgeProvider } from "@webview-bridge/react";
import type { AppBridge } from "@repo/app/src/AppPostMessageBridge";

export const webBridge: any = linkBridge<AppBridge>({
  onReady: async (method) => {
    console.log("bridge is ready");
  },
});

export const {
  BridgeProvider,
  useBridgeStore,
  useBridgeStatus,
  useBridgeLoose,
} = createLinkBridgeProvider<AppBridge>({
  throwOnError: true,
  onReady: () => {
    console.log("bridge is ready");
  },
});
