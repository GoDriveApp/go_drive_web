type LinkButtonProps = {
   label: string

}

function LinkButton(props: LinkButtonProps)
{
   return <button className={style}>{props.label}</button>
}

const style = ""

export default LinkButton