export default function RequestForm() {
  return (
    <form>
      <select name="issue" className="border">
        <option value="">Please Choose an Option</option>
        <option value="connectivity">Connectivity</option>
        <option value="forgotten-password">Forgotten Password</option>
        <option value="printer">Printer</option>
        <option value="virus">Virus</option>
      </select>
      <div>
        {" "}
        <label>
          Provide more details:
          <textarea cols={33} rows={5} className="border border-black" />
        </label>
      </div>
      <div>
        <label></label>
        <input type="file" />
      </div>

      <button className="px-3 py-2 rounded-full bg-green-500" type="submit">
        Submit Request
      </button>
    </form>
  );
}
