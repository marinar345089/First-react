import React, { useState } from "react";

export default function Modal() {
  const [open, setOpen] = useState(false);
  function openModal() {
    setOpen(true);
  }
  function closeModal() {
    setOpen(false);
  }
  return (
    <>
      <button onClick={openModal}>Open modal</button>
      {open && (
        <div className="modal">
          <div className="modal__container">
            <h1>Modal</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo eos
              iste, sit alias eveniet accusantium architecto corrupti. Assumenda
              provident repudiandae voluptatibus repellendus, veniam beatae modi
              tempore maxime inventore esse velit?
            </p>
            <button onClick={closeModal}>Close modal</button>
          </div>
        </div>
      )}
    </>
  );
}
