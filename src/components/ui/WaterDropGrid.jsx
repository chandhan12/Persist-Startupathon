import anime from "animejs";



 const WaterDropGrid=()=>{
    return (
        <div className="relative grid h-screen place-content-center  px-8 ">
             <div className="absolute top-0 left-0 w-full h-44 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
            <DotGrid />
            <div className="absolute bottom-0 left-0 w-full h-44 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
        </div>
    )
}

const GRID_WIDTH=63;
const GRID_HEIGHT=25;

export const DotGrid= ()=>{
    const dots=[];
    let index=0;

    const handleDotClick=(e)=>{
        anime({
            targets:".dot-point",
            scale:[
                { value:1.35, easing:"easeOutSine", duration:250
                },
                {
                    value:1, easing :"easeInOutQuad",duration:500
                }
            ],
            translateY: [
                { value: -20 ,easing:"easeOutSine", duration:250
                },
                {
                    value:0 ,easing :"easeInOutQuad",duration:500
                }
            ],
            opacity:[
                { value: 1 ,easing:"easeOutSine", duration:250
                },
                {
                    value:0.5 ,easing :"easeInOutQuad",duration:500
                }
            ],
            delay:anime.stagger(100,{
                grid:[GRID_WIDTH,GRID_HEIGHT],
                from:e.target.dataset.index,
            })
        });
    }

    for (let i=0;i<GRID_WIDTH; i++){
        for (let j=0; j<GRID_HEIGHT; j++){
            dots.push(
                <div onClick={handleDotClick} className="group cursor-crosshair rounded-full p-2 transition-colors hover:bg-slate-600"
                    data-index={index}
                    key={`${i}-${j}`}
                >
                    <div 
                        className="dot-point h-2 w-2 rounded-full bg-gradient-to-b from-slate-400 opacity-50 group-hover:from-gray-900 group-hover:to-white"
                        data-index={index}
                    />
                    
                </div>
            )
            index++
        }
    }

    return (
        <div 
            style={{gridTemplateColumns:`repeat(${GRID_WIDTH},1fr)`}}
            className="grid w-fit"
        >
            {dots}
        </div>
    )
}

export default WaterDropGrid