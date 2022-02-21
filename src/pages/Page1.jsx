import { Link } from "react-router-dom";

const Page1 = () => {
  return (
    <div>
      <h2 className="tex-center text-success mt-4">
        Hello, this is first Page
      </h2>
      <div>
        <ul>
          <li>
            <Link to="un-1">SubPage-1</Link>
          </li>
          <li>
            <Link to="un-2">SubPage-2</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Page1;
