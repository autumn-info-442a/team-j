import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 600 + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(3),
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

// const iOSBoxShadow =
//   '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

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

// const IOSSlider = withStyles({
//   root: {
//     color: '#3880ff',
//     height: 2,
//     padding: '15px 0',
//   },
//   thumb: {
//     height: 28,
//     width: 28,
//     backgroundColor: '#fff',
//     boxShadow: iOSBoxShadow,
//     marginTop: -14,
//     marginLeft: -14,
//     '&:focus, &:hover, &$active': {
//       boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
//       // Reset on touch devices, it doesn't add specificity
//       '@media (hover: none)': {
//         boxShadow: iOSBoxShadow,
//       },
//     },
//   },
//   active: {},
//   valueLabel: {
//     left: 'calc(-50% + 12px)',
//     top: -22,
//     '& *': {
//       background: 'transparent',
//       color: '#000',
//     },
//   },
//   track: {
//     height: 2,
//   },
//   rail: {
//     height: 2,
//     opacity: 0.5,
//     backgroundColor: '#bfbfbf',
//   },
//   mark: {
//     backgroundColor: '#bfbfbf',
//     height: 8,
//     width: 1,
//     marginTop: -3,
//   },
//   markActive: {
//     opacity: 1,
//     backgroundColor: 'currentColor',
//   },
// })(Slider);

const PrettoSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#52af77',
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
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);



export default function CustomizedSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Typography gutterBottom>iOS</Typography>
      <IOSSlider aria-label="ios slider" defaultValue={60} marks={marks} valueLabelDisplay="auto"/>
      <div className={classes.margin} /> */}
      <Typography gutterBottom>Severe</Typography>
      <PrettoSlider valueLabelDisplay="auto" ValueLabelComponent={ValueLabelComponent} aria-label="custom thumb label" defaultValue={15} marks={marks} valueLabelDisplay="auto" step={null}/>
      {/* <div className={classes.margin} />
      <Typography gutterBottom>Tooltip value label</Typography>
      <Slider
        ValueLabelComponent={ValueLabelComponent}
        aria-label="custom thumb label"
        defaultValue={20}
      />
      <div className={classes.margin} /> */}
    </div>
  );
}