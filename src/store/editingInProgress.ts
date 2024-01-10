import { builder } from "@helpers/localStorage"

export const {
    signal: editingInProgress,
    update: updateEditingInProgress,
} = builder<boolean>(null, false)
