import { FC } from 'react'
import { useTheme } from "../../../helpers/useTheme"

interface DotProps {
    roll?: boolean
    filled?: boolean
}

export const DiceDot: FC<DotProps> = ({ filled, roll }) => {
    const theme = useTheme()

    return (
        <div className="flex items-center justify-center min-w-[.6em]">
            <div
                className="w-[80%] h-[80%] rounded-full"
                style={{
                    boxShadow: filled && theme === 'dark'
                        ? "inset 0 0 .1em rgba(0, 0, 0, .8)"
                        : "none",
                    background: filled
                        ? roll
                            ? "transparent"
                            : theme === "dark" ? "#ccc" : "#000"
                        : "transparent",
                }}
            />
        </div>
    )
}

// export const DiceDot2 = styled(
//   ({ filled, roll, ...rest }: DotProps) => (
//     <div {...rest}>
//       <div />
//     </div>
//   ),
// )(({ filled, roll, theme: { palette: { type, grey, common: { black } } } }: Themed<DotProps>) => ({
//
//   minWidth: `${$wrapWidth / 3}em`,
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//
//   '& div': {
//     width: '80%',
//     height: '80%',
//     borderRadius: '50%',
//
//     transitionProperty: 'background',
//     transitionDuration: `${$delay / 1000}s`,
//
//     boxShadow: filled && type === 'dark'
//       ? 'inset 0 0 .1em rgba(0, 0, 0, .8)'
//       : 'none',
//
//     background: filled
//       ? roll
//         ? 'transparent'
//         : type === 'dark' ? grey['300'] : black
//       : 'transparent',
//   },
// }))
