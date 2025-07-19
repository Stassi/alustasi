import { reactConfig } from "@repo/eslint-config/react";
import { type ConfigArray } from "typescript-eslint";

const config: ConfigArray = reactConfig(true);

export default config
