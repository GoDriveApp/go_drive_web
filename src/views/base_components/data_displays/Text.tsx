import {DetailedHTMLProps, HTMLAttributes} from "react"

type TextProps = DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> & {
   size?: keyof typeof TextSize
   weight?: keyof typeof TextWeight
   color?:keyof typeof TextColor
   class?:string
}

function Text(props: TextProps) {
   return <p
      {...props}
      className={`${style.text} ${TextSize[props.size ?? "base"]} ${TextWeight[props.weight ?? "normal"]} ${props.class}`}
   >
      {props.children}
   </p>
}

const style = {
   text: "" // TODO
}

// TODO
const TextSize = {
   "xs": "text-xs",
   "sm": "text-sm",
   "base": "text-base",
   "md": "text-md",
   "lg": "text-lg",
   "xl": "text-xl",
   "2xl":"text-2xl"
}


const TextWeight = {
   "light": "font-light",
   "normal": "font-normal",
   "medium": "font-medium",
   "bold": "font-bold"
}

const TextColor = {
   "blue": "text-C",
   "white": "text-A",
   "gray": "text-D",
}

export default Text

export {type TextProps, TextSize, TextWeight,TextColor}