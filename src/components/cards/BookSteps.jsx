import { useEffect, useState } from "react";


function BookSteps({ isBgSuccess, Icon, IconAlt, StepNo, Content }) {

    const [ bgClass, setBgClass ] = useState("");

    useEffect(() => {
        if (isBgSuccess) {
            setBgClass("bg-success")
        } else {
            setBgClass("")
        }
    }, [isBgSuccess])

  return (
    <div>
        <div className="book-step bg-white">
            <span className={ `book-step-no ${ bgClass } mb-3` }>{ StepNo }</span>
            <div className="book-step-sec">
                <img className="steps-icon mb-3" src={ Icon } alt={ IconAlt }/>
                <p className="book-step-p mb-0">{ Content }</p>
            </div>
        </div>
    </div>
  )
}

export default BookSteps;