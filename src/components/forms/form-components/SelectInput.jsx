function SelectInput({ label, name, value, error, onChange, required = false, options }) {
  return (
    <div>
        <div className="col-md-12">
            <select
                id={name}
                name={name}
                className="form-select home-enq-input"
                value={value}
                onChange={onChange}
                required={required}
            >
            <option value="">Select {label}</option>
            {options.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
            ))}
            </select>
            { error && <p style={ { display: "block" } } className="invalid-feedback">{ error }</p> }
        </div>
    </div>
  )
}

export default SelectInput