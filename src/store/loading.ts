import { builder } from "@helpers/localStorage"

export const {
    signal: loading,
    update: updateLoading,
} = builder<boolean>(null, false)
