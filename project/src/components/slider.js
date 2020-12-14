import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import '../App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 925 + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(2.3),
  },
}));

const useStyles_shorter = makeStyles((theme) => ({
  root: {
    width: 315 + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(2),
  },
}));

function ValueLabelComponent(props) {
  const { children, open, value } = props;
  const index = marks.map(function(x) {return x.value; }).indexOf(value);
  const content = marks[index].text
  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title= {content}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};


const marks = [
  {
    value: 15,
    label: "5-6 Days",
    text: "On average it takes 5–6 days from when someone is infected with the virus for symptoms to show. Most common symptoms include fever."
  },
  {
    value: 30,
    label: "10 Days",
    text: "In severe cases, symptoms could start to worsen. Patients may have difficulty breathing, especially if they are older or have a preexisting health condition."
  },
  {
    value: 45,
    label: "14 Days",
    text: "By this point, patients with severe cases will have most likely developed shortness of breath, pneumonia, or acute respiratory distress syndrome, an illness that may require intubation. ARDS is often fatal."
  },
  {
    value: 57,
    label: "16-17 Days",
    text: "If patients have worsening symptoms, this is the time in the disease's progression when they're likely to be admitted to the ICU. These patients probably have more abdominal pain and appetite loss than patients with milder cases."
  },
  {
    value: 75,
    label: "19-20 Days",
    text: "For those who will survive the virus, breathing difficulties are generally ending on these days."
  },
  {
    value: 90,
    label: "23 Days",
    text: "On average, people either recovered from the virus and were discharged from the hospital or passed away."
  }
];

function mild_ValueLabelComponent(props) {
  const { children, open, value } = props;
  const index = mild_marks.map(function(x) {return x.value; }).indexOf(value);
  const content = mild_marks[index].text
  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title= {content}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};

const mild_marks = [
  {
    value: 50,
    label: "5-6 Days",
    text: "On average it takes 5–6 days from when someone is infected with the virus for symptoms to show. Most common symptoms include fever."
  },
  {
    value: 95,
    label: "12 Days",
    text: "People who are suffering less severe symptoms will likely see those symptoms begin to get better."
  }
];

const PrettoSlider = withStyles({
  root: {
    color: '#C9C9C9',
    opacity: 0.7,
    height: 6.5,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#C9C9C9',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 14,
    borderRadius: 7,
  },
  rail: {
    height: 14,
    borderRadius: 7,
  },
})(Slider);



export default function CustomizedSlider() {
  const classes = useStyles();
  const shorter_classes = useStyles_shorter();

  return (
    <div className="slider_background">
      <div className={shorter_classes.root}>
        <p className="slider_title">Infection Timeline</p>
        <Typography gutterBottom>Mild</Typography>
        <PrettoSlider valueLabelDisplay="auto" ValueLabelComponent={mild_ValueLabelComponent} aria-label="custom thumb label" defaultValue={50} marks={mild_marks} valueLabelDisplay="auto" step={null}/>
        <div className={shorter_classes.margin} />
        {/* <Typography gutterBottom>Severe</Typography>
        <PrettoSlider valueLabelDisplay="auto" ValueLabelComponent={ValueLabelComponent} aria-label="custom thumb label" defaultValue={15} marks={marks} valueLabelDisplay="auto" step={null}/> */}
      </div>
      <div className={classes.root}>
        {/* <p className="slider_title">Infection Timeline</p>
        <Typography gutterBottom>Mild</Typography>
        <PrettoSlider valueLabelDisplay="auto" ValueLabelComponent={mild_ValueLabelComponent} aria-label="custom thumb label" defaultValue={50} marks={mild_marks} valueLabelDisplay="auto" step={null}/> */}
        <div className={classes.margin} />
        <Typography gutterBottom>Severe</Typography>
        <PrettoSlider valueLabelDisplay="auto" ValueLabelComponent={ValueLabelComponent} aria-label="custom thumb label" defaultValue={15} marks={marks} valueLabelDisplay="auto" step={null}/>
      </div>
    </div>
  );
}