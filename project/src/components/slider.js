import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import '../App.css';


const useStyles = makeStyles((theme) => ({
  root: {
    width: 900 + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(1),
  },
}));

const useStyles_shorter = makeStyles((theme) => ({
  root: {
    width: 380 + theme.spacing(3) * 2,
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
    <Tooltip open={open} enterTouchDelay={0} placement="top" title= {<span style={{fontSize:14}}>{content}</span>}>
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
    value: 0,
    label: "Exposure",
    text: "Exposure to COVID-19"
  },
  {
    value: 15,
    label:
    <Typography component={"div"} >
      <pre style={{ fontFamily: 'inherit', textAlign: 'center'}}>
        5-6 Days<br />Symptoms Onset
      </pre>
    </Typography>,
    text: "On average it takes 5–6 days from when someone is infected with the virus for symptoms to show. Most common symptoms include fever."
  },
  {
    value: 25,
    label: "10 Days",
    text: "In severe cases, symptoms could start to worsen. Patients may have difficulty breathing, especially if they are older or have a preexisting health condition."
  },
  {
    value: 35,
    label: "14 Days",
    text: "By this point, patients with severe cases will have most likely developed shortness of breath, pneumonia, or acute respiratory distress syndrome, an illness that may require intubation. ARDS is often fatal."
  },
  {
    value: 47,
    label: "16-17 Days",
    text: "If patients have worsening symptoms, this is the time in the disease's progression when they're likely to be admitted to the ICU. These patients probably have more abdominal pain and appetite loss than patients with milder cases."
  },
  {
    value: 65,
    label: "19-20 Days",
    text: "For those who will survive the virus, breathing difficulties are generally ending on these days."
  },
  {
    value: 100,
    label:
    <Typography component={"div"} >
      <pre style={{fontFamily: 'inherit', textAlign: 'center'}}>
        6 Weeks<br />Recovery
      </pre>
    </Typography>,
    text: "On average, people either recovered from the virus and were discharged from the hospital or passed away."
  }
];

function mild_ValueLabelComponent(props) {
  const { children, open, value } = props;
  const index = mild_marks.map(function(x) {return x.value; }).indexOf(value);
  const content = mild_marks[index].text
  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title= {<span style={{fontSize:14}}>{content}</span>}>
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
    value: 0,
    label: "Exposure",
    text: "Exposure to COVID-19"
  },
  {
    value: 40,
    label:
    <Typography component={"div"} >
      <pre style={{ fontFamily: 'inherit', textAlign: 'center'}}>
        5-6 Days<br />Symptoms Onset
      </pre>
    </Typography>,
    text: "On average it takes 5–6 days from when someone is infected with the virus for symptoms to show. Most common symptoms include fever."
  },
  {
    value: 98,
    label:
    <Typography component={"div"} >
      <pre style={{fontFamily: 'inherit', textAlign: 'center'}}>
        2 Weeks<br />Recovery
      </pre>
    </Typography>,
    text: "People who are suffering less severe symptoms will likely see those symptoms begin to get better."
  }
];

const PrettoSlider = withStyles({
  root: {
    color: '#FFFFFF',
    opacity: 1,
    height: 6.5,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#ffffff',
    border: '3px solid #333333',
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
    opacity: 0
  },
  rail: {
    height: 14,
    borderRadius: 7,
    backgroundImage: "linear-gradient(to right, #63AD48, #FF9C00, #FF0000, #FF0000, #FF9C00, #FF9C00, #63AD48)",
    opacity: 1
  },
  markLabel: {
    textAlign: 'center',
  }
})(Slider);

const PrettoSliderMild = withStyles({
  root: {
    color: '#FFFFFF',
    opacity: 1,
    height: 6.5,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#ffffff',
    border: '3px solid #333333',
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
    opacity: 0
  },
  rail: {
    height: 14,
    borderRadius: 7,
    backgroundImage: "linear-gradient(to right, #63AD48, #FF9C00, #63AD48)",
    opacity: 1
  },
})(Slider);



export default function CustomizedSlider() {
  const classes = useStyles();
  const shorter_classes = useStyles_shorter();

  return (
    <div>
      <h2 className="title">Infection Timeline (1)</h2>
      <div id="slider">
        <div className={shorter_classes.root}>
          <div className="mild">
            <Typography variant="subtitle1" id="mild_subtitle">Mild</Typography>
            <PrettoSliderMild valueLabelDisplay="auto" ValueLabelComponent={mild_ValueLabelComponent} aria-label="custom thumb label" defaultValue={40} marks={mild_marks} valueLabelDisplay="auto" step={null}/>
          </div>
          <div className={shorter_classes.margin} />
        </div>
        <div className={classes.root}>
          <div className="severe">
            <div className={classes.margin} />
            <Typography variant="subtitle1" id="severe_subtitle">Severe</Typography>
            <PrettoSlider valueLabelDisplay="auto" ValueLabelComponent={ValueLabelComponent} aria-label="custom thumb label" defaultValue={15} marks={marks} valueLabelDisplay="auto" step={null}/>
          </div>
        </div>
      </div>
    </div>
  );
}