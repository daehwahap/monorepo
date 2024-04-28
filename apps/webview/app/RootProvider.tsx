"use client";

import { PropsWithChildren } from "react";
import { BridgeProvider } from "../WebPostMessageBridge";

export const RootProvider = (props: PropsWithChildren) => {
  return <BridgeProvider>{props.children}</BridgeProvider>;
};
