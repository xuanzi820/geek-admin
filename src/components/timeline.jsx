export const Timeline = (props)=>{
  const timeline = [
    <div class="start">开始</div>,
    <div class="end">结束</div>
  ]
  if(props.reverse){
    timeline.reverse()
  }
  return <div>{timeline}</div>
}