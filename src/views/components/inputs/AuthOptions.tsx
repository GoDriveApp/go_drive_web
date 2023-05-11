import React from "react";
import {Button} from "../../base_components";
import {DiChrome, DiApple} from "react-icons/di";

type AuthOptionsProps = {
   wrapperStyle?: string
}

function AuthOptions(props: AuthOptionsProps)
{
   return (
      <section className={`${style.wrapper} ${props.wrapperStyle}`}>
         <Button
            iconLeft={<DiChrome size={30}/>}
            size={style.optionBtn.size} label={"Continue with Google"}/>
         <Button
            iconLeft={<DiApple size={30}/>}
            size={style.optionBtn.size} label={"Continue with Apple"}/>
      </section>
   )
}

const style = {
   wrapper: "flex flex-col gap-5",
   optionBtn: {
      size: "md" as "md"
   },
}

export default AuthOptions