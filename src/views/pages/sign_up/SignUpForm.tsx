import {Button, Input} from "../../base_components";

type SignInFormProps =
   {}

function SignUpForm(props: SignInFormProps) {
   return (
      <form className={`${style.wrapper}`}>

         <Input size={style.inputEmail.size} label={"email"}/>

         <Button size={style.submitBtn.size} theme={style.submitBtn.theme} label={"Continue"}/>

      </form>
   )
}

const style = {
   wrapper: "flex flex-col gap-[30px]",

   inputEmail: {
      size: "md" as "md"
   },

   submitBtn: {
      size: "lg" as "lg",
      theme: "secondary" as "secondary"
   }
}
export default SignUpForm