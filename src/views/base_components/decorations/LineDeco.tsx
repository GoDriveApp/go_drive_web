import {Text} from "../data_displays";
import {DetailedHTMLProps, HTMLAttributes} from "react";

type LineDecoProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
   children: string
}

function LineDeco(props: LineDecoProps)
{
   return (
      <div className={`${style.lineLabel}`}>
         <div className={`${style.lineLabel_left}`}></div>
         <Text>{props.children}</Text>
         <div className={`${style.lineLabel_right}`}></div>
      </div>
   )
}

const style = {
   lineLabel: "flex items-center justify-center gap-5",
   lineLabel_left: "flex-1 border-t border-E",
   lineLabel_text: " px-3 text-gray-500 font-normal",
   lineLabel_right: "flex-1 border-t border-E"
}

export default LineDeco