import {Text,Button} from "../../base_components";
type AuthHeaderProps={
   textLabel:string
   btnLabel:string
}
function AuthHeader(props:AuthHeaderProps)
{
   return (
      <header className={`${style.wrapper}`}>
         <Text size={style.text.size}>{props.textLabel}</Text>
         <Button size={style.button.size} theme={style.button.theme} label={props.btnLabel}/>
      </header>
   )
}

const style = {
   wrapper: "flex flex-row justify-between items-end",
   text: {
      size: "2xl" as "2xl"
   },
   button: {
      size: "xs" as "xs",
      theme: "link" as "link"
   }
}

export default AuthHeader