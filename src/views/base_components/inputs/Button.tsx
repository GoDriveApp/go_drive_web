import {ButtonHTMLAttributes, DetailedHTMLProps, ReactElement, ReactNode} from "react"
import {Text} from "../data_displays"
import {IconType} from "react-icons";

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
   size?: keyof typeof ButtonSize
   theme?: keyof typeof ButtonTheme
   label: string
   iconLeft?: ReactElement<IconType>
}

function Button(props: ButtonProps) {
   let size = ButtonSize[props.size ?? "sm"]
   let theme = ButtonTheme[props.theme ?? "primary"]

   return (
      <button className={`${style.wrapper} ${size.wrapper} ${theme.wrapper}`}>
         <span className={`${style.iconLeft}`}>{props.iconLeft}</span>
         <Text
            size={size.text.size}
            weight={size.text.weight}
            color={theme.text.color}
            styles={theme.text.styles}
         >
            {props.label}
         </Text>
      </button>
   )
}

const style = {
   wrapper: "relative flex justify-center",
   iconLeft: "absolute left-3 empty:hidden self-center"
}

const ButtonTheme = {
   link: {
      wrapper: "",
      text: {
         color: "blue" as "blue",
         styles:"underline underline-offset-8"
      }
   },
   primary: {
      wrapper: "rounded border border-D",
      text: {
         color:"black" as "black",
         styles:""
      }
   },
   secondary: {
      wrapper: "bg-C",
      text: {
         color:"white" as "white",
         styles:""
      }
   }
}

const ButtonSize = {
   xs: {
      wrapper: "",
      text: {
         size: "sm" as "sm",
         weight: "normal" as "normal"
      },
   },
   sm: {
      wrapper: "",
      text: {
         size: "sm" as "sm",
         weight: "normal" as "normal"
      },
   },
   base: {
      wrapper: "",
      text: {
         size: "sm" as "sm",
         weight: "normal" as "normal"
      },
   },
   md: {
      wrapper: "w-full px-[50px] py-[12px]",
      text: {
         size: "sm" as "sm",
         weight: "normal" as "normal"
      },
   },
   lg: {
      wrapper: "w-full px-[50px] py-[16px]",
      text: {
         size: "lg" as "lg",
         weight: "bold" as "bold"
      },
   }
}

export default Button

export {type ButtonProps, ButtonSize, ButtonTheme}