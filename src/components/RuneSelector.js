import * as React from "react";
import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
  Radio,
  RadioGroup,
  FormLabel,
  FormControlLabel,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function RuneSelector(props) {
  const [rune, setRune] = React.useState(props.rune ? props.rune : "El");
  const [selected, setSelected] = React.useState("number");

  const handleChange = (event) => {
    setRune(event.target.value);
  };

  const handleSelectedChange = (event) => {
    setSelected(event.target.value);
  };

  const runeList = [
    "El",
    "Eld",
    "Tir",
    "Nef",
    "Eth",
    "Ith",
    "Tal",
    "Ral",
    "Ort",
    "Thul",
    "Amn",
    "Sol",
    "Shael",
    "Dol",
    "Hel",
    "Io",
    "Lum",
    "Ko",
    "Fal",
    "Lem",
    "Pul",
    "Um",
    "Mal",
    "Ist",
    "Gul",
    "Vex",
    "Ohm",
    "Lo",
    "Sur",
    "Ber",
    "Jah",
    "Cham",
  ];

  // const runeListValues = () => {
  //     const result =[];
  //     for(let i=0; i<runeList.length; i++){
  //         result.push(<MenuItem value={runeList[i]}>${runeList[i]}</MenuItem>);
  //     }
  // }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl
        sx={{
          minWidth: "90%",
        }}
      >
        <InputLabel id="rune-selector-label">Rune</InputLabel>
        <Select
          labelId="rune-selector-label"
          id="rune-selector"
          value={rune}
          label="Rune"
          onChange={handleChange}
          sx={{
            height: "90%",
          }}
        >
          {/* {runeListValues()} */}
          {/* TODO: 리스트를 번호순 또는 알파벳순으로 정렬할수있도록 */}
          {runeList.map((rune, index) => (
            <MenuItem value={runeList[index]}>{runeList[index]}</MenuItem>
          ))}
          {/* <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
      <Button
        component={Link}
        to={`/runes/${rune}`}
        variant="contained"
        sx={{
          minWidth: "4%",
          ml: "10px",
          height: 55,
        }}
      >
        Go
      </Button>
      <FormControl component="fieldset">
        <FormLabel component="legend">Sort type</FormLabel>
        <RadioGroup
          row
          aria-label="sort-type"
          name="controlled-radio-buttons-group"
          value={selected}
          onChange={handleSelectedChange}
        >
          <FormControlLabel value="number" control={<Radio />} label="number" />
          <FormControlLabel
            value="alphabet"
            control={<Radio />}
            label="alphabet"
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}
