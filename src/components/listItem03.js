export const ListItem03 = () => {
    return (
        <div>
            <ul className="list-group list-group-horizontal rounded-0 mb-2">
                <li
                    className="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
                    <div className="form-check">
                        <input className="form-check-input me-0" type="checkbox" value="" id="flexCheckChecked3"
                            aria-label="..." />
                    </div>
                </li>
                <li
                    className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                    <p className="lead fw-normal mb-0 bg-light w-100 ms-n2 ps-2 py-1 rounded">Sign up for online
                        course</p>
                </li>
                <li className="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
                    <div className="d-flex flex-row justify-content-end mb-1">
                        <a href="#!" className="text-danger" data-mdb-toggle="tooltip" title="Delete todo"><i
                            className="fas fa-trash-alt"></i></a>
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