import React from 'react';
import classes from './Input.module.css';

export default function Input(props) {
  return (
    <div className={classes.input} >
        <label htmlFor ={props.input.id} className={classes.form}>{props.lable}</label>
        <input {...props.input} />
    </div>
  );
};
