import { ButtonWithIcon } from "../ButtonWithIcon"

interface RandomNameButtonProps {
    onClick: VoidFunction
}

export function RandomNameButton({ onClick }: RandomNameButtonProps) {
    return (
        <ButtonWithIcon
            icon="refresh"
            className="!bg-transparent !shadow-none !py-5 absolute top-1/2 -translate-y-1/2 right-0"
            onClick={onClick}
        />
    )
}
