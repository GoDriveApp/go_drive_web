import {Button, Text, Input, LineDeco} from "../../base_components";
import {DetailedHTMLProps, FormHTMLAttributes} from "react";

type SignUpFormProps = DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> &
   {}

function SignUpForm(props: SignUpFormProps) {
   return (
      <form className={`${style.wrapper}`}>
         <header className={`${style.header.wrapper}`}>
            <Text size={style.header.text.size}>Create an account</Text>
            <Button size={style.header.button.size} theme={style.header.button.theme} label={"or login"}/>
         </header>
         <Button size={style.googleBtn.size} label={"Continue with google"}/>
         <LineDeco>or</LineDeco>
         <Input size={style.inputEmail.size} label={"email"} />
         <Button size={style.submitBtn.size} theme={style.submitBtn.theme} label={"Continue"}/>
      </form>
   )
}

const style: any = {
   wrapper: "w-[400px] flex flex-col gap-[30px]",
   header: {
      wrapper: "flex flex-row justify-between",
      text: {
         size: "2xl"
      },
      button: {
         size: "xs",
         theme: "link"
      }
   },
   googleBtn: {
      size: "md"
   },
   inputEmail:{
      size:"md"
   },
   submitBtn:{
      size:"lg",
      theme:"secondary"
   }
}


export default SignUpForm