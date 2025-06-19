function TextInput ({ label, name, value, error, onChange, required = false, type = "text", maxlength }) {
  return (
    <div>
        <div className="col-md-12">
            <input
                id={name}
                name={name}
                type={type}
                className="form-control home-enq-input"
                value={value}
                onChange={onChange}
                required={required}
                placeholder={ label }
                maxLength={ maxlength }
            />
            { error && <div style={ { display: "block" } } className="invalid-feedback">{ error }</div> }
    </div>
    </div>
  )
}

export default TextInput 