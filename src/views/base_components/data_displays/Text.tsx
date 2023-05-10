import {DetailedHTMLProps, HTMLAttributes} from "react"

type TextProps = DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> & {
   size: "xs" | "sm" | "base" | "md" | "lg"
   theme: ""
}

function Text(props: TextProps)
{
   return <p>{props.children}</p>
}

export default Text

export {type TextProps}