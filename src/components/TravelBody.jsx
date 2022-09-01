import React, { useState } from "react";
import TravelHeader from "./TravelHeader";

export default function TravelBody({ Travels, removeTravel, updateTravel }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTravel(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TravelHeader edit={edit} onSubmit={submitUpdate} />;
  } else {
    return Travels.map((Travel, index) => (
      <div id="tasks" key={index}>
        <div className="task">
          <div className="content">{Travel.text}</div>
          <div className="actions">
            <button
              className="edit"
              onClick={() => setEdit({ id: Travel.id, value: Travel.text })}
            >
              Edit
            </button>
            <button className="delete" onClick={() => removeTravel(Travel.id)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    ));
  }
}
