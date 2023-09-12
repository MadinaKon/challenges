import "./EntryForm.css";

export default function EntryForm() {
  return (
    <form>
      <title>New Entry</title>
      <label htmlFor="name">Motto</label>
      <input type="text" name="name" />
      <hr />
      <label htmlFor="name">
        Notes <textarea name="notes">Notes...</textarea>
      </label>
      <button type="submit" className="form-create-button">
        Create
      </button>
    </form>
  );
}
