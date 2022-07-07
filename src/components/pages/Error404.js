import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

export const Error404 = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>error-404</div>
      <Button onClick={() => navigate(-1)} text='Назад' />
    </div>
  )
}

export default Error404;