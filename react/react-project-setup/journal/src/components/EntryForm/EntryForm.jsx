export default function EntryForm() {
  return (
    <form>
      <label htmlFor="name">
        Motto <input type="text" name="name" />
      </label>
      <label htmlFor="name">
        Notes <textarea name="notes">Notes...</textarea>
      </label>
      <button type="submit">Create</button>
    </form>
  );
}
