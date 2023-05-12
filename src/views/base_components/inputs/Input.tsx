import {Text} from "../data_displays";

type InputProps = {
   size?: keyof typeof InputSize
   theme?: keyof typeof InputTheme
   label?: string
   wrapperStyles?:string
}

function Input(props: InputProps) {
   let size = InputSize[props.size ?? "base"]
   let theme = InputTheme[props.theme ?? "primary"]
   return (
      <label className={`${style.label} ${props.wrapperStyles}`}>
         <Text
            size={size.text.size}
            weight={size.text.weight}
            color={theme.text.color}
            styles={theme.text.styles}
         >
            {props.label}
         </Text>
         <input className={`${size.wrapper} 
         ${theme.wrapper}`}
         />
      </label>
   )
}

const style = {
   label: "relative flex flex-col justify-center"
}
const InputSize = {
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
      wrapper: "w-full py-[10px] mt-2",
      text: {
         size: "sm" as "sm",
         weight: "normal" as "normal"
      },
   },
   lg: {
      wrapper: "",
      text: {
         size: "lg" as "lg",
         weight: "bold" as "bold"
      },
   }
}
const InputTheme = {
   primary:{
      wrapper:"rounded border border-D",
      text: {
         color: "black" as "black",
         styles:""
      }
   },
   secondary:{
      wrapper:"",
      text: {
         color: "black" as "black",
         styles:"absolute left-3 empty:hidden self-center"
      }
   },
}
export default Input
export {type InputProps, InputSize, InputTheme}
