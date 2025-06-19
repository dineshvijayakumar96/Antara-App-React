function TextareaInput({ label, name, error, cols, rows, value, onChange }) {
  return (
    <div>
        <div className="col-md-12">
            <textarea
                id={name}
                name={name}
                className="form-control home-enq-input"
                cols={cols}
                rows={rows}
                value={value}
                onChange={onChange}
                placeholder={label}
            />
            { error && <div style={ { display: "block" } } className="invalid-feedback">{ error }</div> }
        </div>
    </div>
  )
}

export default TextareaInput