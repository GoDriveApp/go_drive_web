import {LinkButton, Text} from "../../base_components";

function AuthHeader()
{
   return (
      <header className={`${style.wrapper}`}>
         <Text size={style.text.size}>Login</Text>
         <LinkButton label={"new"}/>
         {/*<Button size={style.button.size} theme={style.button.theme} label={"or create an account"}/>*/}
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