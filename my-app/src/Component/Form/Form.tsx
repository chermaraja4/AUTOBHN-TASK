import { useState } from "react";
import { useDispatch } from "react-redux";
import "./Style.css";
import { EditUser, AddList } from "../../Reducers/Users/user.action";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

interface IForm {
  singleDetails?: any;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function Form(props: IForm) {
  const { onClick } = props;
  const { singleDetails } = props;
  const { id, title } = singleDetails ?? "";

  const [UpdateTitle, setUpdateTitle] = useState(title);
  const Dispatch = useDispatch();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (UpdateTitle?.length === 0 || UpdateTitle === null) {
      alert("Invalid title");
      return;
    } else if (id) {
      Dispatch(EditUser({ id: id, title: UpdateTitle }));
    } else {
      Dispatch(AddList({ title: UpdateTitle }));
    }

    // props.onclick();
  };

  return (
    <div className="box">
      <TextField
        id="outlined-basic"
        label="Title"
        variant="outlined"
        value={UpdateTitle || ""}
        onChange={(e) => {
          const { value } = e.target;
          setUpdateTitle(value);
        }}
      />
      <Box sx={{ m: "2rem" }} />

      <div className="footer">
        <Stack spacing={2} direction="row">
          <Button variant="outlined" onClick={onClick}>
            Cancel
          </Button>
          <Button variant="outlined" onClick={handleClick}>
            Save
          </Button>
        </Stack>
      </div>
    </div>
  );
}
