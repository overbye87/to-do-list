import { useDispatch, useSelector } from "react-redux";
import { changeFilterAction } from "../store/todos/actions";

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  function filterChange(e) {
    dispatch(changeFilterAction(e.target.value));
  }

  return (
    <div>
      <div>Filter:</div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="filterTodoList"
          id="rb_all"
          value="all"
          checked={filter === "all"}
          onChange={(e) => filterChange(e)}
        />
        <label className="form-check-label" htmlFor="rb_all">
          All
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="filterTodoList"
          id="rb_active"
          value="active"
          checked={filter === "active"}
          onChange={(e) => filterChange(e)}
        />
        <label className="form-check-label" htmlFor="rb_active">
          Active
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="filterTodoList"
          id="rb_completed"
          value="completed"
          checked={filter === "completed"}
          onChange={(e) => filterChange(e)}
        />
        <label className="form-check-label" htmlFor="rb_completed">
          Completed
        </label>
      </div>
    </div>
  );
}
export default Filter;
