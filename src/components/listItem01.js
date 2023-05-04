export const ListItem01 = (props) => {
    return (
        <div>
            <ul className="list-group list-group-horizontal rounded-0 bg-transparent">
                <li
                    className="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
                    <div className="form-check">
                        <input className="form-check-input me-0" type="checkbox" value="" id="flexCheckChecked1"
                            aria-label="..." />
                    </div>
                </li>
                <li
                    className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                    <p className="lead fw-normal mb-0">{props.content}</p>
                </li>
                <li className="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
                    <div className="d-flex flex-row justify-content-end mb-1">
                        <input onChange={props.editInputOnchangeHandler} id="input edit" style={{ display: props.editInputDisplay }} />
                        <button data-mdb-toggle="tooltip" title="Edit todo" onClick={props.editButtonClick} id="edit button" className="d-flex mt-1 flex-row justify-content-end mb-1" style={{ border: "none", color: "red" }}><i
                            className="fas fa-pencil-alt"></i></button>

                        <button data-mdb-toggle="tooltip" title="Delete" onClick={props.deleteButtonClick} id="delete button" className="d-flex mt-1 flex-row justify-content-end mb-1" style={{ border: "none" }}><i
                            className="fas fa-trash-alt"></i></button>
                    </div>
                    <div className="text-end text-muted">
                        <a href="#!" className="text-muted" data-mdb-toggle="tooltip" title="Created date">
                            <p className="small mb-0"><i className="fas fa-info-circle me-2"></i>28th Jun 2020</p>
                        </a>
                    </div>
                </li>
            </ul>
        </div>


    )
}