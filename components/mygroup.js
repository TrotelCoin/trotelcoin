import React from 'react';
import MyButton from "./button/MyButton.js";
import MyText from "./button/MyText.js";

function MyGroup(props) {
  return (
    <div>
        <MyText text={props.text} link={props.link}></MyText>
        <MyButton fcn={props.fcn} buttonLabel={props.buttonLabel}></MyButton>
    </div>>
  );
}

export default MyGroup;
