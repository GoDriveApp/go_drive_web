import SIgnUpForm from "./SIgnUpForm";

function SignUp(){
   return(
      <main className={`${style.signup}`}>
         <SIgnUpForm/>
      </main>
   )
}

const style = {
   signup: "flex justify-center items-center h-[100vh]",
}
export default SignUp