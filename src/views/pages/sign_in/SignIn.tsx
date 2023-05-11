import SignInForm from "./SignInForm";
import {LineDeco} from "../../base_components";
import {AuthHeader, AuthOptions} from "../../components";

type SignInProps={

}

function SignIn (props:SignInProps){
   return(
      <main className={`${style.wrapper}`}>
         <div className={`${style.innerWrapper}`}>
            <AuthHeader/>
            <AuthOptions/>
            <LineDeco>or</LineDeco>
            <SignInForm/>
         </div>
      </main>
   )
}

// w-[400px]
const style = {
   wrapper: "flex justify-center items-center h-[100vh]",
   innerWrapper: "w-[400px] flex flex-col gap-[30px]",
}
export default SignIn
export {type SignInProps}