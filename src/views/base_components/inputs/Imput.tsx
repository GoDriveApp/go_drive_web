type InputProps = {
   size?: keyof typeof InputSize
   theme?: keyof typeof InputTheme
   label:string
}

function Input(props: InputProps) {
   return (
      <label className={`${style.label}`}>
         {props.label}
         <input className={`${InputSize[props.size ?? "base"]} ${InputTheme[props.theme ?? "primary"]}` }/>
      </label>
   )
}

const style = {
   label: "" // TODO
}
const InputSize = {
   "xs": "",
   "sm": "",
   "base": "",
   "md": " w-full py-[10px] mt-2",
   "lg": ""
}
const InputTheme = {
   "primary": "rounded border border-D",
   "secondary": "",
}
export default Input
export {type InputProps, InputSize,InputTheme}
