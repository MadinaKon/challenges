import "./EntryForm.css";

export default function EntryForm() {
  return (
    <>
      <form className="form">
        <div className="form__group">
          <label className="form__label" htmlFor="motto">
            Motto:
          </label>
          <input className="form__input" type="text" id="motto" name="motto" />
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="notes">
            Notes:
          </label>
          <textarea
            className="form__input form__input--textarea"
            id="notes"
            name="notes"
          ></textarea>
        </div>
        <div className="form__group">
          <button className="form__button" type="submit">
            Create
          </button>
        </div>
      </form>
    </>
  );
}
