import './modal.css'

function Modal({text, cancelModal, confirmModal }){
return (<div>
  <div className="modal">
    <p className="modal__title">{text}</p>
    <div className="modal__buttons">
      <button onClick={cancelModal} className="btn btn__cancel">Cancel</button>
      <button onClick={confirmModal} className="btn">Confirm</button>
    </div>
  </div>
  <div className="backdrop" />
</div>)
}

export default Modal