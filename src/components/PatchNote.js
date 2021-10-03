import * as React from "react";
import { TextField } from "@mui/material";
export default function PatchNote(props) {
  const patchNoteSx = {
    mt: 4,
    ml: 1,
    mr: 1,
    // fullWidth,
  };

  const patchNoteContent = "패치노트 입니다";
  return (
    <div>
      {/* <div>룬 사전 패치 노트</div> */}
      <div>
        <TextField
          id="outlined-read-only-input"
          label="룬 사전 패치 노트"
          InputProps={{
            readOnly: true,
          }}
          sx={patchNoteSx}
          defaultValue={patchNoteContent}
          fullWidth={true}
        />
      </div>
    </div>
  );
}
